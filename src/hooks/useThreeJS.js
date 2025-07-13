import { useEffect, useRef, useState, useCallback } from 'react'
import * as THREE from 'three'

export const useThreeJS = (canvasRef, options = {}) => {
  const {
    particleCount = 800,
    enableOnMobile = true,
    enableOnLowPower = false,
    maxFPS = 60
  } = options

  const [isInitialized, setIsInitialized] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)
  const particlesRef = useRef(null)
  const animationIdRef = useRef(null)
  const lastTimeRef = useRef(0)

  // Check device capabilities
  const checkDeviceCapabilities = useCallback(() => {
    const isMobile = window.innerWidth <= 768
    const isLowPower = navigator.hardwareConcurrency <= 4
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) return false
    if (isMobile && !enableOnMobile) return false
    if (isLowPower && !enableOnLowPower) return false

    return true
  }, [enableOnMobile, enableOnLowPower])

  // Initialize Three.js scene
  const initializeScene = useCallback(() => {
    if (!canvasRef.current || !checkDeviceCapabilities()) return

    // Scene
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer

    // Create particle system
    createParticleSystem()
    createFloatingGeometries()

    setIsInitialized(true)
  }, [canvasRef, checkDeviceCapabilities])

  // Create particle system
  const createParticleSystem = useCallback(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16
      positions[i + 1] = (Math.random() - 0.5) * 16
      positions[i + 2] = (Math.random() - 0.5) * 16

      const colorChoice = Math.random()
      if (colorChoice < 0.5) {
        colors[i] = 1.0
        colors[i + 1] = 0.3 + Math.random() * 0.2
        colors[i + 2] = 0.5 + Math.random() * 0.5
      } else if (colorChoice < 0.8) {
        colors[i] = 1.0
        colors[i + 1] = 0.5 + Math.random() * 0.3
        colors[i + 2] = 0.2 + Math.random() * 0.2
      } else {
        colors[i] = 1.0
        colors[i + 1] = 1.0
        colors[i + 2] = 1.0
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })

    const particles = new THREE.Points(geometry, material)
    sceneRef.current.add(particles)
    particlesRef.current = particles
  }, [particleCount])

  // Create floating geometries
  const createFloatingGeometries = useCallback(() => {
    const geometries = [
      new THREE.OctahedronGeometry(1.1),
      new THREE.TetrahedronGeometry(1.0),
      new THREE.IcosahedronGeometry(1.2)
    ]

    const materials = [
      new THREE.MeshPhongMaterial({ 
        color: 0xff6b6b, 
        shininess: 100,
        emissive: 0xff6b6b,
        specular: 0xffffff,
        transparent: true,
        opacity: 0.6
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xff8e8e, 
        shininess: 100,
        emissive: 0xff8e8e,
        specular: 0xffffff,
        transparent: true,
        opacity: 0.6
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xffffff, 
        shininess: 100,
        emissive: 0xffe0e0,
        specular: 0xffffff,
        transparent: true,
        opacity: 0.6
      })
    ]

    const positions = [
      { x: -2.5, y: 2.5, z: 0 },
      { x: 2.5, y: 1.5, z: 0 },
      { x: 0, y: -2.5, z: 0 }
    ]

    for (let i = 0; i < 3; i++) {
      const geometry = geometries[i]
      const material = materials[i]
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(positions[i].x, positions[i].y, positions[i].z + 1.5)
      mesh.userData = {
        originalY: mesh.position.y,
        rotationSpeed: Math.random() * 0.02 + 0.01,
        floatSpeed: Math.random() * 0.01 + 0.005
      }
      sceneRef.current.add(mesh)
    }

    // Add lighting
    const light = new THREE.PointLight(0xffffff, 1.2, 100)
    light.position.set(0, 0, 10)
    sceneRef.current.add(light)
    
    const ambient = new THREE.AmbientLight(0xffffff, 0.7)
    sceneRef.current.add(ambient)
  }, [])

  // Animation loop with FPS limiting
  const animate = useCallback((currentTime) => {
    if (!isVisible || !isInitialized) return

    const deltaTime = currentTime - lastTimeRef.current
    const frameInterval = 1000 / maxFPS

    if (deltaTime >= frameInterval) {
      // Rotate particles
      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.001
        particlesRef.current.rotation.y += 0.002
      }

      // Animate floating geometries
      sceneRef.current.children.forEach(child => {
        if (child instanceof THREE.Mesh && child.userData.originalY !== undefined) {
          child.rotation.x += child.userData.rotationSpeed
          child.rotation.y += child.userData.rotationSpeed
          
          child.position.y = child.userData.originalY + Math.sin(currentTime * child.userData.floatSpeed) * 2
        }
      })

      rendererRef.current.render(sceneRef.current, cameraRef.current)
      lastTimeRef.current = currentTime
    }

    animationIdRef.current = requestAnimationFrame(animate)
  }, [isVisible, isInitialized, maxFPS])

  // Handle window resize
  const handleResize = useCallback(() => {
    if (!cameraRef.current || !rendererRef.current) return

    cameraRef.current.aspect = window.innerWidth / window.innerHeight
    cameraRef.current.updateProjectionMatrix()
    rendererRef.current.setSize(window.innerWidth, window.innerHeight)
  }, [])

  // Handle mouse movement
  const handleMouseMove = useCallback((event) => {
    if (!cameraRef.current) return

    const mouseX = (event.clientX - window.innerWidth / 2) * 0.01
    const mouseY = (event.clientY - window.innerHeight / 2) * 0.01

    cameraRef.current.position.x += (mouseX - cameraRef.current.position.x) * 0.05
    cameraRef.current.position.y += (-mouseY - cameraRef.current.position.y) * 0.05
    cameraRef.current.lookAt(sceneRef.current.position)
  }, [])

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (canvasRef.current) {
      observer.observe(canvasRef.current)
    }

    return () => observer.disconnect()
  }, [canvasRef])

  // Initialize scene
  useEffect(() => {
    initializeScene()
  }, [initializeScene])

  // Start animation when visible
  useEffect(() => {
    if (isVisible && isInitialized) {
      animationIdRef.current = requestAnimationFrame(animate)
    } else if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current)
    }
  }, [isVisible, isInitialized, animate])

  // Event listeners
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleResize, handleMouseMove])

  // Cleanup
  useEffect(() => {
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
      
      if (sceneRef.current) {
        sceneRef.current.clear()
      }
    }
  }, [])

  return {
    isInitialized,
    isVisible,
    scene: sceneRef.current,
    camera: cameraRef.current,
    renderer: rendererRef.current
  }
} 