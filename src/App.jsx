import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import { ThemeProvider } from './contexts/ThemeContext'
import { useTheme } from './contexts/ThemeContext'
import './App.css'

function AppContent() {
  const { theme } = useTheme()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className={`app ${theme}`}>
      <Helmet>
        <title>Mausam Paudel - Full Stack Developer & Creative Technologist</title>
        <meta name="description" content="Full Stack Developer specializing in React, Node.js, and modern web technologies. Creating innovative digital experiences that make a difference." />
        <meta name="keywords" content="Full Stack Developer, React, Node.js, JavaScript, TypeScript, Web Development, Portfolio, Creative Technologist" />
        <meta name="author" content="Mausam Paudel" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#00d4ff" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://mausampaudel.com" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Mausam Paudel - Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer specializing in React, Node.js, and modern web technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mausampaudel.com" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Mausam Paudel Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mausam Paudel - Full Stack Developer" />
        <meta name="twitter:description" content="Full Stack Developer specializing in React, Node.js, and modern web technologies." />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        <meta name="twitter:creator" content="@mausampaudel" />
        <meta name="twitter:site" content="@mausampaudel" />
        
        {/* Additional Meta Tags */}
        <meta name="application-name" content="Mausam Paudel Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mausam Paudel" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#00d4ff" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mausam Paudel",
            "jobTitle": "Full Stack Developer",
            "description": "Full Stack Developer specializing in React, Node.js, and modern web technologies",
            "url": "https://mausampaudel.com",
            "email": "paudelmausam00766@gmail.com",
            "image": "/images/profile.jpeg",
            "sameAs": [
              "https://linkedin.com/in/mausampaudel",
              "https://github.com/mausam0967",
              "https://twitter.com/mausampaudel"
            ],
            "knowsAbout": [
              "React", "Node.js", "JavaScript", "TypeScript", "Python", "MongoDB", "PostgreSQL"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "addressCountry": "US"
            }
          })}
        </script>
      </Helmet>

      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App 