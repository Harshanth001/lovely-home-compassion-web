
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Donate', path: '/donate' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Talent', path: '/talent' },
    { name: 'Database', path: '/database' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-lovely-peach/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-lovely-pink bg-clip-text text-transparent">
                Lovely Home
              </span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center space-x-2">
                      <Heart className="h-6 w-6 text-primary" />
                      <span className="text-lg font-bold">Lovely Home</span>
                    </div>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <X className="h-4 w-4" />
                      </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="flex flex-col space-y-4 pt-6">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        to={link.path}
                        className="px-4 py-2 text-base font-medium rounded-md hover:bg-lovely-peach/20"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto border-t pt-6">
                    <Button 
                      className="w-full btn-primary-lovely"
                      asChild
                    >
                      <Link to="/donate">Donate Now</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-base font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button 
              className="btn-primary-lovely"
              asChild
            >
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
