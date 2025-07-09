import React from 'react';

const BrandsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#120404] to-[#2a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-padding">
        {/* Track Record Section */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 text-shadow animate-fade-in-up">
            Our Track Record
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12 animate-fade-in-up stagger-1">
            Our track record speaks for itself. Here's how we've helped enterprises transform their data landscape.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            <div className="glass-dark rounded-2xl p-6 md:p-8 border border-white border-opacity-10 card-hover animate-scale-in stagger-1">
              <div className="mb-2">
                <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wide">Enterprise Reach</span>
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 text-shadow hover-scale">50+</div>
              <div className="text-gray-300 text-xs md:text-sm">Enterprise Brands</div>
              <div className="text-xs text-gray-500 mt-2">Trusted by 50+ global enterprises</div>
            </div>
            
            <div className="glass-dark rounded-2xl p-6 md:p-8 border border-white border-opacity-10 card-hover animate-scale-in stagger-2">
              <div className="mb-2">
                <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wide">Proven Results</span>
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 text-shadow hover-scale">40%</div>
              <div className="text-gray-300 text-xs md:text-sm">Average ROI Improvement</div>
              <div className="text-xs text-gray-500 mt-2">Average improvement in operational efficiency</div>
            </div>
            
            <div className="glass-dark rounded-2xl p-6 md:p-8 border border-white border-opacity-10 card-hover animate-scale-in stagger-3">
              <div className="mb-2">
                <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wide">Scale & Expertise</span>
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 text-shadow hover-scale">200+</div>
              <div className="text-gray-300 text-xs md:text-sm">ML Models Deployed</div>
              <div className="text-xs text-gray-500 mt-2">Production-ready AI solutions delivered</div>
            </div>
            
            <div className="glass-dark rounded-2xl p-6 md:p-8 border border-white border-opacity-10 card-hover animate-scale-in stagger-4">
              <div className="mb-2">
                <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wide">Always Available</span>
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 text-shadow hover-scale">24/7</div>
              <div className="text-gray-300 text-xs md:text-sm">Global Support</div>
              <div className="text-xs text-gray-500 mt-2">Round-the-clock assistance across 4 offices</div>
            </div>
          </div>

          {/* Real-time metrics badge */}
          <div className="inline-flex items-center bg-green-500 bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 animate-pulse">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Real-time metrics updated from active client projects</span>
          </div>
        </div>

        {/* Industries Section */}
        <div className="text-center">
          <div className="inline-block bg-red-500 bg-opacity-20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6 animate-scale-in">
            <span className="text-red-500 font-semibold text-sm tracking-widest uppercase">
              Industry Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 text-shadow animate-fade-in-up stagger-1">
            Industries We Transform
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto animate-fade-in-up stagger-2">
            Deep domain expertise across diverse verticals with proven track records of delivering measurable business outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;