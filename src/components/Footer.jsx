import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { href: 'https://github.com/mausam0967', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/mausampaudel', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:paudelmausam00766@gmail.com', icon: Mail, label: 'Email' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-brand">
            <h3>Mausam Paudel</h3>
            <p>Full Stack Developer & Creative Technologist</p>
          </div>

          <div className="footer-social">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            © {currentYear} Mausam Paudel. Made with <Heart size={16} className="heart-icon" /> and React.
          </p>
          <p className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 