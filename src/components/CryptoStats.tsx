import React, { useState, useEffect } from 'react';
import { TrendingUp, DollarSign, Users, Zap, ArrowUp, Target } from 'lucide-react';

const CryptoStats = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [counters, setCounters] = useState({
    tvl: 0,
    users: 0,
    volume: 0,
    apy: 0
  });

  const metrics = [
    {
      icon: DollarSign,
      label: 'Total Value Locked',
      value: 127000000,
      displayValue: '$127M+',
      color: 'emerald',
      description: 'Assets secured in our protocol',
      key: 'tvl'
    },
    {
      icon: Users,
      label: 'Active Millionaires',
      value: 47000,
      displayValue: '47K+',
      color: 'blue',
      description: 'Users who became millionaires',
      key: 'users'
    },
    {
      icon: Zap,
      label: '24h Volume',
      value: 23500000,
      displayValue: '$23.5M',
      color: 'indigo',
      description: 'Trading volume last 24 hours',
      key: 'volume'
    },
    {
      icon: Target,
      label: 'Average APY',
      value: 247,
      displayValue: '247%',
      color: 'purple',
      description: 'Annual percentage yield',
      key: 'apy'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContent(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('crypto-stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (showContent) {
      const timer = setTimeout(() => {
        setCounters({
          tvl: 127000000,
          users: 47000,
          volume: 23500000,
          apy: 247
        });
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [showContent]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number, key: string) => {
    if (key === 'tvl' || key === 'volume') {
      return `$${(num / 1000000).toFixed(1)}M`;
    } else if (key === 'users') {
      return `${(num / 1000).toFixed(0)}K+`;
    } else if (key === 'apy') {
      return `${num}%`;
    }
    return num.toString();
  };

  return (
    <section id="crypto-stats" className="py-20 px-6 relative bg-[url('https://raw.githubusercontent.com/inquisitiveScholar/images/refs/heads/main/img-2.jpg')] bg-contain bg-top bg-no-repeat">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-pulse" />
      
      {/* Floating Data Streams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={`stream-${i}`}
            className="absolute w-px h-32 bg-gradient-to-b from-blue-400/30 to-transparent animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6 transition-all duration-1000 ${
            showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
            LIVE PROTOCOL STATS
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-white">NUMBERS DON'T LIE</span>
            <br />
            <span className={`bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent transition-all duration-1000 delay-500 ${
              showContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              REVEAL TRUTH
            </span>
          </h2>
          
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-700 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Real-time metrics showing the unstoppable growth of our revolutionary protocol
          </p>
        </div>

        {/* Interactive Metrics Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            const isActive = activeMetric === index;
            
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 cursor-pointer ${
                  isActive 
                    ? `bg-${metric.color}-500/20 border-${metric.color}-500/50 scale-105 shadow-2xl shadow-${metric.color}-500/25` 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:scale-102'
                }`}
                onClick={() => setActiveMetric(index)}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${metric.color}-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  isActive 
                    ? `bg-${metric.color}-500 shadow-lg shadow-${metric.color}-500/50 rotate-12` 
                    : `bg-${metric.color}-500/20 group-hover:rotate-6`
                }`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Value */}
                <div className={`text-4xl font-black mb-2 transition-all duration-500 ${
                  isActive ? `text-${metric.color}-400 scale-110` : 'text-white'
                }`}>
                  {formatNumber(counters[metric.key as keyof typeof counters], metric.key)}
                </div>

                {/* Label */}
                <div className="text-gray-400 font-medium mb-2">{metric.label}</div>
                
                {/* Description */}
                <div className="text-sm text-gray-500">{metric.description}</div>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute top-4 right-4">
                    <div className={`w-3 h-3 bg-${metric.color}-400 rounded-full animate-pulse`} />
                  </div>
                )}

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUp className={`w-5 h-5 text-${metric.color}-400 animate-bounce`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Growth Visualization */}
        <div className="relative bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-3xl p-8 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Protocol Growth Trajectory</h3>
            <div className="flex items-center text-blue-400">
              <TrendingUp className="w-6 h-6 mr-2" />
              <span className="font-bold">+∞% Forever</span>
            </div>
          </div>
          
          {/* Animated Growth Line */}
          <div className="relative h-32 bg-black/20 rounded-xl overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 400 100">
              <defs>
                <linearGradient id="growthGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
                </linearGradient>
              </defs>
              
              <path
                d="M0,80 Q100,60 200,40 T400,10"
                fill="none"
                stroke="url(#growthGradient)"
                strokeWidth="3"
                className="animate-pulse"
              />
              
              {/* Data Points */}
              {[0, 100, 200, 300, 400].map((x, i) => (
                <circle
                  key={i}
                  cx={x}
                  cy={80 - i * 15}
                  r="4"
                  fill="#3b82f6"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </svg>
            
            {/* Floating Labels */}
            <div className="absolute inset-0 flex items-end justify-between px-4 pb-2 text-xs text-blue-400">
              <span>Launch</span>
              <span>Q2</span>
              <span>Q3</span>
              <span>Q4</span>
              <span>∞</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoStats;