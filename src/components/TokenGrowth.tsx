import React, { useEffect, useRef } from 'react';
import { TrendingUp, BarChart3, ArrowUp } from 'lucide-react';

const TokenGrowth = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const path = pathRef.current;
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            path.style.strokeDashoffset = '0';
          }
        });
      });
      
      observer.observe(path);
    }
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Unstoppable Growth
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Witness the revolutionary token mechanism that ensures only upward trajectory through community-driven governance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Chart */}
          <div className="relative">
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10">
              <svg viewBox="0 0 400 300" className="w-full h-64">
                {/* Grid */}
                <defs>
                  <linearGradient id="growthGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.1)" />
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.5)" />
                  </linearGradient>
                </defs>
                
                {/* Growth Path */}
                <path
                  ref={pathRef}
                  d="M20,250 Q100,200 150,150 T250,100 T350,50"
                  fill="none"
                  stroke="url(#growthGradient)"
                  strokeWidth="3"
                  className="transition-all duration-3000 ease-out"
                />
                
                {/* Data Points */}
                {[
                  { x: 50, y: 230, label: "Launch" },
                  { x: 120, y: 180, label: "Community" },
                  { x: 180, y: 130, label: "Governance" },
                  { x: 250, y: 100, label: "Expansion" },
                  { x: 320, y: 70, label: "Future" },
                ].map((point, index) => (
                  <g key={index}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="6"
                      fill="#22c55e"
                      className="animate-pulse"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    />
                    <text
                      x={point.x}
                      y={point.y - 15}
                      textAnchor="middle"
                      className="text-xs fill-gray-300"
                    >
                      {point.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* Growth Mechanisms */}
          <div className="space-y-6">
            <div className="group backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-green-400 mr-4" />
                <h3 className="text-xl font-semibold">Buy-Back Mechanism</h3>
              </div>
              <p className="text-gray-300">
                Automatic token buybacks from platform revenue ensure constant upward pressure on token value.
              </p>
            </div>

            <div className="group backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-8 h-8 text-cyan-400 mr-4" />
                <h3 className="text-xl font-semibold">Deflationary Supply</h3>
              </div>
              <p className="text-gray-300">
                Token burning events reduce total supply while demand increases through platform adoption.
              </p>
            </div>

            <div className="group backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <div className="flex items-center mb-4">
                <ArrowUp className="w-8 h-8 text-purple-400 mr-4" />
                <h3 className="text-xl font-semibold">Governance Lock</h3>
              </div>
              <p className="text-gray-300">
                Community governance prevents any actions that could decrease token value through democratic voting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenGrowth;