import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();

  const milestones = language === 'cn' ? [
    { year: '2024-Present', title: '投资管理与战略规划顾问', desc: '为多家大型央企和产业集团提供投资战略和并购整合咨询' },
    { year: '2015-2024', title: '投资管理部总经理', desc: '主导投资决策、融资结构设计、风险管理体系建设' },
    { year: '2010-2015', title: '投资经理', desc: '参与重大项目评估、融资方案设计、投后管理' },
    { year: '2005-2010', title: '财务分析师', desc: '从事投资分析、财务建模、项目评估工作' },
  ] : [
    { year: '2024-Present', title: 'Investment Management & Strategic Planning Consultant', desc: 'Providing investment strategy and M&A integration consulting to major SOEs and industrial groups' },
    { year: '2015-2024', title: 'Head of Investment Management', desc: 'Led investment decision-making, financing structure design, and risk management system development' },
    { year: '2010-2015', title: 'Investment Manager', desc: 'Participated in major project evaluation, financing scheme design, and post-investment management' },
    { year: '2005-2010', title: 'Financial Analyst', desc: 'Conducted investment analysis, financial modeling, and project evaluation' },
  ];

  const principles = language === 'cn' ? [
    { title: '战略优先原则', desc: '所有投资决策都必须服从战略目标，短期收益不能牺牲长期价值。' },
    { title: '风险管理优先原则', desc: '在充分识别和评估风险的基础上，制定相应的风险应对策略。' },
    { title: '价值创造原则', desc: '投资的目的不仅是获得财务回报，更是创造长期的经济和社会价值。' },
  ] : [
    { title: 'Strategy First Principle', desc: 'All investment decisions must align with strategic objectives; short-term returns cannot sacrifice long-term value.' },
    { title: 'Risk Management Priority', desc: 'Develop appropriate risk response strategies based on comprehensive risk identification and assessment.' },
    { title: 'Value Creation Principle', desc: 'Investment aims not only for financial returns but also for creating long-term economic and social value.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Add padding for fixed nav */}
      <div className="pt-20 md:pt-24"></div>

      {/* Page Header */}
      <section className="py-12 md:py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === 'cn' ? '关于我' : 'About Me'}
          </h1>
          <p className="text-lg text-gray-600">
            {language === 'cn' ? '资深投资管理与战略规划专家' : 'Senior Investment Management & Strategic Planning Expert'}
          </p>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {language === 'cn' ? '职业历程' : 'Professional Journey'}
          </h2>
          <div className="space-y-8 mb-12">
            {language === 'cn' ? (
              <>
                <p className="text-lg text-gray-700 leading-relaxed">
                  我在大型央企投资管理领域深耕二十余年，从一线投资经理成长为投资决策的核心参与者。在这个过程中，我见证了中国经济的转型升级，也在重大投资决策中积累了丰富的实战经验。
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  我主导或参与了超过2000亿元的重大投资项目，涵盖城市开发、基础设施、产业并购等多个领域。这些项目不仅考验了我的战略眼光，更磨练了我在复杂环境下的决策能力和执行能力。
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  我坚信，优秀的投资管理不仅需要敏锐的市场洞察，更需要严谨的风险控制和完善的治理体系。在我的职业生涯中，我始终将"合规、稳健、高效"作为投资管理的核心原则。
                </p>
              </>
            ) : (
              <>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I have spent over 20 years in investment management at major state-owned enterprises, progressing from frontline investment manager to core participant in investment decision-making. Throughout this journey, I have witnessed China's economic transformation and accumulated extensive practical experience in major investment decisions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I have led or participated in investment projects exceeding ¥200 billion, spanning urban development, infrastructure, industrial M&A, and other sectors. These projects have tested my strategic vision and honed my decision-making and execution capabilities in complex environments.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I believe that excellent investment management requires not only keen market insights but also rigorous risk control and sound governance systems. Throughout my career, I have consistently adhered to "compliance, stability, and efficiency" as core principles of investment management.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Career Milestones */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            {language === 'cn' ? '职业里程碑' : 'Career Milestones'}
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 pb-8 border-b border-gray-200 last:border-b-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-amber-600 mb-1">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Methodology */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            {language === 'cn' ? '我的方法论' : 'My Approach'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-amber-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{principle.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Philosophy */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {language === 'cn' ? '管理理念与决策风格' : 'Leadership & Decision-Making Philosophy'}
          </h2>
          <div className="bg-white p-8 md:p-12 rounded-lg border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              {language === 'cn'
                ? '我的管理风格强调"理性、透明、包容"。在决策过程中，我坚持充分听取各方意见，基于数据和事实进行分析，同时保持对市场变化的敏感性。我相信，优秀的团队和完善的治理体系是实现投资目标的关键。在我的领导下，团队建立了一套科学的投资评估体系、全面的风险控制机制和高效的协作流程。'
                : 'My management style emphasizes "rationality, transparency, and inclusivity." In decision-making, I insist on listening to diverse perspectives, analyzing based on data and facts, while remaining sensitive to market changes. I believe that excellent teams and sound governance systems are key to achieving investment objectives. Under my leadership, the team has established a scientific investment evaluation system, comprehensive risk control mechanisms, and efficient collaboration processes.'}
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Outlook */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            {language === 'cn' ? '我的投资与战略观' : 'My Investment & Strategy Perspective'}
          </h2>
          <div className="space-y-8">
            {language === 'cn' ? (
              <>
                <div className="p-8 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">宏观政策导向与产业机遇</h3>
                  <p className="text-gray-700 leading-relaxed">
                    当前中国经济正处于转型升级的关键时期。国家"双循环"战略、"新基建"投资、产业升级等政策导向，为投资者提供了新的机遇。我们需要深入理解这些政策背景，精准把握产业发展方向，才能在激烈的竞争中脱颖而出。
                  </p>
                </div>
                <div className="p-8 bg-green-50 border-l-4 border-green-600 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">央国企投资管理的核心挑战</h3>
                  <p className="text-gray-700 leading-relaxed">
                    央国企投资管理面临的核心挑战是如何在保证合规和风险控制的前提下，实现收益最大化。这要求我们建立更加科学的投资决策机制、更加完善的风险管理体系，以及更加高效的投后管理流程。
                  </p>
                </div>
                <div className="p-8 bg-amber-50 border-l-4 border-amber-600 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">并购整合的成功要素</h3>
                  <p className="text-gray-700 leading-relaxed">
                    并购的成功不仅取决于收购价格，更取决于并购后的整合能力。我们需要在战略协同、组织整合、文化融合等方面做好充分的准备，才能实现"1+1{'>'}'2"的目标。
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="p-8 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Macro Policy Orientation & Industrial Opportunities</h3>
                  <p className="text-gray-700 leading-relaxed">
                    China's economy is currently at a critical juncture of transformation and upgrading. National policies such as "dual circulation" strategy, "new infrastructure" investment, and industrial upgrading present new opportunities for investors. We must deeply understand these policy contexts and accurately grasp industrial development directions to stand out in fierce competition.
                  </p>
                </div>
                <div className="p-8 bg-green-50 border-l-4 border-green-600 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Core Challenges in SOE Investment Management</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The core challenge for SOE investment management is achieving maximum returns while ensuring compliance and risk control. This requires us to establish more scientific investment decision mechanisms, more comprehensive risk management systems, and more efficient post-investment management processes.
                  </p>
                </div>
                <div className="p-8 bg-amber-50 border-l-4 border-amber-600 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Success Factors in M&A Integration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    M&A success depends not only on acquisition price but more on post-acquisition integration capability. We must prepare thoroughly in strategic synergy, organizational integration, and cultural alignment to achieve "1+1{'>'}2" objectives.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
