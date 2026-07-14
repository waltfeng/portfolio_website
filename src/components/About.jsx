import React from 'react'
import './About.css'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="content">
        <span className="eyebrow">About Me / 01</span>

        <h2 className="about__heading">Bridging Design & Engineering</h2>

        <div className="about__grid">
          <div className="about__portrait" style={{ position: 'relative' }}>
            <span className="about__portrait-num">N° 001</span>
            <div className="about__portrait-placeholder">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="80" r="36" stroke="currentColor" strokeWidth="1" />
                <path d="M40 180 C 40 130, 160 130, 160 180" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
              </svg>
            </div>
            <div className="about__portrait-tag">
              <span>Binglong Feng</span>
              <span style={{ color: 'var(--text-dim)' }}>Portrait — pending photo</span>
            </div>
          </div>

          <div className="about__info">
            <p className="about__intro">
              7年以上跨领域工作经验，从<em>交互设计</em>转型至<em>系统运维</em>，现专注于<em>体验运营</em>。擅长运用设计思维解决复杂业务挑战，通过工程严谨性保障交付质量，并以数据驱动持续优化。
            </p>

            <div className="about__detail-grid">
              <div className="about__detail-item">
                <span className="about__detail-label">姓名</span>
                <span className="about__detail-value">冯炳龙</span>
              </div>
              <div className="about__detail-item">
                <span className="about__detail-label">职位</span>
                <span className="about__detail-value">系统运维工程师 / 体验设计师</span>
              </div>
              <div className="about__detail-item">
                <span className="about__detail-label">邮箱</span>
                <span className="about__detail-value"><a href="mailto:411282814@qq.com">411282814@qq.com</a></span>
              </div>
              <div className="about__detail-item">
                <span className="about__detail-label">地点</span>
                <span className="about__detail-value">湖北武汉</span>
              </div>
              <div className="about__detail-item">
                <span className="about__detail-label">教育</span>
                <span className="about__detail-value">硕士 · 悉尼大学</span>
              </div>
              <div className="about__detail-item">
                <span className="about__detail-label">年限</span>
                <span className="about__detail-value">小米7年+</span>
              </div>
              <div className="about__detail-item">
                <span className="about__detail-label">电话</span>
                <span className="about__detail-value"><a href="tel:+8618372190924">+86 183 7219 0924</a></span>
              </div>
              <div className="about__detail-item">
                <span className="about__detail-label">公司</span>
                <span className="about__detail-value">小米集团</span>
              </div>
            </div>

            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-num">7<span className="unit">y</span></span>
                <span className="about__stat-label">工作经验</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num">6<span className="unit">+</span></span>
                <span className="about__stat-label">核心系统</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num">3<span className="unit">+</span></span>
                <span className="about__stat-label">项目</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num">95<span className="unit">%</span></span>
                <span className="about__stat-label">效率提升</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
