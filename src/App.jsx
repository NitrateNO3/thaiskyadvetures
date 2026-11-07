import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, ArrowUpRight, Plus, Play } from 'lucide-react'
import './App.css'

import TandemSkydiving from './pages/TandemSkydiving'
import Courses from './pages/Courses'
import LicensedSkydivers from './pages/LicensedSkydivers'
import Contact from './pages/Contact'
import About from './pages/About'

// Smooth number counter
function Counter({ value, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const num = parseInt(value.replace(/\D/g, '')) || 0
      const duration = 2000
      const steps = 60
      const increment = num / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= num) {
          setCount(num)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {value.includes('+') ? `${count.toLocaleString()}+` : count.toLocaleString()}{suffix}
    </span>
  )
}

// Animated text line
function TextLine({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '110%', rotate: 3 }}
        animate={isInView ? { y: 0, rotate: 0 } : {}}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

const navItems = [
  { label: 'Tandem', path: '/tandem-skydiving' },
  { label: 'Courses', path: '/courses' },
  { label: 'Licensed', path: '/licensed-skydivers' },
  { label: 'About', path: '/about' },
]

const experiences = [
  {
    num: '01',
    title: 'Tandem Skydiving',
    desc: 'First time? Jump attached to an expert instructor.',
    price: '9,700',
    img: 'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-01.jpg',
    link: '/tandem-skydiving'
  },
  {
    num: '02',
    title: 'AFF Course',
    desc: 'Learn to skydive solo with our accelerated program.',
    price: '25,950',
    img: 'https://thaiskyadventures.com/wp-content/uploads/uspa-accelerated-freefall-learn-to-skydive-pattaya-thailand-03.jpg',
    link: '/courses'
  },
  {
    num: '03',
    title: 'A License',
    desc: 'Complete certification to jump anywhere in the world.',
    price: '149,550',
    img: 'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-25.jpg',
    link: '/courses'
  }
]

const features = [
  { num: '13,000', label: 'Feet altitude' },
  { num: '60', label: 'Seconds freefall' },
  { num: '120', label: 'MPH speed' },
  { num: '40+', label: 'Years experience' }
]

const faqs = [
  { q: 'Do I need any experience?', a: 'No. Tandem skydiving requires zero experience. You\'ll be attached to a certified instructor.' },
  { q: 'What are the requirements?', a: 'Minimum age 12 (parental consent). Weight 25-115kg. No recent scuba diving.' },
  { q: 'What if weather is bad?', a: 'We reschedule at no extra cost. Full refunds for weather cancellations.' },
  { q: 'How long is the experience?', a: 'About 5 hours total. The freefall itself is 60 incredible seconds.' }
]

// Nav
function Nav({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <motion.header
        className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav__inner">
          <Link to="/" className="nav__logo">
            <img src="https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-logo-768x211.jpg" alt="Thai Sky Adventures" />
          </Link>

          <nav className="nav__menu">
            {navItems.map((item, i) => (
              <Link key={item.label} to={item.path} className="nav__link">
                {item.label}
              </Link>
            ))}
          </nav>

          <Link to="/contact" className="nav__cta">
            <span>Book Now</span>
            <ArrowUpRight size={16} />
          </Link>

          <button className="nav__toggle" onClick={() => setMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="mobile-nav__close" onClick={() => setMenuOpen(false)}>
              <X size={28} />
            </button>
            <div className="mobile-nav__links">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link to={item.path} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <Link to="/contact" className="mobile-nav__cta" onClick={() => setMenuOpen(false)}>
              Book Your Jump
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Hero
function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.5], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])

  return (
    <section className="hero">
      <motion.div className="hero__bg" style={{ scale }}>
        <motion.img
          src="https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-01.jpg"
          alt=""
          initial={{ scale: 1.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="hero__overlay" />
      </motion.div>

      <motion.div
        className="hero__play"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
      >
        <Play size={28} />
        <span>Play Video</span>
      </motion.div>

      <motion.div className="hero__content" style={{ y, opacity }}>
        <motion.div
          className="hero__tag"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="tag-line" />
          <span>Pattaya, Thailand</span>
        </motion.div>

        <h1 className="hero__title">
          <TextLine delay={0.3}>
            <span>Feel the</span>
          </TextLine>
          <TextLine delay={0.45}>
            <em>rush</em> of
          </TextLine>
          <TextLine delay={0.6}>
            <span className="stroke">freefall</span>
          </TextLine>
        </h1>

        <motion.p
          className="hero__desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          Thailand's highest skydive from 13,000 feet. 60 seconds of pure adrenaline.
        </motion.p>

        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <Link to="/tandem-skydiving" className="btn btn--primary btn--lg">
            <span>Book Your Jump</span>
            <ArrowRight size={20} />
          </Link>
          <Link to="/about" className="btn btn--link">
            <span>Learn More</span>
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__bottom"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <div className="hero__stats">
          <div className="hstat">
            <span className="hstat__num">13K</span>
            <span className="hstat__label">feet</span>
          </div>
          <div className="hstat">
            <span className="hstat__num">60s</span>
            <span className="hstat__label">freefall</span>
          </div>
          <div className="hstat">
            <span className="hstat__num">120</span>
            <span className="hstat__label">mph</span>
          </div>
        </div>

        <div className="hero__scroll">
          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="scroll-dot" />
          </motion.div>
          <span>Scroll to explore</span>
        </div>
      </motion.div>
    </section>
  )
}

// Stats
function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="stats" ref={ref}>
      <div className="stats__grid">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="stats__item"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <span className="stats__num">
              <Counter value={f.num} />
            </span>
            <span className="stats__label">{f.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// Experiences
function Experiences() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="exp" ref={ref}>
      <div className="exp__header">
        <motion.div
          className="exp__tag"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
        >
          <span className="tag-line" />
          <span>Experiences</span>
        </motion.div>
        <TextLine delay={0.1}>
          <h2>Choose your<br /><em>adventure</em></h2>
        </TextLine>
      </div>

      <div className="exp__grid">
        {experiences.map((exp, i) => (
          <motion.article
            key={i}
            className="exp__card"
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
          >
            <Link to={exp.link}>
              <div className="exp__img">
                <motion.img
                  src={exp.img}
                  alt={exp.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="exp__img-overlay" />
              </div>
              <div className="exp__info">
                <span className="exp__num">{exp.num}</span>
                <div className="exp__text">
                  <h3>{exp.title}</h3>
                  <p>{exp.desc}</p>
                </div>
                <div className="exp__footer">
                  <div className="exp__price">
                    <span className="exp__currency">฿</span>
                    <span>{exp.price}</span>
                  </div>
                  <div className="exp__arrow">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

// About
function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section className="about" ref={ref}>
      <div className="about__content">
        <motion.div
          className="about__tag"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
        >
          <span className="tag-line" />
          <span>About</span>
        </motion.div>

        <TextLine delay={0.1}>
          <h2>Thailand's premier<br /><em>drop zone</em></h2>
        </TextLine>

        <motion.p
          className="about__lead"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          Founded by international experts with over 40 years of combined experience.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          Located 96km south of Bangkok and 42km north of Pattaya. USPA certified instructors. World-class safety standards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link to="/about" className="btn btn--outline">
            <span>Our Story</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      <motion.div className="about__img" style={{ y: imgY }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <img src="https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-20.jpg" alt="" />
          <div className="about__video">
            <Play size={24} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Gallery
function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const images = [
    'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-02.jpg',
    'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-08.jpg',
    'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-12.jpg',
    'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-15.jpg',
  ]

  return (
    <section className="gallery" ref={ref}>
      <div className="gallery__header">
        <motion.div
          className="gallery__tag"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
        >
          <span className="tag-line" />
          <span>Gallery</span>
        </motion.div>
        <TextLine delay={0.1}>
          <h2>Moments in the <em>sky</em></h2>
        </TextLine>
      </div>
      <div className="gallery__grid">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className={`gallery__item gallery__item--${i + 1}`}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.2 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={src}
              alt=""
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
            />
            <div className="gallery__item-overlay" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// FAQ
function FAQ() {
  const [open, setOpen] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="faq" ref={ref}>
      <div className="faq__header">
        <motion.div
          className="faq__tag"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
        >
          <span className="tag-line" />
          <span>FAQ</span>
        </motion.div>
        <TextLine delay={0.1}>
          <h2>Common<br /><em>questions</em></h2>
        </TextLine>
      </div>
      <div className="faq__list">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            className={`faq__item ${open === i ? 'faq__item--open' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.1 }}
          >
            <button onClick={() => setOpen(open === i ? null : i)}>
              <span>{f.q}</span>
              <Plus size={20} />
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  className="faq__answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// CTA
function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1])

  return (
    <section className="cta" ref={ref}>
      <motion.div className="cta__bg" style={{ scale: bgScale }}>
        <img src="https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-30.jpg" alt="" />
        <div className="cta__overlay" />
      </motion.div>
      <motion.div
        className="cta__content"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="cta__tag"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          13,000 ft
        </motion.div>
        <TextLine delay={0.3}>
          <h2>Ready to <em>jump</em>?</h2>
        </TextLine>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          Book your skydive today and experience Thailand from above.
        </motion.p>
        <motion.div
          className="cta__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link to="/contact" className="btn btn--primary btn--lg">
            <span>Book Now</span>
            <ArrowRight size={20} />
          </Link>
          <Link to="/tandem-skydiving" className="btn btn--ghost">
            <span>Learn More</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <img src="https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-logo-768x211.jpg" alt="Thai Sky Adventures" />
          <p>Thailand's premier skydiving destination since day one.</p>
        </div>
        <div className="footer__links">
          <div>
            <h4>Jump</h4>
            <Link to="/tandem-skydiving">Tandem</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/licensed-skydivers">Licensed</Link>
          </div>
          <div>
            <h4>Info</h4>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="tel:+66859003412">+66 85 900 3412</a>
            <a href="mailto:info@thaiskyadventures.com">Email</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2024 Thai Sky Adventures</span>
        <span>Pattaya, Thailand</span>
      </div>
    </footer>
  )
}

// Home
function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Experiences />
      <AboutSection />
      <Gallery />
      <FAQ />
      <CTA />
    </main>
  )
}

// App
function App() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Nav scrolled={scrolled} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tandem-skydiving" element={<TandemSkydiving />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/licensed-skydivers" element={<LicensedSkydivers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}
