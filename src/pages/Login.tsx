import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just redirect to dashboard
    if (email === "admin@example.com" && password === "1234") {
      navigate("/dashboard"); // 🔁 Redirection interne
    } else {
      alert("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <Card className="w-full max-w-md p-8 glass bg-gray-200">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light tracking-tight text-black mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600 font-light">
            Sign in to your Consulting account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-200 text-black border border-gray-400 rounded-lg p-3 placeholder-gray-500"
              placeholder="Enter your email"
              required
            />
          </div>


          <div>
            <label htmlFor="password" className="block text-sm font-light text-gray-700 mb-2">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-200 text-black border border-gray-400 rounded-lg p-3 placeholder-gray-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full neumorphic text-white hover:text-white font-light py-3"
          >
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center space-y-4">
          <Link
            to="/forgot-password"
            className="text-sm font-light text-gray-600 hover:text-black transition-colors"
          >
            Forgot your password?
          </Link>
          
          <div className="text-sm font-light text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-black hover:underline font-medium"
            >
              Sign up
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
