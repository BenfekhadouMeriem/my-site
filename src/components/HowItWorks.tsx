import { Card } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Resume or Start from Scratch",
      description: "Simply upload your existing resume or let our AI create one from your profile information.",
      icon: "📄"
    },
    {
      number: "02", 
      title: "Personalize Your AI Assistant",
      description: "Train your AI assistant with your career goals, skills, and preferences for tailored advice.",
      icon: "🤖"
    },
    {
      number: "03",
      title: "Generate & Apply with One Click", 
      description: "Create customized resumes and cover letters for each job, then apply directly through our platform.",
      icon: "🚀"
    }
  ];

  return (
    <section className="section-padding bg-white/30" id="how-it-works">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-tight">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={step.number} 
              className="glass p-8 bg-gray-300 border border-black text-center hover:scale-105 transition-transform duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-6xl mb-6">{step.icon}</div>
              <div className="text-sm font-light text-gray-500 mb-2 tracking-widest">
                {step.number}
              </div>
              <h3 className="text-xl font-medium text-black mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
