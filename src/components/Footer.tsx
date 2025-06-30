
const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "API", "Integrations"],
    Company: ["About", "Careers", "Press", "Contact"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
    Support: ["Help Center", "Community", "Status", "Feedback"]
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <div className="text-2xl font-light tracking-tight mb-4">
              Consulting
            </div>
            <p className="text-gray-400 font-light text-sm leading-relaxed">
              AI-powered job applications that get results.
            </p>
            <div className="flex space-x-4 mt-6">
              {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-medium mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 font-light text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-light text-sm">
            © 2024 Consulting. All rights reserved.
          </p>
          <p className="text-gray-400 font-light text-sm mt-4 md:mt-0">
            Made with AI for the future of work
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
