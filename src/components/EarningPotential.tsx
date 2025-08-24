import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign, Zap, Target, ArrowUp } from 'lucide-react';

const EarningPotential = () => {
  const [investment, setInvestment] = useState(1000);
  const [timeframe, setTimeframe] = useState(12);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [results, setResults] = useState({
    conservative: 0,
    realistic: 0,
    moonshot: 0,
    total: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContent(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('earning-potential');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsCalculating(true);
    
    const timer = setTimeout(() => {
      // Conservative: 50% APY
      const conservative = investment * 0.5 * (timeframe / 12);
      // Realistic: 150% APY  
      const realistic = investment * 1.5 * (timeframe / 12);
      // Moonshot: 500% APY
      const moonshot = investment * 5 * (timeframe / 12);
      
      setResults({
        conservative,
        realistic,
        moonshot,
        total: investment + realistic
      });
      
      setIsCalculating(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [investment, timeframe]);

  const scenarios = [
    {
      name: 'Conservative',
      multiplier: '2x',
      description: 'Market downturns, bear cycles',
      color: 'blue',
      percentage: 50
    },
    {
      name: 'Realistic',
      multiplier: '5x',
      description: 'Normal market conditions',
      color: 'emerald',
      percentage: 75
    },
    {
      name: 'Moonshot',
      multiplier: '25x',
      description: 'Bull run, viral adoption',
      color: 'purple',
      percentage: 100
    }
  ];

  return (
    <section id="earning-potential" className="py-20 px-6 relative bg-[url('https://raw.githubusercontent.com/inquisitiveScholar/images/refs/heads/main/img-4.jpg')] bg-cover bg-top bg-no-repeat">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-6 transition-all duration-1000 ${
            showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <Calculator className="w-4 h-4 mr-2" />
            WEALTH PROJECTION ENGINE
          </div>
          
          <h2 className={`text-5xl md:text-7xl font-black mb-6 transition-all duration-1000 delay-300 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-white">YOUR</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              MILLIONAIRE
            </span>
            <br />
            <span className="text-white">TIMELINE</span>
          </h2>
          
          <p className={`text-xl text-gray-300 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Calculate your path to financial freedom with our revolutionary token mechanics.
            <span className="text-purple-400 font-bold"> Every scenario leads to profit.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Interface */}
          <div className={`bg-gradient-to-br from-[#0E0714] to-[#242324] backdrop-blur-sm rounded-3xl p-8 border border-white/20 sticky top-8 transition-all duration-1000 delay-700 ${
            showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                <Calculator className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Wealth Calculator</h3>
            </div>

            {/* Investment Amount */}
            <div className="mb-8">
              <label className="block text-gray-300 text-sm font-medium mb-4">
                Initial Investment (USD)
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="100"
                  max="100000"
                  step="100"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full h-3 bg-gray-800 rounded-lg appearance-none slider cursor-pointer"
                />
                <div 
                  className="absolute top-0 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transition-all duration-300 pointer-events-none"
                  style={{ width: `${(investment / 100000) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>$100</span>
                <span className="text-white font-bold text-2xl">${investment.toLocaleString()}</span>
                <span>$100K</span>
              </div>
            </div>

            {/* Timeframe */}
            <div className="mb-8">
              <label className="block text-gray-300 text-sm font-medium mb-4">
                Investment Period
              </label>
              <div className="grid grid-cols-4 gap-3">
                {[6, 12, 24, 36].map((months) => (
                  <button
                    key={months}
                    onClick={() => setTimeframe(months)}
                    className={`py-3 px-4 rounded-xl font-bold transition-all duration-200 ${
                      timeframe === months
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {months}m
                  </button>
                ))}
              </div>
            </div>

            {/* Current Projection */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300">Projected Value</span>
                <div className="flex items-center text-purple-400">
                  <TrendingUp className="w-5 h-5 mr-1" />
                  <span className="text-sm font-medium">Realistic Scenario</span>
                </div>
              </div>
              
              <div className={`text-4xl font-black text-white mb-2 transition-all duration-500 ${
                isCalculating ? 'animate-pulse' : ''
              }`}>
                ${results.total.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
              
              <div className="text-emerald-400 font-bold text-lg">
                +${(results.total - investment).toLocaleString(undefined, { maximumFractionDigits: 0 })} profit
              </div>
            </div>
          </div>

          {/* Scenarios Display */}
          <div className={`space-y-6 transition-all duration-1000 delay-900 ${
            showContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Target className="w-8 h-8 text-purple-400 mr-3" />
              Profit Scenarios
            </h3>

            {scenarios.map((scenario, index) => {
              const profit = investment * (scenario.percentage / 100) * 2 * (timeframe / 12);
              const total = investment + profit;
              
              return (
                <div
                  key={index}
                  className={`group p-6 bg-gradient-to-r from-${scenario.color}-500/10 to-${scenario.color}-500/5 border border-${scenario.color}-500/30 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className={`text-xl font-bold text-${scenario.color}-400 mb-1`}>
                        {scenario.name} {scenario.multiplier}
                      </h4>
                      <p className="text-gray-400 text-sm">{scenario.description}</p>
                    </div>
                    
                    <div className="text-right">
                      <div className={`text-3xl font-black text-${scenario.color}-400 mb-1`}>
                        ${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </div>
                      <div className="text-emerald-400 text-sm font-medium">
                        +${profit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Visualization */}
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-${scenario.color}-500 to-${scenario.color}-400 transition-all duration-1000 ease-out`}
                      style={{ width: `${Math.min(scenario.percentage, 100)}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUp className={`w-5 h-5 text-${scenario.color}-400 animate-bounce`} />
                  </div>
                </div>
              );
            })}

            {/* CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-2xl text-center">
              <h4 className="text-xl font-bold text-white mb-2">Ready to Start Your Journey?</h4>
              <p className="text-gray-300 mb-4">Join thousands who are already building generational wealth</p>
              
              <button className="group w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50">
                <span className="flex items-center justify-center">
                  <DollarSign className="mr-2 w-6 h-6" />
                  CLAIM YOUR FORTUNE
                  <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningPotential;