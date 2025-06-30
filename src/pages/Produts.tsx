
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Industrial", "Healthcare", "Consumer", "Security"];

  const products = [
    {
      id: 1,
      name: "NEXBOT-X1 Industrial",
      category: "Industrial",
      price: "$49,999",
      image: "/placeholder.svg",
      description: "Heavy-duty industrial robot for manufacturing and assembly lines.",
      specs: ["5-axis movement", "50kg payload", "0.1mm precision"]
    },
    {
      id: 2,
      name: "NEXBOT-M2 Medical",
      category: "Healthcare", 
      price: "$89,999",
      image: "/placeholder.svg",
      description: "Precision medical robot for surgical assistance and patient care.",
      specs: ["Sterile design", "Sub-millimeter accuracy", "FDA approved"]
    },
    {
      id: 3,
      name: "NEXBOT-H3 Home",
      category: "Consumer",
      price: "$12,999",
      image: "/placeholder.svg",
      description: "Smart home assistant robot for daily tasks and companionship.",
      specs: ["Voice control", "8-hour battery", "WiFi connected"]
    },
    {
      id: 4,
      name: "NEXBOT-S4 Security",
      category: "Security",
      price: "$34,999",
      image: "/placeholder.svg",
      description: "Advanced security robot with surveillance and patrol capabilities.",
      specs: ["360° vision", "Facial recognition", "24/7 operation"]
    },
    {
      id: 5,
      name: "NEXBOT-A5 Assembly",
      category: "Industrial",
      price: "$67,999",
      image: "/placeholder.svg",
      description: "Collaborative robot designed for precision assembly operations.",
      specs: ["Collaborative safety", "Easy programming", "Flexible mounting"]
    },
    {
      id: 6,
      name: "NEXBOT-C6 Companion",
      category: "Consumer",
      price: "$8,999",
      image: "/placeholder.svg",
      description: "Personal companion robot with emotional intelligence.",
      specs: ["Emotion recognition", "Natural conversation", "Learning AI"]
    }
  ];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fade-in-up">
            Discover our complete range of revolutionary robotic solutions.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-white text-black hover:bg-gray-200"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="bg-gray-900 border-gray-800 overflow-hidden hover:scale-105 transition-all duration-300 nexbot-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🤖</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{product.name}</h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Key Specifications:</h4>
                    <ul className="text-sm text-gray-500 space-y-1">
                      {product.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Our engineering team can design and build bespoke robotic solutions tailored to your specific requirements.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 nexbot-glow">
            Request Custom Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
