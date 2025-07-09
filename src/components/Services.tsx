import React from 'react';
import { Database, Brain, Cloud, ShoppingCart, TrendingUp, Zap, Users, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Transform raw data into strategic insights with our comprehensive analytics platform. From data warehousing to real-time dashboards, we help you make data-driven decisions that drive growth.',
      color: 'text-cyan-400',
      bgColor: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Brain,
      title: 'AI/ML & Emerging Tech',
      description: 'Deploy cutting-edge AI and machine learning solutions that automate processes, predict outcomes, and unlock new revenue streams. Our proprietary platforms accelerate time-to-market by 3x.',
      color: 'text-purple-400',
      bgColor: 'from-purple-400 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Seamlessly migrate and optimize your cloud infrastructure for scalability, security, and performance. We provide end-to-end cloud solutions across AWS, Azure, and Google Cloud platforms.',
      color: 'text-blue-400',
      bgColor: 'from-blue-400 to-indigo-500'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Build and optimize e-commerce platforms that convert visitors into customers. From personalization engines to inventory management, we create solutions that drive revenue growth.',
      color: 'text-green-400',
      bgColor: 'from-green-400 to-emerald-500'
    }
  ];

  const whyChooseUs = [
    {
      icon: TrendingUp,
      title: 'Revenue-Driven Analytics',
      badge: '40%+ ROI Boost',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Zap,
      title: 'AI-First Acceleration',
      badge: '3x Faster Deployment',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Users,
      title: 'Enterprise-Grade Expertise',
      badge: 'Fortune 500 Experience',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Rocket,
      title: 'End-to-End Delivery',
      badge: 'Single Vendor Solution',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-[#2a0a0a] to-[#120404] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mobile-padding">
        {/* Services Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-red-500 font-semibold text-sm tracking-widest uppercase animate-fade-in-up">SOLUTIONS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 md:mb-8 text-shadow animate-fade-in-up stagger-1">
            Our Core Services
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto animate-fade-in-up stagger-2">
            Comprehensive AI and data solutions designed to transform your business operations and drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`glass-dark rounded-2xl p-6 md:p-8 border border-white border-opacity-10 card-hover group animate-fade-in-up stagger-${index + 1} relative overflow-hidden`}
              >
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.bgColor} opacity-10 rounded-full blur-2xl`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className={`w-12 md:w-16 h-12 md:h-16 rounded-xl bg-gradient-to-br ${service.bgColor} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 text-shadow">{service.title}</h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-red-500 bg-opacity-20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6 animate-scale-in">
            <span className="text-red-500 font-semibold text-sm tracking-widest uppercase flex items-center">
              <Zap size={16} className="mr-2" />
              Why Industry Leaders Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 text-shadow animate-fade-in-up stagger-1">
            Built for Enterprise Success
          </h2>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {whyChooseUs.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`glass-dark rounded-2xl p-6 border border-white border-opacity-10 card-hover group animate-fade-in-up stagger-${index + 1} relative overflow-hidden`}
              >
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-xl`}></div>
                
                <div className="relative z-10 text-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={20} />
                  </div>
                  <div className="bg-cyan-500 bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1 mb-3 inline-block">
                    <span className="text-cyan-400 text-xs font-semibold">{item.badge}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white text-shadow">{item.title}</h3>
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

export default Services;