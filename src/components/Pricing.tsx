
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      features: [
        "1 AI-generated resume",
        "Basic cover letter templates",
        "Limited chat support",
        "Standard job matching"
      ],
      cta: "Get Started",
      recommended: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      features: [
        "Unlimited AI resumes & cover letters",
        "Advanced personalization",
        "Voice assistant access",
        "Priority support",
        "Interview preparation",
        "Salary negotiation tips"
      ],
      cta: "Start Free Trial",
      recommended: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      features: [
        "Everything in Pro",
        "Team collaboration tools",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced analytics",
        "White-label options"
      ],
      cta: "Contact Sales",
      recommended: false
    }
  ];

  return (
    <section className="section-padding" id="pricing">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-tight">
          Simple Pricing
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`glass p-8 bg-gray-300 border border-black relative hover:scale-105 transition-transform duration-300 fade-in-up ${
                plan.recommended ? 'ring-2 ring-black' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-light">
                    Recommended
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium text-black mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-light text-black">{plan.price}</span>
                  <span className="text-gray-500 font-light ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700 font-light">
                    <span className="text-green-500 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full neumorphic text-black hover:text-black font-light ${
                  plan.recommended ? 'bg-black text-white hover:text-white' : ''
                }`}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
