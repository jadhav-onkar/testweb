import React from 'react';
import { TrendingUp, Zap, Users, Rocket } from 'lucide-react';

const WhyUsSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Revenue-Driven Analytics',
      description: 'Transform data into actionable insights that directly impact your bottom line. Our solutions have helped clients achieve 40%+ ROI improvements through data-driven decision making.',
      badge: '40%+ ROI Boost',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Zap,
      title: 'AI-First Acceleration',
      description: 'Deploy production-ready ML models 3x faster with our proprietary \'Elevate\' platform. From predictive analytics to generative AI - we make cutting-edge technology accessible.',
      badge: '3x Faster Deployment',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Users,
      title: 'Enterprise-Grade Expertise',
      description: 'Led by former Samsung & Groupon executives, our 51-200 person team across 4 global offices brings Silicon Valley expertise to your enterprise transformation.',
      badge: 'Fortune 500 Experience',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Rocket,
      title: 'End-to-End Delivery',
      description: 'From cloud migration to AI integration - one partner, complete solution. Eliminate vendor complexity while accelerating your digital transformation timeline.',
      badge: 'Single Vendor Solution',
      color: 'from-cyan-400 to-blue-500'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#120404] to-[#2a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-padding">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-red-500 bg-opacity-20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6 animate-scale-in">
            <span className="text-red-500 font-semibold text-sm tracking-widest uppercase flex items-center">
              <Zap size={16} className="mr-2" />
              Why Industry Leaders Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 text-shadow animate-fade-in-up stagger-1">
            Built for Enterprise Success
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto animate-fade-in-up stagger-2">
            Mid to large enterprises trust us to accelerate their data transformation journey with measurable business outcomes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`glass-dark rounded-2xl p-6 md:p-8 border border-white border-opacity-10 card-hover group animate-fade-in-up stagger-${index + 1} relative overflow-hidden`}
              >
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-2xl`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 md:w-16 h-12 md:h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="bg-cyan-500 bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-cyan-400 text-xs font-semibold">{feature.badge}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 text-shadow">{feature.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-dark rounded-2xl p-8 md:p-12 border border-white border-opacity-10 max-w-4xl mx-auto animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-shadow">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
              Discover how our AI-powered solutions can drive measurable results for your enterprise.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg">
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;