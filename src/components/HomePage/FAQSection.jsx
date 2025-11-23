"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We specialize in web development (React.js & WordPress), branding, and graphic design. Our services include website creation, logo & poster design, brochure & banner design, and crypto/payment integration for modern businesses.",
  },
  {
    q: "How long does it take to complete a project?",
    a: "The timeline depends on the project scope. A basic website usually takes 2–3 weeks, while more complex or custom solutions may take 4–6 weeks. We always provide an estimated timeline before starting any project.",
  },
  {
    q: "Do you provide website maintenance and updates after launch?",
    a: "Yes, we offer ongoing maintenance and support to keep your website secure, up-to-date, and performing smoothly. You can choose from our flexible monthly or annual plans.",
  },
  {
    q: "Can you design custom logos and branding materials?",
    a: "Absolutely! Our creative design team can craft unique and memorable logos, posters, banners, and brochures that reflect your brand’s personality and vision.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we work with clients across the globe. All communication, design approvals, and development progress are handled seamlessly through email, video calls, and project management tools.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfers and UPI—making transactions easy and secure for clients worldwide.",
  },
  {
    q: "How do I get started with my project?",
    a: "Simply contact us through our form or email us directly. Once we understand your goals and requirements, we’ll prepare a free proposal and project timeline for you.",
  },
  {
    q: "Will my website be mobile-friendly and SEO-optimized?",
    a: "Yes, every website we build is responsive, fast-loading, and SEO-ready, ensuring it looks great and performs well across all devices and search engines.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mt-12 text-center">
      <h2 className="text-[#005097] text-4xl font-black italic">
        Frequently Asked Questions
      </h2>
      <p className="text-[#005097] mt-2 font-bold text-2xl">
        Have questions about our services or process?
      </p>
      <p className="w-[62%] mt-2 font-light m-auto">
        We’ve compiled some of the most common questions our clients ask to help
        you understand how we work and what to expect.
      </p>

      {/* FAQ List */}
      <div className="mt-10 space-y-4 w-[70%] mx-auto">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border border-[#000000] rounded-3xl py-4 px-6 flex flex-col justify-between  cursor-pointer hover:bg-gray-50 transition"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between ">
              <p className="text-left font-medium">{item.q}</p>

              <div>
                {openIndex === index ? (
                  <Minus className="w-6 h-6" />
                ) : (
                  <Plus className="w-6 h-6" />
                )}
              </div>
            </div>

            {/* Answer */}
            {openIndex === index && (
              <div className="w-full text-left mt-3 text-gray-600">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
