import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const leftImages = [
    {
      src: "https://images.unsplash.com/photo-1551703616-e5a729ff0185?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxlbWJlZGRlZCUyMHN5c3RlbXN8ZW58MHx8fHwxNzUzMDkwMjQ0fDA&ixlib=rb-4.1.0&q=85&w=400&h=400",
      alt: "Rock64 Embedded Computer",
      position: "top-[30%] left-8",
      size: "w-56 h-56",
      animation: "animate-float-magic"
    },
    {
      src: "https://images.unsplash.com/photo-1650530415027-dc9199f473ec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxlbWJlZGRlZCUyMHN5c3RlbXN8ZW58MHx8fHwxNzUzMDkwMjQ0fDA&ixlib=rb-4.1.0&q=85&w=400&h=400",
      alt: "Professional Engineering Workbench",
      position: "bottom-[70%] left-12",
      size: "w-48 h-48",
      animation: "animate-float-magic-delayed"
    }
  ];

  const rightImages = [
    {
      src: "https://images.unsplash.com/photo-1610878785620-3ab2d3a2ae7b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxlbWJlZGRlZCUyMHN5c3RlbXN8ZW58MHx8fHwxNzUzMDkwMjQ0fDA&ixlib=rb-4.1.0&q=85&w=400&h=400",
      alt: "STM32F0 Discovery Microcontroller",
      position: "top-[30%] right-8",
      size: "w-52 h-52",
      animation: "animate-float-magic-slow"
    },
    {
      src: "https://images.unsplash.com/photo-1615146198235-769c1c3d3ae4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxJb1QlMjBkZXZpY2VzfGVufDB8fHx8MTc1MzA5NTQzOXww&ixlib=rb-4.1.0&q=85&w=400&h=400",
      alt: "Modern IoT Edge Device",
      position: "bottom-[30%] right-12",
      size: "w-44 h-44",
      animation: "animate-float-magic-delayed-2"
    }
  ];

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Enhanced Dot Background */}
      <div className="absolute inset-0 professional-dots-background opacity-30"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-indigo-50/30"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/15 rounded-full blur-3xl animate-pulse-gentle"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-100/15 to-indigo-100/20 rounded-full blur-3xl animate-pulse-gentle animation-delay-2000"></div>

      {/* Mouse Follower */}
      <div 
        className="absolute pointer-events-none z-10 w-32 h-32 bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full blur-xl transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
        }}
      ></div>

      {/* Left Images Container */}
      <div className="absolute left-0 w-1/4 h-full flex flex-col justify-between py-20">
        {leftImages.map((image, index) => (
          <div
            key={`left-${index}`}
            className={`relative ${image.size} ${image.animation} mx-auto`}
            style={{
              marginTop: index === 0 ? '10%' : '0',
              marginBottom: index === 1 ? '10%' : '0'
            }}
          >
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 rounded-3xl blur-xl animate-pulse-magic group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white rounded-3xl p-3 shadow-2xl border-2 border-gray-200/50 group-hover:border-blue-300/50 group-hover:shadow-3xl transition-all duration-700 hover:scale-110 transform-gpu">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-2xl"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Images Container */}
      <div className="absolute right-0 w-1/4 h-full flex flex-col justify-between py-20">
        {rightImages.map((image, index) => (
          <div
            key={`right-${index}`}
            className={`relative ${image.size} ${image.animation} mx-auto`}
            style={{
              marginTop: index === 0 ? '10%' : '0',
              marginBottom: index === 1 ? '10%' : '0'
            }}
          >
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 rounded-3xl blur-xl animate-pulse-magic group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white rounded-3xl p-3 shadow-2xl border-2 border-gray-200/50 group-hover:border-blue-300/50 group-hover:shadow-3xl transition-all duration-700 hover:scale-110 transform-gpu">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-2xl"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up-magical">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
              Better Solutions
            </h1>
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight tracking-tight">
              For Your Business
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            We help companies build smart, secure, and scalable embedded communication solutions.
          </p>

          <div className="pt-6">
            <Button 
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .professional-dots-background {
          background-image: radial-gradient(#4f46e5 1.5px, transparent 1.5px);
          background-size: 25px 25px;
        }
        @keyframes float-magic {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes float-magic-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        @keyframes float-magic-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(3deg); }
        }
        @keyframes float-magic-delayed-2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(-3deg); }
        }
        .animate-float-magic {
          animation: float-magic 6s ease-in-out infinite;
        }
        .animate-float-magic-delayed {
          animation: float-magic-delayed 7s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-magic-slow {
          animation: float-magic-slow 8s ease-in-out infinite;
        }
        .animate-float-magic-delayed-2 {
          animation: float-magic-delayed-2 6.5s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        @keyframes fade-in-up-magical {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up-magical {
          animation: fade-in-up-magical 1s ease-out forwards;
        }
        @keyframes shine {
          0% { background-position: -100%; }
          100% { background-position: 100%; }
        }
        .animate-shine {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% 100%;
          animation: shine 1.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;