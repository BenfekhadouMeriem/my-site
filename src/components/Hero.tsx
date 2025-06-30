
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Robot3D from "./Robot3D";

const Hero = () => {
  return (
    <section className="section-padding pt-32">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="text-left lg:pr-8">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-black mb-6 fade-in-up">
              AI-Powered Job Applications
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 mb-12 fade-in-up opacity-80" style={{ animationDelay: '0.2s' }}>
              Let Consulting craft your Resume, Cover Letter, and prepare your Interviews with intelligent automation.
            </p>
            <Button 
              asChild
              size="lg" 
              className="neumorphic text-white hover:text-white font-light px-12 py-4 text-lg fade-in-up hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: '0.4s' }}
            >
              <Link to="/login">Get Started</Link>
            </Button>

          </div>
          
          {/* Right Column - 3D Robot */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              <Robot3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
