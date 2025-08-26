import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import CryptoStats from './components/CryptoStats';
import TokenMechanics from './components/TokenMechanics';
import EarningPotential from './components/EarningPotential';
import LiveTradingView from './components/LiveTradingView';
import CommunityPower from './components/CommunityPower';
import RoadmapTimeline from './components/RoadmapTimeline';
import SponsoredEvents from './components/SponsoredEvents';
import Footer from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden relative">
      {/* Interactive Dynamic Background */}
      <div 
        className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/15 via-indigo-900/15 to-black animate-gradient-shift -z-10"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      />
      
      {/* Interactive Grid that follows scroll */}
      <div className="fixed inset-0 opacity-20 -z-10" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
               linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
             `,
             backgroundSize: '60px 60px',
             transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
             animation: 'grid-move 30s linear infinite'
           }} />
      
      {/* Mouse-following particles */}
      <div className="fixed inset-0 -z-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full transition-all duration-1000 ${
              i % 4 === 0 ? 'w-2 h-2 bg-blue-400/40' :
              i % 4 === 1 ? 'w-3 h-3 bg-purple-400' :
              i % 4 === 2 ? 'w-1 h-1 bg-blue-300/30' :
              'w-4 h-4 bg-indigo-400/50'
            }`}
            style={{
              left: `${(mousePosition.x / window.innerWidth) * 100 + (i * 10)}%`,
              top: `${(mousePosition.y / window.innerHeight) * 100 + (i * 8)}%`,
              transform: `translate(${Math.sin(scrollY * 0.01 + i) * 20}px, ${Math.cos(scrollY * 0.01 + i) * 15}px)`
            }}
          />
        ))}
      </div>
      
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 -z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className={`absolute blur-xl transition-all duration-2000 ${
              i % 4 === 0 ? 'w-32 h-32 bg-blue-500/10 rounded-full' :
              i % 4 === 1 ? 'w-24 h-24 bg-purple-500/8 rounded-full' :
              i % 4 === 2 ? 'w-16 h-16 bg-cyan-500/12 transform rotate-45' :
              'w-20 h-20 bg-indigo-500/6 rounded-full'
            }`}
            style={{
              left: `${5 + (i * 15)}%`,
              top: `${10 + (i * 12)}%`,
              transform: `translate(${scrollY * (0.02 + i * 0.01)}px, ${Math.sin(scrollY * 0.005 + i) * 30}px) rotate(${scrollY * 0.1 + i * 45}deg)`
            }}
          />
        ))}
      </div>
      
      {/* Interactive crypto symbols */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {['₿', 'Ξ', '◊', '⟐', '◈'].map((symbol, i) => (
          <div
            key={`symbol-${i}`}
            className="absolute text-4xl font-bold text-blue-400/10 select-none transition-all duration-1000"
            style={{
              left: `${10 + (i * 18)}%`,
              top: `${15 + (i * 16)}%`,
              transform: `translate(${scrollY * 0.03}px, ${Math.sin(scrollY * 0.008 + i) * 25}px) rotate(${scrollY * 0.05 + i * 30}deg)`,
              opacity: Math.sin(scrollY * 0.01 + i) * 0.3 + 0.7
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Animated data streams */}
      <div className="fixed inset-0 -z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={`stream-${i}`}
            className="absolute w-px bg-gradient-to-b from-blue-400/20 via-blue-400/10 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              height: '200px',
              top: `${-100 + (scrollY * 0.5) % (window.innerHeight + 200)}px`,
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}
      </div>
      
      <Hero />
      <CryptoStats />
      <TokenMechanics />
      <EarningPotential />
      <LiveTradingView />
      <CommunityPower />
      <RoadmapTimeline />
      <SponsoredEvents />
      <Footer />
    </div>
  );
}

export default App;
