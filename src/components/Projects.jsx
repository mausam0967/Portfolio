import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ExternalLink, Github, Eye, Code2, 
  Globe, Smartphone, Database, Palette,
  Filter, X, ArrowRight
} from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const { ref: projectsRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filters = [
    { id: 'all', label: 'All Projects', icon: <Code2 size={16} /> },
    { id: 'web', label: 'Web Apps', icon: <Globe size={16} /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone size={16} /> },
    { id: 'fullstack', label: 'Full Stack', icon: <Database size={16} /> },
    { id: 'design', label: 'UI/UX', icon: <Palette size={16} /> }
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, admin dashboard, and real-time inventory management.',
      image: '/images/projects/ecommerce.jpg',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/mausam0967/ecommerce-platform',
      featured: true,
      stats: {
        users: '10K+',
        revenue: '$50K+',
        rating: '4.8'
      }
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration, and advanced project tracking features.',
      image: '/images/projects/taskmanager.jpg',
      category: 'web',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://taskmanager-demo.com',
      githubUrl: 'https://github.com/mausam0967/task-manager',
      featured: true,
      stats: {
        users: '5K+',
        tasks: '100K+',
        rating: '4.9'
      }
    },
    {
      id: 3,
      title: 'Fitness Tracking Mobile App',
      description: 'Cross-platform mobile app for fitness tracking with workout plans, progress analytics, and social features.',
      image: '/images/projects/fitness.jpg',
      category: 'mobile',
      technologies: ['React Native', 'Expo', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://fitness-app-demo.com',
      githubUrl: 'https://github.com/mausam0967/fitness-tracker',
      featured: false,
      stats: {
        downloads: '50K+',
        workouts: '1M+',
        rating: '4.7'
      }
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with 3D animations, interactive elements, and responsive design showcasing creative work.',
      image: '/images/projects/portfolio.jpg',
      category: 'design',
      technologies: ['React', 'Three.js', 'Framer Motion', 'Vite'],
      liveUrl: 'https://portfolio-demo.com',
      githubUrl: 'https://github.com/mausam0967/portfolio',
      featured: false,
      stats: {
        visitors: '100K+',
        conversions: '15%',
        rating: '4.9'
      }
    },
    {
      id: 5,
      title: 'Real-time Chat Application',
      description: 'Real-time messaging application with video calls, file sharing, and group chat functionality.',
      image: '/images/projects/chat.jpg',
      category: 'web',
      technologies: ['React', 'Socket.io', 'WebRTC', 'Express.js'],
      liveUrl: 'https://chat-app-demo.com',
      githubUrl: 'https://github.com/mausam0967/chat-app',
      featured: false,
      stats: {
        users: '20K+',
        messages: '1M+',
        rating: '4.6'
      }
    },
    {
      id: 6,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Advanced analytics dashboard with machine learning insights, data visualization, and predictive analytics.',
      image: '/images/projects/analytics.jpg',
      category: 'fullstack',
      technologies: ['React', 'Python', 'TensorFlow', 'D3.js', 'FastAPI'],
      liveUrl: 'https://analytics-demo.com',
      githubUrl: 'https://github.com/mausam0967/analytics-dashboard',
      featured: true,
      stats: {
        users: '15K+',
        insights: '500K+',
        rating: '4.8'
      }
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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
    <section ref={projectsRef} className="projects" id="projects">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing innovative solutions and creative problem-solving
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.icon}
              <span>{filter.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={cardVariants}
                layout
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image">
                  <div className="image-placeholder">
                    <Code2 size={48} />
                    <span>{project.title}</span>
                  </div>
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <button className="view-project-btn">
                        <Eye size={20} />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="featured-badge">
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag more">+{project.technologies.length - 3}</span>
                    )}
                  </div>

                  <div className="project-stats">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="stat-item">
                        <span className="stat-value">{value}</span>
                        <span className="stat-label">{key}</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a 
                      href={project.liveUrl} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={24} />
                </button>

                <div className="modal-content">
                  <div className="modal-image">
                    <div className="image-placeholder">
                      <Code2 size={64} />
                      <span>{selectedProject.title}</span>
                    </div>
                  </div>

                  <div className="modal-details">
                    <h2>{selectedProject.title}</h2>
                    <p>{selectedProject.description}</p>

                    <div className="modal-tech">
                      <h4>Technologies Used</h4>
                      <div className="tech-grid">
                        {selectedProject.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="modal-stats">
                      <h4>Project Statistics</h4>
                      <div className="stats-grid">
                        {Object.entries(selectedProject.stats).map(([key, value]) => (
                          <div key={key} className="stat-card">
                            <span className="stat-value">{value}</span>
                            <span className="stat-label">{key}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="modal-actions">
                      <a 
                        href={selectedProject.liveUrl} 
                        className="cta-button primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                        <span>View Live Demo</span>
                      </a>
                      <a 
                        href={selectedProject.githubUrl} 
                        className="cta-button secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                        <span>View Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>Have a project in mind?</h3>
          <p>Let's collaborate to bring your ideas to life</p>
          <a href="#contact" className="cta-button primary">
            <span>Start a Project</span>
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 