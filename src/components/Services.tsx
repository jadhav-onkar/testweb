import React from 'react';
import { Search, FileText, Monitor, Instagram, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO',
      description: 'We optimize your site\'s structure, content, and keywords to rank higher on search engine results pages, increasing your chances of being discovered by potential customers.',
      color: 'text-red-500'
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Our content marketing services include creating informative blog posts, engaging videos, and shareable infographics to captivate your audience and drive traffic to your website.',
      color: 'text-red-500'
    },
    {
      icon: Monitor,
      title: 'Website Design',
      description: 'Our design experts craft visually stunning and user-friendly websites optimized for performance and conversion, ensuring a seamless online experience for your visitors.',
      color: 'text-red-500'
    },
    {
      icon: Instagram,
      title: 'Social Media Marketing',
      description: 'Engage and expand your audience across social media platforms with our tailored marketing strategies. From content creation to ad campaigns, we help you connect with your target demographic.',
      color: 'text-red-500'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-[#2a0a0a] to-[#120404] relative">
      {/* Team Image Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-20"></div>
      <div 
        className="absolute top-0 left-0 w-full h-96 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mobile-padding">
        {/* Agency Badge */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block glass-dark rounded-2xl p-4 md:p-6 border border-white border-opacity-20 animate-scale-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 text-shadow">
              #1 DIGITAL MARKETING<br />
              AGENCY IN ASIA
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex -space-x-2">
                <div className="w-8 md:w-10 h-8 md:h-10 bg-gray-400 rounded-full border-2 border-white hover-scale"></div>
                <div className="w-8 md:w-10 h-8 md:h-10 bg-gray-500 rounded-full border-2 border-white hover-scale"></div>
                <div className="w-8 md:w-10 h-8 md:h-10 bg-gray-600 rounded-full border-2 border-white hover-scale"></div>
                <div className="w-8 md:w-10 h-8 md:h-10 bg-gray-700 rounded-full border-2 border-white hover-scale"></div>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg md:text-xl hover-scale">★</span>
                ))}
              </div>
              <span className="text-white font-semibold text-sm md:text-base">200+ 5 Star Reviews</span>
            </div>
          </div>
        </div>

        {/* Services Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-red-500 font-semibold text-sm tracking-widest uppercase animate-fade-in-up">SERVICES</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 md:mb-8 text-shadow animate-fade-in-up stagger-1">
            What we are offering
          </h2>
          <div className="flex justify-center">
            <button className="btn-hover bg-gradient-to-r from-red-500 to-red-600 text-white px-6 md:px-8 py-3 rounded-full font-medium flex items-center space-x-2 hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-105 animate-scale-in stagger-2 hover-glow">
              <ArrowRight size={16} className="btn-arrow" />
              <span>VIEW ALL SERVICES</span>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`glass-dark rounded-xl p-6 md:p-8 border border-white border-opacity-10 card-hover group animate-fade-in-up stagger-${index + 1}`}
              >
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex-shrink-0">
                    <div className={`w-12 md:w-16 h-12 md:h-16 rounded-lg border-2 border-red-500 flex items-center justify-center ${service.color} group-hover:bg-red-500 group-hover:text-white transition-all duration-300 hover-scale`}>
                      <IconComponent size={32} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 text-shadow">{service.title}</h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                      {service.description}
                    </p>
                    <button className="btn-hover text-white font-medium flex items-center space-x-2 group-hover:text-red-400 transition-colors duration-300 hover-scale">
                      <span>LEARN MORE</span>
                      <ArrowRight size={16} className="btn-arrow" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Solutions & Stats Section */}
        <div className="mt-20 flex flex-col items-center justify-center">
          <button className="bg-gradient-to-r from-[#d13b3b] to-[#a91e1e] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 shadow-lg hover:from-[#a91e1e] hover:to-[#d13b3b] transition-all duration-300 hover:scale-105 mb-10">
            <span>Explore Our Solutions</span>
            <ArrowRight size={20} />
          </button>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mb-8 w-full max-w-3xl">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#ffb3b3] mb-2">17+</div>
              <div className="text-gray-200 text-base">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#ffb3b3] mb-2">50+</div>
              <div className="text-gray-200 text-base">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#ffb3b3] mb-2">200+</div>
              <div className="text-gray-200 text-base">Successful Projects delivered</div>
            </div>
          </div>
          <div className="text-center mt-2">
            <p className="text-gray-300 text-lg font-medium max-w-2xl mx-auto">
              We are on a mission to empower businesses with innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;