import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap, Cpu, Wifi } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Circuit board nodes for animation
  const circuitNodes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 3,
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background Circuit */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="circuit-grid"></div>
        </div>

        {/* Floating Circuit Nodes */}
        {circuitNodes.map((node) => (
          <div
            key={node.id}
            className="absolute w-2 h-2 bg-blue-500 rounded-full animate-pulse-circuit"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              animationDelay: `${node.delay}s`,
              animationDuration: `${node.duration}s`,
            }}
          >
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-30"></div>
          </div>
        ))}

        {/* Animated Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10 L90 10 L90 90 L10 90 Z" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.4"/>
            </pattern>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
            </linearGradient>
          </defs>
          
          <path 
            className="animate-circuit-flow" 
            d="M0,200 Q400,200 800,400 T1600,300" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            fill="none"
            strokeDasharray="20,10"
          />
          <path 
            className="animate-circuit-flow-2" 
            d="M0,600 Q300,400 600,600 T1200,500" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            fill="none"
            strokeDasharray="15,15"
          />
        </svg>

        {/* Electronic Components (Responsive) */}
        <div className="absolute top-6 left-6 w-12 h-12 border-2 border-blue-500/60 bg-white/80 backdrop-blur-sm rounded-xl animate-glow-pulse shadow-lg md:top-20 md:left-20 md:w-16 md:h-16">
          <Cpu className="w-full h-full p-1 md:p-2 text-blue-600" />
        </div>
        <div className="absolute top-16 right-8 w-10 h-10 border-2 border-purple-500/60 bg-white/80 backdrop-blur-sm rounded-full animate-spin-slow shadow-lg md:top-40 md:right-32 md:w-14 md:h-14">
          <Zap className="w-full h-full p-1 md:p-2 text-purple-600" />
        </div>
        <div className="absolute bottom-8 left-10 w-10 h-10 border-2 border-cyan-500/60 bg-white/80 backdrop-blur-sm rounded-xl animate-bounce-slow shadow-lg md:bottom-32 md:left-40 md:w-12 md:h-12">
          <Wifi className="w-full h-full p-1 md:p-1 text-cyan-600" />
        </div>
        <div className="absolute bottom-6 right-6 w-10 h-10 border-2 border-indigo-500/60 bg-white/80 backdrop-blur-sm rounded-lg animate-float-shape shadow-lg md:bottom-20 md:right-20 md:w-14 md:h-14">
          <div className="w-6 h-6 border-2 border-indigo-600 rounded-sm m-1 md:m-2"></div>
        </div>
      </div>

      {/* Main Content (Responsive) */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 text-sm font-semibold shadow-lg md:px-6 md:py-3">
            <Zap className="w-3 h-3 mr-1 md:w-4 md:h-4 md:mr-2" />
            Emcomserv Pvt Lmt
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Innovative Solutions
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight tracking-tight">
              For Your Business
            </h2>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Empowering companies with smart, secure, and scalable embedded communication solutions.
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-gray-500">
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-200/50 shadow-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm md:text-base font-medium">Smart Integration</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-200/50 shadow-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm md:text-base font-medium">Secure Protocols</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-200/50 shadow-sm">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-sm md:text-base font-medium">Scalable Architecture</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button 
              onClick={scrollToAbout}
              className="group relative inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-3xl shadow-blue-500/25 border border-white/20"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .circuit-grid {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px);
          background-size: 60px 60px;
          width: 100%;
          height: 100%;
          animation: grid-move 25s linear infinite;
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }

        @keyframes pulse-circuit {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.8); }
        }

        @keyframes circuit-flow {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: -100; }
        }

        @keyframes circuit-flow-2 {
          0% { stroke-dashoffset: -100; }
          100% { stroke-dashoffset: 100; }
        }

        @keyframes glow-pulse {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.1);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2);
            transform: scale(1.05);
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes float-shape {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }

        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        .animate-pulse-circuit { animation: pulse-circuit 2.5s infinite; }
        .animate-circuit-flow { animation: circuit-flow 10s linear infinite; }
        .animate-circuit-flow-2 { animation: circuit-flow-2 12s linear infinite; }
        .animate-glow-pulse { animation: glow-pulse 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 5s ease-in-out infinite; }
        .animate-float-shape { animation: float-shape 12s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1.5s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Hero;
