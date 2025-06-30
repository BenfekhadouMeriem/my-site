
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just redirect to dashboard
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-6">
      <Card className="w-full max-w-md p-8 glass bg-gray-300 border border-black">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light tracking-tight text-black mb-2">
            Create Account
          </h1>
          <p className="text-gray-600 font-light">
            Start your journey with Consulting
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-light text-gray-700 mb-2">
                First Name
              </label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="ww-full bg-gray-200 text-black border border-gray-400 rounded-lg p-3 placeholder-gray-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-light text-gray-700 mb-2">
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-gray-200 text-black border border-gray-400 rounded-lg p-3 placeholder-gray-500"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-200 border border-black"
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-light text-gray-700 mb-2">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-gray-200 border border-black"
              placeholder="Create a strong password"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-light text-gray-700 mb-2">
              Confirm Password
            </label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-gray-200 border border-black"
              placeholder="Confirm your password"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full neumorphic text-white hover:text-white font-light py-3 hover:shadow-xl transition-all duration-300"
          >
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 font-light mb-4">
            By signing up, you agree to our Terms & Privacy Policy.
          </p>
          <div className="text-sm font-light text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-black hover:underline font-medium"
            >
              Sign in
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Register;
