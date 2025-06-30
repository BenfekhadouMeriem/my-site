
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-200 flex items-center justify-center px-6">
        <Card className="w-full max-w-md p-8 glass text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-light tracking-tight text-black mb-2">
              Check Your Email
            </h1>
            <p className="text-gray-600 font-light">
              We've sent a password reset link to {email}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-600 font-light">
              Didn't receive the email? Check your spam folder or try again.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="w-full"
            >
              Try Again
            </Button>
            <Link
              to="/login"
              className="block text-sm font-light text-gray-600 hover:text-black transition-colors"
            >
              Back to Sign In
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-6">
      <Card className="w-full max-w-md p-8 glass">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light tracking-tight text-black mb-2">
            Reset Password
          </h1>
          <p className="text-gray-600 font-light">
            Enter your email address and we'll send you a link to reset your password
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
              className="w-full"
              placeholder="Enter your email"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full neumorphic text-black hover:text-black font-light py-3"
          >
            Send Reset Link
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="text-sm font-light text-gray-600 hover:text-black transition-colors"
          >
            Back to Sign In
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ForgotPassword;
