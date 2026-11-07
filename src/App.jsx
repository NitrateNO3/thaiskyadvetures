import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion'
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronDown, Star, Play, Plane, Shield, Award, Users, ArrowRight, Check } from 'lucide-react'
import './App.css'

// Page imports
import About from './pages/About'
import TandemSkydiving from './pages/TandemSkydiving'
import Courses from './pages/Courses'
import LicensedSkydivers from './pages/LicensedSkydivers'
import Services from './pages/Services'
import Articles from './pages/Articles'
import Contact from './pages/Contact'
import TravelInfo from './pages/TravelInfo'
import ShootingRange from './pages/ShootingRange'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Tandem Skydiving', href: '/tandem-skydiving' },
  { name: 'Courses', href: '/courses' },
  { name: 'Licensed Skydivers', href: '/licensed-skydivers' },
  { name: 'Services', href: '/services' },
  { name: 'Articles', href: '/articles' },
  { name: 'Contact', href: '/contact' },
  { name: 'Travel Info', href: '/travel-info' },
  { name: 'Shooting Range', href: '/shooting-range' },
]

const stats = [
  { value: '2.7M+', label: 'Skydives Completed', suffix: '' },
  { value: '13,000', label: 'Feet Altitude', suffix: 'ft' },
  { value: '60', label: 'Seconds Freefall', suffix: 's' },
  { value: '125', label: 'MPH Speed', suffix: 'mph' },
]

const experiences = [
  {
    title: 'Tandem Skydiving',
    description: 'Jump attached to an expert instructor. Perfect for first-timers!',
    price: '฿13,800',
    features: ['13,000 ft altitude', 'USPA Instructors', '60s freefall', 'Ocean views'],
    popular: true,
  },
  {
    title: 'AFF Training',
    description: 'Learn solo skydiving with our Accelerated Freefall program.',
    price: '฿45,000',
    features: ['Solo flight training', 'Video included', 'Ground school', 'Multiple jumps'],
    popular: false,
  },
  {
    title: '"A" License',
    description: 'Complete 25-jump USPA program for full certification.',
    price: '฿95,000',
    features: ['25 jump program', 'USPA certified', 'Canopy mastery', 'Full gear training'],
    popular: false,
  },
]

const videoPackages = [
  {
    name: 'Standard',
    description: 'Freefall + landing footage',
    price: '฿3,500',
  },
  {
    name: 'Deluxe',
    description: 'Full jump + parachute ride',
    price: '฿5,500',
  },
]

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Australia',
    text: 'From the moment I arrived, the staff were incredibly helpful and accommodating. The views of Pattaya from 13,000 feet were absolutely breathtaking!',
    rating: 5,
  },
  {
    name: 'James Chen',
    location: 'Singapore',
    text: 'Best skydiving experience in Southeast Asia! The instructors are world-class and made me feel completely safe throughout the entire jump.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    location: 'USA',
    text: 'Ticked this off my bucket list and exceeded all expectations. The ocean views during freefall were incredible. Highly recommend!',
    rating: 5,
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
}

const slideInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 }
}

const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 }
}

function AnimatedSection({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  )
}

function HomePageContent() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />

        {/* Floating decorative elements */}
        <div className="hero-decorations">
          <motion.div
            className="hero-shape hero-shape-1"
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="hero-shape hero-shape-2"
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="hero-shape hero-shape-3"
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          className="hero-content"
          style={{ y: heroY }}
        >
          <motion.div
            className="hero-location"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="location-dot" />
            <span>Pattaya, Thailand</span>
            <span className="location-divider">•</span>
            <span>Open 7 Days</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.span
              className="hero-title-line"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Jump Into
            </motion.span>
            <motion.span
              className="hero-title-accent"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Adventure
            </motion.span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Freefall from 13,000 feet over Thailand's stunning coastline.
            No experience needed – we handle everything.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="#experiences"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => { e.preventDefault(); scrollToSection('#experiences') }}
            >
              Book Your Jump <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#about"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => { e.preventDefault(); scrollToSection('#about') }}
            >
              <Play size={20} /> Watch Video
            </motion.a>
          </motion.div>

          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1.5, duration: 0.5 },
              y: { delay: 1.5, duration: 1.5, repeat: Infinity }
            }}
          >
            <ChevronDown size={36} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="section-tag">About Us</span>
              <h2 className="section-title">Your Gateway to the Skies</h2>
              <p className="about-text">
                Located in beautiful Sriracha, Thailand, we're a premier skydiving center
                with unparalleled views of Pattaya and the Gulf of Thailand. Our USPA-certified
                instructors bring international expertise and unwavering commitment to safety.
              </p>
              <p className="about-text">
                Whether you're ticking off your bucket list or starting your skydiving journey,
                Thai Sky Adventures delivers unforgettable experiences every single day.
              </p>

              <motion.div
                className="about-features"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: Shield, title: 'Safety First', desc: 'World-class standards' },
                  { icon: Award, title: 'USPA Certified', desc: 'International instructors' },
                  { icon: Users, title: 'Expert Team', desc: '1000s of jumps experience' },
                ].map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    className="about-feature"
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="feature-icon"><feature.icon size={22} /></div>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="about-visual"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="about-image-container">
                <motion.div
                  className="about-image about-image-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  className="floating-card"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  animate={{ y: [0, -8, 0] }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="floating-stat">2.7M+</span>
                  <span className="floating-label">Safe Jumps</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="experiences-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.span
              className="section-tag"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Experiences
            </motion.span>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              CHOOSE YOUR JUMP
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              From first-time tandem to full certification
            </motion.p>
          </motion.div>

          <div className="experiences-grid">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className={`experience-card ${exp.popular ? 'popular' : ''}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: exp.popular ? 0.1 : 0.2 + index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                {exp.popular && <span className="popular-badge">Most Popular</span>}
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-price">
                  <span className="price-label">Starting from</span>
                  <span className="price-value">{exp.price}</span>
                </div>
                <ul className="experience-features">
                  {exp.features.map((feature) => (
                    <li key={feature}>
                      <Check size={14} /> {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="experience-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Book Now</span> <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="video-packages"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="packages-header">
              <h3 className="packages-title">Video Packages</h3>
              <p className="packages-subtitle">Capture your adventure</p>
            </div>
            <div className="packages-grid">
              {videoPackages.map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  className="package-card"
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <div className="package-icon">
                    <Play size={16} />
                  </div>
                  <div>
                    <h4>{pkg.name}</h4>
                    <p>{pkg.description}</p>
                  </div>
                  <span className="package-price">{pkg.price}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div
            className="stats-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                variants={fadeInScale}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <motion.span
                  className="stat-value"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                >
                  {stat.value}
                </motion.span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Jump Profile Section */}
      <section id="courses" className="journey-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag">The Experience</span>
            <h2 className="section-title">Your Skydiving Journey</h2>
          </motion.div>

          <div className="journey-timeline">
            {[
              { num: '01', icon: '✈️', title: 'Scenic Flight', desc: '20-min ride climbing to 13,000 feet with stunning views' },
              { num: '02', icon: '🪂', title: 'The Jump', desc: '60 seconds of freefall at 125 mph - pure adrenaline!' },
              { num: '03', icon: '🌤️', title: 'Canopy Ride', desc: '5-7 min peaceful descent with panoramic ocean views' },
              { num: '04', icon: '🎯', title: 'Safe Landing', desc: 'Touch down buzzing with unforgettable memories' },
            ].map((step, index) => (
              <motion.div
                key={step.num}
                className="journey-step"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <motion.div
                  className="step-content"
                  whileHover={{ y: -20, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="step-number"
                    whileHover={{ scale: 1.15, rotate: -8 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {step.num}
                  </motion.div>
                  <motion.span
                    className="step-icon"
                    whileHover={{ scale: 1.2, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step.icon}
                  </motion.span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag">Gallery</span>
            <h2 className="section-title">Capture the Moment</h2>
            <p className="section-subtitle">Relive the thrill through stunning visuals from our jumpers</p>
          </motion.div>

          <motion.div
            className="gallery-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { num: 1, title: 'Freefall Freedom', desc: 'Experience pure adrenaline' },
              { num: 2, title: 'Ocean Views', desc: 'Pattaya from above' },
              { num: 3, title: 'The Jump', desc: '13,000 feet of excitement' },
              { num: 4, title: 'Safe Landing', desc: 'Touch down with a smile' },
              { num: 5, title: 'Team Spirit', desc: 'Our expert instructors' },
            ].map((item, index) => (
              <motion.div
                key={item.num}
                className={`gallery-item gallery-item-${item.num}`}
                variants={fadeInScale}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
              >
                <div className="gallery-overlay">
                  <span>Watch Video</span>
                </div>
                <div className="gallery-label">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials + CTA Combined Section */}
      <section className="combined-section">
        <div className="container">
          <div className="combined-grid">
            {/* Testimonials Side */}
            <motion.div
              className="testimonials-side"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-tag">Testimonials</span>
              <h2 className="side-title">What Our Jumpers Say</h2>

              <div className="testimonials-stack">
                {testimonials.slice(0, 2).map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    className="testimonial-card-mini"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="testimonial-stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <p className="testimonial-text-mini">"{testimonial.text}"</p>
                    <div className="testimonial-author-mini">
                      <div className="author-avatar-mini">{testimonial.name.charAt(0)}</div>
                      <div>
                        <span className="author-name">{testimonial.name}</span>
                        <span className="author-location">{testimonial.location}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Side */}
            <motion.div
              className="cta-side"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="cta-inner">
                <motion.span
                  className="cta-emoji"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🪂
                </motion.span>
                <h2 className="cta-title">Ready to Jump?</h2>
                <p className="cta-text">Book online and save! Limited slots available each day.</p>
                <motion.a
                  href="#contact"
                  className="btn btn-primary btn-large"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => { e.preventDefault(); scrollToSection('#contact') }}
                >
                  Book Your Adventure <ArrowRight size={20} />
                </motion.a>
                <p className="cta-note">No payment required to reserve</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              transition={{ duration: 0.8 }}
            >
              <span className="section-tag">Contact Us</span>
              <h2 className="section-title">Get in Touch</h2>
              <p className="contact-subtitle">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>

              <motion.div
                className="contact-details"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: Phone, label: 'Phone', content: ['+66 85 900 3412'], isLink: true, prefix: 'tel:' },
                  { icon: Mail, label: 'Email', content: ['info@thaiskyadventures.com'], isLink: true, prefix: 'mailto:' },
                  { icon: MapPin, label: 'Location', content: ['Pattaya City, Chon Buri, Thailand'] },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="contact-item"
                    variants={fadeInUp}
                  >
                    <div className="contact-icon"><item.icon size={18} /></div>
                    <div>
                      <span className="contact-label">{item.label}</span>
                      {item.content.map((line, j) => (
                        item.isLink ? (
                          <a key={j} href={`${item.prefix}${line.replace(/\s/g, '')}`}>{line}</a>
                        ) : (
                          <span key={j}>{line}</span>
                        )
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="social-links"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {['facebook', 'instagram', 'youtube', 'line'].map((social, i) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="social-link"
                    aria-label={social}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social === 'facebook' && <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>}
                    {social === 'instagram' && <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>}
                    {social === 'youtube' && <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>}
                    {social === 'line' && <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.form
              className="contact-form"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="form-header">
                <h3 className="form-title">Send us a Message</h3>
                <p className="form-subtitle">We'll get back to you within 24 hours</p>
              </div>

              {['Name', 'Email', 'Phone'].map((field, i) => (
                <motion.div
                  key={field}
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <label htmlFor={field.toLowerCase()}>{field}</label>
                  <input
                    type={field === 'Email' ? 'email' : field === 'Phone' ? 'tel' : 'text'}
                    id={field.toLowerCase()}
                    placeholder={field === 'Email' ? 'your@email.com' : field === 'Phone' ? '+66 XX XXX XXXX' : 'Your name'}
                  />
                </motion.div>
              ))}
              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="btn btn-primary btn-full"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message <ArrowRight size={20} />
              </motion.button>

              <div className="form-trust">
                <div className="trust-item">
                  <Shield size={16} />
                  <span>Secure</span>
                </div>
                <div className="trust-item">
                  <Clock size={16} />
                  <span>24hr Response</span>
                </div>
                <div className="trust-item">
                  <Check size={16} />
                  <span>No Spam</span>
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer - Home page has its own footer inline */}
      <Footer />
    </>
  )
}

function Navbar({ scrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="nav-container">
        <Link to="/" className="logo">
          <motion.img
            src="https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-logo-768x211.jpg"
            alt="Thai Sky Adventures"
            className="logo-img"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          />
        </Link>

        <div className="nav-links">
          {navLinks.slice(0, 7).map((link, i) => (
            <Link key={link.name} to={link.href} className="nav-link">
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                {link.name}
              </motion.span>
            </Link>
          ))}
          <div className="nav-more">
            <span className="nav-link">More <ChevronDown size={14} /></span>
            <div className="nav-dropdown">
              {navLinks.slice(7).map((link) => (
                <Link key={link.name} to={link.href} className="dropdown-link">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link to="/contact" className="nav-cta">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.span>
        </Link>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="mobile-cta" onClick={() => setIsMenuOpen(false)}>
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img
                src="https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-logo.jpg"
                alt="Thai Sky Adventures"
                className="logo-img"
              />
            </Link>
            <p>Your gateway to the skies. Experience the thrill of skydiving with Thailand's premier drop zone.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/about">About Us</Link>
            <Link to="/tandem-skydiving">Tandem Skydiving</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-links">
            <h4>Information</h4>
            <Link to="/travel-info">Travel Info</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/licensed-skydivers">Licensed Skydivers</Link>
            <Link to="/shooting-range">Shooting Range</Link>
          </div>

          <div className="footer-links">
            <h4>Legal</h4>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Refund Policy</a>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>&copy; 2026 Thai Sky Adventures. All rights reserved.</p>
          <p>Let a little bit of extreme into your life!</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      <Routes>
        <Route path="/" element={<HomePageContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/tandem-skydiving" element={<TandemSkydiving />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/licensed-skydivers" element={<LicensedSkydivers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/travel-info" element={<TravelInfo />} />
        <Route path="/shooting-range" element={<ShootingRange />} />
      </Routes>
      {!isHomePage && <Footer />}
    </div>
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
