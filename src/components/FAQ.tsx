
import { useState } from "react";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does the AI resume writer work?",
      answer: "Our AI analyzes your background, skills, and target roles to create optimized resumes. It uses industry-specific keywords and formats that pass through ATS systems while highlighting your unique strengths."
    },
    {
      question: "Can I customize the generated content?",
      answer: "Absolutely! All AI-generated content is fully editable. You can modify, add, or remove any sections to match your personal style and specific job requirements."
    },
    {
      question: "Is my personal data secure?",
      answer: "Yes, we use enterprise-grade encryption to protect your data. We never share your personal information with third parties, and you can delete your account and data at any time."
    },
    {
      question: "How accurate is the job matching?",
      answer: "Our AI matches you with jobs based on your skills, experience, and preferences with 85%+ accuracy. The system learns from your feedback to improve recommendations over time."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied with the results, contact our support team for a full refund."
    }
  ];

  return (
    <section className="section-padding bg-white/30" id="faq">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-tight">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="glass bg-gray-300 border border-black">
              <button
                className="w-full text-left p-6 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-black pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-gray-500 text-xl">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
