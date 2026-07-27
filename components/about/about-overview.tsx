export function AboutOverview() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Driving India's Clean Energy Future */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Driving India’s{" "}
            <span className="text-[#f26522]">Clean Energy Future</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong className="font-bold text-slate-900 dark:text-white">Power Solution</strong>, an initiative of{" "}
            <span className="text-[#f26522] font-semibold">NES Technologies Private Limited</span> is a leading digital platform dedicated to advancing India’s transition to a sustainable energy future. With a strong focus on the{" "}
            <span className="text-[#f26522] font-semibold">solar energy</span>,{" "}
            <span className="text-[#f26522] font-semibold">electric vehicle (EV)</span>, and{" "}
            <span className="text-[#f26522] font-semibold">energy management sectors</span>, Power Solution facilitates seamless connections between consumers, service providers, and energy professionals. Our platform is designed to empower both individuals and businesses, enabling access to clean energy solutions that are reliable, affordable, and impactful.
          </p>
        </div>

        {/* Our Vision */}
        <div className="space-y-3">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Our <span className="text-[#f26522]">Vision</span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            To be the foremost enabler of clean energy solutions in India, providing consumers with easy access to{" "}
            <span className="text-[#f26522] font-semibold">solar technologies</span>,{" "}
            <span className="text-[#f26522] font-semibold">EV infrastructure</span>, and{" "}
            <span className="text-[#f26522] font-semibold">energy efficiency services</span>. We aim to accelerate the country’s renewable energy adoption while contributing to India’s ambitious sustainability goals and supporting the shift toward a{" "}
            <strong className="font-bold text-slate-900 dark:text-white">net-zero future</strong>.
          </p>
        </div>

        {/* Our Mission */}
        <div className="space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Our <span className="text-[#f26522]">Mission</span>
          </h3>
          
          <ul className="space-y-3 text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pl-2">
            <li className="flex items-start gap-2">
              <span className="text-[#f26522] font-bold text-lg">•</span>
              <div>
                <strong className="font-extrabold text-slate-900 dark:text-white">Facilitate Access to Clean Energy</strong>{" "}
                – Simplify the process of adopting solar plants, EV, and energy efficiency solutions for consumers across India.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#f26522] font-bold text-lg">•</span>
              <div>
                <strong className="font-extrabold text-slate-900 dark:text-white">Empower Service Providers</strong>{" "}
                – Equip businesses and entrepreneurs with digital tools, branding support, and growth opportunities within the clean energy sector.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#f26522] font-bold text-lg">•</span>
              <div>
                <strong className="font-extrabold text-slate-900 dark:text-white">Create a Knowledge-driven Network</strong>{" "}
                – Foster a national network of energy professionals, consultants, and business owners who are equipped to lead and innovate in the clean energy transition.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
