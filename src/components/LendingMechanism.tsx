import React, { useState } from 'react';
import { ArrowRight, DollarSign, TrendingUp, Users, Shield } from 'lucide-react';

const LendingMechanism = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: DollarSign,
      title: 'Deposit Assets',
      description: 'Deposit your crypto assets into Orion\'s secure lending pools',
      detail: 'Connect your wallet and deposit supported cryptocurrencies into our battle-tested smart contracts. Your assets are protected by multi-signature security and insurance protocols.'
    },
    {
      icon: Users,
      title: 'Community Matching',
      description: 'Our AI matches your funds with verified borrowers',
      detail: 'Advanced algorithms and community governance ensure optimal matching between lenders and borrowers, maximizing returns while minimizing risk through decentralized credit scoring.'
    },
    {
      icon: TrendingUp,
      title: 'Earn Rewards',
      description: 'Receive lending rewards plus Orion token incentives',
      detail: 'Earn competitive interest rates on your deposits plus additional Orion tokens as governance rewards. All earnings compound automatically to maximize your wealth growth.'
    },
    {
      icon: Shield,
      title: 'Secure Returns',
      description: 'Withdraw anytime with guaranteed capital protection',
      detail: 'Our insurance fund and overcollateralization mechanisms ensure your principal is protected. Withdraw your funds anytime with accrued interest and token rewards.'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            How{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Lending
            </span>{' '}
            Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through space-age lending mechanisms designed for maximum returns and minimal risk
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-300 ${
                    activeStep === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-400 shadow-lg shadow-purple-500/25'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 ${
                        activeStep === index
                          ? 'bg-gradient-to-r from-purple-500 to-cyan-500'
                          : 'bg-gray-700'
                      }`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {step.title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {step.description}
                        </p>
                      </div>
                      <ArrowRight className={`w-5 h-5 ml-auto transition-all duration-300 ${
                        activeStep === index ? 'text-cyan-400 translate-x-1' : 'text-gray-500'
                      }`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detail Panel */}
          <div className="relative">
            <div className="backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 min-h-[400px]">
              <div className="flex items-center mb-6">
                {React.createElement(steps[activeStep].icon, {
                  className: 'w-12 h-12 text-cyan-400 mr-4'
                })}
                <h3 className="text-2xl font-bold text-white">
                  {steps[activeStep].title}
                </h3>
              </div>
              
              <p className="text-gray-200 text-lg leading-relaxed mb-8">
                {steps[activeStep].detail}
              </p>

              {/* Visual Indicator */}
              <div className="relative">
                <div className="flex space-x-2 mb-4">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeStep
                          ? 'bg-gradient-to-r from-purple-500 to-cyan-500 w-12'
                          : 'bg-gray-600 w-8'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-400">
                  Step {activeStep + 1} of {steps.length}
                </p>
              </div>

              {/* Cosmic Animation */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LendingMechanism;