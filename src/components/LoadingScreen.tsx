
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="text-6xl font-bold text-white mb-8 tracking-wider animate-pulse">
          NEXBOT
        </div>
        <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto">
          <div 
            className="h-1 bg-white rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-gray-400 mt-4 text-sm tracking-widest">
          INITIALIZING SYSTEMS...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
