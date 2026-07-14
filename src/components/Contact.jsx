import React, { useState, useEffect } from 'react'
import './Contact.css'
import GlitchText from './GlitchText'

export default function Contact() {
  const [year, setYear] = useState(2026)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <section className="contact section" id="contact">
      <div className="content contact__inner">
        <div className="contact__top">
          <span className="eyebrow">Contact / 04</span>
        </div>

        <h2 className="contact__headline">
          <span className="row row--primary">
            <GlitchText speed={1.5} enableShadows={true} enableOnHover={false} className="contact__glitch">联系我</GlitchText>
          </span>
          <span className="row">Get in touch</span>
        </h2>

        <div className="contact__main">
          <div className="contact__col">
            <span className="contact__col-label">Email / 邮箱</span>
            <a href="mailto:411282814@qq.com">411282814@qq.com</a>
          </div>

          <div className="contact__col">
            <span className="contact__col-label">Phone / 电话</span>
            <a href="tel:+8618372190924">+86 183 7219 0924</a>
          </div>

          <div className="contact__col">
            <span className="contact__col-label">Location / 地址</span>
            <span className="contact__col-value">武汉，湖北</span>
          </div>
        </div>

        <div className="contact__footer">
          <div className="contact__footer-left">
            <span>© {year} Binglong Feng</span>
          </div>
          <div className="contact__footer-right">
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </section>
  )
}
