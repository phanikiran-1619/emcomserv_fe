import React from 'react';
import { Radio, Cloud, Car, Smartphone } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      name: 'Embedded Product Companies',
      icon: Radio,
      description: 'Specialized solutions for embedded product development and optimization',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Cloud-based IoT Solutions',
      icon: Cloud,
      description: 'Integration of IoT devices with cloud infrastructure and services',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Automotive & Industrial Devices',
      icon: Car,
      description: 'Advanced systems for automotive and industrial automation',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Consumer Electronics',
      icon: Smartphone,
      description: 'Cutting-edge solutions for consumer electronic products',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering specialized solutions across diverse technology sectors
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={industry.name}
              className="group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full text-center">
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${industry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {industry.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {industry.description}
                </p>

                {/* Decorative line */}
                <div className={`mt-6 h-1 w-12 mx-auto rounded-full bg-gradient-to-r ${industry.color} group-hover:w-20 transition-all duration-500`}></div>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '10+', label: 'Projects Delivered' },
            { number: '10+', label: 'Happy Clients' },
            { number: '3+', label: 'Years Experience' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;