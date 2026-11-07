import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Plus, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react'
import './App.css'

// Page imports
import TandemSkydiving from './pages/TandemSkydiving'
import Courses from './pages/Courses'
import LicensedSkydivers from './pages/LicensedSkydivers'
import Contact from './pages/Contact'
import About from './pages/About'

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Tandem Skydiving', href: '/tandem-skydiving' },
  { name: 'Courses', href: '/courses' },
  { name: 'Licensed Skydivers', href: '/licensed-skydivers' },
  { name: 'Contact', href: '/contact' },
]

const experiences = [
  {
    title: 'Tandem Skydiving',
    label: 'First Jump',
    price: 'From ฿9,700',
    image: 'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-01.jpg',
    featured: true,
    link: '/tandem-skydiving'
  },
  {
    title: 'AFF Course',
    label: 'Learn to Fly',
    price: 'From ฿25,950',
    image: 'https://thaiskyadventures.com/wp-content/uploads/uspa-accelerated-freefall-learn-to-skydive-pattaya-thailand-03.jpg',
    link: '/courses'
  },
  {
    title: 'A License',
    label: 'Full Certification',
    price: '฿149,550',
    image: 'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-25.jpg',
    link: '/courses'
  },
]

const processSteps = [
  { title: 'Arrive & Register', description: 'Check in at our office, complete the paperwork, and choose your video package.' },
  { title: 'Safety Briefing', description: 'Your instructor provides a thorough 5-10 minute briefing on body position and hand signals.' },
  { title: 'Board the Aircraft', description: 'A scenic 20-minute flight climbing to 13,000 feet over Thailand\'s coastline.' },
  { title: 'Freefall', description: '55-60 seconds of pure adrenaline at 120 mph with breathtaking views.' },
  { title: 'Canopy Ride', description: '7-8 minutes of peaceful descent. You can help steer under supervision.' },
  { title: 'Landing & Celebration', description: 'Touch down safely, collect your video, and receive your first jump certificate.' },
]

const testimonials = [
  {
    quote: 'From the moment I arrived, the staff were incredibly helpful and accommodating. The views of Thailand from 13,000 feet were absolutely breathtaking.',
    name: 'Sarah M.',
    location: 'Sydney, Australia'
  },
  {
    quote: 'The most professional skydiving operation I\'ve experienced in Southeast Asia. World-class instructors and equipment.',
    name: 'James K.',
    location: 'Singapore'
  },
]

const faqs = [
  { q: 'Do I need experience to skydive?', a: 'No experience is required for tandem skydiving. You\'ll be securely attached to a certified instructor who handles everything from exit to landing.' },
  { q: 'What is the age and weight limit?', a: 'Minimum age is 12 years (with parental consent). Weight limit is 115kg maximum, 25kg minimum. Surcharges apply for jumpers over 95kg.' },
  { q: 'What if the weather is bad?', a: 'Safety is our priority. If weather conditions are unsuitable, we\'ll reschedule your jump at no extra cost. Full refunds are provided for cancellations outside anyone\'s control.' },
  { q: 'How long does the whole experience take?', a: 'Plan for approximately 5 hours from hotel pickup to return. The actual freefall is about 60 seconds, with a 7-8 minute canopy ride.' },
  { q: 'Is skydiving safe?', a: 'We follow strict USPA guidelines and are regularly inspected by the Thai Aviation Authority. Our team has over 40 years of combined experience and maintains impeccable safety standards.' },
]

const galleryImages = [
  'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-02.jpg',
  'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-08.jpg',
  'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-12.jpg',
  'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-15.jpg',
  'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-20.jpg',
  'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-30.jpg',
  'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-35.jpg',
]

// Navigation Component
function Navigation({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-inner">
            <Link to="/" className="nav-logo">
              <img
                src="https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-logo-768x211.jpg"
                alt="Thai Sky Adventures"
              />
            </Link>

            <div className="nav-links">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} className="nav-link">
                  {link.name}
                </Link>
              ))}
            </div>

            <Link to="/contact" className="nav-cta">Book Now</Link>

            <button className="nav-menu-btn" onClick={() => setMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
              onClick={() => setMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} onClick={() => setMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Book Now</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              src="https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-logo-768x211.jpg"
              alt="Thai Sky Adventures"
              style={{ height: 48, width: 'auto' }}
            />
            <p>Thailand's premier skydiving destination, offering breathtaking views and world-class safety standards since our founding.</p>
          </div>

          <div className="footer-column">
            <h4>Experience</h4>
            <Link to="/tandem-skydiving">Tandem Skydiving</Link>
            <Link to="/courses">AFF Courses</Link>
            <Link to="/licensed-skydivers">Licensed Skydivers</Link>
          </div>

          <div className="footer-column">
            <h4>Information</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <a href="#">Gallery</a>
            <a href="#">FAQs</a>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <a href="tel:+66859003412">+66 (0) 85 900 3412</a>
            <a href="mailto:info@thaiskyadventures.com">info@thaiskyadventures.com</a>
            <span style={{ color: 'rgba(247,246,242,0.6)', fontSize: '0.875rem' }}>Open Daily 8am - 5pm</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Thai Sky Adventures. All rights reserved.</p>
          <p>777 77, Pattaya City, Si Racha District, Chon Buri 20230, Thailand</p>
        </div>
      </div>
    </footer>
  )
}

// Homepage
function HomePage() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image">
          <img
            src="https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-01.jpg"
            alt="Skydiving over Thailand"
          />
        </div>
        <div className="hero-overlay" />

        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-location">
              Pattaya, Thailand
            </div>

            <h1>Freefall into adventure</h1>

            <p className="hero-subtitle">
              Experience Thailand's highest skydive from 13,000 feet.
              No experience needed—just the courage to jump.
            </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value">13,000</div>
                <div className="hero-stat-label">Feet altitude</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">60</div>
                <div className="hero-stat-label">Seconds freefall</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">40+</div>
                <div className="hero-stat-label">Years experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section">
        <div className="container">
          <div className="intro-grid">
            <motion.div
              className="intro-content"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-header">
                <div className="section-label">About Us</div>
                <h2 className="section-title">Southeast Asia's premier skydiving destination</h2>
              </div>

              <p className="intro-highlight">
                Thai Sky Adventures was founded by a team of international experts with over 40 years of combined skydiving experience.
              </p>

              <p>
                Located at Nong Khor Reservoir in Sriracha—96km south of Bangkok and 42km north of Pattaya—we offer a professional yet welcoming atmosphere where adventure meets uncompromising safety.
              </p>

              <p>
                Whether you're a first-time jumper seeking the thrill of tandem skydiving, or an experienced skydiver looking to progress your skills, our team of USPA certified instructors and commercial pilots are here to make your skydiving dreams a reality.
              </p>

              <Link to="/about" className="btn btn-outline" style={{ marginTop: 32 }}>
                Learn More <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              className="intro-image"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-20.jpg"
                alt="Skydiving experience"
              />
              <div className="intro-image-caption">
                <span>Certification</span>
                USPA Certified Instructors
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="section section-dark">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label">Experiences</div>
            <h2 className="section-title light">Choose your adventure</h2>
          </motion.div>

          <div className="experiences-grid">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className={`experience-card ${exp.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={exp.link}>
                  <img src={exp.image} alt={exp.title} className="experience-image" />
                  <div className="experience-content">
                    <div className="experience-label">{exp.label}</div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-price">{exp.price}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="section section-ocean">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: 48 }}
          >
            <div className="section-label">Safety First</div>
            <h2 className="section-title light">Why choose Thai Sky Adventures</h2>
          </motion.div>

          <div className="safety-grid">
            <motion.div
              className="safety-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="safety-number">01</div>
              <h3 className="safety-title">USPA Certified</h3>
              <p className="safety-text">All jumps are led by highly experienced professionals with international USPA certifications. We follow strict safety guidelines.</p>
            </motion.div>
            <motion.div
              className="safety-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="safety-number">02</div>
              <h3 className="safety-title">Regular Inspections</h3>
              <p className="safety-text">Our operation is regularly inspected by the Thai Aviation Authority. Equipment is maintained to the highest standards.</p>
            </motion.div>
            <motion.div
              className="safety-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="safety-number">03</div>
              <h3 className="safety-title">40+ Years Experience</h3>
              <p className="safety-text">Our founding team brings over four decades of combined skydiving experience from around the world.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Experience Section */}
      <section className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label">The Experience</div>
            <h2 className="section-title">Your jump day, step by step</h2>
          </motion.div>

          <div className="process-list">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="process-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="process-number" />
                <div className="process-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section section-dark">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label">Gallery</div>
            <h2 className="section-title light">Moments in the sky</h2>
          </motion.div>

          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={img} alt={`Skydiving gallery ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label">Testimonials</div>
            <h2 className="section-title">What our jumpers say</h2>
          </motion.div>

          <div className="testimonial-grid">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" />
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-location">{t.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-ocean">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label">FAQs</div>
            <h2 className="section-title light">Common questions</h2>
          </motion.div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`faq-item ${openFaq === index ? 'open' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                style={{ borderColor: 'rgba(247,246,242,0.1)' }}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  style={{ color: 'var(--text-light)' }}
                >
                  {faq.q}
                  <Plus size={20} />
                </button>
                <div className="faq-answer" style={{ color: 'rgba(247,246,242,0.7)' }}>
                  {faq.a}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Ready to jump?</h3>

              <div className="contact-item">
                <div className="contact-label">Phone</div>
                <div className="contact-value">
                  <a href="tel:+66859003412">+66 (0) 85 900 3412</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-label">Email</div>
                <div className="contact-value">
                  <a href="mailto:info@thaiskyadventures.com">info@thaiskyadventures.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-label">Hours</div>
                <div className="contact-value">Monday - Sunday, 8:00am - 5:00pm</div>
              </div>

              <div className="contact-item">
                <div className="contact-label">Location</div>
                <div className="contact-value">777 77, Pattaya City, Si Racha District, Chon Buri 20230</div>
              </div>

              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 32 }}>
                Get in Touch <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              className="contact-map"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7!2d100.96!3d13.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDExJzI0LjAiTiAxMDDCsDU3JzM2LjAiRQ!5e0!3m2!1sen!2sth!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

// Main App Component
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/tandem-skydiving" element={<TandemSkydiving />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/licensed-skydivers" element={<LicensedSkydivers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
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
