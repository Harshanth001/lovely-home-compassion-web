
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-lovely-blue/20 border-t border-lovely-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-lovely-pink bg-clip-text text-transparent">
                Lovely Home
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Supporting individuals in homes and orphanages with care, compassion, and connection.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="text-base text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link to="/donate" className="text-base text-gray-600 hover:text-primary">Donate</Link></li>
              <li><Link to="/schedule" className="text-base text-gray-600 hover:text-primary">Schedule</Link></li>
              <li><Link to="/talent" className="text-base text-gray-600 hover:text-primary">Talent</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/privacy" className="text-base text-gray-600 hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-base text-gray-600 hover:text-primary">Terms of Service</Link></li>
              <li><Link to="/database" className="text-base text-gray-600 hover:text-primary">Database</Link></li>
              <li><Link to="/contact" className="text-base text-gray-600 hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span>8438386610</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span>9080558409</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span>7539954582</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span>9600630208</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span>9360877990</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span>lovelyhome010@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-lovely-peach/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-500">&copy; {currentYear} Lovely Home. All rights reserved.</p>
          <p className="text-sm text-gray-500 italic mt-2 md:mt-0">"We are here to hear."</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
