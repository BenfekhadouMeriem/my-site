
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "✍️",
      title: "Smart Resume Writer",
      description: "AI-powered resume creation that adapts to your industry and role"
    },
    {
      icon: "📊",
      title: "Real-Time Feedback",
      description: "Get instant suggestions to improve your applications"
    },
    {
      icon: "💌",
      title: "Motivation Letter Templates",
      description: "Personalized cover letters that stand out to recruiters"
    },
    {
      icon: "🎤",
      title: "Voice Assistant",
      description: "24/7 career coaching through our intelligent voice bot"
    }
  ];

  return (
    <section className="section-padding" id="features">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-tight">
          Powerful Features
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="glass p-6 bg-gray-300 border border-black hover:scale-105 transition-transform duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-medium text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
