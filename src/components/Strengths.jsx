import React from 'react'
import './Strengths.css'
import BorderGlow from './BorderGlow'

const items = [
  {
    titleEn: 'System Operations',
    titleCn: '系统运维',
    descEn: 'Expert in operating and optimizing 6 core business systems (WMS, TMS, Express, WOMS, etc.) at Xiaomi International, ensuring stable business operations.',
    descCn: '精通小米国际6大核心业务系统（WMS、TMS、Express、WOMS等）的运维与优化，保障业务稳定运行。',
    tags: ['WMS', 'TMS', 'Operations']
  },
  {
    titleEn: 'Experience Operations',
    titleCn: '体验运营',
    descEn: 'Established end-to-end quality inspection processes and effectiveness verification systems, significantly improving SLA compliance through data-driven service quality enhancement.',
    descCn: '建立全链路质检流程与效果验证体系，通过数据驱动提升服务质量，SLA达标率显著提升。',
    tags: ['QA', 'Metrics', 'Optimization']
  },
  {
    titleEn: 'Problem Solving',
    titleCn: '问题解决',
    descEn: 'Deep root cause analysis of complex issues, developing standardized processing procedures and alert mechanisms to effectively reduce stuck order rates and complaint rates.',
    descCn: '深入分析复杂问题根因，制定标准化处理流程与预警机制，有效降低卡单率与投诉率。',
    tags: ['Root Cause', 'Process', 'Alert']
  },
  {
    titleEn: 'Interaction Design',
    titleCn: '交互设计',
    descEn: 'Multi-modal interaction design experience covering dialogue flow, interface structure, voice experience, and end-to-end implementation.',
    descCn: '多模态交互设计经验，覆盖对话流程、界面结构、语音体验与全链路落地。',
    tags: ['Mobile', 'AI', 'UX']
  },
  {
    titleEn: 'Technical Skills',
    titleCn: '技术能力',
    descEn: 'Proficient in C, Python, Java programming languages, familiar with Linux development environment, OpenCV image processing, and Skia optimization.',
    descCn: '掌握C、Python、Java等编程语言，熟悉Linux开发环境、OpenCV图像处理与Skia优化。',
    tags: ['Python', 'Linux', 'OpenCV']
  },
  {
    titleEn: 'Language & Collaboration',
    titleCn: '语言协作',
    descEn: 'Fluent in English (IELTS 7.0), strong cross-departmental communication skills, driving efficient multi-threaded problem resolution.',
    descCn: '英语听说读写流利（雅思7.0），具备跨部门沟通能力，推动多线程问题高效解决。',
    tags: ['English', 'Communication', 'Teamwork']
  }
]

export default function Strengths() {
  return (
    <section className="section strengths" id="strengths">
      <div className="content">
        <span className="eyebrow">Strengths / 03</span>

        <div className="strengths__head">
          <h2 className="strengths__heading">What I bring to the table</h2>
        </div>

        <div className="strengths__grid">
          {items.map((it, i) => (
            <BorderGlow
              key={i}
              edgeSensitivity={30}
              glowColor="0 80 60"
              backgroundColor="#120F17"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1.0}
              coneSpread={25}
              colors={['#c084fc', '#ef1a3f', '#38bdf8']}
              className="strengths__glow-wrapper"
            >
              <div className="strengths__card">
                <span className="strengths__icon">{i + 1}</span>
                <h3 className="strengths__title">
                  <span className="strengths__title-cn">{it.titleCn}</span>
                  <span className="strengths__title-en">{it.titleEn}</span>
                </h3>
                <p className="strengths__desc">
                  <span className="strengths__desc-cn">{it.descCn}</span>
                  <span className="strengths__desc-en">{it.descEn}</span>
                </p>
                <div className="strengths__tags">
                  {it.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  )
}
