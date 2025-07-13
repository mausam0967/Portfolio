import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Palette, Cloud, Award, Users, Clock, Target } from 'lucide-react'
import './About.css'

const About = () => {
  const { ref: aboutRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const stats = [
    { icon: Clock, value: '3+', label: 'Years Experience' },
    { icon: Target, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '20+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Technologies' }
  ]

  const skills = [
    {
      category: 'Frontend Development',
      icon: Code,
      description: 'React, Vue.js, TypeScript, Modern CSS',
      technologies: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS']
    },
    {
      category: 'Backend Development',
      icon: Database,
      description: 'Node.js, Python, Database Design',
      technologies: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'UI/UX Design',
      icon: Palette,
      description: 'Figma, Adobe Creative Suite, Prototyping',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Prototyping']
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      description: 'AWS, Docker, CI/CD, Git',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={aboutRef} className="about" id="about">
      <div className="container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about creating innovative digital experiences
          </p>
        </motion.div>

        <div className="about-content">
          {/* Personal Story */}
          <motion.div
            className="about-story"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div className="story-text" variants={itemVariants}>
              <h3>Hello, I'm Mausam</h3>
              <p>
                I'm a passionate full-stack developer with a love for creating beautiful, 
                functional, and user-centered digital experiences. With expertise in modern 
                web technologies and a keen eye for design, I bring ideas to life through code.
              </p>
              <p>
                My journey in tech has been driven by curiosity and a desire to solve complex 
                problems. I enjoy working with cutting-edge technologies and am always eager 
                to learn new skills and take on challenging projects.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </motion.div>

            <motion.div className="profile-image" variants={itemVariants}>
              <div className="image-container">
                <img 
                  src="/images/profile.jpeg" 
                  alt="Mausam Paudel - Full Stack Developer"
                  loading="lazy"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h4>Mausam Paudel</h4>
                    <p>Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="stat-icon">
                  <stat.icon size={32} />
                </div>
                <div className="stat-content">
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div
            className="skills-section"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 className="skills-title" variants={itemVariants}>
              My Expertise
            </motion.h3>
            
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  className="skill-card"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(255, 107, 107, 0.15)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="skill-header">
                    <div className="skill-icon">
                      <skill.icon size={32} />
                    </div>
                    <h4>{skill.category}</h4>
                  </div>
                  
                  <p className="skill-description">{skill.description}</p>
                  
                  <div className="skill-technologies">
                    {skill.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="about-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>Ready to work together?</h3>
            <p>Let's discuss your next project and bring your ideas to life.</p>
            <div className="cta-buttons">
              <a href="#contact" className="cta-button primary">
                Get In Touch
              </a>
              <a href="/resume.pdf" className="cta-button secondary" download>
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 