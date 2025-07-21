import React, { useState } from 'react';
import { Brain, Wifi, Cpu, Cloud, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const technologies = [
    { 
      name: 'Artificial Intelligence', 
      icon: Brain, 
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      hoverBorderColor: 'hover:border-purple-300',
      description: 'Advanced AI solutions for embedded systems',
      features: ['Machine Learning', 'Neural Networks', 'Edge AI']
    },
    { 
      name: 'IoT Systems', 
      icon: Wifi, 
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hoverBorderColor: 'hover:border-blue-300',
      description: 'Connected device ecosystems',
      features: ['Sensor Networks', 'Data Analytics', 'Remote Monitoring']
    },
    { 
      name: 'Embedded Communications', 
      icon: Cpu, 
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      hoverBorderColor: 'hover:border-green-300',
      description: 'Seamless device communication protocols',
      features: ['Bluetooth', 'Zigbee', 'LoRa']
    },
    { 
      name: 'Cloud Integration', 
      icon: Cloud, 
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      hoverBorderColor: 'hover:border-orange-300',
      description: 'Scalable cloud-based solutions',
      features: ['AWS', 'GCP', 'Azure']
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 professional-dots-background opacity-40"></div>
      
      {/* Subtle Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/20 rounded-full blur-3xl animate-pulse-gentle"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-100/20 to-indigo-100/30 rounded-full blur-3xl animate-pulse-gentle animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-15 group-hover:opacity-25 transition-opacity duration-500"></div>
              <div className="relative p-6 bg-white rounded-2xl shadow-lg border border-gray-200 group-hover:border-gray-300 transition-all duration-300 hover:scale-110">
                <div className="w-12 h-12 relative group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src="/logo.png" 
                    alt="EmCom Logo" 
                    className="w-full h-full object-contain rounded-xl animate-pulse-smooth group-hover:rotate-6 transition-transform duration-500"
                  />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            At EmCom, we specialize in delivering cutting-edge training, development, and testing services 
            in embedded systems and communication technologies. Our mission is to empower engineers and 
            businesses to build world-class solutions using:
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name}
              className="group hover:scale-105 transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-full">
                {/* Subtle Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className={`relative bg-white rounded-2xl p-8 border-2 ${tech.borderColor} ${tech.hoverBorderColor} shadow-lg hover:shadow-xl transition-all duration-500 h-full group-hover:-translate-y-2`}>
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${tech.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <tech.icon className="w-full h-full text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {tech.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300 text-sm">
                    {tech.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {tech.features.map((feature, idx) => (
                      <div key={feature} className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color} mr-3`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Professional Progress Line */}
                  <div className={`h-1 rounded-full bg-gradient-to-r ${tech.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

                  {/* Flip Effect on Hover */}
                  {hoveredCard === index && (
                    <div className={`absolute inset-0 ${tech.bgColor} rounded-2xl flex items-center justify-center animate-card-flip-professional border-2 ${tech.borderColor}`}>
                      <div className="text-center">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${tech.color} p-3 mx-auto mb-4 shadow-lg`}>
                          <tech.icon className="w-full h-full text-white" />
                        </div>
                        <p className="text-gray-800 font-semibold mb-2">Explore {tech.name}</p>
                        <ArrowRight className="w-5 h-5 text-gray-600 mx-auto" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Description and CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl">
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 font-light">
              From Bluetooth and Zigbee to AWS and GCP – our team is equipped to support your tech journey 
              with innovative solutions that drive real business results.
            </p>
            
            <div className="inline-flex items-center justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <button className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105 hover:-translate-y-1 btn-professional">
                  <span className="flex items-center space-x-2">
                    <span>Learn More About Our Technologies</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;