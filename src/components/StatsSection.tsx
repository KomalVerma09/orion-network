import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, Users, Zap } from 'lucide-react';

const StatsSection = () => {
  const [animatedStats, setAnimatedStats] = useState({
    tvl: 0,
    apy: 0,
    users: 0,
    transactions: 0
  });

  const stats = [
    {
      icon: DollarSign,
      label: 'Total Value Locked',
      value: 125000000,
      displayValue: '$125M+',
      suffix: '',
      color: 'from-green-500 to-emerald-500',
      key: 'tvl'
    },
    {
      icon: TrendingUp,
      label: 'Average APY',
      value: 12.5,
      displayValue: '12.5%',
      suffix: '%',
      color: 'from-blue-500 to-cyan-500',
      key: 'apy'
    },
    {
      icon: Users,
      label: 'Active Users',
      value: 25000,
      displayValue: '25K+',
      suffix: '',
      color: 'from-purple-500 to-pink-500',
      key: 'users'
    },
    {
      icon: Zap,
      label: 'Transactions',
      value: 500000,
      displayValue: '500K+',
      suffix: '',
      color: 'from-yellow-500 to-orange-500',
      key: 'transactions'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        tvl: 125000000,
        apy: 12.5,
        users: 25000,
        transactions: 500000
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const formatNumber = (num: number, key: string) => {
    if (key === 'tvl') {
      return `$${(num / 1000000).toFixed(0)}M+`;
    } else if (key === 'apy') {
      return `${num}%`;
    } else if (key === 'users') {
      return `${(num / 1000).toFixed(0)}K+`;
    } else if (key === 'transactions') {
      return `${(num / 1000).toFixed(0)}K+`;
    }
    return num.toString();
  };

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Platform
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Statistics</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-time metrics showcasing the growth and adoption of our lending protocol
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Stats */}
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-white mb-2">
                    {formatNumber(animatedStats[stat.key as keyof typeof animatedStats], stat.key)}
                  </div>
                  <div className="text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>

                {/* Animated progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: animatedStats[stat.key as keyof typeof animatedStats] > 0 ? '100%' : '0%'
                    }}
                  />
                </div>

                {/* Hover effect particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Additional metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl">
            <div className="text-2xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Uptime</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl">
            <div className="text-2xl font-bold text-white mb-2">$0</div>
            <div className="text-gray-300">Protocol Losses</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl">
            <div className="text-2xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;