
import { useState } from "react";
import { Card } from "@/components/ui/card";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      text: "Consulting helped me land my dream job at Google within 2 weeks. The AI-generated resume was perfect!",
      author: "Sarah Chen",
      position: "Software Engineer at Google",
      result: "Hired in 2 weeks"
    },
    {
      text: "The motivation letters were so personalized and compelling. Got 3 job offers in my first month!",
      author: "Marcus Johnson",
      position: "Product Manager at Meta",
      result: "3 job offers"
    },
    {
      text: "The voice assistant feature is incredible. It's like having a personal career coach available 24/7.",
      author: "Elena Rodriguez",
      position: "Data Scientist at Netflix",
      result: "40% salary increase"
    },
    {
      text: "I went from 0 interviews to 15 interviews in just 3 weeks. This app changed my career trajectory.",
      author: "David Kim",
      position: "UX Designer at Adobe",
      result: "15 interviews in 3 weeks"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="section-padding" id="testimonials">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-tight">
          Success Stories
        </h2>
        
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 bg-gray-300 border border-black w-full md:w-1/2 lg:w-1/3 glass p-8 mr-6 hover:scale-105 transition-transform duration-300">
                <p className="text-lg font-light text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-medium text-black">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 mb-2">{testimonial.position}</p>
                  <p className="text-sm font-medium text-green-600">{testimonial.result}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentSlide === index ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
