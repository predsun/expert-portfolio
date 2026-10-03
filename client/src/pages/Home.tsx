import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import { ArrowRight, TrendingUp, Shield, Briefcase, Users, CheckCircle, BarChart3 } from 'lucide-react';

export default function Home() {
  const { language, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const expertiseItems = [
    { title: t('home.expertise.1.title'), desc: t('home.expertise.1.desc'), icon: TrendingUp },
    { title: t('home.expertise.2.title'), desc: t('home.expertise.2.desc'), icon: Shield },
    { title: t('home.expertise.3.title'), desc: t('home.expertise.3.desc'), icon: Briefcase },
    { title: t('home.expertise.4.title'), desc: t('home.expertise.4.desc'), icon: Users },
    { title: t('home.expertise.5.title'), desc: t('home.expertise.5.desc'), icon: BarChart3 },
    { title: t('home.expertise.6.title'), desc: t('home.expertise.6.desc'), icon: CheckCircle },
  ];

  const valueItems = [
    { title: t('home.value.1.title'), desc: t('home.value.1.desc') },
    { title: t('home.value.2.title'), desc: t('home.value.2.desc') },
    { title: t('home.value.3.title'), desc: t('home.value.3.desc') },
    { title: t('home.value.4.title'), desc: t('home.value.4.desc') },
  ];

  const tags = [
    t('home.tags.1'),
    t('home.tags.2'),
    t('home.tags.3'),
    t('home.tags.4'),
    t('home.tags.5'),
  ];

  const reveal = (delay: number) =>
    `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Add padding for fixed nav */}
      <div className="pt-16 md:pt-20" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Backdrop: radial gold glow + dot grid */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-amber-500/15 blur-[140px]" />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
              maskImage: 'radial-gradient(ellipse 90% 80% at 50% 20%, black 30%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 20%, black 30%, transparent 75%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className={reveal(0)}>
            {/* Badge */}
            <div className="mb-7" style={{ transitionDelay: '80ms' }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-400/10 text-amber-200 text-sm font-medium rounded-full border border-amber-400/25">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                {language === 'cn' ? '投资管理 · 战略规划' : 'Investment Management · Strategic Planning'}
              </span>
            </div>

            {/* Main Title */}
            <h1
              className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-7"
              style={{ transitionDelay: '160ms' }}
            >
              {t('home.hero.title')}
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed"
              style={{ transitionDelay: '240ms' }}
            >
              {t('home.hero.subtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4" style={{ transitionDelay: '320ms' }}>
              <Link href="/expertise">
                <Button
                  size="lg"
                  className="bg-amber-500 text-slate-950 hover:bg-amber-400 font-semibold px-8 py-6 text-base shadow-lg shadow-amber-500/20"
                >
                  {t('home.hero.cta')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-6 text-base backdrop-blur"
                >
                  {t('home.contact.cta')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Identity Tags Section */}
      <section className="py-16 md:py-24 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={language === 'cn' ? '专业定位' : 'Positioning'}
            title={t('home.tags.title')}
          />
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 font-medium shadow-sm hover:border-amber-600/60 hover:text-slate-900 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={language === 'cn' ? '成绩单' : 'Track Record'}
            title={t('home.metrics.title')}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-white p-8 md:p-10 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tabular-nums tracking-tight">
                  {t(`home.metrics.${i}.value`)}
                </div>
                <p className="text-gray-600 text-base">{t(`home.metrics.${i}.label`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            eyebrow={language === 'cn' ? '方法论' : 'Approach'}
            title={t('home.value.title')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {valueItems.map((item, index) => (
              <div key={index} className="flex gap-5 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
                    <CheckCircle className="w-6 h-6 text-amber-300" />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-[0.2em] text-amber-300/80 mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Overview Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={language === 'cn' ? '能力矩阵' : 'Capabilities'}
            title={t('home.expertise.title')}
            description={
              language === 'cn'
                ? '覆盖投融资全链条的专业能力体系'
                : 'A full-stack capability system across the investment lifecycle'
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {expertiseItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-white border border-gray-200/80 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-amber-600/30 transition-all duration-300"
                >
                  <div className="mb-5 inline-flex">
                    <span className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-amber-400 group-hover:text-slate-950 transition-colors duration-300" />
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-16 md:py-24 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={language === 'cn' ? '精选' : 'Selected Work'}
            title={t('home.projects.title')}
            description={
              language === 'cn'
                ? '重大投资项目展示，体现战略眼光、执行能力和价值创造'
                : 'Major investment projects demonstrating strategic vision, execution capability, and value creation'
            }
          />
          <div className="text-center">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-slate-900 text-white hover:bg-slate-800 font-semibold px-8"
              >
                {t('home.projects.cta')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute top-1/2 left-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[130px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-amber-300 mb-5">
            {language === 'cn' ? '开启对话' : "Let's Talk"}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {t('home.contact.title')}
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('home.contact.subtitle')}
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-amber-500 text-slate-950 hover:bg-amber-400 font-semibold px-10 py-6 text-base shadow-lg shadow-amber-500/20"
            >
              {t('home.contact.cta')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
