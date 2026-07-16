import React, { useEffect, useRef } from 'react'
import './Hero.css'
import FlowingMenu from './FlowingMenu'
import gsap from 'gsap'

const navItems = [
  { link: '#about', text: 'ABOUT ME', image: '' },
  { link: '#myworks', text: 'MY WORKS', image: '' },
  { link: '#strengths', text: 'STRENGTHS', image: '' },
  { link: '#contact', text: 'CONTACT', image: '' }
];

export default function Hero() {
  const heroRef = useRef(null)
  const eyebrowRef = useRef(null)
  const titleRefs = useRef([])
  const descRef = useRef(null)
  const buttonRef = useRef(null)
  const navRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

    gsap.set(eyebrowRef.current, { x: -80, opacity: 0 })
    gsap.set(titleRefs.current, { y: 120, scaleX: 0.6, opacity: 0 })
    gsap.set(descRef.current, { y: 60, opacity: 0 })
    gsap.set(buttonRef.current, { y: 40, opacity: 0 })
    gsap.set(navRef.current, { y: -80, opacity: 0 })
    gsap.set(videoRef.current, { scale: 1.15, opacity: 0 })

    tl.to(videoRef.current, {
      scale: 1,
      opacity: 0.55,
      duration: 2.5,
      ease: 'power3.out'
    })
      .to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      }, '-=2')
      .to(eyebrowRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power4.out'
      }, '-=1.5')
      .to(titleRefs.current[0], {
        y: 0,
        scaleX: 1,
        opacity: 1,
        duration: 1.1,
        ease: 'power4.out'
      }, '-=0.7')
      .to(titleRefs.current[1], {
        y: 0,
        scaleX: 1,
        opacity: 1,
        duration: 1.1,
        ease: 'power4.out'
      }, '-=0.85')
      .to(titleRefs.current[2], {
        y: 0,
        scaleX: 1,
        opacity: 1,
        duration: 1.1,
        ease: 'power4.out'
      }, '-=0.85')
      .to(descRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out'
      }, '-=0.6')
      .to(buttonRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out'
      }, '-=0.5')

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero__video-fallback" />
      <video
        ref={videoRef}
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="https://pub-0ba8b4163ecf47fca7d629cc97880427.r2.dev/AE_FInal.mp4"
      />
      <div className="hero__scrim" />
      <div className="hero__grain" />

      <nav className="nav" ref={navRef}>
        <div className="content nav__inner">
          <a href="#top" className="nav__logo">
            <span className="nav__logo-mark">W</span>
            <span>WALT</span>
          </a>
          <div className="nav__flowing">
            <FlowingMenu
              items={navItems}
              speed={12}
              textColor="#e8e8ea"
              bgColor="transparent"
              marqueeBgColor="#e8e8ea"
              marqueeTextColor="#0a0a0c"
              borderColor="rgba(255,255,255,0.08)"
            />
          </div>
        </div>
      </nav>

      <div className="hero__body">
        <div className="content hero__grid">
          <div className="hero__left">
            <div className="hero__eyebrow" ref={eyebrowRef}>
              <span className="hero__eyebrow-line" />
              <span>UI & UX DESIGNER / SYSTEMS OPERATIONS ENGINEER</span>
            </div>

            <h1 className="hero__title">
              <span className="hero__title-word" ref={el => titleRefs.current[0] = el}>INTERACT.</span>
              <span className="hero__title-word" ref={el => titleRefs.current[1] = el}>DESIGN.</span>
              <span className="hero__title-word" ref={el => titleRefs.current[2] = el}>OPERATE.</span>
            </h1>

            <p className="hero__desc" ref={descRef}>
              Bridging interaction design with system operations.
              Creating seamless experiences at the intersection of design thinking and engineering rigor.
            </p>

            <div className="hero__cta">
              <a href="#contact" className="hero__button" ref={buttonRef}>
                <span>GET IN TOUCH</span>
                <span className="hero__button-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
