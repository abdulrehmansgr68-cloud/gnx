"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type FaqCategory = "All Topics" | "Subsidy" | "Warranty" | "Maintenance" | "Financing" | "Net Metering";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory[];
}

const faqs: FAQ[] = [
  {
    id: "q1",
    question: "How can I list my company as seller?",
    answer: "Register on our B2B Seller Portal with your GST and company registration details. Our vendor onboarding team verifies your credentials and activates your product catalog.",
    category: ["All Topics"],
  },
  {
    id: "q2",
    question: "TAT for seller listing",
    answer: "The Turnaround Time (TAT) for seller listing verification and catalog activation is 24 to 48 business hours after document submission.",
    category: ["All Topics"],
  },
  {
    id: "q3",
    question: "How can I get services of GnX as individual end user?",
    answer: "As a B2C residential customer, browse our solar rooftop packages or submit a contact inquiry. Our team conducts a free site survey and manages turnkey installation.",
    category: ["All Topics"],
  },
  {
    id: "q4",
    question: "How paperwork shall be handled?",
    answer: "GNX Power Solution manages 100% of government paperwork including PM Surya Ghar subsidy filings, UPNEDA permits, and discom net metering approvals.",
    category: ["All Topics", "Subsidy", "Net Metering"],
  },
  {
    id: "q5",
    question: "How GnX is supporting B2B vendors?",
    answer: "GNX supports B2B vendors with direct verified buyer leads, transparent bulk pricing, 0% commission marketplace listing, and nationwide logistics assistance.",
    category: ["All Topics"],
  },
  {
    id: "q6",
    question: "What is the methodology for execution of project in terms of B2B",
    answer: "For B2B C&I projects: Site Survey & Energy Audit → Customized Engineering Design → Bulk Hardware Sourcing → EPC Installation → Discom Grid Synchronization & Inspection.",
    category: ["All Topics"],
  },
  {
    id: "q7",
    question: "What is the methodology for execution of project in terms of B2C",
    answer: "For B2C residential projects: Free Site Visit → Customized Quote & Financial Payback Plan → Paperwork & Subsidy Filing → Fast Rooftop Assembly → Net Metering Grid Activation.",
    category: ["All Topics", "Subsidy"],
  },
];


const categories: FaqCategory[] = [
  "All Topics",
  "Subsidy",
  "Warranty",
  "Maintenance",
  "Financing",
  "Net Metering",
];

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>("All Topics");
  // Default open the first question if we are in 'All Topics' just to match screenshot
  const [activeAccordion, setActiveAccordion] = useState<string>("q1");

  const filteredFaqs = faqs.filter((faq) => faq.category.includes(activeCategory));

  // Split into two columns
  const midIndex = Math.ceil(filteredFaqs.length / 2);
  const leftColumn = filteredFaqs.slice(0, midIndex);
  const rightColumn = filteredFaqs.slice(midIndex);

  return (
    <section className="py-24 bg-[#E8F8FC] dark:bg-[#071920] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
            GOT QUESTIONS?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked<br />Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Everything you need to know about going solar.<br />
            Can&apos;t find an answer? Contact our team.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-[#0F172A] text-white shadow-md dark:bg-slate-100 dark:text-slate-900"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 border border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumn.map((faq) => (
              <div 
                key={faq.id} 
                className={cn(
                  "bg-white dark:bg-slate-900 rounded-xl transition-colors",
                  activeAccordion === faq.id ? "border border-primary ring-1 ring-primary/20 shadow-md" : "shadow-sm border border-transparent"
                )}
              >
                <Accordion 
                  value={activeAccordion === faq.id ? [faq.id] : []}
                  onValueChange={(val) => setActiveAccordion(val[0] || "")}
                >
                  <AccordionItem value={faq.id} className="border-none">
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumn.map((faq) => (
              <div 
                key={faq.id} 
                className={cn(
                  "bg-white dark:bg-slate-900 rounded-xl transition-colors",
                  activeAccordion === faq.id ? "border border-primary ring-1 ring-primary/20 shadow-md" : "shadow-sm border border-transparent"
                )}
              >
                <Accordion 
                  value={activeAccordion === faq.id ? [faq.id] : []}
                  onValueChange={(val) => setActiveAccordion(val[0] || "")}
                >
                  <AccordionItem value={faq.id} className="border-none">
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
