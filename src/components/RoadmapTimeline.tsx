import React, { useState, useEffect } from 'react';
import { Rocket, Star, Zap, Crown, Globe, Target } from 'lucide-react';

const RoadmapTimeline = () => {
  const [selectedPhase, setSelectedPhase] = useState(2);
  const [showContent, setShowContent] = useState(false);

  const phases = [
    {
      icon: Rocket,
      title: 'GENESIS',
      subtitle: 'The Beginning',
      status: 'Completed',
      date: 'Q1 2024',
      color: 'emerald',
      achievements: [
        'Smart contract deployment',
        'Initial token distribution',
        'Community formation',
        'First 1000 holders'
      ],
      description: 'The birth of the revolution. Orion Network launched with groundbreaking tokenomics that ensure only upward price movement.'
    },
    {
      icon: Zap,
      title: 'IGNITION',
      subtitle: 'Building Momentum',
      status: 'Completed',
      date: 'Q2 2024',
      color: 'yellow',
      achievements: [
        'Major exchange listings',
        'Governance system launch',
        'First token burns',
        '10,000+ holders'
      ],
      description: 'Explosive growth phase with major partnerships and the implementation of our revolutionary governance system.'
    },
    {
      icon: Crown,
      title: 'DOMINANCE',
      subtitle: 'Market Leadership',
      status: 'In Progress',
      date: 'Q3 2024',
      color: 'purple',
      achievements: [
        'DeFi protocol integration',
        'Institutional partnerships',
        'Advanced trading features',
        '50,000+ holders'
      ],
      description: 'Establishing market dominance through strategic partnerships and advanced DeFi integrations.'
    },
    {
      icon: Globe,
      title: 'EXPANSION',
      subtitle: 'Global Reach',
      status: 'Upcoming',
      date: 'Q4 2024',
      color: 'blue',
      achievements: [
        'Multi-chain deployment',
        'Global marketing campaign',
        'Mobile app launch',
        '100,000+ holders'
      ],
      description: 'Global expansion across multiple blockchains with mass adoption initiatives and mobile accessibility.'
    },
    {
      icon: Target,
      title: 'SUPREMACY',
      subtitle: 'Total Victory',
      status: 'Future',
      date: 'Q1 2025',
      color: 'red',
      achievements: [
        'Mainstream adoption',
        'Fortune 500 partnerships',
        'Regulatory compliance',
        '1,000,000+ holders'
      ],
      description: 'Complete market supremacy with mainstream adoption and integration into traditional financial systems.'
    },
    {
      icon: Star,
      title: 'LEGACY',
      subtitle: 'Eternal Wealth',
      status: 'Vision',
      date: 'Beyond',
      color: 'pink',
      achievements: [
        'Generational wealth',
        'Financial revolution',
        'Global impact',
        'Infinite growth'
      ],
      description: 'The ultimate vision realized - a new financial paradigm where everyone who believed early becomes generationally wealthy.'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'emerald';
      case 'In Progress': return 'yellow';
      case 'Upcoming': return 'blue';
      case 'Future': return 'purple';
      case 'Vision': return 'pink';
      default: return 'gray';
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContent(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('roadmap-timeline');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="roadmap-timeline" className="py-20 px-6 relative overflow-hidden bg-[url('https://raw.githubusercontent.com/inquisitiveScholar/images/refs/heads/main/img-7.png')] bg-contain bg-top bg-no-repeat">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-6 transition-all duration-1000 ${
            showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <Star className="w-4 h-4 mr-2 animate-spin" />
            ROADMAP TO RICHES
          </div>
          
          <h2 className={`text-5xl md:text-7xl font-black mb-6 transition-all duration-1000 delay-300 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-white">YOUR</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              WEALTH
            </span>
            <br />
            <span className="text-white">JOURNEY</span>
          </h2>
          
          <p className={`text-xl text-gray-300 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Follow the constellation of success as we build the most valuable token in crypto history.
            <span className="text-purple-400 font-bold"> Every phase multiplies your wealth.</span>
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-700 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {phases.map((phase, index) => {
            const IconComponent = phase.icon;
            const isActive = selectedPhase === index;
            
            return (
              <button
                key={index}
                onClick={() => setSelectedPhase(index)}
                className={`group relative p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                  isActive 
                    ? `bg-${phase.color}-500/20 border-${phase.color}-500/50 scale-110 shadow-2xl shadow-${phase.color}-500/25` 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:scale-105'
                }`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                  isActive 
                    ? `bg-${phase.color}-500 shadow-lg shadow-${phase.color}-500/50 rotate-12` 
                    : `bg-${phase.color}-500/20 group-hover:rotate-6`
                }`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <div className={`text-sm font-bold mb-1 transition-colors duration-300 ${
                  isActive ? `text-${phase.color}-400` : 'text-white'
                }`}>
                  {phase.title}
                </div>

                {/* Status */}
                <div className={`text-xs px-2 py-1 rounded-full ${
                  isActive 
                    ? `bg-${getStatusColor(phase.status)}-500/30 text-${getStatusColor(phase.status)}-400` 
                    : `bg-${getStatusColor(phase.status)}-500/20 text-${getStatusColor(phase.status)}-400`
                }`}>
                  {phase.status}
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute -top-2 -right-2">
                    <div className={`w-4 h-4 bg-${phase.color}-400 rounded-full animate-pulse`} />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Phase Details */}
        <div className={`bg-gradient-to-br from-${phases[selectedPhase].color}-500/10 to-${phases[selectedPhase].color}-500/5 backdrop-blur-sm rounded-3xl p-8 border border-${phases[selectedPhase].color}-500/30 transition-all duration-1000 delay-900 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Phase Info */}
            <div>
              <div className="flex items-center mb-6">
                {React.createElement(phases[selectedPhase].icon, {
                  className: `w-16 h-16 text-${phases[selectedPhase].color}-400 mr-4`
                })}
                <div>
                  <h3 className={`text-4xl font-black text-${phases[selectedPhase].color}-400 mb-2`}>
                    {phases[selectedPhase].title}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-300 text-lg">{phases[selectedPhase].subtitle}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold bg-${getStatusColor(phases[selectedPhase].status)}-500/20 text-${getStatusColor(phases[selectedPhase].status)}-400`}>
                      {phases[selectedPhase].status}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-200 text-lg leading-relaxed mb-8">
                {phases[selectedPhase].description}
              </p>

              {/* Timeline */}
              <div className="flex items-center mb-8">
                <div className={`w-4 h-4 bg-${phases[selectedPhase].color}-500 rounded-full mr-4`} />
                <span className="text-gray-400">Target Date:</span>
                <span className={`text-${phases[selectedPhase].color}-400 font-bold ml-2`}>
                  {phases[selectedPhase].date}
                </span>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Key Achievements</h4>
              <div className="space-y-4">
                {phases[selectedPhase].achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`group p-4 bg-${phases[selectedPhase].color}-500/10 border border-${phases[selectedPhase].color}-500/30 rounded-xl hover:bg-${phases[selectedPhase].color}-500/20 transition-all duration-300`}
                  >
                    <div className="flex items-center">
                      <div className={`w-3 h-3 bg-${phases[selectedPhase].color}-400 rounded-full mr-4 group-hover:scale-125 transition-transform`} />
                      <span className="text-white font-medium">{achievement}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-2xl text-center">
                <div className="text-emerald-400 font-bold text-lg mb-2">
                  Phase {selectedPhase + 1} of {phases.length}
                </div>
                <div className="text-gray-300 text-sm">
                  {Math.round(((selectedPhase + 1) / phases.length) * 100)}% Complete
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-800 rounded-full h-3 mt-4 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-1000 ease-out"
                    style={{ width: `${((selectedPhase + 1) / phases.length) * 100}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1100 ${
          showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <button className="group px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl text-white font-black text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <span className="flex items-center justify-center">
              <Rocket className="mr-3 w-8 h-8 group-hover:rotate-12 transition-transform" />
              JOIN THE JOURNEY TO WEALTH
              <Star className="ml-3 w-8 h-8 group-hover:animate-spin" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoadmapTimeline;