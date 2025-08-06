import React from 'react';
import { ArrowRight, Cloud, Network, Brain, Handshake, Cpu } from 'lucide-react';

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

  // Floating icons configuration
  const floatingIcons = [
    {
      Icon: Cpu,
      position: { top: '10%', left: '8%' },
      color: 'blue',
      animation: 'float-1',
      size: 'clamp(4vw, 6vw, 8vw)',
      delay: '0s'
    },
    {
      Icon: Brain,
      position: { top: '25%', left: '15%' },
      color: 'purple',
      animation: 'float-2',
      size: 'clamp(3.5vw, 5vw, 7vw)',
      delay: '1s'
    },
    {
      Icon: Cloud,
      position: { top: '15%', right: '10%' },
      color: 'cyan',
      animation: 'float-3',
      size: 'clamp(4vw, 6vw, 8vw)',
      delay: '2s'
    },
    {
      Icon: Network,
      position: { top: '35%', right: '8%' },
      color: 'indigo',
      animation: 'float-4',
      size: 'clamp(3.5vw, 5vw, 7vw)',
      delay: '0.5s'
    },
    {
      Icon: Handshake,
      position: { bottom: '25%', left: '12%' },
      color: 'emerald',
      animation: 'float-5',
      size: 'clamp(3.5vw, 5vw, 7vw)',
      delay: '1.5s'
    },
    {
      Icon: Cpu,
      position: { bottom: '15%', right: '15%' },
      color: 'rose',
      animation: 'float-6',
      size: 'clamp(3vw, 4.5vw, 6vw)',
      delay: '2.5s'
    },
    {
      Icon: Brain,
      position: { top: '45%', left: '5%' },
      color: 'amber',
      animation: 'float-7',
      size: 'clamp(3vw, 4.5vw, 6vw)',
      delay: '3s'
    },
    {
      Icon: Network,
      position: { bottom: '35%', right: '5%' },
      color: 'teal',
      animation: 'float-8',
      size: 'clamp(3vw, 4.5vw, 6vw)',
      delay: '0.8s'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { border: 'border-blue-500/60', bg: 'bg-white/80', text: 'text-blue-600', shadow: 'shadow-blue-500/25' },
      purple: { border: 'border-purple-500/60', bg: 'bg-white/80', text: 'text-purple-600', shadow: 'shadow-purple-500/25' },
      cyan: { border: 'border-cyan-500/60', bg: 'bg-white/80', text: 'text-cyan-600', shadow: 'shadow-cyan-500/25' },
      indigo: { border: 'border-indigo-500/60', bg: 'bg-white/80', text: 'text-indigo-600', shadow: 'shadow-indigo-500/25' },
      emerald: { border: 'border-emerald-500/60', bg: 'bg-white/80', text: 'text-emerald-600', shadow: 'shadow-emerald-500/25' },
      rose: { border: 'border-rose-500/60', bg: 'bg-white/80', text: 'text-rose-600', shadow: 'shadow-rose-500/25' },
      amber: { border: 'border-amber-500/60', bg: 'bg-white/80', text: 'text-amber-600', shadow: 'shadow-amber-500/25' },
      teal: { border: 'border-teal-500/60', bg: 'bg-white/80', text: 'text-teal-600', shadow: 'shadow-teal-500/25' }
    };
    return colorMap[color] || colorMap.blue;
  };

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
              width: `clamp(0.8vw, 1.2vw, 1.5vw)`,
              height: `clamp(0.8vw, 1.2vw, 1.5vw)`,
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

        {/* Floating Icons */}
        {floatingIcons.map((iconConfig, index) => {
          const { Icon, position, color, animation, size, delay } = iconConfig;
          const colorClasses = getColorClasses(color);
          
          return (
            <div
              key={index}
              className={`absolute border-2 ${colorClasses.border} ${colorClasses.bg} backdrop-blur-sm rounded-xl shadow-lg ${colorClasses.shadow} animate-${animation}`}
              style={{
                ...position,
                width: size,
                height: size,
                animationDelay: delay,
              }}
            >
              <Icon className={`w-full h-full p-[0.8vw] ${colorClasses.text}`} />
            </div>
          );
        })}
      </div>

      {/* Main Content (Responsive) */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 text-sm font-semibold shadow-lg sm:px-5 sm:py-2.5 sm:text-base">
            <Cloud className="w-4 h-4 mr-2 sm:w-5 sm:h-5 sm:mr-2.5" />
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

        /* Floating animations for icons */
        @keyframes float-1 {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
            box-shadow: 0 0 clamp(10px, 2vw, 20px) rgba(59, 130, 246, 0.2);
          }
          25% { 
            transform: translateY(clamp(-15px, -2vw, -25px)) translateX(clamp(10px, 1.5vw, 20px)) rotate(90deg) scale(1.1);
            box-shadow: 0 0 clamp(15px, 3vw, 30px) rgba(59, 130, 246, 0.4);
          }
          50% { 
            transform: translateY(clamp(-10px, -1.5vw, -15px)) translateX(clamp(20px, 3vw, 35px)) rotate(180deg) scale(1);
            box-shadow: 0 0 clamp(20px, 4vw, 40px) rgba(59, 130, 246, 0.3);
          }
          75% { 
            transform: translateY(clamp(5px, 1vw, 10px)) translateX(clamp(10px, 1.5vw, 20px)) rotate(270deg) scale(1.05);
            box-shadow: 0 0 clamp(12px, 2.5vw, 25px) rgba(59, 130, 246, 0.35);
          }
        }

        @keyframes float-2 {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
            box-shadow: 0 0 clamp(10px, 2vw, 20px) rgba(147, 51, 234, 0.2);
          }
          33% { 
            transform: translateY(clamp(15px, 2.5vw, 30px)) translateX(clamp(-10px, -1.5vw, -20px)) rotate(120deg) scale(1.15);
            box-shadow: 0 0 clamp(18px, 3.5vw, 35px) rgba(147, 51, 234, 0.4);
          }
          66% { 
            transform: translateY(clamp(-20px, -3vw, -35px)) translateX(clamp(-15px, -2vw, -25px)) rotate(240deg) scale(0.95);
            box-shadow: 0 0 clamp(15px, 3vw, 30px) rgba(147, 51, 234, 0.3);
          }
        }

        @keyframes float-3 {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
            box-shadow: 0 0 clamp(10px, 2vw, 20px) rgba(6, 182, 212, 0.2);
          }
          50% { 
            transform: translateY(clamp(-25px, -4vw, -40px)) translateX(clamp(-20px, -3vw, -35px)) rotate(180deg) scale(1.2);
            box-shadow: 0 0 clamp(25px, 5vw, 50px) rgba(6, 182, 212, 0.5);
          }
        }

        @keyframes float-4 {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
            box-shadow: 0 0 clamp(10px, 2vw, 20px) rgba(99, 102, 241, 0.2);
          }
          25% { 
            transform: translateY(clamp(10px, 1.5vw, 20px)) translateX(clamp(-15px, -2vw, -25px)) rotate(-90deg) scale(1.1);
            box-shadow: 0 0 clamp(15px, 3vw, 30px) rgba(99, 102, 241, 0.4);
          }
          75% { 
            transform: translateY(clamp(-15px, -2.5vw, -30px)) translateX(clamp(10px, 1.5vw, 20px)) rotate(-270deg) scale(0.9);
            box-shadow: 0 0 clamp(12px, 2.5vw, 25px) rgba(99, 102, 241, 0.35);
          }
        }

        @keyframes float-5 {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
            box-shadow: 0 0 clamp(10px, 2vw, 20px) rgba(16, 185, 129, 0.2);
          }
          40% { 
            transform: translateY(clamp(-18px, -3vw, -30px)) translateX(clamp(12px, 2vw, 25px)) rotate(144deg) scale(1.08);
            box-shadow: 0 0 clamp(18px, 3.5vw, 35px) rgba(16, 185, 129, 0.4);
          }
          80% { 
            transform: translateY(clamp(8px, 1.2vw, 15px)) translateX(clamp(-8px, -1.2vw, -15px)) rotate(288deg) scale(1.12);
            box-shadow: 0 0 clamp(20px, 4vw, 40px) rgba(16, 185, 129, 0.3);
          }
        }

        @keyframes float-6 {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
            box-shadow: 0 0 clamp(10px, 2vw, 20px) rgba(244, 63, 94, 0.2);
          }
          30% { 
            transform: translateY(clamp(12px, 2vw, 25px)) translateX(clamp(-18px, -3vw, -30px)) rotate(-108deg) scale(1.15);
            box-shadow: 0 0 clamp(22px, 4.5vw, 45px) rgba(244, 63, 94, 0.45);
          }
          70% { 
            transform: translateY(clamp(-22px, -3.5vw, -40px)) translateX(clamp(15px, 2.5vw, 30px)) rotate(-216deg) scale(0.85);
            box-shadow: 0 0 clamp(15px, 3vw, 30px) rgba(244, 63, 94, 0.3);
          }
        }

        @keyframes float-7 {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
            box-shadow: 0 0 clamp(10px, 2vw, 20px) rgba(245, 158, 11, 0.2);
          }
          60% { 
            transform: translateY(clamp(-12px, -2vw, -20px)) translateX(clamp(20px, 3.5vw, 40px)) rotate(216deg) scale(1.25);
            box-shadow: 0 0 clamp(25px, 5vw, 50px) rgba(245, 158, 11, 0.5);
          }
        }

        @keyframes float-8 {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
            box-shadow: 0 0 clamp(10px, 2vw, 20px) rgba(20, 184, 166, 0.2);
          }
          45% { 
            transform: translateY(clamp(20px, 3.5vw, 35px)) translateX(clamp(-25px, -4vw, -45px)) rotate(-162deg) scale(1.18);
            box-shadow: 0 0 clamp(20px, 4vw, 40px) rgba(20, 184, 166, 0.4);
          }
          85% { 
            transform: translateY(clamp(-8px, -1.2vw, -15px)) translateX(clamp(8px, 1.2vw, 15px)) rotate(-324deg) scale(0.92);
            box-shadow: 0 0 clamp(12px, 2.5vw, 25px) rgba(20, 184, 166, 0.35);
          }
        }

        .animate-pulse-circuit { animation: pulse-circuit 2.5s infinite; }
        .animate-circuit-flow { animation: circuit-flow 10s linear infinite; }
        .animate-circuit-flow-2 { animation: circuit-flow-2 12s linear infinite; }
        .animate-fade-in-up { animation: fade-in-up 1.5s ease-out forwards; }
        
        .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 10s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 7s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 9s ease-in-out infinite; }
        .animate-float-5 { animation: float-5 11s ease-in-out infinite; }
        .animate-float-6 { animation: float-6 6s ease-in-out infinite; }
        .animate-float-7 { animation: float-7 12s ease-in-out infinite; }
        .animate-float-8 { animation: float-8 8.5s ease-in-out infinite; }

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
