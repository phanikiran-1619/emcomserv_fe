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
            className="absolute bg-blue-500 rounded-full animate-pulse-circuit"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `clamp(0.5vw, 0.75vw, 1vw)`,
              height: `clamp(0.5vw, 0.75vw, 1vw)`,
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
        <div className="absolute top-[5vw] left-[5vw] border-2 border-blue-500/60 bg-white/80 backdrop-blur-sm rounded-xl animate-glow-pulse shadow-lg"
             style={{ width: `clamp(3vw, 4vw, 5vw)`, height: `clamp(3vw, 4vw, 5vw)` }}>
          <Cpu className="w-full h-full p-[0.5vw] text-blue-600" />
        </div>
        <div className="absolute top-[10vw] right-[5vw] border-2 border-purple-500/60 bg-white/80 backdrop-blur-sm rounded-full animate-spin-slow shadow-lg"
             style={{ width: `clamp(2.5vw, 3.5vw, 4.5vw)`, height: `clamp(2.5vw, 3.5vw, 4.5vw)` }}>
          <Zap className="w-full h-full p-[0.5vw] text-purple-600" />
        </div>
        <div className="absolute bottom-[5vw] left-[5vw] border-2 border-cyan-500/60 bg-white/80 backdrop-blur-sm rounded-xl animate-bounce-slow shadow-lg"
             style={{ width: `clamp(2.5vw, 3.5vw, 4.5vw)`, height: `clamp(2.5vw, 3.5vw, 4.5vw)` }}>
          <Wifi className="w-full h-full p-[0.5vw] text-cyan-600" />
        </div>
        <div className="absolute bottom-[5vw] right-[5vw] border-2 border-indigo-500/60 bg-white/80 backdrop-blur-sm rounded-lg animate-float-shape shadow-lg"
             style={{ width: `clamp(2.5vw, 3.5vw, 4.5vw)`, height: `clamp(2.5vw, 3.5vw, 4.5vw)` }}>
          <div className="border-2 border-indigo-600 rounded-sm m-[0.5vw]"
               style={{ width: `clamp(1.5vw, 2vw, 2.5vw)`, height: `clamp(1.5vw, 2vw, 2.5vw)` }}></div>
        </div>
      </div>

      {/* Main Content (Responsive) */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 text-sm font-semibold shadow-lg sm:px-5 sm:py-2.5 sm:text-base">
            <Zap className="w-4 h-4 mr-2 sm:w-5 sm:h-5 sm:mr-2.5" />
            Emcomserv Pvt Lmt
          </div>

          {/* Main Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Innovative Solutions
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight tracking-tight">
              For Your Business
            </h2>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed px-2 sm:px-4">
            Empowering companies with smart, secure, and scalable embedded communication solutions.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button 
              onClick={scrollToAbout}
              className="group relative inline-flex items-center px-6 py-3 sm:px-7 sm:py-3.5 text-base sm:text-lg font-bold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-3xl shadow-blue-500/25 border border-white/20"
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
          background-size: clamp(40px, 5vw, 60px) clamp(40px, 5vw, 60px);
          width: 100%;
          height: 100%;
          animation: grid-move 25s linear infinite;
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(clamp(40px, 5vw, 60px), clamp(40px, 5vw, 60px)); }
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
            box-shadow: 0 0 clamp(10px, 2vw, 20px) rgba(59, 130, 246, 0.2), 0 0 clamp(20px, 4vw, 40px) rgba(59, 130, 246, 0.1);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 clamp(15px, 3vw, 30px) rgba(59, 130, 246, 0.4), 0 0 clamp(30px, 6vw, 60px) rgba(59, 130, 246, 0.2);
            transform: scale(1.05);
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(clamp(-8px, -1.5vw, -12px)); }
        }

        @keyframes float-shape {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(clamp(-20px, -3vw, -30px)) rotate(180deg); }
        }

        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(clamp(20px, 4vw, 40px)); 
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

        @media (max-width: 640px) {
          .circuit-grid {
            background-size: 30px 30px;
          }
          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(30px, 30px); }
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
