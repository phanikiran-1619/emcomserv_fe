import React, { useState } from 'react';
import { CheckCircle, Cpu, Cloud, Network, TestTube, Wrench, GraduationCap, ArrowRight, Star } from 'lucide-react';

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    { 
      name: 'Embedded Systems Development', 
      icon: Cpu,
      description: 'Custom embedded solutions tailored to your needs',
      features: ['Microcontroller Programming', 'Real-time Systems', 'Hardware Integration'],
      color: 'from-blue-500 to-blue-600'
    },
    { 
      name: 'Cloud & Embedded Integration', 
      icon: Cloud,
      description: 'Seamless connectivity between devices and cloud',
      features: ['IoT Cloud Platforms', 'Data Synchronization', 'Remote Management'],
      color: 'from-purple-500 to-purple-600'
    },
    { 
      name: 'Communication Protocol Engineering', 
      icon: Network,
      description: 'Advanced communication solutions',
      features: ['COM/Ethernet', 'Wireless Protocols', 'Network Security'],
      color: 'from-green-500 to-green-600'
    },
    { 
      name: 'Test Automation & Validation', 
      icon: TestTube,
      description: 'Comprehensive testing and validation services',
      features: ['Automated Testing', 'Performance Analysis', 'Quality Assurance'],
      color: 'from-orange-500 to-orange-600'
    },
    { 
      name: 'Hardware Porting & Driver Development', 
      icon: Wrench,
      description: 'Expert hardware integration and driver solutions',
      features: ['Device Drivers', 'Hardware Abstraction', 'Platform Porting'],
      color: 'from-red-500 to-red-600'
    },
    { 
      name: 'Training & Mentorship Programs', 
      icon: GraduationCap,
      description: 'Professional development and knowledge transfer',
      features: ['Technical Training', 'Best Practices', 'Team Mentoring'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 professional-dots-background opacity-30"></div>
      
      {/* Subtle Background Effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/15 rounded-full blur-3xl animate-pulse-gentle"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-100/15 to-indigo-100/20 rounded-full blur-3xl animate-pulse-gentle animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight animate-text-glow-subtle">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            We combine deep industry knowledge with technical excellence to deliver:
          </p>
        </div>

        {/* Services Grid with Amazing Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.name}
              className="group transition-all duration-700 cursor-pointer animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 150}ms`,
                transform: hoveredCard === index ? 'translateY(-20px) scale(1.05)' : 'translateY(0) scale(1)'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-full">
                {/* Amazing Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700 animate-pulse-magic`}></div>
                
                {/* Main Card with Spectacular Effects */}
                <div className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200/50 transition-all duration-700 h-full transform-gpu ${
                  hoveredCard === index 
                    ? 'border-blue-300/50 shadow-3xl bg-gradient-to-br from-white to-blue-50/30' 
                    : 'hover:border-gray-300/50 hover:shadow-2xl'
                }`}>
                  
                  {/* Top Section with Amazing Animation */}
                  <div className="flex items-start space-x-4 mb-6">
                    {/* Super Animated Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg transition-all duration-700 ${
                      hoveredCard === index ? 'scale-125 rotate-12' : 'group-hover:scale-110'
                    }`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Animated Check Icon */}
                    <div className={`flex-shrink-0 pt-1 transition-all duration-500 ${
                      hoveredCard === index ? 'scale-125 rotate-180' : ''
                    }`}>
                      <CheckCircle className="w-6 h-6 text-green-500 animate-pulse" />
                    </div>

                    {/* Star Rating Animation */}
                    {hoveredCard === index && (
                      <div className="flex space-x-1 animate-fade-in-fast">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 text-yellow-400 animate-bounce" 
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content with Smooth Transitions */}
                  <div className="space-y-4">
                    <h3 className={`text-xl font-bold leading-tight transition-all duration-500 ${
                      hoveredCard === index 
                        ? 'text-blue-600 text-2xl' 
                        : 'text-gray-900 group-hover:text-gray-800'
                    }`}>
                      {service.name}
                    </h3>

                    <p className={`text-sm leading-relaxed transition-all duration-500 ${
                      hoveredCard === index 
                        ? 'text-blue-700 font-medium' 
                        : 'text-gray-600 group-hover:text-gray-700'
                    }`}>
                      {service.description}
                    </p>

                    {/* Enhanced Features List */}
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div 
                          key={feature} 
                          className={`flex items-center text-sm transition-all duration-500 ${
                            hoveredCard === index 
                              ? 'text-gray-800 font-medium transform translate-x-2' 
                              : 'text-gray-500 group-hover:text-gray-600'
                          }`}
                          style={{ 
                            transitionDelay: hoveredCard === index ? `${idx * 100}ms` : '0ms' 
                          }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 transition-all duration-500 ${
                            hoveredCard === index ? 'animate-ping scale-150' : 'animate-pulse'
                          }`}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Spectacular Progress Line */}
                    <div className={`h-1 rounded-full bg-gradient-to-r ${service.color} transition-all duration-700 ${
                      hoveredCard === index 
                        ? 'w-full animate-pulse-fast' 
                        : 'w-0 group-hover:w-16'
                    }`}></div>

                    {/* Action Button on Hover */}
                    {hoveredCard === index && (
                      <div className="pt-4 animate-fade-in-fast">
                        <button className={`flex items-center space-x-2 text-white bg-gradient-to-r ${service.color} px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-lg`}>
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Corner Magic Effects */}
                  <div className={`absolute top-3 right-3 w-2 h-2 bg-yellow-400 rounded-full transition-all duration-700 ${
                    hoveredCard === index 
                      ? 'opacity-100 animate-ping scale-150' 
                      : 'opacity-0 group-hover:opacity-100 animate-pulse'
                  }`}></div>
                  <div className={`absolute bottom-3 left-3 w-1 h-1 bg-blue-400 rounded-full transition-all duration-700 ${
                    hoveredCard === index 
                      ? 'opacity-100 animate-bounce scale-150' 
                      : 'opacity-0 group-hover:opacity-100'
                  }`}></div>

                  {/* Magical Border Glow */}
                  {hoveredCard === index && (
                    <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r ${service.color} opacity-20 rounded-3xl animate-pulse-fast`}></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;