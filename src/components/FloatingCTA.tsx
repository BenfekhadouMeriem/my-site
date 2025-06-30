
import { useState } from "react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="glass p-4 rounded-lg mb-4 max-w-xs animate-in slide-in-from-bottom-2">
          <p className="text-sm font-light text-gray-700 mb-3">
            Need help with your job search? Our AI assistant is here to help!
          </p>
          <Button
            size="sm"
            className="neumorphic text-black hover:text-black font-light w-full"
          >
            Start Chat
          </Button>
        </div>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="neumorphic text-black hover:text-black font-light rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        🤖
      </Button>
    </div>
  );
};

export default FloatingCTA;
