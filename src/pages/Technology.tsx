
import { Card } from "@/components/ui/card";
import { useRef, useEffect } from "react";

const Technology = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollRef.current) {
        e.preventDefault();
        scrollRef.current.scrollLeft += e.deltaY;
      }
    };

    const element = scrollRef.current;
    if (element) {
      element.addEventListener('wheel', handleWheel);
      return () => element.removeEventListener('wheel', handleWheel);
    }
  }, []);

  const technologies = [
    {
      title: "Artificial Intelligence",
      description: "Advanced neural networks and machine learning algorithms that enable autonomous decision-making and adaptive behavior.",
      icon: "🧠",
      details: ["Deep Learning", "Computer Vision", "Natural Language Processing", "Predictive Analytics"]
    },
    {
      title: "Precision Motion Control",
      description: "Ultra-precise servo motors and control systems providing millimeter-level accuracy in all operations.",
      icon: "⚡",
      details: ["6-DOF Movement", "Force Feedback", "Real-time Control", "Sub-millimeter Precision"]
    },
    {
      title: "Advanced Sensors",
      description: "Comprehensive sensor suite including LiDAR, cameras, IMU, and environmental sensors for complete awareness.",
      icon: "👁️",
      details: ["360° LiDAR", "4K Stereo Vision", "Environmental Monitoring", "Proximity Detection"]
    },
    {
      title: "Power Management",
      description: "Intelligent power systems with extended battery life and efficient energy consumption optimization.",
      icon: "🔋",
      details: ["24-hour Battery", "Fast Charging", "Power Optimization", "Backup Systems"]
    },
    {
      title: "Connectivity",
      description: "Seamless integration with IoT ecosystems, cloud services, and enterprise systems for comprehensive automation.",
      icon: "📡",
      details: ["5G Connectivity", "Edge Computing", "Cloud Integration", "Real-time Data"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in">
            Our Technology
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fade-in-up max-w-4xl mx-auto">
            Cutting-edge innovations that power the future of robotics, combining artificial intelligence, 
            precision engineering, and advanced materials science.
          </p>
        </div>
      </section>

      {/* Horizontal Scrolling Technology Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Core Technologies</h2>
          <p className="text-gray-400 mb-8">Scroll horizontally to explore our technological capabilities</p>
          
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {technologies.map((tech, index) => (
              <Card 
                key={index} 
                className="bg-gray-900 border-gray-800 p-8 min-w-[400px] hover:scale-105 transition-transform duration-300 nexbot-glow"
              >
                <div className="text-6xl mb-6">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{tech.title}</h3>
                <p className="text-gray-400 mb-6">{tech.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">Key Features:</h4>
                  <ul className="space-y-2">
                    {tech.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-500">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Process */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Innovation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Research", description: "Continuous exploration of emerging technologies and methodologies." },
              { step: "02", title: "Design", description: "Iterative design process with focus on user experience and functionality." },
              { step: "03", title: "Prototype", description: "Rapid prototyping and testing to validate concepts and performance." },
              { step: "04", title: "Deploy", description: "Seamless integration and deployment with ongoing support and updates." }
            ].map((process, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl font-bold text-gray-600 mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Technical Excellence</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { metric: "99.9%", label: "System Reliability", description: "Proven uptime across all deployments" },
              { metric: "0.1mm", label: "Precision Accuracy", description: "Sub-millimeter precision in all operations" },
              { metric: "24hrs", label: "Battery Life", description: "Continuous operation capability" },
              { metric: "360°", label: "Environmental Awareness", description: "Complete spatial understanding" },
              { metric: "<10ms", label: "Response Time", description: "Real-time decision making" },
              { metric: "50+", label: "AI Models", description: "Specialized neural networks" }
            ].map((spec, index) => (
              <Card key={index} className="bg-black border-gray-800 p-8 text-center hover:bg-gray-900 transition-colors duration-300">
                <div className="text-3xl font-bold text-white mb-2">{spec.metric}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-300">{spec.label}</h3>
                <p className="text-gray-500 text-sm">{spec.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
