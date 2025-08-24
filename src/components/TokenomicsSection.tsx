import React, { useState, useEffect } from 'react';
import { PieChart, TrendingUp, Lock, Users } from 'lucide-react';

const TokenomicsSection = () => {
  const [animatedValues, setAnimatedValues] = useState({
    community: 0,
    treasury: 0,
    team: 0,
    liquidity: 0
  });

  const tokenDistribution = [
    { label: 'Community Rewards', value: 40, color: 'from-blue-500 to-cyan-500', key: 'community' },
    { label: 'Treasury', value: 25, color: 'from-purple-500 to-pink-500', key: 'treasury' },
    { label: 'Team & Advisors', value: 20, color: 'from-green-500 to-emerald-500', key: 'team' },
    { label: 'Liquidity Mining', value: 15, color: 'from-yellow-500 to-orange-500', key: 'liquidity' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        community: 40,
        treasury: 25,
        team: 20,
        liquidity: 15
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tokenomics &
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Distribution</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transparent and sustainable token economics designed for long-term growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Token Distribution Chart */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <div className="flex items-center mb-8">
                <PieChart className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Token Distribution</h3>
              </div>

              <div className="space-y-4">
                {tokenDistribution.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{item.label}</span>
                      <span className="text-white font-bold">{item.value}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${animatedValues[item.key as keyof typeof animatedValues]}%` 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                <div className="text-sm text-gray-300">
                  <strong className="text-white">Total Supply:</strong> 1,000,000,000 ORION
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Deflationary Mechanism</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Regular token burns from protocol revenue reduce total supply, creating upward price pressure over time.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Governance Rights</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Token holders vote on protocol upgrades, parameter changes, and treasury allocation decisions.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Lock className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Staking Rewards</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Stake ORION tokens to earn additional rewards and participate in protocol security.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-center">
              <h4 className="text-lg font-semibold text-white mb-2">Current Token Price</h4>
              <div className="text-3xl font-bold text-white mb-1">$2.47</div>
              <div className="text-green-300 text-sm">+12.5% (24h)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;