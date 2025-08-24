import React from 'react';
import { MessageCircle, Twitter, Github, Users, ExternalLink } from 'lucide-react';

const CommunitySection = () => {
  const communityStats = [
    { label: 'Discord Members', value: '25,000+', icon: MessageCircle, color: 'from-indigo-500 to-purple-500' },
    { label: 'Twitter Followers', value: '50,000+', icon: Twitter, color: 'from-blue-500 to-cyan-500' },
    { label: 'GitHub Contributors', value: '150+', icon: Github, color: 'from-gray-500 to-gray-700' },
    { label: 'Active Governance', value: '5,000+', icon: Users, color: 'from-green-500 to-emerald-500' }
  ];

  const communityLinks = [
    {
      name: 'Join Discord',
      description: 'Connect with the community and get real-time support',
      icon: MessageCircle,
      color: 'from-indigo-500 to-purple-500',
      href: '#'
    },
    {
      name: 'Follow Twitter',
      description: 'Stay updated with the latest news and announcements',
      icon: Twitter,
      color: 'from-blue-500 to-cyan-500',
      href: '#'
    },
    {
      name: 'Contribute on GitHub',
      description: 'Help build the future of decentralized lending',
      icon: Github,
      color: 'from-gray-500 to-gray-700',
      href: '#'
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white/5 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Community</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Be part of a thriving ecosystem of builders, lenders, and innovators shaping the future of DeFi
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Community Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                className="group block p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${link.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  {link.name}
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {link.description}
                </p>
              </a>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Stay in the Loop</h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates, governance proposals, and community news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;