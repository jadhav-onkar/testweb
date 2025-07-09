import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-[#231418] flex items-center justify-center relative overflow-hidden pt-28" style={{background: 'linear-gradient(to bottom, #231418 70%, #281414 100%)'}}>
      {/* Top SVG Pattern */}
      <div className="hero-top-pattern"></div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse animate-float"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-white rounded-full animate-pulse animate-float stagger-1"></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse animate-float stagger-2"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full animate-pulse animate-float stagger-3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mobile-padding">
        <div className="animate-fade-in-up">
          <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-medium tracking-tight font-sans text-white mb-4 md:mb-6 leading-[1.05]">
            Engineering{' '}
            <span className="align-middle">
              <span className="bg-[#D13B3B] text-black px-3 md:px-6 py-1 md:py-2 font-medium text-[2.1rem] sm:text-[2.7rem] md:text-[3.7rem] lg:text-[4.5rem] align-middle tracking-tight" style={{borderRadius: 0, display: 'inline-block'}}>
                AI Systems
              </span>
            </span>
            <br />
            <span className="text-[2.1rem] sm:text-[2.7rem] md:text-[3.7rem] lg:text-[4.5rem] font-medium tracking-tight font-sans">
              that transform
            </span>
            <br />
            <span className="text-[2.1rem] sm:text-[2.7rem] md:text-[3.7rem] lg:text-[4.5rem] font-medium tracking-tight font-sans">
              Enterprise operations
            </span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-4xl mx-auto mt-2 md:mt-4 mb-8 leading-relaxed animate-fade-in-up stagger-1">
            We are on a mission to help brands operationalize AI to drive efficiency, speed, and scale. Our systems unlock value where it matters most—at the core of business execution.
          </p>

          {/* Solutions Button & Stats */}
          <div className="flex flex-col items-center justify-center mb-8">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;