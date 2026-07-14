import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let animationsInitialized = false

export const initSectionAnimations = () => {
  if (animationsInitialized) return
  gsap.from('.about__heading', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 70%',
      once: true,
      markers: false
    },
    x: -120,
    opacity: 0,
    duration: 1.4,
    ease: 'power4.out'
  })

  gsap.from('.about__portrait', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 65%',
      once: true
    },
    scale: 0.75,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  })

  gsap.from('.about__intro', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 60%',
      once: true
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.about__detail-item', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 58%',
      once: true
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.06
  })

  gsap.from('.about__stat', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 50%',
      once: true
    },
    y: 35,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.12
  })

  gsap.from('.myworks__heading', {
    scrollTrigger: {
      trigger: '#myworks',
      start: 'top 70%',
      once: true
    },
    x: 120,
    opacity: 0,
    duration: 1.4,
    ease: 'power4.out'
  })

  gsap.from('.myworks__meta', {
    scrollTrigger: {
      trigger: '#myworks',
      start: 'top 65%',
      once: true
    },
    y: 30,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out'
  })

  gsap.from('.myworks__item', {
    scrollTrigger: {
      trigger: '#myworks',
      start: 'top 60%',
      once: true
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
    stagger: 0.15
  })

  gsap.from('.myworks__cardswap', {
    scrollTrigger: {
      trigger: '#myworks',
      start: 'top 50%',
      once: true
    },
    scale: 0.85,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  })

  gsap.from('.strengths__heading', {
    scrollTrigger: {
      trigger: '#strengths',
      start: 'top 70%',
      once: true
    },
    y: -100,
    scale: 1.15,
    opacity: 0,
    duration: 1.4,
    ease: 'power4.out'
  })

  gsap.from('.strengths__glow-wrapper', {
    scrollTrigger: {
      trigger: '#strengths',
      start: 'top 60%',
      once: true
    },
    y: 80,
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
    stagger: 0.12
  })

  gsap.from('.contact__headline', {
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 70%',
      once: true
    },
    y: 100,
    opacity: 0,
    duration: 1.4,
    ease: 'power4.out'
  })

  gsap.from('.contact__col', {
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 60%',
      once: true
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.18
  })

  gsap.from('.contact__footer', {
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 50%',
      once: true
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })

  animationsInitialized = true
}

export const initParallaxEffects = () => {
  if (animationsInitialized) return
  gsap.to('.hero__video', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5
    },
    scale: 1.25,
    y: 150,
    ease: 'none'
  })

  gsap.to('.hero__grain', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 2
    },
    y: 250,
    ease: 'none'
  })

  gsap.to('.myworks__card-img', {
    scrollTrigger: {
      trigger: '#myworks',
      start: 'top 85%',
      end: 'bottom 15%',
      scrub: 1.5
    },
    y: -40,
    ease: 'none'
  })

  gsap.to('.about__portrait', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 90%',
      end: 'bottom 20%',
      scrub: 1.5
    },
    y: 30,
    ease: 'none'
  })

  gsap.to('.strengths__card', {
    scrollTrigger: {
      trigger: '#strengths',
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1
    },
    y: 20,
    ease: 'none'
  })

  animationsInitialized = true
}

export const initRevealAnimations = () => {
  if (animationsInitialized) return
  document.querySelectorAll('img[data-reveal]').forEach(img => {
    gsap.from(img, {
      scrollTrigger: {
        trigger: img.parentElement,
        start: 'top 85%',
        once: true
      },
      clipPath: 'inset(0 100% 0 0)',
      duration: 1.2,
      ease: 'power4.out'
    })
  })
}
