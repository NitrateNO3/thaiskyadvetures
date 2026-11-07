import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion'
import { Menu, X, Plus, ArrowRight, ArrowUpRight, MapPin, Phone, Mail, Clock, Play, ChevronDown } from 'lucide-react'
import './App.css'

// Page imports
import TandemSkydiving from './pages/TandemSkydiving'
import Courses from './pages/Courses'
import LicensedSkydivers from './pages/LicensedSkydivers'
import Contact from './pages/Contact'
import About from './pages/About'

// Magnetic Button Component
function MagneticButton({ children, className, ...props }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (clientX - left - width / 2) * 0.3
    const y = (clientY - top - height / 2) * 0.3
    setPosition({ x, y })
  }

  const reset = () => setPosition({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Text Reveal Animation
function RevealText({ children, className, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className={`reveal-text ${className || ''}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// Parallax Image
function ParallaxImage({ src, alt, speed = 0.5 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 30}%`])

  return (
    <div ref={ref} className="parallax-container">
      <motion.img src={src} alt={alt} style={{ y }} />
    </div>
  )
}

// Stagger Container
const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Tandem', href: '/tandem-skydiving' },
  { name: 'Courses', href: '/courses' },
  { name: 'Licensed', href: '/licensed-skydivers' },
  { name: 'Contact', href: '/contact' },
]

const experiences = [
  {
    title: 'Tandem Skydiving',
    subtitle: 'Your first jump',
    price: '9,700',
    image: 'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-01.jpg',
    link: '/tandem-skydiving',
    num: '01'
  },
  {
    title: 'AFF Course',
    subtitle: 'Learn to fly solo',
    price: '25,950',
    image: 'https://thaiskyadventures.com/wp-content/uploads/uspa-accelerated-freefall-learn-to-skydive-pattaya-thailand-03.jpg',
    link: '/courses',
    num: '02'
  },
  {
    title: 'A License',
    subtitle: 'Full certification',
    price: '149,550',
    image: 'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-25.jpg',
    link: '/courses',
    num: '03'
  },
]

const stats = [
  { value: '13,000', label: 'Feet', suffix: 'ft' },
  { value: '60', label: 'Seconds', suffix: 's' },
  { value: '120', label: 'Speed', suffix: 'mph' },
  { value: '40+', label: 'Years', suffix: 'exp' },
]

const galleryImages = [
  { src: 'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-02.jpg', size: 'large' },
  { src: 'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-08.jpg', size: 'small' },
  { src: 'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-12.jpg', size: 'small' },
  { src: 'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-15.jpg', size: 'medium' },
  { src: 'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-20.jpg', size: 'medium' },
]

const faqs = [
  { q: 'Do I need experience?', a: 'No experience required for tandem. You\'ll be attached to a certified instructor who handles everything.' },
  { q: 'Age and weight limits?', a: 'Minimum 12 years old with parental consent. Weight: 25kg min, 115kg max. Surcharges over 95kg.' },
  { q: 'What if weather is bad?', a: 'We reschedule at no extra cost. Full refunds for cancellations outside anyone\'s control.' },
  { q: 'How long does it take?', a: 'Plan ~5 hours total. Freefall is 60 seconds, canopy ride 7-8 minutes.' },
]

// Navigation
function Navigation({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <motion.nav
        className={`nav ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container">
          <div className="nav-inner">
            <Link to="/" className="nav-logo">
              <motion.img
                src="https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-logo-768x211.jpg"
                alt="Thai Sky Adventures"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            <div className="nav-links">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <Link to={link.href} className="nav-link">
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <MagneticButton>
              <Link to="/contact" className="nav-cta">
                <span>Book Now</span>
                <ArrowUpRight size={16} />
              </Link>
            </MagneticButton>

            <button className="nav-menu-btn" onClick={() => setMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="mobile-close" onClick={() => setMenuOpen(false)}>
              <X size={32} />
            </button>
            <motion.div
              className="mobile-menu-content"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link, i) => (
                <motion.div key={link.name} variants={fadeUp}>
                  <Link to={link.href} onClick={() => setMenuOpen(false)}>
                    <span className="menu-num">0{i + 1}</span>
                    <span className="menu-text">{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Footer
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <motion.div
            className="footer-cta"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to fly?</h2>
            <MagneticButton>
              <Link to="/contact" className="btn btn-primary btn-xl">
                <span>Book Your Jump</span>
                <ArrowRight size={24} />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <img
              src="https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-logo-768x211.jpg"
              alt="Thai Sky Adventures"
            />
            <p>Thailand's premier skydiving destination. Experience the thrill of freefall from 13,000 feet.</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Experience</h4>
              <Link to="/tandem-skydiving">Tandem Jump</Link>
              <Link to="/courses">AFF Course</Link>
              <Link to="/licensed-skydivers">Licensed Jumpers</Link>
            </div>
            <div className="footer-column">
              <h4>Info</h4>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <a href="#">FAQ</a>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <a href="tel:+66859003412">+66 85 900 3412</a>
              <a href="mailto:info@thaiskyadventures.com">Email Us</a>
              <span>Open Daily 8am-5pm</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Thai Sky Adventures</p>
          <p>Pattaya, Thailand</p>
        </div>
      </div>
    </footer>
  )
}

// Hero Section
function HeroSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  return (
    <section className="hero">
      <motion.div className="hero-bg" style={{ scale }}>
        <motion.img
          src="https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-01.jpg"
          alt="Skydiving"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="hero-overlay" />
      </motion.div>

      <motion.div className="hero-content" style={{ y, opacity }}>
        <div className="container">
          <motion.div
            className="hero-tag"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="tag-line" />
            <span>Pattaya, Thailand</span>
          </motion.div>

          <div className="hero-title">
            <div className="title-line">
              <RevealText delay={0.3}>
                <span className="hero-title-text">Experience</span>
              </RevealText>
            </div>
            <div className="title-line">
              <RevealText delay={0.4}>
                <span className="hero-title-text">the <em>ultimate</em></span>
              </RevealText>
            </div>
            <div className="title-line">
              <RevealText delay={0.5}>
                <span className="hero-title-text accent">freefall</span>
              </RevealText>
            </div>
          </div>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Thailand's highest skydive from 13,000 feet. No experience needed.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <MagneticButton>
              <Link to="/tandem-skydiving" className="btn btn-primary btn-xl">
                <span>Book Your Jump</span>
                <ArrowRight size={20} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link to="/courses" className="btn btn-ghost btn-xl">
                <span>Explore Courses</span>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {stats.map((stat, i) => (
          <div key={i} className="hero-stat">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-suffix">{stat.suffix}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} />
        </motion.div>
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}

// Experiences Section
function ExperiencesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="experiences" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span className="section-tag" variants={fadeUp}>Choose your adventure</motion.span>
          <motion.h2 variants={fadeUp}>
            Three ways<br />to <em>fly</em>
          </motion.h2>
        </motion.div>

        <div className="experiences-grid">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              className="experience-card"
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={exp.link}>
                <div className="card-image">
                  <motion.img
                    src={exp.image}
                    alt={exp.title}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="card-overlay" />
                </div>
                <div className="card-content">
                  <span className="card-num">{exp.num}</span>
                  <div className="card-info">
                    <span className="card-subtitle">{exp.subtitle}</span>
                    <h3>{exp.title}</h3>
                  </div>
                  <div className="card-price">
                    <span className="price-currency">฿</span>
                    <span className="price-value">{exp.price}</span>
                  </div>
                  <div className="card-arrow">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <section className="about-section" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag">About us</span>
            <h2>Southeast Asia's<br />premier <em>drop zone</em></h2>
            <p className="about-lead">
              Founded by international experts with over 40 years of combined skydiving experience.
            </p>
            <p>
              Located at Nong Khor Reservoir in Sriracha—96km south of Bangkok and 42km north of Pattaya—we offer world-class skydiving with USPA certified instructors.
            </p>
            <div className="about-features">
              <div className="feature">
                <span className="feature-num">40+</span>
                <span className="feature-text">Years Experience</span>
              </div>
              <div className="feature">
                <span className="feature-num">USPA</span>
                <span className="feature-text">Certified</span>
              </div>
            </div>
            <MagneticButton>
              <Link to="/about" className="btn btn-outline">
                <span>Learn More</span>
                <ArrowRight size={18} />
              </Link>
            </MagneticButton>
          </motion.div>

          <motion.div
            className="about-image"
            style={{ y: imageY }}
          >
            <motion.div
              className="image-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-20.jpg"
                alt="Skydiving"
              />
              <div className="image-tag">
                <Play size={20} />
                <span>Watch Video</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Gallery Section
function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section className="gallery" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">Gallery</span>
          <h2>Moments in<br />the <em>sky</em></h2>
        </motion.div>

        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className={`gallery-item ${img.size}`}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              <motion.img
                src={img.src}
                alt={`Gallery ${i + 1}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="faq-section" ref={ref}>
      <div className="container">
        <div className="faq-grid">
          <motion.div
            className="faq-header"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag">FAQ</span>
            <h2>Common<br />questions</h2>
            <p>Everything you need to know before your first jump.</p>
          </motion.div>

          <motion.div
            className="faq-list"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`faq-item ${openIndex === i ? 'open' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Plus size={24} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Marquee Section
function MarqueeSection() {
  return (
    <section className="marquee-section">
      <motion.div
        className="marquee"
        animate={{ x: [0, "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <span>Freefall</span>
        <span className="dot">•</span>
        <span>13,000 Feet</span>
        <span className="dot">•</span>
        <span>Pattaya</span>
        <span className="dot">•</span>
        <span>Adventure</span>
        <span className="dot">•</span>
        <span>Freefall</span>
        <span className="dot">•</span>
        <span>13,000 Feet</span>
        <span className="dot">•</span>
        <span>Pattaya</span>
        <span className="dot">•</span>
        <span>Adventure</span>
        <span className="dot">•</span>
      </motion.div>
    </section>
  )
}

// Homepage
function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <ExperiencesSection />
      <AboutSection />
      <GallerySection />
      <FAQSection />
    </>
  )
}

// Main App
function App() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Navigation scrolled={scrolled} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/tandem-skydiving" element={<TandemSkydiving />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/licensed-skydivers" element={<LicensedSkydivers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper
