
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedIn from "./components/FeaturedIn";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Mission from "./components/Mission";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Resume from "./components/Resume";
import CoverLetter from "./components/CoverLetter"; 
import AIAssistant from "./components/AIAssistant";

const queryClient = new QueryClient();

const HomePage = () => (
  <div className="min-h-screen bg-gray-200 text-gray-800">
    <Navbar />
    <main>
      <Hero />
      <FeaturedIn />
      <TestimonialsCarousel />
      <HowItWorks />
      <Features />
      <Mission />
      <Pricing />
      <FAQ />
    </main>
    <Footer />
    <FloatingCTA />
  </div>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/cover-letter" element={<CoverLetter />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;