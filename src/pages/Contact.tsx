
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in">
            Contact NEXBOT
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fade-in-up max-w-3xl mx-auto">
            Ready to revolutionize your operations? Get in touch with our robotics experts 
            to discuss your specific needs and discover how NEXBOT can transform your business.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-900 border-gray-800 p-8 animate-fade-in">
              <h2 className="text-3xl font-bold mb-8 text-white">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white focus:border-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white focus:border-white"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-gray-300">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white focus:border-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-gray-300">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white focus:border-white"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-300">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-gray-800 border-gray-700 text-white focus:border-white resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-white text-black hover:bg-gray-200 nexbot-glow"
                >
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-right">
              <Card className="bg-gray-900 border-gray-800 p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Headquarters</h4>
                      <p className="text-gray-400">
                        Silicon Valley Innovation Center<br />
                        1234 Technology Drive<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📞</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <p className="text-gray-400">+1 (555) 123-NEXBOT</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">✉️</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <p className="text-gray-400">hello@nexbot.com</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-900 border-gray-800 p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-900 border-gray-800 p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Follow Us</h3>
                <div className="flex space-x-6">
                  {[
                    { name: "LinkedIn", icon: "💼" },
                    { name: "Twitter", icon: "🐦" },
                    { name: "YouTube", icon: "📺" },
                    { name: "GitHub", icon: "💻" }
                  ].map((social, index) => (
                    <button
                      key={index}
                      className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 animate-float"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <span className="text-xl">{social.icon}</span>
                    </button>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Start Your Robotics Journey?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experts to discuss your specific requirements 
            and discover the perfect NEXBOT solution for your needs.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 nexbot-glow">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
