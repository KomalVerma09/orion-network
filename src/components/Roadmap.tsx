import React, { useState } from 'react';
import { Star, Rocket, Globe, Zap, Shield, Coins } from 'lucide-react';

const Roadmap = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  const milestones = [
    {
      icon: Rocket,
      title: 'Genesis Launch',
      status: 'Completed',
      date: 'Q1 2024',
      description: 'Platform launch with core lending functionality and governance token distribution',
      achievements: ['Smart contract deployment', 'Initial liquidity pools', 'Community formation']
    },
    {
      icon: Shield,
      title: 'Security Fortress',
      status: 'Completed',
      date: 'Q2 2024',
      description: 'Multi-layer security implementation and third-party audits',
      achievements: ['Multiple security audits', 'Insurance fund establishment', 'Bug bounty program']
    },
    {
      icon: Globe,
      title: 'Ecosystem Expansion',
      status: 'In Progress',
      date: 'Q3 2024',
      description: 'Cross-chain integration and partnership development',
      achievements: ['Ethereum integration', 'Strategic partnerships', 'Advanced yield strategies']
    },
    {
      icon: Zap,
      title: 'AI Integration',
      status: 'Upcoming',
      date: 'Q4 2024',
      description: 'AI-powered lending optimization and automated portfolio management',
      achievements: ['ML risk assessment', 'Automated rebalancing', 'Predictive analytics']
    },
    {
      icon: Coins,
      title: 'DeFi Universe',
      status: 'Future',
      date: 'Q1 2025',
      description: 'Complete DeFi ecosystem with derivatives and advanced financial products',
      achievements: ['Options trading', 'Synthetic assets', 'Institutional products']
    },
    {
      icon: Star,
      title: 'Orion Ascension',
      status: 'Vision',
      date: 'Q2 2025',
      description: 'Ultimate decentralization and community governance transition',
      achievements: ['Full DAO transition', 'Global adoption', 'Financial revolution']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'from-green-400 to-emerald-500';
      case 'In Progress': return 'from-yellow-400 to-orange-500';
      case 'Upcoming': return 'from-blue-400 to-cyan-500';
      case 'Future': return 'from-purple-400 to-pink-500';
      case 'Vision': return 'from-pink-400 to-red-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Constellation{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through the stars of our journey towards revolutionizing decentralized finance
          </p>
        </div>

        <div className="relative">
          {/* Constellation Map */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-500 ${
                    selectedMilestone === index ? 'scale-110 z-10' : 'hover:scale-105'
                  }`}
                  onClick={() => setSelectedMilestone(index)}
                >
                  {/* Connecting Lines */}
                  {index < milestones.length - 1 && (
                    <div className="absolute top-8 left-full w-8 lg:w-12 h-0.5 bg-gradient-to-r from-purple-500 to-transparent hidden lg:block" />
                  )}
                  
                  {/* Star/Milestone */}
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${getStatusColor(milestone.status)} rounded-full flex items-center justify-center mx-auto mb-4 ${
                    selectedMilestone === index ? 'shadow-2xl shadow-purple-500/50 animate-pulse' : ''
                  }`}>
                    <IconComponent className="w-8 h-8 text-white" />
                    
                    {/* Orbital Ring */}
                    <div className={`absolute inset-0 border-2 border-white/20 rounded-full ${
                      selectedMilestone === index ? 'animate-spin' : ''
                    }`} style={{ animationDuration: '3s' }} />
                    
                    {/* Glow Effect */}
                    {selectedMilestone === index && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${getStatusColor(milestone.status)} rounded-full blur-xl opacity-60 scale-150`} />
                    )}
                  </div>

                  {/* Milestone Info */}
                  <div className="text-center">
                    <h3 className="font-bold text-white mb-1">{milestone.title}</h3>
                    <div className={`text-xs px-2 py-1 rounded-full inline-block bg-gradient-to-r ${getStatusColor(milestone.status)} bg-opacity-20 text-white mb-1`}>
                      {milestone.status}
                    </div>
                    <p className="text-gray-400 text-sm">{milestone.date}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detail Panel */}
          <div className="backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Milestone Details */}
              <div>
                <div className="flex items-center mb-4">
                  {React.createElement(milestones[selectedMilestone].icon, {
                    className: 'w-10 h-10 text-cyan-400 mr-4'
                  })}
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {milestones[selectedMilestone].title}
                    </h3>
                    <div className={`text-sm px-3 py-1 rounded-full inline-block bg-gradient-to-r ${getStatusColor(milestones[selectedMilestone].status)} bg-opacity-20 text-white mt-1`}>
                      {milestones[selectedMilestone].status} • {milestones[selectedMilestone].date}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  {milestones[selectedMilestone].description}
                </p>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                  <div className="space-y-2">
                    {milestones[selectedMilestone].achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Progress */}
              <div className="relative">
                <div className="w-64 h-64 mx-auto relative">
                  {/* Orbital Rings */}
                  <div className="absolute inset-0 border border-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                  <div className="absolute inset-4 border border-cyan-500/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                  <div className="absolute inset-8 border border-pink-500/30 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
                  
                  {/* Center Core */}
                  <div className="absolute inset-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Star className="w-12 h-12 text-white animate-pulse" />
                  </div>
                  
                  {/* Progress Indicator */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="text-2xl font-bold text-white">
                      {Math.round(((selectedMilestone + 1) / milestones.length) * 100)}%
                    </div>
                    <div className="text-sm text-gray-400">Progress</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;