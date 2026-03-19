import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shield, Briefcase, Users, CheckCircle, BarChart3 } from 'lucide-react';

export default function Home() {
  const { language, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const expertiseItems = [
    {
      title: t('home.expertise.1.title'),
      desc: t('home.expertise.1.desc'),
      icon: TrendingUp,
    },
    {
      title: t('home.expertise.2.title'),
      desc: t('home.expertise.2.desc'),
      icon: Shield,
    },
    {
      title: t('home.expertise.3.title'),
      desc: t('home.expertise.3.desc'),
      icon: Briefcase,
    },
    {
      title: t('home.expertise.4.title'),
      desc: t('home.expertise.4.desc'),
      icon: Users,
    },
    {
      title: t('home.expertise.5.title'),
      desc: t('home.expertise.5.desc'),
      icon: BarChart3,
    },
    {
      title: t('home.expertise.6.title'),
      desc: t('home.expertise.6.desc'),
      icon: CheckCircle,
    },
  ];

  const valueItems = [
    {
      title: t('home.value.1.title'),
      desc: t('home.value.1.desc'),
    },
    {
      title: t('home.value.2.title'),
      desc: t('home.value.2.desc'),
    },
    {
      title: t('home.value.3.title'),
      desc: t('home.value.3.desc'),
    },
    {
      title: t('home.value.4.title'),
      desc: t('home.value.4.desc'),
    },
  ];

  const tags = [
    t('home.tags.1'),
    t('home.tags.2'),
    t('home.tags.3'),
    t('home.tags.4'),
    t('home.tags.5'),
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Add padding for fixed nav */}
      <div className="pt-20 md:pt-24"></div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-amber-600/20 text-amber-200 text-sm font-medium rounded-full border border-amber-600/30">
                {language === 'cn' ? '投资管理 · 战略规划' : 'Investment Management · Strategic Planning'}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
              {t('home.hero.title')}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8 leading-relaxed">
              {t('home.hero.subtitle')}
            </p>

            {/* CTA Button */}
            <a href="/expertise" className="inline-block">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-8 py-6 text-base"
              >
                {t('home.hero.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Identity Tags Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('home.tags.title')}
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:border-slate-900 hover:text-slate-900 transition-colors"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('home.metrics.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 md:p-12 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow text-center"
              >
                <div className="mb-4 h-1 w-12 bg-amber-600 mx-auto"></div>
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
                  {t(`home.metrics.${i}.value`)}
                </div>
                <p className="text-gray-600 text-base">
                  {t(`home.metrics.${i}.label`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('home.value.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {valueItems.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Overview Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('home.expertise.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-8 border border-gray-200 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-amber-600 group-hover:text-slate-900 transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('home.projects.title')}
          </h2>
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-6">
              {language === 'cn'
                ? '重大投资项目展示，体现战略眼光、执行能力和价值创造'
                : 'Major investment projects demonstrating strategic vision, execution capability, and value creation'}
            </p>
            <a href="/projects">
              <Button variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
                {t('home.projects.cta')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('home.contact.title')}
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('home.contact.subtitle')}
          </p>
          <a href="/contact">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-8 py-6 text-base">
              {t('home.contact.cta')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
