import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import InvictusLogo from '../assets/FINAL_invictus-removebg-preview.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Updated nav items
  const navItems = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Industries', href: '#industries' },
    { name: 'Resources', href: '#resources' },
    { name: 'About', href: '#about' },
    { name: 'Careers', href: '#careers' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 relative">
          {/* Logo */}
          <div className="flex items-center cursor-pointer select-none mr-2">
            <img src={InvictusLogo} alt="Invictus Logo" className="h-16 w-auto object-contain" />
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-2 bg-black rounded-full px-3 py-1 shadow border border-[#333]" style={{minHeight: '48px'}}>
              {navItems.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative px-5 py-2 rounded-full text-base font-semibold transition-all duration-200 flex items-center justify-center ${
                    activeIndex === idx
                      ? 'text-red-500 bg-[#232323]' // active: red text, dark gray oval
                      : 'text-white hover:text-red-400'
                  }`}
                  style={{minWidth: '80px', textAlign: 'center'}}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative p-3 text-white hover:text-red-400 transition-colors duration-300 bg-black/80 backdrop-blur-xl rounded-xl border border-white/10 hover:bg-white/10"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {isMobileMenuOpen ? (
                  <X size={24} className="transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu size={24} className="transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 pb-6' 
            : 'max-h-0 opacity-0 pb-0'
        }`}>
          <div className="bg-black/95 backdrop-blur-xl rounded-2xl mt-4 p-6 border border-white/10 space-y-2">
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => { setActiveIndex(idx); setIsMobileMenuOpen(false); }}
                className={`block px-6 py-4 text-base font-semibold transition-all duration-300 rounded-full ${
                  activeIndex === idx
                    ? 'text-red-500 bg-[#232323]' 
                    : 'text-white hover:text-red-400'
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;