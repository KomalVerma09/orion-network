import React from 'react';
import { Shield, Zap, Users, TrendingUp, Lock, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure by Design',
      description: 'Multi-signature wallets and battle-tested smart contracts protect your assets.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Instant Liquidity',
      description: 'Access your funds anytime with our innovative liquidity pools.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Community Governed',
      description: 'Token holders vote on protocol upgrades and treasury decisions.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Optimized Yields',
      description: 'AI-powered strategies maximize returns while minimizing risk.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lock,
      title: 'Non-Custodial',
      description: 'You maintain full control of your private keys and assets.',
      gradient: 'from-red-500 to-rose-500'
    },
    {
      icon: Globe,
      title: 'Cross-Chain',
      description: 'Seamlessly operate across multiple blockchain networks.',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for the
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Modern DeFi Era
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience next-generation lending with features designed for security, efficiency, and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect indicator */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;