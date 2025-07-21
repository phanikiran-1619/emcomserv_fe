import React from 'react';
import { TrendingUp, Award, Network, Zap } from 'lucide-react';

const WhyEmComSection = () => {
  const stats = [
    {
      percentage: '100%',
      title: 'Expertise in Embedded Systems',
      description: 'Complete mastery of embedded system development',
      icon: Award,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      percentage: '95%',
      title: 'Cloud & Embedded Integration',
      description: 'Seamless integration between cloud and embedded systems',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500'
    },
    {
      percentage: '95%',
      title: 'COM & Ethernet Protocols',
      description: 'Advanced communication protocol implementations',
      icon: Network,
      color: 'from-green-500 to-emerald-500'
    },
    {
      percentage: '95%',
      title: 'Communication Channel Optimization',
      description: 'Optimized performance across all communication channels',
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
            Why EmCom?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our track record speaks for itself
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.title}
              className="group text-center hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Percentage */}
                <div className="text-5xl font-bold text-gray-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.percentage}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {stat.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative line */}
                <div className={`mt-6 h-1 w-12 mx-auto rounded-full bg-gradient-to-r ${stat.color} group-hover:w-20 transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the EmCom Difference?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the companies that trust us to deliver exceptional embedded solutions with proven results.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEmComSection;