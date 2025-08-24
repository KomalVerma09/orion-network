import React, { useState, useEffect } from 'react';
import { Shield, TrendingUp, Users, Lock, Zap, ArrowRight } from 'lucide-react';

const TokenMechanics = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [revealedText, setRevealedText] = useState('');
  const [showMechanics, setShowMechanics] = useState(false);

  const secretText = "IMPOSSIBLE TO LOSE";

  const mechanics = [
    {
      icon: Shield,
      title: 'ANTI-DUMP PROTOCOL',
      description: 'Revolutionary smart contract prevents any price decrease',
      detail: 'Our proprietary algorithm automatically triggers buybacks whenever selling pressure increases, creating an unbreakable price floor that only moves upward.',
      color: 'blue',
      percentage: 100
    },
    {
      icon: TrendingUp,
      title: 'DEFLATIONARY BURNS',
      description: 'Automatic token burns reduce supply while demand grows',
      detail: 'Every transaction burns 0.5% of tokens permanently. With growing adoption, supply decreases while demand explodes - basic economics guarantees price appreciation.',
      color: 'indigo',
      percentage: 85
    },
    {
      icon: Users,
      title: 'COMMUNITY GOVERNANCE',
      description: 'Token holders vote to ensure only growth-positive decisions',
      detail: 'Democratic governance ensures every protocol change benefits token holders. The community has the power to reject any proposal that could harm token value.',
      color: 'purple',
      percentage: 95
    },
    {
      icon: Lock,
      title: 'LIQUIDITY LOCK',
      description: 'Permanent liquidity lock prevents rug pulls forever',
      detail: 'All liquidity is permanently locked in unbreakable smart contracts. No team, no individual, no entity can ever remove liquidity or crash the price.',
      color: 'cyan',
      percentage: 100
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Decrypt animation effect
          const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
          let iterations = 0;
          
          const decryptTimer = setInterval(() => {
            setRevealedText(secretText.split('').map((char, index) => {
              if (index < iterations) {
                return secretText[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            }).join(''));
            
            if (iterations >= secretText.length) {
              clearInterval(decryptTimer);
              setTimeout(() => setShowMechanics(true), 800);
            }
            
            iterations += 1/3;
          }, 50);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('token-mechanics');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % mechanics.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="token-mechanics" className="py-20 px-6 relative overflow-hidden bg-[url('https://raw.githubusercontent.com/inquisitiveScholar/images/refs/heads/main/img-3.png')] bg-cover bg-center bg-no-repeat">
      {/* Animated Background */}
      <div className="absolute inset-0"> 
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6 transition-all duration-1000 ${
            showMechanics ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <Zap className="w-4 h-4 mr-2" />
            REVOLUTIONARY TOKENOMICS
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-white font-mono">{revealedText}</span>
            <br />
            <span className={`bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent transition-all duration-1000 delay-500 ${
              showMechanics ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              GUARANTEED GAINS
            </span>
          </h2>
          
          <p className={`text-xl text-gray-300 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
            showMechanics ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Four unbreakable mechanisms ensure your investment only grows. 
            <span className="text-blue-400 font-bold"> Mathematical certainty meets financial innovation.</span>
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-1000 ${
          showMechanics ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Interactive Mechanics List */}
          <div className="space-y-6">
            {mechanics.map((mechanic, index) => {
              const IconComponent = mechanic.icon;
              const isActive = activeStep === index;
              
              return (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 ${
                    isActive ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
                    isActive
                      ? `bg-${mechanic.color}-500/10 border-${mechanic.color}-500/50 shadow-2xl shadow-${mechanic.color}-500/25`
                      : 'bg-white/2 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 ${
                        isActive
                          ? `bg-${mechanic.color}-500 shadow-lg shadow-${mechanic.color}-500/50 rotate-6`
                          : `bg-${mechanic.color}-500/20 group-hover:rotate-3`
                      }`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${
                          isActive ? `text-${mechanic.color}-400` : 'text-white'
                        }`}>
                          {mechanic.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{mechanic.description}</p>
                      </div>
                      
                      <div className={`text-2xl font-black transition-all duration-300 ${
                        isActive ? `text-${mechanic.color}-400 scale-110` : 'text-gray-500'
                      }`}>
                        {mechanic.percentage}%
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-${mechanic.color}-500 to-${mechanic.color}-400 transition-all duration-1000 ease-out`}
                        style={{ 
                          width: isActive ? `${mechanic.percentage}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detail Panel */}
          <div className="relative">
            <div className={`bg-gradient-to-br from-${mechanics[activeStep].color}-500/10 to-${mechanics[activeStep].color}-500/5 backdrop-blur-sm rounded-3xl p-8 border border-${mechanics[activeStep].color}-500/30 min-h-[500px] transition-all duration-500 ${
              isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
            }`}>
              {/* Header */}
              <div className="flex items-center mb-8">
                {React.createElement(mechanics[activeStep].icon, {
                  className: `w-12 h-12 text-${mechanics[activeStep].color}-400 mr-4`
                })}
                <h3 className="text-3xl font-bold text-white">
                  {mechanics[activeStep].title}
                </h3>
              </div>
              
              {/* Detail Content */}
              <p className="text-gray-200 text-lg leading-relaxed mb-8">
                {mechanics[activeStep].detail}
              </p>

              {/* Visual Indicator */}
              <div className="relative mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Security Level</span>
                  <span className={`text-2xl font-bold text-${mechanics[activeStep].color}-400`}>
                    {mechanics[activeStep].percentage}%
                  </span>
                </div>
                
                <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-${mechanics[activeStep].color}-500 to-${mechanics[activeStep].color}-400 transition-all duration-1000 ease-out relative`}
                    style={{ width: `${mechanics[activeStep].percentage}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Step Indicator */}
              <div className="flex space-x-2 mb-6">
                {mechanics.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeStep
                        ? `bg-${mechanics[activeStep].color}-500 w-12`
                        : 'bg-gray-600 w-8'
                    }`}
                  />
                ))}
              </div>

              {/* CTA */}
              <button className={`w-full bg-gradient-to-r from-${mechanics[activeStep].color}-500 to-${mechanics[activeStep].color}-600 text-white py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-${mechanics[activeStep].color}-500/50 group`}>
                <span className="flex items-center justify-center">
                  EXPERIENCE THIS POWER
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>

              {/* Floating Elements */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 bg-${mechanics[activeStep].color}-500/20 rounded-full blur-xl animate-pulse`} />
              <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-${mechanics[activeStep].color}-500/20 rounded-full blur-xl animate-pulse delay-1000`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenMechanics;