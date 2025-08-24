import React, { useState } from 'react';
import { Wallet, ArrowRight, TrendingUp, Coins } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Wallet,
      title: 'Connect Wallet',
      description: 'Link your Web3 wallet to access the lending platform',
      detail: 'Connect your MetaMask, WalletConnect, or any Web3 wallet to get started. Your wallet remains secure and non-custodial throughout the process.'
    },
    {
      icon: Coins,
      title: 'Deposit Assets',
      description: 'Choose from supported cryptocurrencies to deposit',
      detail: 'Deposit ETH, USDC, DAI, or other supported assets into our secure smart contracts. Your deposits are immediately available for lending.'
    },
    {
      icon: TrendingUp,
      title: 'Earn Rewards',
      description: 'Start earning competitive yields on your deposits',
      detail: 'Your assets are automatically matched with borrowers through our algorithmic system. Earn interest plus governance tokens as rewards.'
    },
    {
      icon: ArrowRight,
      title: 'Withdraw Anytime',
      description: 'Access your funds plus earned interest whenever needed',
      detail: 'Withdraw your principal and earned interest at any time. No lock-up periods or penalties - your money, your choice.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent to-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get started with decentralized lending in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps Navigation */}
          <div className="space-y-4">
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
                  <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-400/50 shadow-lg shadow-blue-500/10'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}>
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 ${
                        activeStep === index
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                          : 'bg-gray-700'
                      }`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {step.description}
                        </p>
                      </div>
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        activeStep === index
                          ? 'border-blue-400 bg-blue-400'
                          : 'border-gray-600'
                      }`}>
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeStep === index ? 'bg-white' : 'bg-transparent'
                        }`} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detail Panel */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 min-h-[400px] flex flex-col justify-center">
              <div className="flex items-center mb-6">
                {React.createElement(steps[activeStep].icon, {
                  className: 'w-12 h-12 text-blue-400 mr-4'
                })}
                <h3 className="text-2xl font-bold text-white">
                  {steps[activeStep].title}
                </h3>
              </div>
              
              <p className="text-gray-200 text-lg leading-relaxed mb-8">
                {steps[activeStep].detail}
              </p>

              {/* Progress Indicator */}
              <div className="flex space-x-2 mb-4">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeStep
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-12'
                        : 'bg-gray-600 w-8'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400">
                Step {activeStep + 1} of {steps.length}
              </p>

              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;