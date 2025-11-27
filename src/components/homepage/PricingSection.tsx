const PricingSection = ({ isYearly, setIsYearly }) => {
  const plans = [
    {
      name: "Pro",
      monthlyPrice: "$9.99",
      yearlyPrice: "$99.99",
      features: [
        "Generate 200-page eBook",
        "HD Book Cover",
        "WYSIWYG Editor",
        "PDF Download",
        "Table of Contents"
      ],
      popular: true,
      borderColor: "border-blue-600",
      shadow: "shadow-md"
    },
    {
      name: "Premium",
      monthlyPrice: "$29.99",
      yearlyPrice: "$299.99",
      features: [
        "Generate 500-page eBook",
        "HD Book Cover",
        "WYSIWYG Editor",
        "PDF Download",
        "Table of Contents"
      ],
      popular: false,
      borderColor: "border-gray-200",
      shadow: "shadow-sm"
    },
    {
      name: "Elite",
      monthlyPrice: "$59.99",
      yearlyPrice: "$599.99",
      features: [
        "Generate 1000-page eBook",
        "Ultra HD Book Cover",
        "Advanced WYSIWYG Editor",
        "PDF & EPUB Export",
        "Priority Support"
      ],
      popular: false,
      borderColor: "border-gray-200",
      shadow: "shadow-sm"
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-6">
          <h1 className="text-4xl font-bold text-gray-800 text-center">Choose Your Plan</h1>
        </div>
        
        {/* Toggle Switch */}
        <div className="flex justify-center items-center mb-12 mt-6 flex-wrap">
          <span className="text-sm text-gray-600 mr-2">Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={isYearly}
              onChange={(e) => setIsYearly(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-full transition"></div>
          </label>
          <span className="text-sm text-gray-600 ml-2">
            Yearly <span className="text-green-500">(Save 30%)</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`border rounded-2xl p-6 shadow-md transition transform hover:scale-105 ${plan.borderColor} ${plan.shadow} bg-white relative`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2 text-center">{plan.name}</h3>
              <p className="text-3xl font-semibold text-blue-600 text-center mb-4">
                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                <span className="text-sm text-gray-500 font-normal">/month</span>
              </p>
              
              <ul className="mb-6 space-y-2 text-gray-700">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex text-sm items-start gap-2">
                    <span className="text-green-500 mt-1">✅</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-medium transition-colors">
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 384 512" 
                    height="20" 
                    width="20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path>
                  </svg>
                  Pay with PayPal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;