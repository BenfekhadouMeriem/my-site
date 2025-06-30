
const Mission = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white/20 to-white/50">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight fade-in-up">
          Our Mission
        </h2>
        <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
          We built Consulting to make job applications faster, smarter, and more human. 
          Our AI doesn't replace your personality—it amplifies it, helping you present 
          your best self to potential employers while saving hours of repetitive work.
        </p>
        <div className="mt-12 glass p-8 rounded-2xl fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg font-light text-gray-600 italic">
            "Every great career starts with a great application. We're here to make sure yours stands out."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
