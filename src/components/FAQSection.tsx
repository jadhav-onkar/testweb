import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is SEO and why is it important?",
      answer: "SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results pages. It's important because it increases your online visibility, drives organic traffic to your website, and helps potential customers find your business when they search for relevant products or services."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy that typically takes 3-6 months to see significant results. However, some improvements can be noticed within the first few weeks. The timeline depends on factors like your website's current state, competition level, and the keywords you're targeting."
    },
    {
      question: "What are the key factors that influence SEO rankings?",
      answer: "Key SEO ranking factors include high-quality content, relevant keywords, website loading speed, mobile-friendliness, backlinks from authoritative sites, user experience, technical SEO elements, and regular content updates. Search engines use hundreds of factors to determine rankings."
    },
    {
      question: "Do you provide content marketing services?",
      answer: "Yes, we offer comprehensive content marketing services including blog writing, social media content creation, video scripts, infographics, and email marketing campaigns. Our content is designed to engage your audience and support your SEO efforts."
    },
    {
      question: "How do you measure the success of digital marketing campaigns?",
      answer: "We track various KPIs including website traffic, conversion rates, click-through rates, engagement metrics, lead generation, ROI, and search engine rankings. We provide detailed monthly reports showing your campaign's performance and areas for improvement."
    },
    {
      question: "What makes your agency different from others?",
      answer: "Our agency stands out through our data-driven approach, personalized strategies, transparent reporting, and proven track record of delivering measurable results. We focus on building long-term partnerships and provide dedicated support throughout your digital marketing journey."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#2a0a0a] to-[#120404] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mobile-padding">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-red-500 bg-opacity-20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6 animate-scale-in">
            <span className="text-red-500 font-semibold text-sm tracking-widest uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 text-shadow animate-fade-in-up stagger-1">
            Got Questions?
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-shadow animate-fade-in-up stagger-2">
            We've Got Answers!
          </h3>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass-dark rounded-xl border border-white border-opacity-10 overflow-hidden card-hover animate-fade-in-up stagger-${index + 1}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 md:px-8 py-4 md:py-6 text-left flex items-center justify-between hover:bg-white hover:bg-opacity-5 transition-colors duration-300"
              >
                <span className="text-white text-base md:text-lg font-medium pr-4 text-shadow">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 md:w-10 h-8 md:h-10 bg-red-500 rounded-full flex items-center justify-center hover-scale transition-transform duration-300">
                  {openIndex === index ? (
                    <ChevronUp size={16} className="text-white md:w-5 md:h-5" />
                  ) : (
                    <ChevronDown size={16} className="text-white md:w-5 md:h-5" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-4 md:px-8 pb-4 md:pb-6 animate-fade-in-up">
                  <div className="border-t border-white border-opacity-10 pt-4 md:pt-6">
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;