
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Robot3D from "@/components/Robot3D";
import { Link } from "react-router-dom";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden nexbot-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black z-10" />
        
        {/* 3D Robot */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-96 h-96 animate-float">
            <Robot3D />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-30 text-center px-6">
          <h1 
            className="text-8xl md:text-9xl font-bold mb-6 nexbot-text-shadow animate-fade-in"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            NEXBOT
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            The Future of Robotics Engineering
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 nexbot-glow">
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Revolutionary Technology
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Intelligence",
                description: "Advanced neural networks powering autonomous decision-making capabilities.",
                icon: "🧠"
              },
              {
                title: "Precision Motion",
                description: "Ultra-precise servo motors with millimeter-level accuracy control.",
                icon: "⚡"
              },
              {
                title: "Extended Battery",
                description: "Long-lasting power systems enabling 24/7 operational capability.",
                icon: "🔋"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 p-8 hover:bg-gray-800 transition-all duration-300 hover:scale-105 nexbot-glow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Robots Deployed" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "50+", label: "Countries Served" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.number}</div>
                <div className="text-gray-400 uppercase tracking-wide text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the robotics revolution and transform your business with NEXBOT's cutting-edge technology.
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 nexbot-glow">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
