import React, { useEffect, useState } from 'react';
import { TrendingUp, Zap, DollarSign, ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [currentPrice, setCurrentPrice] = useState(2.47);
  const [priceChange, setPriceChange] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showElements, setShowElements] = useState(false);
  const [showUpAnimation, setShowUpAnimation] = useState(false);
  const [showMoneyRain, setShowMoneyRain] = useState(false);

  const fullText = "THE TOKEN THAT ONLY GOES UP";

  useEffect(() => {
    let index = 0;
    const typeTimer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeTimer);
        // Start UP animation after typewriter finishes
        setTimeout(() => {
          setShowUpAnimation(true);
          setTimeout(() => {
            setShowMoneyRain(true);
            setTimeout(() => setShowElements(true), 800);
          }, 1200);
        }, 300);
      }
    }, 100);

    return () => clearInterval(typeTimer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.3) * 0.1; // Bias towards positive
      setCurrentPrice(prev => Math.max(0.1, prev + change));
      setPriceChange(change);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[url('https://raw.githubusercontent.com/inquisitiveScholar/images/refs/heads/main/img-1.jpg')] bg-cover bg-top bg-no-repeat">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/20 rounded-full animate-spin-slow" />
        
        {/* Orbiting Elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="orbit">
            <div className="w-4 h-4 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />
          </div>
        </div>
        
        {/* Matrix Rain Effect */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`rain-${i}`}
            className="absolute w-px bg-gradient-to-b from-blue-400/40 via-blue-400/20 to-transparent matrix-rain"
            style={{
              left: `${i * 5}%`,
              height: '200px',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${12 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto p-6 text-center relative z-10">
        {/* Live Price Ticker */}
        <div className={`mb-8 inline-flex items-center px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm transition-all duration-1000 ${
          showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse mr-3" />
          <span className="text-blue-400 font-mono text-sm mr-4">ORION/USD</span>
          <span className={`text-2xl font-bold mr-2 transition-all duration-500 ${isAnimating ? 'scale-110' : ''}`}>
            ${currentPrice.toFixed(3)}
          </span>
          <span className={`text-sm font-medium ${priceChange >= 0 ? 'text-blue-400' : 'text-red-400'}`}>
            {priceChange >= 0 ? '+' : ''}{(priceChange * 100).toFixed(2)}%
          </span>
        </div>

        {/* Main Headline with Typewriter Effect */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight relative">
            {typedText.includes("THE TOKEN THAT ONLY GOES UP") ? (
              <>
                <span className="block text-white relative">
                  THE TOKEN
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent relative">
                  THAT ONLY
                </span>
                <span className="block text-white relative">
                  GOES{' '}
                  <span className={`inline-block font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent transform transition-all duration-1200 ease-out ${
                    showUpAnimation ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}
                  style={{
                    animation: showUpAnimation ? 'growUp 1.2s ease-out forwards' : 'none'
                  }}>
                    UP
                  </span>
                  
                  {/* Explosion Effect */}
                  {showUpAnimation && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full animate-ping" />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-orange-400/40 to-red-400/40 rounded-full animate-pulse" />
                    </div>
                  )}
                </span>
              </>
            ) : (
              <span className="block text-white relative">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            )}
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${
            showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Revolutionary tokenomics + Community governance = 
            <span className="text-blue-400 font-bold"> Guaranteed upward trajectory</span>
          </p>
        </div>

        {/* Interactive CTAs */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-1000 ${
          showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              <DollarSign className="mr-2 w-6 h-6" />
              START EARNING NOW
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
          
          <button className="group flex items-center justify-center px-8 py-4 border-2 border-blue-500/50 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-400">
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            WATCH MAGIC HAPPEN
          </button>
        </div>

        {/* Real-time Metrics */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-1200 ${
          showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="group p-6 bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-xl mb-4 mx-auto group-hover:rotate-12 transition-transform">
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-3xl font-black text-blue-400 mb-2 animate-pulse">∞%</div>
            <div className="text-gray-400">Growth Potential</div>
          </div>
          
          <div className="group p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/30 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-xl mb-4 mx-auto group-hover:rotate-12 transition-transform">
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
            <div className="text-3xl font-black text-purple-400 mb-2">$247M+</div>
            <div className="text-gray-400">Total Locked Value</div>
          </div>
          
          <div className="group p-6 bg-gradient-to-br from-indigo-500/10 to-cyan-500/5 border border-indigo-500/30 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-500/20 rounded-xl mb-4 mx-auto group-hover:rotate-12 transition-transform">
              <DollarSign className="w-8 h-8 text-indigo-400" />
            </div>
            <div className="text-3xl font-black text-indigo-400 mb-2">47K+</div>
            <div className="text-gray-400">Millionaires Made</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-blue-400 text-sm mb-2">Discover the Magic</span>
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;