<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

// ---------------------------------------------------------
// CORS / Security
// ---------------------------------------------------------

$allowedOrigins = [
    'https://gnxpowersolution.com',
    'https://www.gnxpowersolution.com',
    'https://darkgoldenrod-crow-514325.hostingersite.com',
    'http://localhost:3000'
];

if (
    isset($_SERVER['HTTP_ORIGIN']) &&
    in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins, true)
) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Vary: Origin');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle browser preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    response(false, 'Method not allowed.', 405);
}

// ---------------------------------------------------------
// PHPMailer
// ---------------------------------------------------------

require_once __DIR__ . '/../vendor/autoload.php';

// If smtp-config.php is outside public_html, update this path.
// Example:
// require_once '/home/YOUR_USERNAME/private/smtp-config.php';

$configPath = __DIR__ . '/../smtp-config.php';

if (!file_exists($configPath)) {
    response(false, 'SMTP configuration is missing.', 500);
}

$config = require $configPath;

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

// ---------------------------------------------------------
// Helpers
// ---------------------------------------------------------

function response(
    bool $success,
    string $message,
    int $status = 200
): never {
    http_response_code($status);

    echo json_encode([
        'success' => $success,
        'message' => $success ? $message : null,
        'error' => $success ? null : $message,
    ]);

    exit;
}

function escapeHtml(string $text): string
{
    return htmlspecialchars(
        $text,
        ENT_QUOTES | ENT_SUBSTITUTE,
        'UTF-8'
    );
}

// ---------------------------------------------------------
// Rate Limiting
// ---------------------------------------------------------

$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';

$rateLimitDir = sys_get_temp_dir() . '/gnx_contact_rate_limit';

if (!is_dir($rateLimitDir)) {
    @mkdir($rateLimitDir, 0700, true);
}

$rateFile = $rateLimitDir . '/' . hash('sha256', $ip) . '.json';

$now = time();
$windowSeconds = 15 * 60;
$maxRequests = 5;

$requests = [];

if (file_exists($rateFile)) {
    $contents = @file_get_contents($rateFile);

    if ($contents !== false) {
        $decoded = json_decode($contents, true);

        if (is_array($decoded)) {
            $requests = $decoded;
        }
    }
}

// Remove expired requests
$requests = array_values(
    array_filter(
        $requests,
        fn ($timestamp) => is_int($timestamp)
            && ($now - $timestamp) < $windowSeconds
    )
);

if (count($requests) >= $maxRequests) {
    $oldest = min($requests);
    $retryAfter = max(1, $windowSeconds - ($now - $oldest));

    header("Retry-After: {$retryAfter}");

    response(
        false,
        'Too many contact submissions. Please try again later.',
        429
    );
}

$requests[] = $now;

@file_put_contents(
    $rateFile,
    json_encode($requests),
    LOCK_EX
);

// ---------------------------------------------------------
// Read JSON
// ---------------------------------------------------------

$rawBody = file_get_contents('php://input');

if ($rawBody === false || strlen($rawBody) > 20000) {
    response(false, 'Invalid request payload.', 400);
}

$body = json_decode($rawBody, true);

if (!is_array($body)) {
    response(false, 'Invalid request payload.', 400);
}

// ---------------------------------------------------------
// Extract fields
// ---------------------------------------------------------

$fullName = isset($body['fullName'])
    ? trim((string) $body['fullName'])
    : '';

$email = isset($body['email'])
    ? trim((string) $body['email'])
    : '';

$phone = isset($body['phone'])
    ? trim((string) $body['phone'])
    : '';

$message = isset($body['message'])
    ? trim((string) $body['message'])
    : '';

$websiteUrl = isset($body['website_url'])
    ? trim((string) $body['website_url'])
    : '';

$formTime = isset($body['form_time'])
    ? (int) $body['form_time']
    : 0;

// ---------------------------------------------------------
// Honeypot
// ---------------------------------------------------------

if ($websiteUrl !== '') {
    response(
        true,
        'Your inquiry has been sent successfully!',
        200
    );
}

// ---------------------------------------------------------
// Time-based bot check
// ---------------------------------------------------------

if ($formTime > 0) {

    // JavaScript timestamp is milliseconds
    $currentMilliseconds = (int) round(microtime(true) * 1000);

    $elapsed = $currentMilliseconds - $formTime;

    if ($elapsed >= 0 && $elapsed < 2500) {
        response(
            true,
            'Your inquiry has been sent successfully!',
            200
        );
    }
}

// ---------------------------------------------------------
// Full Name validation
// ---------------------------------------------------------

if (
    $fullName === '' ||
    !preg_match('/^[a-zA-Z\s.\-]{2,60}$/', $fullName)
) {
    response(
        false,
        'Please enter a valid full name.',
        400
    );
}

// ---------------------------------------------------------
// Email validation
// ---------------------------------------------------------

if (
    $email === '' ||
    !filter_var($email, FILTER_VALIDATE_EMAIL)
) {
    response(
        false,
        'Please enter a valid email address.',
        400
    );
}

// ---------------------------------------------------------
// Phone validation
// ---------------------------------------------------------

$digitsOnly = preg_replace('/\D/', '', $phone);

if ($digitsOnly === null) {
    $digitsOnly = '';
}

if (strlen($digitsOnly) === 12 && str_starts_with($digitsOnly, '91')) {
    $digitsOnly = substr($digitsOnly, 2);
} elseif (
    strlen($digitsOnly) === 11 &&
    str_starts_with($digitsOnly, '0')
) {
    $digitsOnly = substr($digitsOnly, 1);
}

if (!preg_match('/^[6-9][0-9]{9}$/', $digitsOnly)) {
    response(
        false,
        'Please enter a valid 10-digit Indian mobile number.',
        400
    );
}

$formattedPhone =
    '+91 ' .
    substr($digitsOnly, 0, 5) .
    ' ' .
    substr($digitsOnly, 5);

// ---------------------------------------------------------
// Message validation
// ---------------------------------------------------------

if ($message === '' || mb_strlen($message) < 50) {

    $length = mb_strlen($message);

    response(
        false,
        "Message must be at least 50 characters long (currently {$length} characters).",
        400
    );
}

// ---------------------------------------------------------
// Escape HTML
// ---------------------------------------------------------

$safeName = escapeHtml($fullName);
$safeEmail = escapeHtml($email);
$safePhone = escapeHtml($formattedPhone);
$safeMessage = nl2br(escapeHtml($message));

$dateTime = date(
    'd M Y, h:i A'
);

// ---------------------------------------------------------
// Email HTML
// ---------------------------------------------------------

$htmlContent = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New Lead Inquiry - GNX Power Solution</title>
</head>

<body style="
margin:0;
padding:0;
background-color:#f4f6f8;
font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
color:#1e293b;
">

<table width="100%" border="0" cellspacing="0" cellpadding="0"
style="background-color:#f4f6f8;padding:24px 12px;">

<tr>
<td align="center">

<table width="100%" border="0" cellspacing="0" cellpadding="0"
style="
max-width:600px;
background-color:#ffffff;
border-radius:16px;
overflow:hidden;
box-shadow:0 10px 25px rgba(0,0,0,0.06);
border:1px solid #e2e8f0;
">

<!-- Header -->
<tr>
<td style="
background:#007b99;
padding:30px 24px;
text-align:center;
">

<h1 style="
color:#ffffff;
margin:0;
font-size:22px;
font-weight:800;
">
GNX Power Solution
</h1>

<p style="
color:#e0f2fe;
margin:6px 0 0 0;
font-size:13px;
font-weight:500;
">
New Lead Inquiry Notification
</p>

</td>
</tr>

<!-- Body -->
<tr>
<td style="padding:28px 24px;">

<p style="
margin:0 0 20px 0;
font-size:14px;
color:#475569;
line-height:1.5;
">

You have received a new customer inquiry from the
<strong>GNX Power Solution</strong> website contact form.

</p>

<table width="100%" border="0" cellspacing="0" cellpadding="0"
style="
background-color:#f8fafc;
border-radius:12px;
padding:16px;
border:1px solid #e2e8f0;
margin-bottom:24px;
">

<tr>
<td style="
padding:6px 0;
font-size:13px;
color:#64748b;
font-weight:600;
width:110px;
">
Full Name:
</td>

<td style="
padding:6px 0;
font-size:14px;
color:#0f172a;
font-weight:700;
">
{$safeName}
</td>
</tr>

<tr>
<td style="
padding:6px 0;
font-size:13px;
color:#64748b;
font-weight:600;
">
Email:
</td>

<td style="
padding:6px 0;
font-size:14px;
color:#007b99;
font-weight:700;
">

<a
href="mailto:{$safeEmail}"
style="color:#007b99;text-decoration:none;"
>
{$safeEmail}
</a>

</td>
</tr>

<tr>
<td style="
padding:6px 0;
font-size:13px;
color:#64748b;
font-weight:600;
">
Phone:
</td>

<td style="
padding:6px 0;
font-size:14px;
color:#0f172a;
font-weight:700;
">

<a
href="tel:{$safePhone}"
style="color:#0f172a;text-decoration:none;"
>
{$safePhone}
</a>

</td>
</tr>

<tr>
<td style="
padding:6px 0;
font-size:13px;
color:#64748b;
font-weight:600;
">
Date/Time:
</td>

<td style="
padding:6px 0;
font-size:12px;
color:#64748b;
font-weight:500;
">
{$dateTime}
</td>
</tr>

</table>

<div style="margin-bottom:24px;">

<label style="
display:block;
font-size:12px;
font-weight:700;
color:#64748b;
text-transform:uppercase;
letter-spacing:0.5px;
margin-bottom:8px;
">

Message / Requirement:

</label>

<div style="
background-color:#ffffff;
border:1px solid #cbd5e1;
border-left:4px solid #f26522;
border-radius:8px;
padding:16px;
font-size:14px;
color:#1e293b;
line-height:1.6;
">

{$safeMessage}

</div>

</div>

<div style="
text-align:center;
margin-top:28px;
">

<a
href="mailto:{$safeEmail}?subject=Re:%20Inquiry%20regarding%20GNX%20Power%20Solution"
style="
display:inline-block;
background-color:#007b99;
color:#ffffff;
text-decoration:none;
padding:12px 28px;
border-radius:8px;
font-size:14px;
font-weight:700;
">

Reply to {$safeName}

</a>

</div>

</td>
</tr>

<!-- Footer -->
<tr>

<td style="
background-color:#f1f5f9;
padding:16px 24px;
text-align:center;
border-top:1px solid #e2e8f0;
">

<p style="
margin:0;
font-size:11px;
color:#94a3b8;
font-weight:500;
">

This automated email was generated by GNX Power Solution website lead system.

</p>

</td>

</tr>

</table>

</td>
</tr>

</table>

</body>
</html>
HTML;

// ---------------------------------------------------------
// Send Email
// ---------------------------------------------------------

$mail = new PHPMailer(true);

try {

    // SMTP
    $mail->isSMTP();

    $mail->Host = $config['host'];

    $mail->SMTPAuth = true;

    $mail->Username = $config['username'];

    $mail->Password = $config['password'];

    // Port 587 = STARTTLS
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

    $mail->Port = (int) $config['port'];

    // Connection timeout
    $mail->Timeout = 20;

    // Character set
    $mail->CharSet = 'UTF-8';

    // Sender
    $mail->setFrom(
        $config['from_email'],
        $config['from_name']
    );

    // Receiver
    $mail->addAddress(
        $config['receiver_email']
    );

    // Customer gets Reply when you click Reply
    $mail->addReplyTo(
        $email,
        $fullName
    );

    // Email
    $mail->Subject =
        '⚡ New Inquiry from ' .
        $fullName .
        ' - GNX Power Solution';

    $mail->isHTML(true);

    $mail->Body = $htmlContent;

    $mail->AltBody =
        "New Lead Inquiry\n\n" .
        "Name: {$fullName}\n" .
        "Email: {$email}\n" .
        "Phone: {$formattedPhone}\n" .
        "Message: {$message}";

    $mail->send();

    response(
        true,
        'Your inquiry has been sent successfully!',
        200
    );

} catch (Exception $e) {

    // IMPORTANT:
    // Do not expose SMTP error details to visitors.

    error_log(
        'GNX contact email failed: ' .
        $mail->ErrorInfo
    );

    response(
        false,
        'Failed to send email inquiry. Please try again later or call our support line.',
        500
    );
}