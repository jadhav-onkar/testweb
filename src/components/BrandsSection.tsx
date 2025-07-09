import React from 'react';

const BrandsSection = () => {
  const brands = [
    { name: 'LogoIpsum', logo: 'LOGOIPSUM' },
    { name: 'Logo Ipsum', logo: 'logo—ipsum' },
    { name: 'LogoIpsum', logo: 'logoipsum' },
    { name: 'Logoipsum', logo: 'Logoipsum' },
    { name: 'LogoIpsum', logo: 'LOGOIPSUM' },
    { name: 'Logo Ipsum', logo: 'logo—ipsum' }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#120404] to-[#2a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-padding">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-red-500 bg-opacity-20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6 animate-scale-in">
            <span className="text-red-500 font-semibold text-sm tracking-widest uppercase">
              BRANDS COLLABORATIONS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 text-shadow animate-fade-in-up stagger-1">
            Brands that trust us
          </h2>
        </div>

        {/* Brand Logos Carousel */}
        <div className="relative">
          <div className="flex space-x-4 md:space-x-8 overflow-x-auto scrollbar-hide pb-4 smooth-scroll">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`flex-shrink-0 glass-dark rounded-2xl p-6 md:p-8 border border-white border-opacity-10 card-hover min-w-[200px] md:min-w-[280px] flex items-center justify-center animate-fade-in-up stagger-${index + 1}`}
              >
                <div className="text-white text-lg md:text-xl font-medium opacity-80 hover-scale">
                  {brand.logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 md:mt-20 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 rounded-2xl animate-fade-in-up"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
            }}
          ></div>
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 glass-dark rounded-2xl p-6 md:p-12">
            <div className="text-center animate-scale-in stagger-1">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 text-shadow hover-scale">15+</div>
              <div className="text-gray-300 text-xs md:text-sm">Years of Experience</div>
            </div>
            <div className="text-center animate-scale-in stagger-2">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 text-shadow hover-scale">200+</div>
              <div className="text-gray-300 text-xs md:text-sm">Successful Projects</div>
            </div>
            <div className="text-center animate-scale-in stagger-3">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 text-shadow hover-scale">150+</div>
              <div className="text-gray-300 text-xs md:text-sm">Happy Clients</div>
            </div>
            <div className="text-center animate-scale-in stagger-4">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 text-shadow hover-scale">160</div>
              <div className="text-gray-300 text-xs md:text-sm">5 Star Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;