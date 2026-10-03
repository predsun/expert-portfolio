import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'cn' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LANGUAGE_STORAGE_KEY = 'expert-portfolio-language';

function getInitialLanguage(): Language {
  try {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved === 'cn' || saved === 'en') return saved;
  } catch {
    // localStorage may be unavailable (private mode, SSR); fall back to default
  }
  return 'cn';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  cn: {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.expertise': '专业能力',
    'nav.projects': '代表案例',
    'nav.insights': '观点洞察',
    'nav.contact': '联系',
    'nav.language': 'EN',

    // Home Hero
    'home.hero.title': '以前瞻战略视野，驱动资本价值增长',
    'home.hero.subtitle': '20年深耕大型央企投资管理，操盘逾2000亿重大项目，构建稳健、合规、高效的投融资体系。',
    'home.hero.cta': '探索专业能力',

    // Identity Tags
    'home.tags.title': '专业身份',
    'home.tags.1': '投资管理',
    'home.tags.2': '战略规划',
    'home.tags.3': '重大项目融资',
    'home.tags.4': '并购整合',
    'home.tags.5': '风险控制',

    // Key Metrics
    'home.metrics.title': '核心成就',
    'home.metrics.1.value': '20+',
    'home.metrics.1.label': '年央企投资管理经验',
    'home.metrics.2.value': '¥2000亿+',
    'home.metrics.2.label': '累计管理投资规模',
    'home.metrics.3.value': '90%+',
    'home.metrics.3.label': '项目合规治理标准',

    // Value Proposition
    'home.value.title': '核心价值主张',
    'home.value.1.title': '战略视野与决策力',
    'home.value.1.desc': '结合宏观政策导向与产业发展趋势，精准把握投资方向，制定科学的战略决策。',
    'home.value.2.title': '投融资结构创新',
    'home.value.2.desc': '设计创新融资模式，优化资本成本，实现项目的可持续融资与价值最大化。',
    'home.value.3.title': '全生命周期风险管理',
    'home.value.3.desc': '建立完善的风险识别、评估、应对机制，确保在合规框架内实现收益最大化。',
    'home.value.4.title': '投后管理与协同',
    'home.value.4.desc': '通过精细化运营管理与跨部门协同，实现被投资企业的快速成长与价值释放。',

    // Expertise Overview
    'home.expertise.title': '专业能力概览',
    'home.expertise.1.title': '宏观战略规划',
    'home.expertise.1.desc': '结合国家宏观政策，优化产业布局，精准捕捉区域经济增长机遇。',
    'home.expertise.2.title': '风险控制体系',
    'home.expertise.2.desc': '构建企业级全生命周期风险管理体系，在合规中追求收益最大化。',
    'home.expertise.3.title': 'PPP/EPC项目管理',
    'home.expertise.3.desc': '领导重大基础设施项目全周期管理，精通PPP、EPC、BOT等创新模式。',
    'home.expertise.4.title': '并购整合',
    'home.expertise.4.desc': '主导多类型企业并购，通过投后管理实现协同效应与价值增长。',
    'home.expertise.5.title': '国资管理',
    'home.expertise.5.desc': '专注国有资产保值增值，通过精准投资决策实现资产高效运营。',
    'home.expertise.6.title': '合规与审计',
    'home.expertise.6.desc': '建立规范化审计流程与内部控制体系，确保投资活动全面合规。',

    // Projects
    'home.projects.title': '代表案例预览',
    'home.projects.cta': '查看全部案例',

    // Contact
    'home.contact.title': '让我们建立联系',
    'home.contact.subtitle': '欢迎讨论战略合作、投资机遇和商务合作',
    'home.contact.cta': '预约咨询',

    // Footer
    'footer.copyright': '© 2026 专业投资管理与战略规划专家。保留所有权利。',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.expertise': 'Expertise',
    'nav.projects': 'Projects',
    'nav.insights': 'Insights',
    'nav.contact': 'Contact',
    'nav.language': '中文',

    // Home Hero
    'home.hero.title': 'Driving Capital Value Through Strategic Foresight',
    'home.hero.subtitle': '20 years of expertise in SOE investment management, overseeing ¥200B+ in major projects, building robust, compliant, and efficient investment frameworks.',
    'home.hero.cta': 'Explore Expertise',

    // Identity Tags
    'home.tags.title': 'Professional Identity',
    'home.tags.1': 'Investment Management',
    'home.tags.2': 'Strategic Planning',
    'home.tags.3': 'Major Project Financing',
    'home.tags.4': 'M&A Integration',
    'home.tags.5': 'Risk Control',

    // Key Metrics
    'home.metrics.title': 'Track Record',
    'home.metrics.1.value': '20+',
    'home.metrics.1.label': 'Years SOE Investment Experience',
    'home.metrics.2.value': '¥200B+',
    'home.metrics.2.label': 'Cumulative Investment Managed',
    'home.metrics.3.value': '90%+',
    'home.metrics.3.label': 'Project Compliance & Governance',

    // Value Proposition
    'home.value.title': 'Core Value Delivery',
    'home.value.1.title': 'Strategic Vision & Decision-Making',
    'home.value.1.desc': 'Align investment direction with macro policy and industry trends, making informed strategic decisions that drive long-term value creation.',
    'home.value.2.title': 'Innovative Financing Structures',
    'home.value.2.desc': 'Design innovative financing models, optimize capital costs, and ensure sustainable project financing with maximum value realization.',
    'home.value.3.title': 'Full-Lifecycle Risk Management',
    'home.value.3.desc': 'Establish comprehensive risk identification, assessment, and response mechanisms, ensuring maximum returns within compliance frameworks.',
    'home.value.4.title': 'Post-Investment Management & Synergy',
    'home.value.4.desc': 'Drive rapid growth and value realization through refined operational management and cross-functional collaboration.',

    // Expertise Overview
    'home.expertise.title': 'Professional Capabilities Overview',
    'home.expertise.1.title': 'Macro Strategic Planning',
    'home.expertise.1.desc': 'Align investment strategy with national macro policy, optimize industrial layout, and capture regional economic growth opportunities.',
    'home.expertise.2.title': 'Risk Control System',
    'home.expertise.2.desc': 'Build enterprise-level full-lifecycle risk management systems to ensure maximum returns within compliance frameworks.',
    'home.expertise.3.title': 'PPP/EPC Project Management',
    'home.expertise.3.desc': 'Lead major infrastructure projects through full lifecycle, proficiently utilizing PPP, EPC, BOT, and other innovative models.',
    'home.expertise.4.title': 'M&A Integration',
    'home.expertise.4.desc': 'Lead acquisitions across multiple ownership types, realizing synergies and value growth through post-investment management.',
    'home.expertise.5.title': 'State Asset Management',
    'home.expertise.5.desc': 'Focus on state-owned asset preservation and appreciation through precise investment decisions and efficient operations.',
    'home.expertise.6.title': 'Compliance & Audit',
    'home.expertise.6.desc': 'Establish standardized audit processes and internal control systems ensuring full compliance of all investment activities.',

    // Projects
    'home.projects.title': 'Representative Cases',
    'home.projects.cta': 'View All Projects',

    // Contact
    'home.contact.title': 'Let\'s Connect',
    'home.contact.subtitle': 'Open to strategic discussions, investment opportunities, and professional collaboration',
    'home.contact.cta': 'Schedule a Consultation',

    // Footer
    'footer.copyright': '© 2026 Senior Investment Management & Strategic Planning Expert. All rights reserved.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === 'cn' ? 'en' : 'cn';
      try {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
      } catch {
        // ignore storage failures
      }
      return next;
    });
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
