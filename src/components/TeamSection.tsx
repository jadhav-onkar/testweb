import React from 'react';

const TeamSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-red-500 to-red-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mobile-padding">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Team Image */}
          <div className="relative animate-fade-in-left">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team collaboration"
                className="w-full h-64 md:h-96 object-cover hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-24 md:w-32 h-24 md:h-32 glass rounded-full flex items-center justify-center animate-float">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-white text-shadow">200+</div>
                <div className="text-xs md:text-sm text-white opacity-80">Projects</div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white animate-fade-in-right">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-shadow">
                Meet our expert team
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-white opacity-90 leading-relaxed">
                Our passionate team of digital marketing experts brings together decades of experience 
                in crafting strategies that drive real results for businesses across Asia.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="glass rounded-xl p-4 md:p-6 border border-white border-opacity-20 card-hover animate-scale-in stagger-1">
                <div className="text-2xl md:text-3xl font-bold mb-2 text-shadow hover-scale">50+</div>
                <div className="text-white opacity-80 text-sm md:text-base">Expert Team Members</div>
              </div>
              <div className="glass rounded-xl p-4 md:p-6 border border-white border-opacity-20 card-hover animate-scale-in stagger-2">
                <div className="text-2xl md:text-3xl font-bold mb-2 text-shadow hover-scale">5+</div>
                <div className="text-white opacity-80 text-sm md:text-base">Years of Experience</div>
              </div>
              <div className="glass rounded-xl p-4 md:p-6 border border-white border-opacity-20 card-hover animate-scale-in stagger-3">
                <div className="text-2xl md:text-3xl font-bold mb-2 text-shadow hover-scale">98%</div>
                <div className="text-white opacity-80 text-sm md:text-base">Client Satisfaction</div>
              </div>
              <div className="glass rounded-xl p-4 md:p-6 border border-white border-opacity-20 card-hover animate-scale-in stagger-4">
                <div className="text-2xl md:text-3xl font-bold mb-2 text-shadow hover-scale">15+</div>
                <div className="text-white opacity-80 text-sm md:text-base">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;