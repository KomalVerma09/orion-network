import React from 'react';
import { Rocket, Globe, Gem, Zap } from 'lucide-react';

const WhyOrion = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Guaranteed Growth',
      description: 'Revolutionary tokenomics ensure your investment only moves upward through community-driven mechanisms.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Community Power',
      description: 'True decentralization where token holders shape the future of the network through democratic governance.',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Gem,
      title: 'Wealth Creation',
      description: 'Multiple earning streams through lending, staking, and participating in the growing ecosystem.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Future of Finance',
      description: 'Next-generation DeFi protocols that transcend traditional financial limitations.',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Orion
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the revolutionary features that make Orion Network the ultimate destination for Web3 wealth creation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300 delay-100" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <span className="relative z-10">Experience the Revolution</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyOrion;