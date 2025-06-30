import React from 'react';
import Navigation from '@/components/Navigation';

const Blog = () => {
  const articles = [
    {
      title: "The Future of AI in Cryptocurrency Trading",
      excerpt: "Explore how artificial intelligence is revolutionizing the cryptocurrency trading landscape and what this means for individual investors.",
      date: "December 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      category: "AI Technology"
    },
    {
      title: "Risk Management Strategies for Crypto Trading",
      excerpt: "Learn essential risk management techniques that can protect your portfolio from market volatility and maximize long-term returns.",
      date: "December 10, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      category: "Trading Strategy"
    },
    {
      title: "Market Analysis: Bitcoin's Next Bull Run",
      excerpt: "Our AI algorithms analyze market patterns and predict potential price movements for Bitcoin in the coming quarter.",
      date: "December 5, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=400&fit=crop",
      category: "Market Analysis"
    },
    {
      title: "Getting Started with Automated Trading",
      excerpt: "A comprehensive guide for beginners looking to enter the world of automated cryptocurrency trading with AI assistance.",
      date: "November 28, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      category: "Beginner Guide"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-8 tracking-tight">
              Lunexa <span className="text-primary">Blog</span>
            </h1>
            
            <p className="text-xl text-white/70 mb-16 max-w-2xl">
              Stay updated with the latest insights, strategies, and market analysis 
              from our team of AI trading experts.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <article key={index} className="glass rounded-3xl overflow-hidden hover:bg-white/10 transition-all group">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <span className="text-white/60 text-sm">
                        {article.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-medium text-white mb-4 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    
                    <p className="text-white/70 leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">
                        {article.date}
                      </span>
                      
                      <button className="flex items-center gap-2 text-primary hover:gap-3 transition-all">
                        Read More
                        <i className="ph-light ph-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
