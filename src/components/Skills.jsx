import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code2, Database, Globe, Smartphone, 
  Palette, Zap, Shield, Cloud,
  GitBranch, Cpu, Layers, Rocket
} from 'lucide-react'
import './Skills.css'

const Skills = () => {
  const { ref: skillsRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Globe size={32} />,
      description: 'Creating responsive and interactive user interfaces',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 90, icon: '📘' },
        { name: 'Next.js', level: 85, icon: '⚡' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        { name: 'Framer Motion', level: 88, icon: '🎭' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Database size={32} />,
      description: 'Building robust server-side applications and APIs',
      skills: [
        { name: 'Node.js', level: 92, icon: '🟢' },
        { name: 'Express.js', level: 90, icon: '🚀' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'FastAPI', level: 80, icon: '⚡' },
        { name: 'GraphQL', level: 75, icon: '🔷' }
      ]
    },
    {
      id: 'database',
      title: 'Database & Cloud',
      icon: <Cloud size={32} />,
      description: 'Managing data and deploying scalable solutions',
      skills: [
        { name: 'MongoDB', level: 88, icon: '🍃' },
        { name: 'PostgreSQL', level: 85, icon: '🐘' },
        { name: 'Redis', level: 80, icon: '🔴' },
        { name: 'AWS', level: 75, icon: '☁️' },
        { name: 'Docker', level: 82, icon: '🐳' }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: <Smartphone size={32} />,
      description: 'Cross-platform mobile app development',
      skills: [
        { name: 'React Native', level: 85, icon: '📱' },
        { name: 'Expo', level: 88, icon: '⚡' },
        { name: 'Flutter', level: 70, icon: '🦋' },
        { name: 'PWA', level: 90, icon: '🌐' }
      ]
    },
    {
      id: 'design',
      title: 'Design & UX',
      icon: <Palette size={32} />,
      description: 'Creating beautiful and intuitive user experiences',
      skills: [
        { name: 'Figma', level: 85, icon: '🎨' },
        { name: 'Adobe XD', level: 80, icon: '✏️' },
        { name: 'UI/UX Design', level: 88, icon: '👁️' },
        { name: 'Prototyping', level: 85, icon: '🔧' }
      ]
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: <GitBranch size={32} />,
      description: 'Version control and development workflow',
      skills: [
        { name: 'Git', level: 92, icon: '📝' },
        { name: 'GitHub', level: 90, icon: '🐙' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Webpack', level: 75, icon: '📦' },
        { name: 'Jest', level: 80, icon: '🧪' }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section ref={skillsRef} className="skills" id="skills">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building modern digital experiences
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="skill-category"
              variants={cardVariants}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.2 + (index * 0.1) + (skillIndex * 0.05) 
                    }}
                  >
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <motion.div
                        className="skill-progress-bar"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: 0.5 + (index * 0.1) + (skillIndex * 0.05),
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>Ready to collaborate on your next project?</h3>
          <p>Let's discuss how I can help bring your ideas to life</p>
          <div className="cta-buttons">
            <a href="#contact" className="cta-button primary">
              <span>Start a Project</span>
              <Rocket size={20} />
            </a>
            <a href="/resume.pdf" className="cta-button secondary" download>
              <span>Download Resume</span>
              <Zap size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 