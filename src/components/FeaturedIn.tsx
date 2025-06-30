
const FeaturedIn = () => {
  const publications = [
    "TechCrunch",
    "Wired",
    "Forbes",
    "The Verge",
    "Fast Company",
    "MIT Technology Review"
  ];

  return (
    <section className="section-padding bg-white/50">
      <div className="container mx-auto text-center">
        <p className="text-sm font-light text-gray-500 mb-8 tracking-wide uppercase">
          Featured In
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {publications.map((pub, index) => (
            <div
              key={pub}
              className="text-gray-400 font-light text-lg hover:text-gray-600 transition-colors duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pub}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
