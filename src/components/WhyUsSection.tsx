import React from 'react';

const WhyUsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#120404] to-[#2a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-padding">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-white animate-fade-in-left">
            <div className="mb-8">
              <div className="inline-block bg-red-500 bg-opacity-20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6 animate-scale-in">
                <span className="text-red-500 font-semibold text-sm tracking-widest uppercase">
                  WHY US
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-shadow">
                Our Specialities
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Our top-notch digital marketing agency not only delivers impressive results but also dazzles our clients with remarkable statistics. We pride ourselves on our ability to amaze customers with tangible outcomes and eye-catching figures.
              </p>
            </div>

            {/* Large Statistics */}
            <div className="space-y-8">
              <div className="animate-scale-in stagger-1">
                <div className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-2 text-shadow hover-scale">150%</div>
                <div className="text-gray-300 text-base md:text-lg">Average ROI Increase</div>
              </div>
            </div>
          </div>

          {/* Right side - Image and Stats */}
          <div className="relative animate-fade-in-right">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Professional working"
                className="w-full h-64 md:h-96 object-cover hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Revenue Stat */}
            <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 glass rounded-2xl p-4 md:p-6 border border-white border-opacity-20 animate-float">
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 text-shadow">$74M</div>
                <div className="text-xs md:text-sm text-white opacity-80 uppercase tracking-wide">Revenue Generated</div>
              </div>
            </div>

            {/* Bottom Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
              <div className="glass-dark rounded-xl p-4 md:p-6 border border-white border-opacity-10 card-hover animate-scale-in stagger-1">
                <div className="text-xl md:text-2xl font-bold text-white mb-2 text-shadow hover-scale">98%</div>
                <div className="text-gray-300 text-xs md:text-sm">Client Satisfaction</div>
              </div>
              <div className="glass-dark rounded-xl p-4 md:p-6 border border-white border-opacity-10 card-hover animate-scale-in stagger-2">
                <div className="text-xl md:text-2xl font-bold text-white mb-2 text-shadow hover-scale">24/7</div>
                <div className="text-gray-300 text-xs md:text-sm">Support Available</div>
              </div>
              <div className="glass-dark rounded-xl p-4 md:p-6 border border-white border-opacity-10 card-hover animate-scale-in stagger-3">
                <div className="text-xl md:text-2xl font-bold text-white mb-2 text-shadow hover-scale">500+</div>
                <div className="text-gray-300 text-xs md:text-sm">Projects Completed</div>
              </div>
              <div className="glass-dark rounded-xl p-4 md:p-6 border border-white border-opacity-10 card-hover animate-scale-in stagger-4">
                <div className="text-xl md:text-2xl font-bold text-white mb-2 text-shadow hover-scale">15+</div>
                <div className="text-gray-300 text-xs md:text-sm">Industry Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;