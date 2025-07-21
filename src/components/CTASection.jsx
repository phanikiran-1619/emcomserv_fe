import React from 'react';
import { ArrowRight, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-white/10 backdrop-blur-lg rounded-2xl">
            <Target className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Looking to scale your product or improve your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              embedded architecture?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            🎯 Let's Collaborate
          </p>

          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Our team is here to support your goals with reliable and innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <Link
              to="/contact"
              className="group bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center"
            >
              Contact Us Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <button className="group bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center">
              Schedule Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 border-t border-white/20">
            <p className="text-blue-200 mb-4">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center space-x-8">
              {['Embedded Solutions', 'IoT Integration', 'Cloud Connectivity', 'AI/ML Systems'].map((tech) => (
                <div key={tech} className="text-white/70 font-medium">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;