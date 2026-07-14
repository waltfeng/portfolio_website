import React from 'react'
import './Work.css'

const projects = [
  {
    num: '01',
    title: 'International Customer Service QA System',
    subtitle: 'Quality Assurance System',
    tags: ['Quality Assurance', 'Process Optimization', 'International'],
    year: '2025-2026',
    client: 'Xiaomi International',
    role: 'Product Experience Ops Lead',
    desc: 'Addressed issues such as excessively long ticket processing time (up to 100 hours) and 50%+ SLA timeout rate in the international customer service system. Established end-to-end quality inspection processes and effectiveness verification systems. Developed quality inspection rules, standardized processing workflows, and improved service quality through ticket profiling, service standard promotion, and intelligent alerting.'
  },
  {
    num: '02',
    title: 'International Order Stuck Resolution',
    subtitle: 'Order Stuck Resolution',
    tags: ['Operations', 'Problem Resolution', 'Global'],
    year: '2024-2025',
    client: 'Xiaomi Global Logistics',
    role: 'Product Experience Ops Lead',
    desc: 'Resolved the issue of 2.83% international order stuck rate. By analyzing root causes, establishing standardized processing procedures, and building alert mechanisms, the stuck rate was reduced to approximately 0.6%, while complaint rates and processing times were also decreased.'
  },
  {
    num: '03',
    title: 'Service Platform Optimization',
    subtitle: 'Core Systems Support',
    tags: ['System Operations', 'Support', 'Enterprise'],
    year: '2020-2024',
    client: 'Xiaomi',
    role: 'System Operations Engineer',
    desc: 'Responsible for service support and experience enhancement for 6 core business systems of Xiaomi International (WMS, TMS, Express, WOMS, etc.). Handled user issues, established service standards, promoted system optimization, and ensured stable business operations.'
  },
  {
    num: '04',
    title: 'Mobile AI Assistant Design',
    subtitle: 'AI Assistant UX Design',
    tags: ['Mobile', 'AI', 'Interaction Design'],
    year: '2018-2019',
    client: 'Xiaomi Mobile',
    role: 'Interaction Designer (Intern)',
    desc: 'Responsible for multi-modal interaction design of Xiaomi Mobile AI Assistant, covering dialogue flow, interface structure, voice experience, and end-to-end implementation to enhance user interaction experience.'
  }
]

function MockArt({ variant = 0 }) {
  const colors = [
    ['rgba(124,156,255,0.18)', 'rgba(124,156,255,0.6)'],
    ['rgba(180,140,255,0.18)', 'rgba(180,140,255,0.6)'],
    ['rgba(255,180,120,0.16)', 'rgba(255,180,120,0.55)'],
    ['rgba(120,220,180,0.16)', 'rgba(120,220,180,0.55)']
  ]
  const c = colors[variant % colors.length]
  return (
    <div className="work__media-inner" style={{
      background: `radial-gradient(ellipse at 50% 50%, ${c[0]}, transparent 60%), linear-gradient(180deg, #15151a 0%, #0a0a0c 100%)`
    }}>
      <div className="work__media-grid" />
      <div className="work__mock-art" style={{ boxShadow: `0 40px 80px -20px rgba(0,0,0,0.6), 0 0 60px ${c[1]}22` }}>
        <div className="work__mock-art-bar">
          <span /><span /><span />
        </div>
        <div className="work__mock-art-body">
          {[0, 1, 2, 3, 4, 5].map(i => (
            <div key={i} className="work__mock-cell" style={{
              background: i === 1 ? `${c[0]}` : 'rgba(255,255,255,0.02)'
            }} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section className="section work" id="work">
      <div className="content">
        <span className="eyebrow">Selected Work / 02</span>

        <div className="work__header">
          <h2 className="work__heading">MY WORKS</h2>
          <div className="work__meta">
            <span>2018 — 2026</span>
            <strong>4 Case Studies</strong>
            <span style={{ color: 'var(--text-dim)' }}>Full portfolio available upon request</span>
          </div>
        </div>

        <div className="work__list">
          {projects.map((p, i) => (
            <article className="work__card" key={p.num}>
              <div className="work__card-header">
                <span className="work__card-num">{p.num}</span>
                <div>
                  <h3 className="work__card-title">
                    {p.title}
                    <small>{p.subtitle}</small>
                  </h3>
                </div>
                <div className="work__card-tags">
                  {p.tags.map(t => <span className="work__tag" key={t}>{t}</span>)}
                </div>
              </div>

              <div className="work__media">
                <MockArt variant={i} />
                <div className="work__media-label">
                  <span>Project {p.num}</span>
                  <strong>{p.title}</strong>
                </div>
                <span className="work__media-arrow">↗</span>
              </div>

              <div className="work__card-desc">
                <p>{p.desc}</p>
                <div className="work__card-role">
                  <div className="work__card-role-row"><span>Year</span><span>{p.year}</span></div>
                  <div className="work__card-role-row"><span>Client</span><span>{p.client}</span></div>
                  <div className="work__card-role-row"><span>Role</span><span>{p.role}</span></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
