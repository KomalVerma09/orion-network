import React, { useState } from 'react';
import { Vote, Users, Gavel, CheckCircle } from 'lucide-react';

const Governance = () => {
  const [selectedProposal, setSelectedProposal] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  const proposals = [
    {
      id: 1,
      title: 'Increase Lending Pool APY to 12%',
      description: 'Proposal to increase rewards for USDC lending pool participants',
      status: 'Active',
      votes: { yes: 847, no: 123 },
      timeLeft: '2 days'
    },
    {
      id: 2,
      title: 'Add New Asset: SOL',
      description: 'Enable Solana as a supported collateral asset',
      status: 'Passed',
      votes: { yes: 1243, no: 87 },
      timeLeft: 'Executed'
    },
    {
      id: 3,
      title: 'Treasury Allocation for Marketing',
      description: 'Allocate 100,000 ORION tokens for ecosystem growth',
      status: 'Draft',
      votes: { yes: 0, no: 0 },
      timeLeft: '5 days'
    }
  ];

  const handleVote = (vote: 'yes' | 'no') => {
    setHasVoted(true);
    // Simulate voting logic here
    setTimeout(() => setHasVoted(false), 3000);
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Community{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Governance
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your voice shapes the network. Every token holder has the power to propose and vote on the future of Orion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Governance Stats */}
          <div className="space-y-6">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-lg font-semibold">Active Voters</h3>
              </div>
              <div className="text-3xl font-bold text-white mb-2">2,847</div>
              <div className="text-gray-400 text-sm">+12% this month</div>
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <Vote className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-lg font-semibold">Proposals</h3>
              </div>
              <div className="text-3xl font-bold text-white mb-2">127</div>
              <div className="text-gray-400 text-sm">98% approval rate</div>
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <Gavel className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-lg font-semibold">Governance Power</h3>
              </div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400 text-sm">Decentralized</div>
            </div>
          </div>

          {/* Proposal List */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Active Proposals</h3>
            {proposals.map((proposal, index) => (
              <div
                key={proposal.id}
                className={`cursor-pointer backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 ${
                  selectedProposal === index
                    ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-400'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
                onClick={() => setSelectedProposal(index)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    proposal.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    proposal.status === 'Passed' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {proposal.status}
                  </span>
                  <span className="text-xs text-gray-400">{proposal.timeLeft}</span>
                </div>
                <h4 className="font-semibold text-white mb-1 line-clamp-2">
                  {proposal.title}
                </h4>
                <p className="text-sm text-gray-300 line-clamp-2">
                  {proposal.description}
                </p>
              </div>
            ))}
          </div>

          {/* Voting Panel */}
          <div className="backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {proposals[selectedProposal].title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {proposals[selectedProposal].description}
              </p>
              
              {/* Vote Progress */}
              <div className="space-y-3 mb-6">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-green-400">Yes</span>
                    <span className="text-green-400">{proposals[selectedProposal].votes.yes}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${(proposals[selectedProposal].votes.yes / (proposals[selectedProposal].votes.yes + proposals[selectedProposal].votes.no)) * 100}%` 
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-red-400">No</span>
                    <span className="text-red-400">{proposals[selectedProposal].votes.no}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-red-400 to-red-500 h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${(proposals[selectedProposal].votes.no / (proposals[selectedProposal].votes.yes + proposals[selectedProposal].votes.no)) * 100}%` 
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Voting Buttons */}
              {!hasVoted && proposals[selectedProposal].status === 'Active' && (
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleVote('yes')}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200"
                  >
                    Vote Yes
                  </button>
                  <button
                    onClick={() => handleVote('no')}
                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl font-medium hover:from-red-600 hover:to-red-700 transition-all duration-200"
                  >
                    Vote No
                  </button>
                </div>
              )}

              {hasVoted && (
                <div className="flex items-center justify-center space-x-2 text-green-400 bg-green-500/20 px-4 py-2 rounded-xl">
                  <CheckCircle className="w-5 h-5" />
                  <span>Vote submitted successfully!</span>
                </div>
              )}

              {proposals[selectedProposal].status !== 'Active' && (
                <div className="text-center text-gray-400 bg-gray-500/20 px-4 py-2 rounded-xl">
                  Voting is {proposals[selectedProposal].status.toLowerCase()}
                </div>
              )}
            </div>

            <div className="text-xs text-gray-400 text-center">
              Your voting power: 1,247 ORION tokens
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Governance;