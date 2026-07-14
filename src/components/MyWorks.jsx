import React from 'react'
import CardSwap, { Card } from './CardSwap'
import './MyWorks.css'

const projects = [
  {
    num: '01',
    title: 'Apia Fast Online Quoting System',
    subtitle: '保险快速报价系统',
    tags: ['UX Design', 'Insurance', 'Quoting System'],
    year: '2018',
    client: 'Apia Insurance',
    role: 'Interaction Designer',
    desc: 'A fast online quoting system that can improve the online quoting experience of Apia and increase the sales of Apia insurance company. 为Apia公司设计的快速保险单系统让用户可以更快的获得保险的估价，从而积累更多的潜在用户。让他们不再为繁琐的家庭保险办理步骤望而却步。',
    images: [
      '/assets/myworks/apia1.png',
      '/assets/myworks/apia2.png',
      '/assets/myworks/apia3.png',
      '/assets/myworks/apia4.png',
      '/assets/myworks/apia5.png'
    ]
  },
  {
    num: '02',
    title: 'International Order Stuck Resolution',
    subtitle: 'Order Stuck Resolution',
    tags: ['Operations', 'Problem Resolution', 'Global'],
    year: '2024-2025',
    client: 'Xiaomi Global Logistics',
    role: 'Product Experience Ops Lead',
    desc: 'Resolved the issue of 2.83% international order stuck rate. By analyzing root causes, establishing standardized processing procedures, and building alert mechanisms, the stuck rate was reduced to approximately 0.6%.'
  },
  {
    num: '03',
    title: 'Service Platform Optimization',
    subtitle: 'Core Systems Support',
    tags: ['System Operations', 'Support', 'Enterprise'],
    year: '2020-2024',
    client: 'Xiaomi',
    role: 'System Operations Engineer',
    desc: 'Responsible for service support and experience enhancement for 6 core business systems of Xiaomi International (WMS, TMS, Express, WOMS, etc.). Handled user issues and ensured stable business operations.'
  },
  {
    num: '04',
    title: 'Mobile AI Assistant Design',
    subtitle: 'AI Assistant UX Design',
    tags: ['Mobile', 'AI', 'Interaction Design'],
    year: '2018-2019',
    client: 'Xiaomi Mobile',
    role: 'Interaction Designer (Intern)',
    desc: 'Responsible for multi-modal interaction design of Xiaomi Mobile AI Assistant, covering dialogue flow, interface structure, voice experience, and end-to-end implementation.'
  }
]

export default function MyWorks() {
  return (
    <section className="section myworks" id="myworks">
      <div className="content myworks__inner">
        <span className="eyebrow">Selected Work / 02</span>

        <div className="myworks__header">
          <h2 className="myworks__heading">MY WORKS</h2>
          <div className="myworks__meta">
            <span>2018 — 2026</span>
            <strong>{projects.length} Case Studies</strong>
            <span style={{ color: 'var(--text-dim)' }}>Full portfolio available upon request</span>
          </div>
        </div>

        <div className="myworks__main">
          <div className="myworks__list">
            {projects.map(p => (
              <article className="myworks__item" key={p.num}>
                <div className="myworks__item-header">
                  <span className="myworks__item-num">{p.num}</span>
                  <div className="myworks__item-title">
                    <h3>{p.title}</h3>
                    <small>{p.subtitle}</small>
                  </div>
                </div>
                <p className="myworks__item-desc">{p.desc}</p>
                <div className="myworks__item-meta">
                  <div><span>Year</span><strong>{p.year}</strong></div>
                  <div><span>Client</span><strong>{p.client}</strong></div>
                  <div><span>Role</span><strong>{p.role}</strong></div>
                </div>
                <div className="myworks__item-tags">
                  {p.tags.map(t => <span className="myworks__tag" key={t}>{t}</span>)}
                </div>
              </article>
            ))}
          </div>

          <div className="myworks__cardswap">
            <CardSwap
              width={480}
              height={340}
              cardDistance={50}
              verticalDistance={60}
              delay={3500}
              pauseOnHover={true}
              skewAmount={4}
              easing="elastic"
            >
              {projects[0].images.map((img, idx) => (
                <Card key={idx} customClass="myworks__card myworks__card--image">
                  <div className="myworks__card-image-inner">
                    <div className="myworks__card-image-head">
                      <span className="myworks__card-image-num">01 / {String(idx + 1).padStart(2, '0')}</span>
                      <span className="myworks__card-image-label">Apia Fast Quote</span>
                    </div>
                    <div className="myworks__card-img-wrap">
                      <img src={img} alt={`Apia project screenshot ${idx + 1}`} className="myworks__card-img" />
                    </div>
                    <div className="myworks__card-image-foot">
                      <span className="myworks__card-image-title">Apia Home Insurance</span>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  )
}
