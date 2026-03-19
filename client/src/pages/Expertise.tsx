import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingUp, Shield, Briefcase, Users, BarChart3, CheckCircle, Zap, Lock, Users2 } from 'lucide-react';

export default function Expertise() {
  const { language } = useLanguage();

  const expertiseModules = language === 'cn' ? [
    {
      title: '宏观战略规划',
      desc: '结合国家宏观政策导向，深入分析产业发展趋势，为组织制定科学的投资战略和产业布局。通过系统的战略规划，帮助企业在复杂多变的经济环境中精准把握投资方向，实现长期价值创造。',
      points: ['国家宏观政策解读与战略导向分析', '产业发展趋势研究与机遇识别', '区域经济发展特征分析与投资时机把握', '产业布局优化与投资组合设计'],
      icon: TrendingUp,
    },
    {
      title: '投资管理与决策机制',
      desc: '建立科学的投资评估体系和决策机制，确保投资决策的理性性和有效性。通过完善的投资评估流程、严格的风险评估标准和高效的决策机制，实现投资收益的最大化。',
      points: ['投资评估体系建设与标准化流程', '投资决策机制设计与治理框架', '投资组合管理与收益优化', '投资绩效评估与持续改进'],
      icon: BarChart3,
    },
    {
      title: '风险控制体系',
      desc: '构建企业级全生命周期风险管理体系，建立完善的风险识别、评估、应对和监控机制。通过系统的风险管理，在确保合规的前提下，实现投资收益的最大化。',
      points: ['全生命周期风险识别与评估体系', '风险应对策略与对冲机制', '风险监控与预警体系', '合规管理与内部控制'],
      icon: Shield,
    },
    {
      title: 'PPP/EPC项目全生命周期管理',
      desc: '精通PPP、EPC、BOT等创新融资模式，具有重大基础设施项目全生命周期管理经验。从项目评估、融资结构设计、建设管理到运营维护，提供全方位的专业指导。',
      points: ['PPP/EPC/BOT等融资模式设计与应用', '项目评估与可行性研究', '融资结构设计与成本优化', '建设管理与质量控制', '运营维护与风险管理'],
      icon: Briefcase,
    },
    {
      title: '重大项目融资设计',
      desc: '设计创新的融资结构，优化资本成本，实现项目的可持续融资。具有丰富的项目融资经验，包括银行贷款、债券融资、股权融资、产业基金等多种融资方式的组合应用。',
      points: ['融资结构设计与优化', '多元融资渠道开发与管理', '融资成本控制与收益优化', '融资风险评估与管理'],
      icon: Zap,
    },
    {
      title: '国有资产管理与保值增值',
      desc: '专注国有资产的保值增值，通过精准的投资决策和高效的资产运营，实现国有资本的长期增长。深入理解国有资产管理的特殊要求，建立符合国有企业特点的资产管理体系。',
      points: ['国有资产评估与定价', '资产配置与优化', '资产运营与效率提升', '资产保值增值机制'],
      icon: Lock,
    },
    {
      title: '并购整合与投后管理',
      desc: '主导多类型企业并购，具有丰富的并购整合经验。从并购前的尽职调查、交易结构设计，到并购后的组织整合、文化融合和协同实现，提供全方位的专业支持。',
      points: ['并购目标评估与尽职调查', '交易结构设计与谈判', '并购后整合规划与执行', '协同效应实现与价值创造', '投后管理与绩效评估'],
      icon: Users,
    },
    {
      title: '合规与审计机制',
      desc: '建立规范化的审计流程和完善的内部控制体系，确保所有投资活动的合规性。深入理解国有企业和上市公司的合规要求，建立符合监管标准的治理框架。',
      points: ['合规政策制定与风险识别', '内部控制体系建设', '审计流程与标准化', '监管合规与报告'],
      icon: CheckCircle,
    },
    {
      title: '团队建设与跨部门协同',
      desc: '建立高效的投资管理团队，具有技术、商务、法律等多领域专业能力。通过完善的协作机制和激励体系，实现团队的高效协同和持续发展。',
      points: ['投资管理团队组建与能力建设', '跨部门协作机制设计', '人才激励与绩效管理', '知识管理与能力传承'],
      icon: Users2,
    },
  ] : [
    {
      title: 'Macro Strategic Planning',
      desc: 'Align investment strategy with national macro policy orientation, conduct in-depth analysis of industry development trends, and formulate scientific investment strategies and industrial layouts for organizations. Through systematic strategic planning, help enterprises accurately grasp investment directions in complex economic environments and achieve long-term value creation.',
      points: ['National macro policy interpretation and strategic orientation analysis', 'Industry development trend research and opportunity identification', 'Regional economic characteristics analysis and investment timing optimization', 'Industrial layout optimization and investment portfolio design'],
      icon: TrendingUp,
    },
    {
      title: 'Investment Management & Decision Mechanism',
      desc: 'Establish scientific investment evaluation systems and decision mechanisms to ensure rationality and effectiveness of investment decisions. Through comprehensive investment evaluation processes, rigorous risk assessment standards, and efficient decision mechanisms, maximize investment returns.',
      points: ['Investment evaluation system development and standardized processes', 'Investment decision mechanism design and governance framework', 'Investment portfolio management and return optimization', 'Investment performance evaluation and continuous improvement'],
      icon: BarChart3,
    },
    {
      title: 'Risk Control System',
      desc: 'Build enterprise-level full-lifecycle risk management systems with comprehensive risk identification, assessment, response, and monitoring mechanisms. Through systematic risk management, maximize investment returns while ensuring compliance.',
      points: ['Full-lifecycle risk identification and assessment systems', 'Risk response strategies and hedging mechanisms', 'Risk monitoring and early warning systems', 'Compliance management and internal controls'],
      icon: Shield,
    },
    {
      title: 'PPP/EPC Project Full-Lifecycle Management',
      desc: 'Proficient in innovative financing models such as PPP, EPC, and BOT with extensive experience in major infrastructure project full-lifecycle management. Provide comprehensive professional guidance from project evaluation, financing structure design, construction management to operations and maintenance.',
      points: ['PPP/EPC/BOT financing model design and application', 'Project evaluation and feasibility studies', 'Financing structure design and cost optimization', 'Construction management and quality control', 'Operations, maintenance, and risk management'],
      icon: Briefcase,
    },
    {
      title: 'Major Project Financing Design',
      desc: 'Design innovative financing structures, optimize capital costs, and ensure sustainable project financing. Rich experience in project financing including combination applications of bank loans, bond financing, equity financing, and industrial funds.',
      points: ['Financing structure design and optimization', 'Diverse financing channel development and management', 'Financing cost control and return optimization', 'Financing risk assessment and management'],
      icon: Zap,
    },
    {
      title: 'State Asset Management & Value Preservation/Appreciation',
      desc: 'Focus on state-owned asset preservation and appreciation through precise investment decisions and efficient asset operations to achieve long-term state capital growth. Deeply understand special requirements of state asset management and establish asset management systems suited to SOE characteristics.',
      points: ['State asset evaluation and valuation', 'Asset allocation and optimization', 'Asset operations and efficiency improvement', 'Asset preservation and appreciation mechanisms'],
      icon: Lock,
    },
    {
      title: 'M&A Integration & Post-Investment Management',
      desc: 'Led acquisitions across multiple enterprise types with extensive M&A integration experience. Provide comprehensive professional support from pre-acquisition due diligence and transaction structure design to post-acquisition organizational integration, cultural alignment, and synergy realization.',
      points: ['Acquisition target evaluation and due diligence', 'Transaction structure design and negotiation', 'Post-acquisition integration planning and execution', 'Synergy realization and value creation', 'Post-investment management and performance evaluation'],
      icon: Users,
    },
    {
      title: 'Compliance & Audit Mechanisms',
      desc: 'Establish standardized audit processes and comprehensive internal control systems to ensure compliance of all investment activities. Deeply understand compliance requirements of SOEs and listed companies, establishing governance frameworks aligned with regulatory standards.',
      points: ['Compliance policy development and risk identification', 'Internal control system development', 'Audit processes and standardization', 'Regulatory compliance and reporting'],
      icon: CheckCircle,
    },
    {
      title: 'Team Building & Cross-Functional Collaboration',
      desc: 'Build efficient investment management teams with multi-disciplinary professional capabilities in technology, commerce, and law. Through comprehensive collaboration mechanisms and incentive systems, achieve team efficiency and continuous development.',
      points: ['Investment management team building and capability development', 'Cross-functional collaboration mechanism design', 'Talent incentive and performance management', 'Knowledge management and capability transfer'],
      icon: Users2,
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
            {language === 'cn' ? '专业能力' : 'Professional Expertise'}
          </h1>
          <p className="text-lg text-gray-600">
            {language === 'cn'
              ? '宏观战略规划、投资管理、风险控制、项目融资、并购整合等领域的深厚专业积累'
              : 'Deep professional expertise in macro strategic planning, investment management, risk control, project financing, M&A integration, and related fields'}
          </p>
        </div>
      </section>

      {/* Expertise Modules */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {expertiseModules.map((module, index) => {
              const Icon = module.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="pb-16 border-b border-gray-200 last:border-b-0">
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start ${isEven ? '' : 'md:grid-cols-2'}`}>
                    {/* Content */}
                    <div className={isEven ? 'md:col-span-1' : 'md:col-span-1 md:order-2'}>
                      <div className="flex items-center mb-4">
                        <Icon className="w-8 h-8 text-amber-600 mr-3" />
                        <h2 className="text-3xl font-bold text-gray-900">{module.title}</h2>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        {module.desc}
                      </p>
                      <div className="space-y-3">
                        {module.points.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className={`bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-lg border border-amber-200 ${isEven ? 'md:col-span-1' : 'md:col-span-1 md:order-1'}`}>
                      <div className="flex items-center justify-center h-64">
                        <Icon className="w-32 h-32 text-amber-200 opacity-50" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'cn' ? '综合能力优势' : 'Integrated Capability Advantages'}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {language === 'cn'
              ? '通过20年的专业积累，我建立了一套完整的投资管理知识体系和实践经验。这些能力不是孤立的，而是相互支撑、相互补充的有机整体，能够为组织在复杂的投资环境中提供全方位的专业支持。'
              : 'Through 20 years of professional accumulation, I have established a comprehensive investment management knowledge system and practical experience. These capabilities are not isolated but form an integrated whole that mutually supports and complements each other, providing comprehensive professional support for organizations in complex investment environments.'}
          </p>
        </div>
      </section>
    </div>
  );
}
