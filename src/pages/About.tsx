import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in">
              About NEXBOT
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fade-in-up">
              Pioneering the future of robotics through innovation, precision, and intelligent design.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
                Founded in 2020, NEXBOT emerged from a vision to revolutionize the robotics industry. 
                Our team of engineers, designers, and innovators came together with a single goal: 
                to create robots that seamlessly integrate into human lives.
              </p>
              <p className="text-gray-300">
                Today, we're at the forefront of robotics technology, developing solutions that 
                push the boundaries of what's possible while maintaining the highest standards 
                of quality and reliability.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 nexbot-glow">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4">Innovation First</h3>
                <p className="text-gray-400">
                  Every NEXBOT product is built with cutting-edge technology and forward-thinking design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Continuously pushing technological boundaries to create breakthrough solutions.",
                icon: "💡"
              },
              {
                title: "Quality",
                description: "Uncompromising commitment to excellence in every component and system.",
                icon: "⭐"
              },
              {
                title: "Sustainability",
                description: "Building eco-friendly robots that contribute to a better future for all.",
                icon: "🌱"
              }
            ].map((value, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "CEO & Founder",
                bio: "Former MIT robotics professor with 15+ years in autonomous systems."
              },
              {
                name: "Marcus Rodriguez",
                role: "CTO",
                bio: "AI specialist and former Google engineer leading our technical vision."
              },
              {
                name: "Elena Nakamura",
                role: "Head of Design",
                bio: "Award-winning industrial designer focused on human-robot interaction."
              }
            ].map((member, index) => (
              <Card key={index} className="bg-black border-gray-800 p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                <p className="text-gray-400 mb-4 font-medium">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
