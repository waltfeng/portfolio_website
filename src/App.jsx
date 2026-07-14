import React, { useEffect, useRef } from 'react'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import MyWorks from './components/MyWorks.jsx'
import Strengths from './components/Strengths.jsx'
import Contact from './components/Contact.jsx'
import { initSectionAnimations, initParallaxEffects, initRevealAnimations } from './animations'

export default function App() {
  const animationInit = useRef(false)

  useEffect(() => {
    let timer

    const initializeAnimations = () => {
      if (animationInit.current) return
      animationInit.current = true
      initSectionAnimations()
      initParallaxEffects()
      initRevealAnimations()
    }

    timer = setTimeout(initializeAnimations, 100)

    return () => {
      clearTimeout(timer)
      animationInit.current = false
    }
  }, [])

  return (
    <div>
      <Hero />
      <About />
      <MyWorks />
      <Strengths />
      <Contact />
    </div>
  )
}
