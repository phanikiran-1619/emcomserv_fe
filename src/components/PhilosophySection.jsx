import React from 'react';
import { Target, Handshake, Zap } from 'lucide-react';

const PhilosophySection = () => {
  const philosophies = [
    {
      number: '01',
      title: 'ACT',
      description: 'We act responsibly, focusing on sustainable and efficient solutions.',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'PACT',
      description: 'We partner closely with clients to build mutual growth and trust.',
      icon: Handshake,
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'IMPACT',
      description: 'Our work delivers measurable impact, driving innovation across industries.',
      icon: Zap,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Philosophy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three core principles that drive everything we do
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {philosophies.map((philosophy, index) => (
            <div 
              key={philosophy.title}
              className="group relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full">
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${philosophy.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <philosophy.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors duration-300">
                    {philosophy.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {philosophy.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {philosophy.description}
                </p>

                {/* Decorative line */}
                <div className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${philosophy.color} group-hover:w-20 transition-all duration-500`}></div>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${philosophy.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;