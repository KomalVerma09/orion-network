import React, { useState, useEffect } from 'react';
import { Users, Vote, Crown, Zap, MessageCircle, Trophy } from 'lucide-react';

const CommunityPower = () => {
  const [activeProposal, setActiveProposal] = useState(0);
  const [voteCount, setVoteCount] = useState(12847);
  const [hasVoted, setHasVoted] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const proposals = [
    {
      id: 1,
      title: 'Increase Token Burn Rate to 1%',
      description: 'Double the burn rate to accelerate price appreciation',
      votes: { yes: 8947, no: 1203 },
      status: 'Active',
      timeLeft: '2d 14h',
      impact: 'Price goes up faster 🚀'
    },
    {
      id: 2,
      title: 'Launch Orion NFT Collection',
      description: 'Create exclusive NFTs for top holders',
      votes: { yes: 7234, no: 892 },
      status: 'Passing',
      timeLeft: '1d 8h',
      impact: 'More utility, more value 💎'
    },
    {
      id: 3,
      title: 'Partnership with Major Exchange',
      description: 'List ORION on Binance for massive exposure',
      votes: { yes: 9876, no: 234 },
      status: 'Approved',
      timeLeft: 'Executing',
      impact: 'Moon mission activated 🌙'
    }
  ];

  const communityStats = [
    { label: 'Governance Power', value: '100%', icon: Crown, color: 'yellow' },
    { label: 'Active Voters', value: '12.8K', icon: Vote, color: 'purple' },
    { label: 'Proposals Passed', value: '247', icon: Trophy, color: 'emerald' },
    { label: 'Community Members', value: '47K+', icon: Users, color: 'blue' }
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

    const element = document.getElementById('community-power');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVoteCount(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleVote = (vote: 'yes' | 'no') => {
    setHasVoted(true);
    setTimeout(() => setHasVoted(false), 3000);
  };

  return (
    <section id="community-power" className="py-20 px-6 relative bg-[url('https://raw.githubusercontent.com/inquisitiveScholar/images/refs/heads/main/img-6.png')] bg-contain bg-top bg-no-repeat" >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-6 transition-all duration-1000 ${
            showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <Crown className="w-4 h-4 mr-2" />
            COMMUNITY GOVERNANCE
          </div>
          
          <h2 className={`text-5xl md:text-7xl font-black mb-6 transition-all duration-1000 delay-300 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-white">YOU</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              CONTROL
            </span>
            <br />
            <span className="text-white">EVERYTHING</span>
          </h2>
          
          <p className={`text-xl text-gray-300 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            True decentralization means token holders make every decision.
            <span className="text-purple-400 font-bold"> Your voice shapes the future.</span>
          </p>
        </div>

        {/* Community Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-700 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {communityStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`group p-6 bg-gradient-to-br from-${stat.color}-500/10 to-${stat.color}-500/5 border border-${stat.color}-500/30 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300`}
              >
                <div className={`w-12 h-12 bg-${stat.color}-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}>
                  <IconComponent className={`w-6 h-6 text-${stat.color}-400`} />
                </div>
                <div className={`text-2xl font-black text-${stat.color}-400 mb-1`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Proposals List */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-900 ${
            showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Vote className="w-8 h-8 text-purple-400 mr-3" />
              Active Proposals
            </h3>

            {proposals.map((proposal, index) => (
              <div
                key={proposal.id}
                className={`group cursor-pointer p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                  activeProposal === index
                    ? 'bg-purple-500/2 border-purple-500/50 scale-105 shadow-2xl shadow-purple-500/25'
                    : 'bg-white/2 border-white/10 hover:bg-white/10 hover:scale-102'
                }`}
                onClick={() => setActiveProposal(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    proposal.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' :
                    proposal.status === 'Passing' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {proposal.status}
                  </span>
                  <span className="text-gray-400 text-sm">{proposal.timeLeft}</span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2">
                  {proposal.title}
                </h4>
                
                <p className="text-gray-300 mb-4">
                  {proposal.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-purple-400 font-bold">
                    {proposal.impact}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {(proposal.votes.yes + proposal.votes.no).toLocaleString()} votes
                  </div>
                </div>

                {/* Vote Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-emerald-400">Yes: {proposal.votes.yes.toLocaleString()}</span>
                    <span className="text-red-400">No: {proposal.votes.no.toLocaleString()}</span>
                  </div>
                  
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500"
                      style={{ 
                        width: `${(proposal.votes.yes / (proposal.votes.yes + proposal.votes.no)) * 100}%` 
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Voting Panel */}
          <div className={`bg-gradient-to-br from-[#0E1122] to-[#242324] backdrop-blur-sm rounded-3xl p-8 border border-white/20 sticky top-8 transition-all duration-1000 delay-1100 ${
            showContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="flex items-center mb-6">
              <Zap className="w-6 h-6 text-yellow-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Cast Your Vote</h3>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold text-white mb-2">
                {proposals[activeProposal].title}
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                {proposals[activeProposal].description}
              </p>
              
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 mb-6">
                <div className="text-purple-400 font-bold text-center">
                  {proposals[activeProposal].impact}
                </div>
              </div>
            </div>

            {/* Voting Power */}
            <div className="mb-6 p-4 bg-white/5 rounded-xl">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Your Voting Power</span>
                <span className="text-white font-bold">1,247 ORION</span>
              </div>
            </div>

            {/* Vote Buttons */}
            {!hasVoted && proposals[activeProposal].status === 'Active' && (
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => handleVote('yes')}
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50"
                >
                  VOTE YES 🚀
                </button>
                <button
                  onClick={() => handleVote('no')}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
                >
                  VOTE NO ❌
                </button>
              </div>
            )}

            {hasVoted && (
              <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/50 rounded-xl text-center">
                <div className="text-emerald-400 font-bold">Vote Submitted! 🎉</div>
                <div className="text-gray-300 text-sm">Your voice has been heard</div>
              </div>
            )}

            {/* Community Chat Preview */}
            <div className="border-t border-white/10 pt-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-white font-medium">Community Chat</span>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-xs font-bold">
                    A
                  </div>
                  <div>
                    <div className="text-emerald-400 font-medium">AlphaTrader</div>
                    <div className="text-gray-300">This proposal will moon us! 🚀</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">
                    D
                  </div>
                  <div>
                    <div className="text-purple-400 font-medium">DiamondHands</div>
                    <div className="text-gray-300">Already voted YES! 💎</div>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-4 bg-blue-500/20 border border-blue-500/30 text-blue-400 py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-500/30 transition-colors">
                Join Discussion
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPower;