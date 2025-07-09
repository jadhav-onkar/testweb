import React from 'react';

const CaseStudies = () => {
  const caseStudies = [
    {
      category: 'CASE STUDY',
      title: 'Content Writing For Video Grapher',
      subtitle: 'How Stellar Scripts Elevated a Videographer\'s Portfolio Website',
      metrics: [
        { value: '40%', label: 'Increase in website traffic' },
        { value: '70%', label: 'Target keywords ranked' }
      ],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      category: 'CASE STUDY',
      title: 'SEO Success story of an Architecture Firm',
      subtitle: 'How ArchiVision Architects Achieved Top Rankings with Strategic SEO',
      metrics: [
        { value: '60%', label: 'Increase in organic traffic' },
        { value: '#1', label: 'Ranked on the first page' }
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#2a0a0a] to-[#120404] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-padding">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-red-500 bg-opacity-20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6 animate-scale-in">
            <span className="text-red-500 font-semibold text-sm tracking-widest uppercase">
              WORKS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 text-shadow animate-fade-in-up stagger-1">
            Case Studies
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`glass-dark rounded-2xl overflow-hidden border border-white border-opacity-10 card-hover group animate-fade-in-up stagger-${index + 1}`}
            >
              {/* Case Study Image */}
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 bg-opacity-80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full hover-scale">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-shadow">
                  {study.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                  {study.subtitle}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center hover-scale">
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 mb-2 text-shadow">
                        {metric.value}
                      </div>
                      <div className="text-gray-300 text-xs md:text-sm">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;