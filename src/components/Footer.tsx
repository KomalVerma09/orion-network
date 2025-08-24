import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Twitter, 
  Github, 
  MessageCircle, 
  Mail,
  ExternalLink,
  Shield,
  Zap
} from 'lucide-react';

const Footer = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContent(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('footer');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const footerLinks = [
    {
      title: 'Protocol',
      links: [
        { name: 'Lending Pools', href: '#' },
        { name: 'Governance', href: '#' },
        { name: 'Staking', href: '#' },
        { name: 'Analytics', href: '#' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Whitepaper', href: '#' },
        { name: 'Security', href: '#' },
        { name: 'Bug Bounty', href: '#' },
      ]
    },
    {
      title: 'Community',
      links: [
        { name: 'Discord', href: '#' },
        { name: 'Twitter', href: '#' },
        { name: 'GitHub', href: '#' },
        { name: 'Forum', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Contact', href: '#' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer id="footer" className="relative py-20 px-6 mt-20 bg-[url('https://raw.githubusercontent.com/inquisitiveScholar/images/refs/heads/main/img-8.jpg')] bg-cover bg-top bg-no-repeat">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main CTA Section */}
        <div className={`text-center mb-16 p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl transition-all duration-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Earning?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users already earning sustainable yields through our decentralized lending protocol.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="relative z-10 flex items-center justify-center">
                Launch App
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group flex items-center justify-center px-8 py-4 border border-white/20 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/5 hover:border-white/30">
              <ExternalLink className="mr-2 w-5 h-5" />
              View Documentation
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-300 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Security & Performance */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-500 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <Shield className="w-8 h-8 text-green-400 mr-4" />
            <div>
              <h4 className="text-white font-semibold mb-1">Audited & Secure</h4>
              <p className="text-gray-400 text-sm">Smart contracts audited by leading security firms</p>
            </div>
          </div>
          
          <div className="flex items-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <Zap className="w-8 h-8 text-yellow-400 mr-4" />
            <div>
              <h4 className="text-white font-semibold mb-1">High Performance</h4>
              <p className="text-gray-400 text-sm">99.9% uptime with instant transaction processing</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 transition-all duration-1000 delay-700 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            <span className="text-gray-400">© 2024 Orion Network. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                  aria-label={social.label}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Legal Links */}
        <div className={`flex justify-center space-x-6 mt-8 text-sm text-gray-500 transition-all duration-1000 delay-900 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">Terms of Service</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">Risk Disclosure</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;