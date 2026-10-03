import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { language, t } = useLanguage();

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.expertise'), href: '/expertise' },
    { label: t('nav.projects'), href: '/projects' },
    { label: t('nav.insights'), href: '/insights' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">EXPERT PORTFOLIO</h3>
            <p className="text-sm text-gray-400">
              {language === 'cn'
                ? '资深投资管理与战略规划专家的个人品牌官网'
                : 'Personal brand website of a senior investment management and strategic planning expert'}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {language === 'cn' ? '导航' : 'Navigation'}
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {language === 'cn' ? '联系方式' : 'Contact'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@expertportfolio.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contact@expertportfolio.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Copyright */}
          <p className="text-center text-sm text-gray-400">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
