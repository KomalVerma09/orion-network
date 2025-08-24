import React, { useState, useEffect } from 'react';
import { TrendingUp, Activity, DollarSign, Zap, ArrowUp, ArrowDown } from 'lucide-react';

const LiveTradingView = () => {
  const [currentPrice, setCurrentPrice] = useState(2.47);
  const [priceHistory, setPriceHistory] = useState<number[]>([2.47]);
  const [volume, setVolume] = useState(1250000);
  const [showContent, setShowContent] = useState(false);
  const [trades, setTrades] = useState([
    { type: 'buy', amount: 1500, price: 2.47, time: '12:34:56' },
    { type: 'buy', amount: 2300, price: 2.46, time: '12:34:52' },
    { type: 'buy', amount: 890, price: 2.45, time: '12:34:48' },
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContent(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('live-trading');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate price movement (biased upward)
      const change = (Math.random() - 0.2) * 0.05; // 80% chance of increase
      const newPrice = Math.max(0.1, currentPrice + change);
      
      setCurrentPrice(newPrice);
      setPriceHistory(prev => [...prev.slice(-20), newPrice]);
      setVolume(prev => prev + Math.random() * 10000);
      
      // Add new trade
      if (Math.random() > 0.7) {
        const newTrade = {
          type: Math.random() > 0.3 ? 'buy' : 'sell',
          amount: Math.floor(Math.random() * 5000) + 100,
          price: newPrice,
          time: new Date().toLocaleTimeString()
        };
        
        setTrades(prev => [newTrade, ...prev.slice(0, 9)]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentPrice]);

  const priceChange = priceHistory.length > 1 
    ? ((currentPrice - priceHistory[priceHistory.length - 2]) / priceHistory[priceHistory.length - 2]) * 100
    : 0;

  return (
    <section id="live-trading" className="py-20 px-6 relative bg-[url('https://raw.githubusercontent.com/inquisitiveScholar/images/refs/heads/main/img-5.jpg')] bg-cover bg-top bg-no-repeat">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
      
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium mb-6 transition-all duration-1000 ${
            showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <Activity className="w-4 h-4 mr-2 animate-pulse" />
            LIVE TRADING DATA
          </div>
          
          <h2 className={`text-5xl md:text-7xl font-black mb-6 transition-all duration-1000 delay-300 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-white">WATCH</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              MONEY
            </span>
            <br />
            <span className="text-white">MULTIPLY</span>
          </h2>
          
          <p className={`text-xl text-gray-300 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Real-time trading activity showing the unstoppable upward momentum.
            <span className="text-emerald-400 font-bold"> Every second, fortunes are made.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Price Chart */}
          <div className={`h-[35rem] lg:col-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 transition-all duration-1000 delay-700 ${
            showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">ORION/USD</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-black text-emerald-400">
                    ${currentPrice.toFixed(3)}
                  </span>
                  <span className={`flex items-center text-lg font-bold ${
                    priceChange >= 0 ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {priceChange >= 0 ? <ArrowUp className="w-5 h-5 mr-1" /> : <ArrowDown className="w-5 h-5 mr-1" />}
                    {Math.abs(priceChange).toFixed(2)}%
                  </span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-gray-400 text-sm">24h Volume</div>
                <div className="text-2xl font-bold text-white">
                  ${volume.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
            </div>

            {/* Price Chart */}
            <div className="relative h-64 bg-black/20 rounded-xl overflow-hidden mb-6">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                <defs>
                  <linearGradient id="priceGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="rgba(16, 185, 129, 0.1)" />
                    <stop offset="100%" stopColor="rgba(16, 185, 129, 0.8)" />
                  </linearGradient>
                </defs>
                
                {/* Price Line */}
                {priceHistory.length > 1 && (
                  <path
                    d={`M ${priceHistory.map((price, i) => 
                      `${(i / (priceHistory.length - 1)) * 400},${200 - ((price - Math.min(...priceHistory)) / (Math.max(...priceHistory) - Math.min(...priceHistory))) * 180}`
                    ).join(' L ')}`}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    className="animate-pulse"
                  />
                )}
                
                {/* Fill Area */}
                {priceHistory.length > 1 && (
                  <path
                    d={`M 0,200 L ${priceHistory.map((price, i) => 
                      `${(i / (priceHistory.length - 1)) * 400},${200 - ((price - Math.min(...priceHistory)) / (Math.max(...priceHistory) - Math.min(...priceHistory))) * 180}`
                    ).join(' L ')} L 400,200 Z`}
                    fill="url(#priceGradient)"
                  />
                )}
              </svg>
              
              {/* Current Price Indicator */}
              <div className="absolute top-4 right-4 bg-emerald-500/20 border border-emerald-500/50 rounded-lg px-3 py-1">
                <span className="text-emerald-400 text-sm font-bold">LIVE</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/30">
                <div className="text-emerald-400 text-sm">24h High</div>
                <div className="text-white font-bold">${Math.max(...priceHistory).toFixed(3)}</div>
              </div>
              <div className="text-center p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
                <div className="text-blue-400 text-sm">24h Low</div>
                <div className="text-white font-bold">${Math.min(...priceHistory).toFixed(3)}</div>
              </div>
              <div className="text-center p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
                <div className="text-purple-400 text-sm">Market Cap</div>
                <div className="text-white font-bold">$247M</div>
              </div>
            </div>
          </div>

          {/* Live Trades */}
          <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 transition-all duration-1000 delay-900 ${
            showContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="flex items-center mb-6">
              <Zap className="w-6 h-6 text-yellow-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Live Trades</h3>
            </div>

            <div className="space-y-3 mb-6">
              {trades.map((trade, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-xl border transition-all duration-300 ${
                    trade.type === 'buy'
                      ? 'bg-emerald-500/10 border-emerald-500/30'
                      : 'bg-red-500/10 border-red-500/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-sm font-bold ${
                      trade.type === 'buy' ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {trade.type.toUpperCase()}
                    </span>
                    <span className="text-gray-400 text-xs">{trade.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">
                      {trade.amount.toLocaleString()} ORION
                    </span>
                    <span className="text-gray-300 text-sm">
                      ${trade.price.toFixed(3)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Trading Stats */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                <span className="text-gray-400">Buy Pressure</span>
                <span className="text-emerald-400 font-bold">87%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                <span className="text-gray-400">Active Traders</span>
                <span className="text-white font-bold">2,847</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                <span className="text-gray-400">Avg Trade Size</span>
                <span className="text-white font-bold">$1,247</span>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 group">
              <span className="flex items-center justify-center">
                <DollarSign className="mr-2 w-5 h-5" />
                JOIN THE ACTION
                <TrendingUp className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveTradingView;