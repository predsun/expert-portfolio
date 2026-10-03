import React, { useState } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Building2, Zap, TrendingUp } from 'lucide-react';

export default function Projects() {
  const { language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = language === 'cn' ? [
    {
      id: 1,
      title: '城市综合体开发与更新项目',
      type: '城市开发',
      scale: '¥30B+',
      challenge: '存量土地资源低效利用，需要通过创新模式实现城市更新和资源激活',
      role: '投资决策核心参与者，融资结构设计与执行负责人',
      actions: ['制定"投资+建设+运营"一体化发展模式', '设计创新融资结构，引入社会资本参与', '建立项目全生命周期管理体系', '实现政府、企业、社会资本的三方协同'],
      outcome: '成功激活¥30B+存量土地资源，实现城市更新与经济增长双重目标',
      tags: ['战略规划', '融资创新', '政府协作', '城市更新'],
      icon: Building2,
    },
    {
      id: 2,
      title: '重大交通基础设施PPP融资项目',
      type: '基础设施',
      scale: '¥50B+',
      challenge: '大规模基础设施项目融资需求大，传统融资模式难以满足，需要创新融资结构',
      role: '融资结构设计与优化负责人，PPP项目管理专家',
      actions: ['设计全周期动态财务模型，优化融资结构', '创新PPP模式应用，降低融资成本', '建立风险分担机制，保护各方利益', '实现融资成本优化与项目可持续运营'],
      outcome: '成功融资10+项目，平均融资成本下降15%，项目全部按期完成',
      tags: ['融资创新', 'PPP模式', '风险对冲', '成本优化'],
      icon: Zap,
    },
    {
      id: 3,
      title: '产业链并购与整合项目',
      type: '并购整合',
      scale: '¥80B+',
      challenge: '多类型企业并购整合难度大，需要实现战略协同与文化融合',
      role: '并购战略制定与整合执行负责人',
      actions: ['制定产业链并购战略，识别优质并购目标', '设计创新交易结构，优化并购成本', '建立并购后整合体系，实现协同效应', '通过投后管理实现被投企业持续增长'],
      outcome: '成功并购10+企业，实现平均年增长15%，创造协同价值¥20B+',
      tags: ['并购战略', '投后协同', '价值创造', '产业整合'],
      icon: TrendingUp,
    },
  ] : [
    {
      id: 1,
      title: 'Urban Development & Renewal Project',
      type: 'Urban Development',
      scale: '¥30B+',
      challenge: 'Inefficient utilization of stock land resources requiring innovative models for urban renewal and resource activation',
      role: 'Core participant in investment decision-making, responsible for financing structure design and execution',
      actions: ['Formulated integrated "Investment + Construction + Operation" development model', 'Designed innovative financing structure attracting social capital participation', 'Established full-lifecycle project management system', 'Achieved tri-party coordination among government, enterprises, and social capital'],
      outcome: 'Successfully activated ¥30B+ stock land resources, achieving dual objectives of urban renewal and economic growth',
      tags: ['Strategic Planning', 'Financing Innovation', 'Government Collaboration', 'Urban Renewal'],
      icon: Building2,
    },
    {
      id: 2,
      title: 'Major Transport Infrastructure PPP Financing Project',
      type: 'Infrastructure',
      scale: '¥50B+',
      challenge: 'Large-scale infrastructure projects require substantial financing; traditional models insufficient, requiring innovative financing structures',
      role: 'Responsible for financing structure design and optimization, PPP project management expert',
      actions: ['Designed full-cycle dynamic financial models optimizing financing structure', 'Innovated PPP model applications reducing financing costs', 'Established risk-sharing mechanisms protecting all parties\' interests', 'Achieved financing cost optimization and sustainable project operations'],
      outcome: 'Successfully financed 10+ projects with 15% average financing cost reduction; all projects completed on schedule',
      tags: ['Financing Innovation', 'PPP Model', 'Risk Hedging', 'Cost Optimization'],
      icon: Zap,
    },
    {
      id: 3,
      title: 'Industrial Chain M&A & Integration Project',
      type: 'M&A Integration',
      scale: '¥80B+',
      challenge: 'Multi-type enterprise M&A integration complexity requires strategic synergy and cultural alignment',
      role: 'Responsible for M&A strategy formulation and integration execution',
      actions: ['Formulated industrial chain M&A strategy identifying quality acquisition targets', 'Designed innovative transaction structures optimizing acquisition costs', 'Established post-acquisition integration systems realizing synergies', 'Achieved continuous growth of acquired enterprises through post-investment management'],
      outcome: 'Successfully acquired 10+ enterprises achieving 15% average annual growth and creating ¥20B+ synergy value',
      tags: ['M&A Strategy', 'Post-Investment Synergy', 'Value Creation', 'Industrial Integration'],
      icon: TrendingUp,
    },
  ];

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));
  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.tags.includes(selectedFilter));

  return (
    <div className="min-h-screen bg-white">
      {/* Add padding for fixed nav */}
      <div className="pt-20 md:pt-24"></div>

      {/* Page Header */}
      <section className="py-12 md:py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === 'cn' ? '代表案例' : 'Representative Cases'}
          </h1>
          <p className="text-lg text-gray-600">
            {language === 'cn'
              ? '重大投资项目展示，体现战略眼光、执行能力和价值创造'
              : 'Major investment projects demonstrating strategic vision, execution capability, and value creation'}
          </p>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="py-8 md:py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {language === 'cn' ? '全部' : 'All'}
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedFilter(tag)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedFilter === tag
                    ? 'bg-slate-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={project.id}
                  className="pb-12 border-b border-gray-200 last:border-b-0"
                >
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start ${!isEven ? 'md:grid-cols-2' : ''}`}>
                    {/* Content */}
                    <div className={isEven ? 'md:col-span-1' : 'md:col-span-1 md:order-2'}>
                      {/* Type Badge */}
                      <div className="inline-block mb-4">
                        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">
                          {project.type}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>

                      {/* Scale */}
                      <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="text-sm text-gray-600 mb-1">
                          {language === 'cn' ? '投资规模' : 'Investment Scale'}
                        </div>
                        <div className="text-2xl font-bold text-slate-900">{project.scale}</div>
                      </div>

                      {/* Challenge */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {language === 'cn' ? '面临的挑战' : 'Challenge'}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                      </div>

                      {/* Role */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {language === 'cn' ? '我的角色' : 'My Role'}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{project.role}</p>
                      </div>

                      {/* Key Actions */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {language === 'cn' ? '关键行动' : 'Key Actions'}
                        </h3>
                        <ul className="space-y-2">
                          {project.actions.map((action, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <ArrowRight className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                              <span className="text-gray-600">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Outcome */}
                      <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-600 rounded-r-lg">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {language === 'cn' ? '实现成果' : 'Outcome'}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{project.outcome}</p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className={`bg-gradient-to-br from-slate-50 to-gray-100 p-12 rounded-lg border border-gray-200 flex items-center justify-center h-96 ${isEven ? 'md:col-span-1' : 'md:col-span-1 md:order-1'}`}>
                      <Icon className="w-40 h-40 text-gray-300" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'cn' ? '感兴趣的项目？' : 'Interested in a Project?'}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {language === 'cn'
              ? '欢迎讨论更多项目细节或探讨合作机遇'
              : 'Welcome to discuss more project details or explore collaboration opportunities'}
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            {language === 'cn' ? '联系我' : 'Get in Touch'}
          </Link>
        </div>
      </section>
    </div>
  );
}
