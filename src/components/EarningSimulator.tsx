import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Zap } from 'lucide-react';

const EarningSimulator = () => {
  const [investment, setInvestment] = useState(1000);
  const [timeframe, setTimeframe] = useState(12);
  const [results, setResults] = useState({
    lendingRewards: 0,
    tokenRewards: 0,
    total: 0,
    apy: 0
  });

  useEffect(() => {
    // Simulate earnings calculation
    const baseAPY = 8.5; // Base lending APY
    const tokenBonusAPY = 4.2; // Additional token rewards
    const totalAPY = baseAPY + tokenBonusAPY;
    
    const lendingRewards = investment * (baseAPY / 100) * (timeframe / 12);
    const tokenRewards = investment * (tokenBonusAPY / 100) * (timeframe / 12);
    const total = investment + lendingRewards + tokenRewards;

    setResults({
      lendingRewards,
      tokenRewards,
      total,
      apy: totalAPY
    });
  }, [investment, timeframe]);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Earning{' '}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Simulator
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Calculate your potential wealth growth with Orion's revolutionary earning mechanisms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Calculator Interface */}
          <div className="backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Calculator className="w-8 h-8 text-cyan-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Wealth Projector</h3>
            </div>

            {/* Investment Amount */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-3">
                Investment Amount (USD)
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="100"
                  max="100000"
                  step="100"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none slider"
                />
                <div 
                  className="absolute top-0 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg transition-all duration-300"
                  style={{ width: `${(investment / 100000) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>$100</span>
                <span className="text-white font-bold text-lg">${investment.toLocaleString()}</span>
                <span>$100K</span>
              </div>
            </div>

            {/* Timeframe */}
            <div className="mb-8">
              <label className="block text-gray-300 text-sm font-medium mb-3">
                Time Horizon (Months)
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[6, 12, 24, 36].map((months) => (
                  <button
                    key={months}
                    onClick={() => setTimeframe(months)}
                    className={`py-2 px-4 rounded-xl font-medium transition-all duration-200 ${
                      timeframe === months
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {months}m
                  </button>
                ))}
              </div>
            </div>

            {/* APY Display */}
            <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-xl p-4 border border-green-500/30">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Current APY</span>
                <span className="text-2xl font-bold text-green-400">{results.apy}%</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Base lending + Token rewards
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="space-y-6">
            {/* Total Projection */}
            <div className="relative overflow-hidden backdrop-blur-sm bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-3xl p-8 border border-green-500/30">
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Total Value</h3>
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  ${results.total.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <div className="text-green-400 font-medium">
                  +${(results.total - investment).toLocaleString(undefined, { maximumFractionDigits: 0 })} profit
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse" />
            </div>

            {/* Breakdown */}
            <div className="grid grid-cols-2 gap-4">
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-sm text-gray-400 mb-2">Lending Rewards</div>
                <div className="text-2xl font-bold text-purple-400">
                  ${results.lendingRewards.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <div className="text-xs text-gray-500 mt-1">8.5% APY</div>
              </div>
              
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-sm text-gray-400 mb-2">Token Rewards</div>
                <div className="text-2xl font-bold text-cyan-400">
                  ${results.tokenRewards.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <div className="text-xs text-gray-500 mt-1">4.2% APY</div>
              </div>
            </div>

            {/* CTA */}
            <button className="group w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
              <span className="flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Start Earning Now
              </span>
            </button>

            <p className="text-xs text-gray-400 text-center">
              * Projections based on current rates. Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningSimulator;