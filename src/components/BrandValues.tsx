import React from 'react';
import { ArrowUp, Users, Infinity, Shield } from 'lucide-react';

const BrandValues = () => {
  const values = [
    {
      icon: Users,
      title: 'We Rise Together',
      description: 'Community-driven growth where every member\'s success contributes to the collective prosperity',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: ArrowUp,
      title: 'Unstoppable Growth',
      description: 'Revolutionary tokenomics ensure continuous upward trajectory through democratic governance',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Infinity,
      title: 'Limitless Potential',
      description: 'Breaking traditional financial barriers to unlock infinite possibilities for wealth creation',
      image: 'https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Shield,
      title: 'Trustless Security',
      description: 'Advanced blockchain technology ensures transparency and security without central authority',
      image: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The cosmic principles that guide Orion Network towards a decentralized financial future
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/80 to-black/80" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-80 flex flex-col justify-between">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-100 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Hover Effect Particles */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300 delay-100" />
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-500 rounded-3xl" />
              </div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <blockquote className="text-2xl md:text-3xl font-light text-gray-200 italic max-w-4xl mx-auto">
            "In the vast cosmos of finance, Orion Network is the{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              guiding star
            </span>{' '}
            that leads humanity to unprecedented prosperity."
          </blockquote>
          <div className="mt-4 text-gray-400">— Orion Network Manifesto</div>
        </div>
      </div>
    </section>
  );
};

export default BrandValues;