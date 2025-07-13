import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { useThreeJS } from '../hooks/useThreeJS'
import './Hero.css'

const Hero = () => {
  const canvasRef = useRef(null)
  const { ref: heroRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  // Use optimized Three.js hook
  const { isInitialized } = useThreeJS(canvasRef, {
    particleCount: 800,
    enableOnMobile: true,
    enableOnLowPower: false,
    maxFPS: 60
  })

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <section ref={heroRef} className="hero" id="home">
      <canvas ref={canvasRef} className="three-canvas" />
      <div className="three-overlay" />
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Mausam Paudel
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Full Stack Developer & Creative Technologist
        </motion.p>
        
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          I craft digital experiences that blend innovative design with cutting-edge technology. 
          Passionate about creating solutions that make a difference.
        </motion.p>
        
        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <button onClick={scrollToProjects} className="cta-button primary">
            <span>View My Work</span>
            <ArrowDown size={20} />
          </button>
          
          <a href="/resume.pdf" className="cta-button secondary" download>
            <Download size={20} />
            <span>Download CV</span>
          </a>
          
          <a href="mailto:paudelmausam00766@gmail.com" className="cta-button secondary">
            <Mail size={20} />
            <span>Get In Touch</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="scroll-arrow" />
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}

export default Hero 