import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Simple Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
              <img src="/logo.webp" alt="Logo" className="h-8 w-auto" />
            </Link>
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="neumorphic bg-black text-white hover:bg-black hover:text-white border border-black"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-black mb-4 fade-in-up">
              Welcome to Consulting!
            </h1>
            <p className="text-xl font-light text-gray-600 fade-in-up" style={{ animationDelay: '0.2s' }}>
              Your AI-powered job application assistant is ready to help you succeed
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 glass bg-gray-300 border border-black hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-light text-black mb-3">Create Resume</h3>
              <p className="text-gray-600 font-light mb-4">
                Build a professional resume with AI assistance
              </p>
              <Button
                className="neumorphic text-white hover:text-white font-light w-full"
                onClick={() => navigate("/resume")}
              >
                Start Resume
              </Button>
            </Card>

            <Card className="p-6 glass bg-gray-300 border border-black hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-light text-black mb-3">Cover Letter</h3>
              <p className="text-gray-600 font-light mb-4">
                Generate compelling cover letters instantly
              </p>
              <Button
                className="neumorphic text-white hover:text-white font-light w-full"
                onClick={() => navigate("/cover-letter")}
              >
                Write Letter
              </Button>
            </Card>

            <Card className="p-6 glass bg-gray-300 border border-black hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-light text-black mb-3">AI Assistant</h3>
              <p className="text-gray-600 font-light mb-4">
                Get personalized career advice and tips
              </p>
              <Button
                className="neumorphic text-white hover:text-white font-light w-full"
                onClick={() => navigate("/ai-assistant")}
              >
                Ask AI
              </Button>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="p-6 glass bg-gray-300 border border-black">
            <h2 className="text-2xl font-light text-black mb-6">Recent Activity</h2>
            <div className="text-center py-8">
              <p className="text-gray-600 font-light">
                No recent activity yet. Start by creating your first resume or cover letter!
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;