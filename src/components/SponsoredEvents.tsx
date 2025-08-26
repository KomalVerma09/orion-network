import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users, Star, Plane } from 'lucide-react';

const SponsoredEvents = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const events = [
    {
      id: 1,
      title: 'Goa Crypto Paradise',
      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Completed',
      dates: 'Dec 15-22, 2023',
      description: 'Exclusive beachside crypto conference with top holders. Luxury resorts, networking events, and blockchain workshops.',
      participants: 50,
      location: 'Goa, India',
      highlights: ['5-star beach resort', 'Crypto workshops', 'Networking dinners']
    },
    {
      id: 2,
      title: 'Kerala Backwaters Retreat',
      image: 'https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Ongoing',
      dates: 'Jan 10-17, 2024',
      description: 'Serene houseboat experience for diamond hands holders. Traditional Kerala culture meets modern DeFi discussions.',
      participants: 30,
      location: 'Alleppey, Kerala',
      highlights: ['Luxury houseboats', 'Cultural experiences', 'DeFi masterclasses']
    },
    {
      id: 3,
      title: 'Dubai Crypto Summit',
      image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Upcoming',
      dates: 'Mar 5-12, 2024',
      description: 'Ultimate luxury experience in Dubai for top-tier token holders. Burj Al Arab stays and exclusive crypto events.',
      participants: 75,
      location: 'Dubai, UAE',
      highlights: ['7-star hotels', 'Desert safari', 'Exclusive crypto meetups']
    },
    {
      id: 4,
      title: 'Bali Digital Nomad Hub',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Upcoming',
      dates: 'Apr 20-27, 2024',
      description: 'Tropical paradise for crypto entrepreneurs. Co-working spaces, beach clubs, and startup pitch sessions.',
      participants: 40,
      location: 'Ubud, Bali',
      highlights: ['Luxury villas', 'Co-working spaces', 'Startup pitches']
    },
    {
      id: 5,
      title: 'Swiss Alps Crypto Retreat',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Upcoming',
      dates: 'Jun 15-22, 2024',
      description: 'Mountain retreat for serious crypto investors. Private chalets, skiing, and institutional investment talks.',
      participants: 25,
      location: 'Zermatt, Switzerland',
      highlights: ['Private chalets', 'Skiing & hiking', 'Investment seminars']
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

    const element = document.getElementById('sponsored-events');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [events.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'emerald';
      case 'Ongoing': return 'yellow';
      case 'Upcoming': return 'blue';
      default: return 'gray';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed': return '✅';
      case 'Ongoing': return '🔄';
      case 'Upcoming': return '🚀';
      default: return '📅';
    }
  };

  return (
    <section id="sponsored-events" className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6 transition-all duration-1000 ${
            showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <Plane className="w-4 h-4 mr-2" />
            EXCLUSIVE HOLDER REWARDS
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-black mb-6 transition-all duration-1000 delay-300 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-white">SPONSORED</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              EVENTS
            </span>
          </h2>
          
          <p className={`text-xl text-gray-300 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Travel Sponsors for Selected Participants
            <br />
            <span className="text-blue-400 font-bold">Exclusive luxury experiences for top ORION holders</span>
          </p>
        </div>

        {/* Carousel Container */}
        <div className={`relative transition-all duration-1000 delay-700 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative overflow-hidden rounded-3xl">
            {/* Slides */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {events.map((event, index) => (
                <div key={event.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 min-h-[500px]">
                    {/* Event Image */}
                    <div className="relative overflow-hidden rounded-2xl group">
<img
  src={event.image}
  alt={event.title}
  className="w-full h-[108px] md:h-[432px] object-cover transition-transform duration-500 group-hover:scale-110"
/>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      {/* Status Badge */}
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold bg-${getStatusColor(event.status)}-500/20 border border-${getStatusColor(event.status)}-500/50 text-${getStatusColor(event.status)}-400 backdrop-blur-sm`}>
                        {getStatusIcon(event.status)} {event.status}
                      </div>

                      {/* Location Badge */}
                      <div className="absolute bottom-4 left-4 flex items-center px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.location}
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex flex-col justify-center space-y-6">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {event.title}
                        </h3>
                        
                        <div className="flex items-center space-x-6 mb-6">
                          <div className="flex items-center text-blue-400">
                            <Calendar className="w-5 h-5 mr-2" />
                            <span className="font-medium">{event.dates}</span>
                          </div>
                          
                          <div className="flex items-center text-purple-400">
                            <Users className="w-5 h-5 mr-2" />
                            <span className="font-medium">{event.participants} Participants</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          {event.description}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <Star className="w-5 h-5 text-yellow-400 mr-2" />
                          Event Highlights
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {event.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center p-3 bg-white/5 rounded-xl border border-white/10">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                              <span className="text-gray-300 text-sm">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button className={`group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-${getStatusColor(event.status)}-500 to-${getStatusColor(event.status)}-600 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-${getStatusColor(event.status)}-500/50`}>
                        <span className="flex items-center justify-center">
                          {event.status === 'Completed' ? 'View Gallery' : 
                           event.status === 'Ongoing' ? 'Join Waitlist' : 'Reserve Spot'}
                          <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-3 mt-8">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 transition-all duration-1000 delay-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-2xl">
            <div className="text-3xl font-black text-blue-400 mb-2">5</div>
            <div className="text-gray-400 text-sm">Destinations</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 rounded-2xl">
            <div className="text-3xl font-black text-emerald-400 mb-2">220</div>
            <div className="text-gray-400 text-sm">Total Participants</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-2xl">
            <div className="text-3xl font-black text-purple-400 mb-2">$2.5M</div>
            <div className="text-gray-400 text-sm">Total Value</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/30 rounded-2xl">
            <div className="text-3xl font-black text-yellow-400 mb-2">100%</div>
            <div className="text-gray-400 text-sm">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsoredEvents;
