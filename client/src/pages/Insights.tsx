import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, TrendingUp, Lightbulb, BookOpen } from 'lucide-react';

export default function Insights() {
  const { language } = useLanguage();

  const insights = language === 'cn' ? [
    {
      id: 1,
      title: '宏观政策导向下的产业投资机遇',
      category: '宏观政策',
      date: '2026-03-19',
      excerpt: '当前中国经济正处于转型升级的关键时期，"双循环"战略、"新基建"投资、产业升级等政策导向为投资者提供了新的机遇。本文分析了这些政策背景下的产业投资机遇...',
      content: `当前中国经济正处于转型升级的关键时期，"双循环"战略、"新基建"投资、产业升级等政策导向为投资者提供了新的机遇。

在"双循环"战略框架下，国内大循环和国际循环相互促进，这为产业投资带来了新的方向。我们需要深入理解这一战略的内涵，精准把握产业发展方向。

"新基建"投资涵盖5G、数据中心、人工智能等新兴领域，这些领域的投资潜力巨大。同时，传统基础设施的升级改造也提供了投资机遇。

产业升级是一个长期的过程，需要我们在战略高度上把握机遇，在执行层面上精细化管理。`,
      icon: TrendingUp,
    },
    {
      id: 2,
      title: '央国企投资管理的核心挑战与应对',
      category: '投资管理',
      date: '2026-03-15',
      excerpt: '央国企投资管理面临的核心挑战是如何在保证合规和风险控制的前提下，实现收益最大化。本文探讨了这一挑战的根源，并提出了系统的应对策略...',
      content: `央国企投资管理面临的核心挑战是如何在保证合规和风险控制的前提下，实现收益最大化。

首先，央国企投资管理需要在严格的监管框架下进行。这要求我们建立更加科学的投资决策机制，确保每一项投资决策都经过充分的论证和评估。

其次，风险管理是投资管理的重要内容。我们需要建立全面的风险识别、评估、应对和监控体系，确保在风险可控的前提下实现收益最大化。

第三，投后管理是实现投资价值的关键。我们需要通过精细化的运营管理和跨部门协同，实现被投资企业的快速成长和价值释放。`,
      icon: Lightbulb,
    },
    {
      id: 3,
      title: '并购整合成功的关键要素',
      category: '并购整合',
      date: '2026-03-10',
      excerpt: '并购的成功不仅取决于收购价格，更取决于并购后的整合能力。本文总结了多个成功并购案例的经验，提出了并购整合的关键成功要素...',
      content: `并购的成功不仅取决于收购价格，更取决于并购后的整合能力。

战略协同是并购整合的首要任务。我们需要在并购前充分论证战略协同的可能性，在并购后通过系统的整合规划实现战略目标。

组织整合涉及组织结构、管理体系、流程优化等多个方面。我们需要在保持被收购企业活力的同时，实现管理体系的统一和优化。

文化融合是并购整合中最具挑战性的部分。不同企业的文化差异可能导致整合困难，我们需要通过充分的沟通和理解，实现文化的融合。

最后，投后管理的持续性至关重要。我们需要建立长期的投后管理机制，确保并购的价值在长期内得以实现。`,
      icon: BookOpen,
    },
  ] : [
    {
      id: 1,
      title: 'Industrial Investment Opportunities Under Macro Policy Orientation',
      category: 'Macro Policy',
      date: '2026-03-19',
      excerpt: 'China\'s economy is at a critical juncture of transformation and upgrading. Policies such as "dual circulation" strategy, "new infrastructure" investment, and industrial upgrading present new opportunities for investors. This article analyzes industrial investment opportunities under these policy contexts...',
      content: `China's economy is at a critical juncture of transformation and upgrading. Policies such as "dual circulation" strategy, "new infrastructure" investment, and industrial upgrading present new opportunities for investors.

Under the "dual circulation" strategic framework, domestic and international circulation promote each other, providing new directions for industrial investment. We must deeply understand the connotation of this strategy and accurately grasp industrial development directions.

"New infrastructure" investment spans 5G, data centers, artificial intelligence, and other emerging fields. These sectors offer enormous investment potential. Simultaneously, upgrades and renovations of traditional infrastructure also provide investment opportunities.

Industrial upgrading is a long-term process requiring us to grasp opportunities at the strategic level and implement refined management at the execution level.`,
      icon: TrendingUp,
    },
    {
      id: 2,
      title: 'Core Challenges and Responses in SOE Investment Management',
      category: 'Investment Management',
      date: '2026-03-15',
      excerpt: 'The core challenge for SOE investment management is achieving maximum returns while ensuring compliance and risk control. This article explores the root causes of this challenge and proposes systematic response strategies...',
      content: `The core challenge for SOE investment management is achieving maximum returns while ensuring compliance and risk control.

First, SOE investment management must operate within strict regulatory frameworks. This requires us to establish more scientific investment decision mechanisms, ensuring each investment decision undergoes thorough demonstration and evaluation.

Second, risk management is critical to investment management. We must establish comprehensive systems for risk identification, assessment, response, and monitoring, ensuring maximum returns within controllable risk parameters.

Third, post-investment management is key to realizing investment value. We must achieve rapid growth and value realization of invested enterprises through refined operational management and cross-functional collaboration.`,
      icon: Lightbulb,
    },
    {
      id: 3,
      title: 'Key Success Factors in M&A Integration',
      category: 'M&A Integration',
      date: '2026-03-10',
      excerpt: 'M&A success depends not only on acquisition price but more on post-acquisition integration capability. This article summarizes experiences from multiple successful M&A cases and proposes key success factors for M&A integration...',
      content: `M&A success depends not only on acquisition price but more on post-acquisition integration capability.

Strategic synergy is the primary task of M&A integration. We must thoroughly demonstrate the possibility of strategic synergy before acquisition and realize strategic objectives through systematic integration planning after acquisition.

Organizational integration involves organizational structure, management systems, and process optimization. We must achieve management system unification and optimization while maintaining the vitality of acquired enterprises.

Cultural alignment is the most challenging aspect of M&A integration. Cultural differences between enterprises may cause integration difficulties. We must achieve cultural fusion through sufficient communication and understanding.

Finally, the continuity of post-investment management is crucial. We must establish long-term post-investment management mechanisms to ensure M&A value realization over time.`,
      icon: BookOpen,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Add padding for fixed nav */}
      <div className="pt-20 md:pt-24"></div>

      {/* Page Header */}
      <section className="py-12 md:py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === 'cn' ? '观点洞察' : 'Insights & Perspectives'}
          </h1>
          <p className="text-lg text-gray-600">
            {language === 'cn'
              ? '对宏观政策、产业投资、企业管理的专业观察与思考'
              : 'Professional observations and insights on macro policy, industrial investment, and enterprise management'}
          </p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight) => {
              const Icon = insight.icon;
              return (
                <div
                  key={insight.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                >
                  {/* Icon Area */}
                  <div className="h-48 bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center group-hover:from-amber-50 group-hover:to-orange-50 transition-colors">
                    <Icon className="w-24 h-24 text-gray-300 group-hover:text-amber-200 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                        {insight.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-slate-900">
                      {insight.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {insight.excerpt}
                    </p>

                    {/* Date */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-500">{insight.date}</span>
                      <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full Articles Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            {language === 'cn' ? '深度观点' : 'In-Depth Perspectives'}
          </h2>
          <div className="space-y-12">
            {insights.map((insight) => (
              <div key={insight.id} className="pb-12 border-b border-gray-200 last:border-b-0">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full mb-3">
                    {insight.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{insight.title}</h3>
                  <p className="text-sm text-gray-500">{insight.date}</p>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  {insight.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'cn' ? '想要深入讨论？' : 'Want to Discuss Further?'}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {language === 'cn'
              ? '欢迎分享您的观点和想法'
              : 'Welcome to share your perspectives and ideas'}
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            {language === 'cn' ? '联系我' : 'Get in Touch'}
          </Link>
        </div>
      </section>
    </div>
  );
}
