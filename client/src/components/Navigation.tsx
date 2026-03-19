import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.expertise'), href: '/expertise' },
    { label: t('nav.projects'), href: '/projects' },
    { label: t('nav.insights'), href: '/insights' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <div className="text-lg md:text-xl font-bold tracking-wider text-gray-900">
              EXPERT PORTFOLIO
            </div>
          </a>

          {/* Navigation Items - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                  isActive(item.href)
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600"></div>
                )}
              </a>
            ))}
          </div>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="ml-4 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t('nav.language')}
          </button>
        </div>
      </div>
    </nav>
  );
}
