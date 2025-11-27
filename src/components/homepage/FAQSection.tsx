const FAQSection = ({ openItems, toggleItem }) => {
  const faqs = [
    {
      id: 1,
      question: "What is FitBookPro.ai?",
      answer: "FitBookPro is an AI-powered eBook generator that helps you create professional eBooks in minutes. It uses advanced AI to generate content, design layouts, and export high-quality PDFs and EPUB files."
    },
    {
      id: 2,
      question: "Do I need writing or design experience?",
      answer: "No prior experience is needed! FitBookPro is designed for everyone - from complete beginners to professional creators. The AI handles the heavy lifting while you focus on your ideas."
    },
    {
      id: 3,
      question: "Can I monetize the eBooks I create?",
      answer: "Absolutely! You own all the rights to the eBooks you create with FitBookPro. You can sell them, use them as lead magnets, or distribute them however you like."
    },
    {
      id: 4,
      question: "Is there a free trial?",
      answer: "Yes! We offer a 7-day free trial for all our plans. You can test all features and create your first eBook without any commitment."
    },
    {
      id: 5,
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription anytime. There are no long-term contracts or cancellation fees."
    }
  ];

  return (
    <section id="faq" className="bg-gradient-to-br from-white to-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center group hover:bg-indigo-50 transition-colors duration-200"
                onClick={() => toggleItem(faq.id)}
              >
                <span className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-200">
                  {faq.question}
                </span>
                <span
                  className={`text-2xl text-indigo-500 transition-transform duration-300 ${
                    openItems.has(faq.id) ? 'rotate-45' : 'group-hover:rotate-180'
                  }`}
                >
                  +
                </span>
              </button>
              {openItems.has(faq.id) && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
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