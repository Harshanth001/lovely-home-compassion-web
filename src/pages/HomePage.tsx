
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Calendar, 
  Users, 
  Database, 
  Phone, 
  ArrowRight
} from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lovely-peach/30 to-lovely-yellow/30">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-primary">We are here</span> to hear.
              </h1>
              <p className="text-lg text-gray-700 max-w-md mx-auto md:mx-0">
                Supporting individuals in homes and orphanages with care, compassion, and connection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  className="btn-primary-lovely"
                  size="lg"
                  asChild
                >
                  <Link to="/donate">Donate Now</Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-lovely-peach hover:bg-lovely-peach/20"
                  size="lg"
                  asChild
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute -inset-0.5 bg-gradient-soft rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-lovely-green p-6 rounded-xl flex flex-col items-center text-center">
                    <Heart className="h-12 w-12 text-primary mb-2 animate-gentle-bounce" />
                    <h3 className="font-semibold text-gray-800">Donate</h3>
                    <p className="text-sm text-gray-600 mt-2">Support our homes</p>
                  </div>
                  <div className="bg-lovely-blue p-6 rounded-xl flex flex-col items-center text-center">
                    <Calendar className="h-12 w-12 text-blue-500 mb-2 animate-gentle-bounce" />
                    <h3 className="font-semibold text-gray-800">Schedule</h3>
                    <p className="text-sm text-gray-600 mt-2">Mentoring sessions</p>
                  </div>
                  <div className="bg-lovely-yellow p-6 rounded-xl flex flex-col items-center text-center">
                    <Users className="h-12 w-12 text-amber-500 mb-2 animate-gentle-bounce" />
                    <h3 className="font-semibold text-gray-800">Talent</h3>
                    <p className="text-sm text-gray-600 mt-2">Resident showcase</p>
                  </div>
                  <div className="bg-lovely-purple p-6 rounded-xl flex flex-col items-center text-center">
                    <Database className="h-12 w-12 text-purple-500 mb-2 animate-gentle-bounce" />
                    <h3 className="font-semibold text-gray-800">Database</h3>
                    <p className="text-sm text-gray-600 mt-2">Manage residents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-8">
            At Lovely Home, we believe every individual deserves care, dignity, and a sense of belonging.
            We work tirelessly to provide support to those in homes and orphanages, connecting them
            with resources, mentors, and a wider community that cares.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="card-lovely p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-lovely-peach rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Care</h3>
              <p className="text-gray-600">Providing essential care and resources to homes and orphanages.</p>
            </div>
            <div className="card-lovely p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-lovely-yellow rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-gray-600">Connecting residents with mentors, skills, and opportunities.</p>
            </div>
            <div className="card-lovely p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-lovely-green rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Building a supportive community that listens and responds.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Links */}
      <section className="bg-lovely-blue/20 py-16">
        <div className="section-container">
          <h2 className="section-title">How You Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Link to="/donate" className="card-lovely hover:translate-y-[-5px] transition-transform duration-300">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-lovely-peach rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Donate</h3>
                <p className="text-gray-600 text-sm mb-4">Support our work with a contribution.</p>
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </Link>
            <Link to="/schedule" className="card-lovely hover:translate-y-[-5px] transition-transform duration-300">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-lovely-green rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-7 w-7 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Schedule</h3>
                <p className="text-gray-600 text-sm mb-4">Become a mentor or speaker.</p>
                <ArrowRight className="h-5 w-5 text-green-500" />
              </div>
            </Link>
            <Link to="/talent" className="card-lovely hover:translate-y-[-5px] transition-transform duration-300">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-lovely-yellow rounded-full flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-amber-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Talent</h3>
                <p className="text-gray-600 text-sm mb-4">Discover resident talents and skills.</p>
                <ArrowRight className="h-5 w-5 text-amber-500" />
              </div>
            </Link>
            <Link to="/contact" className="card-lovely hover:translate-y-[-5px] transition-transform duration-300">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-lovely-purple rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-7 w-7 text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <p className="text-gray-600 text-sm mb-4">Get in touch with our team.</p>
                <ArrowRight className="h-5 w-5 text-purple-500" />
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-warm rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <div className="mb-6">
              <span className="inline-block text-5xl">"</span>
            </div>
            <blockquote className="text-xl md:text-2xl font-medium italic text-gray-800 mb-6">
              We are here to hear - this simple phrase guides everything we do at Lovely Home. 
              Everyone deserves to be heard, supported, and celebrated.
            </blockquote>
            <div className="mt-6">
              <span className="font-semibold text-gray-900">The Lovely Home Team</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
