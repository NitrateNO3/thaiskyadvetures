import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, Plane, Camera, Video, Star, ArrowRight, Sparkles, Shield, Clock, Users, Award, ChevronDown } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const packages = [
  {
    name: 'Tandem Jump',
    price: '฿9,700',
    description: 'Pure adrenaline experience',
    features: ['13,000 ft altitude', '60 seconds freefall', 'USPA certified instructor', 'Scenic canopy ride', 'First jump certificate'],
    icon: Plane,
    color: '#3b82f6'
  },
  {
    name: 'Tandem + Video',
    price: '฿13,650',
    description: 'Capture every thrilling moment',
    features: ['Everything in Basic', 'Professional HD video', 'Edited same day', 'Digital download', 'Social media ready'],
    icon: Video,
    color: '#f97316',
    popular: true
  },
  {
    name: 'Video & Photos',
    price: '฿14,650',
    description: 'Complete memory package',
    features: ['Everything in Video', 'High-resolution photos', '50+ action shots', 'Landing capture', 'USB available'],
    icon: Camera,
    color: '#a855f7'
  },
  {
    name: 'Deluxe Package',
    price: '฿15,650',
    description: 'The ultimate experience',
    features: ['Full HD video', 'Premium photo package', 'Multiple camera angles', 'Extended professional edit', 'USB drive included'],
    icon: Sparkles,
    color: '#22c55e'
  }
]

const process = [
  { step: '01', title: 'Arrive & Register', desc: 'Check in at our office, complete paperwork, and choose your package', icon: '📋' },
  { step: '02', title: 'Safety Briefing', desc: '5-10 minute briefing with your instructor on body position and hand signals', icon: '🎓' },
  { step: '03', title: 'Gear Up', desc: 'Get fitted with your harness and goggles, then meet your tandem instructor', icon: '🪂' },
  { step: '04', title: 'Board Aircraft', desc: '20-minute scenic flight climbing to 13,000 feet over Thailand', icon: '✈️' },
  { step: '05', title: 'The Jump!', desc: 'Exit the aircraft and freefall at 120mph for an incredible 60 seconds', icon: '🤸' },
  { step: '06', title: 'Canopy Ride', desc: '7-8 minutes of peaceful descent with stunning ocean and landscape views', icon: '🌅' },
  { step: '07', title: 'Safe Landing', desc: 'Touch down safely on our landing area and celebrate your achievement!', icon: '🎯' },
  { step: '08', title: 'Collect Media', desc: 'Pick up your professionally edited video and photos (30-45 min edit time)', icon: '📸' }
]

const included = [
  { icon: '🚐', title: 'Free Hotel Pickup', desc: 'Complimentary pickup from Pattaya hotels' },
  { icon: '👕', title: 'Jumpsuit Provided', desc: 'Comfortable jumpsuit if needed' },
  { icon: '🥽', title: 'Goggles Included', desc: 'Options for glasses wearers too' },
  { icon: '📜', title: 'Jump Certificate', desc: 'Official first jump certificate' },
  { icon: '🎓', title: 'Full Training', desc: 'Complete safety briefing included' },
  { icon: '☕', title: 'Refreshments', desc: 'Complimentary drinks on site' },
]

export default function TandemSkydiving() {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="tandem-hero-section">
        <div className="tandem-hero-bg">
          <div
            className="tandem-hero-image"
            style={{ backgroundImage: `url('https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-01.jpg')` }}
          />
          <div className="tandem-hero-overlay" />
        </div>

        <div className="tandem-hero-content">
          <motion.span
            className="tandem-badge"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Sparkles size={16} /> Thailand's Highest Jump
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Tandem <span>Skydiving</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Experience the ultimate thrill of freefall from 13,000 feet,
            securely attached to an expert USPA-certified instructor
          </motion.p>

          <motion.div
            className="tandem-hero-stats"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="hero-stat-card">
              <span className="stat-number">13,000</span>
              <span className="stat-unit">FEET</span>
              <span className="stat-desc">Jump Altitude</span>
            </div>
            <div className="hero-stat-card">
              <span className="stat-number">60</span>
              <span className="stat-unit">SECONDS</span>
              <span className="stat-desc">Freefall Time</span>
            </div>
            <div className="hero-stat-card">
              <span className="stat-number">120</span>
              <span className="stat-unit">MPH</span>
              <span className="stat-desc">Top Speed</span>
            </div>
          </motion.div>

          <motion.div
            className="tandem-hero-cta"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact" className="btn btn-primary btn-large">
              Book Your Jump <ArrowRight size={20} />
            </Link>
            <a href="#packages" className="btn btn-ghost btn-large">
              View Packages <ChevronDown size={20} />
            </a>
          </motion.div>
        </div>

        <div className="scroll-indicator">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="tandem-packages-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-tag">Packages</span>
            <h2>Choose Your Experience</h2>
            <p className="section-subtitle">All packages include complimentary hotel pickup from Pattaya</p>
          </motion.div>

          <motion.div
            className="tandem-packages-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`tandem-package-card ${pkg.popular ? 'popular' : ''}`}
                style={{ '--accent': pkg.color }}
                variants={fadeInUp}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {pkg.popular && (
                  <div className="popular-ribbon">
                    <Star size={12} /> Most Popular
                  </div>
                )}
                <div className="package-header">
                  <div className="package-icon-wrap">
                    <pkg.icon size={28} />
                  </div>
                  <h3>{pkg.name}</h3>
                  <p className="package-desc">{pkg.description}</p>
                </div>
                <div className="package-price-wrap">
                  <span className="package-price">{pkg.price}</span>
                </div>
                <ul className="package-features-list">
                  {pkg.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'} btn-full`}
                >
                  Book Now <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="weight-surcharge"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>
              <strong>Weight Surcharge:</strong> 95-99kg: ฿500 | 100-104kg: ฿1,000 | 105-109kg: ฿1,500 | 110-115kg: ฿2,000
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="tandem-process-section">
        <div className="container">
          <motion.div
            className="section-header light"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-tag">The Experience</span>
            <h2>Your Jump Day Journey</h2>
            <p className="section-subtitle">From arrival to landing – here's what to expect</p>
          </motion.div>

          <div className="process-journey">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                className="journey-step"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="journey-icon">{item.icon}</div>
                <div className="journey-content">
                  <span className="journey-number">{item.step}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
                {index < process.length - 1 && <div className="journey-connector" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="tandem-requirements-section">
        <div className="container">
          <div className="requirements-layout">
            <motion.div
              className="requirements-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-15.jpg" alt="Skydiving preparation" />
              <div className="image-badge">
                <Shield size={24} />
                <span>100% Safety Record</span>
              </div>
            </motion.div>

            <motion.div
              className="requirements-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">Before You Jump</span>
              <h2>Requirements</h2>
              <p className="requirements-intro">
                Skydiving is accessible to almost everyone! Here's what you need to know:
              </p>

              <div className="requirements-grid">
                <div className="requirement-card">
                  <Users size={24} />
                  <h4>Age</h4>
                  <p>Minimum 12 years old (written parental consent required for minors)</p>
                </div>
                <div className="requirement-card">
                  <Award size={24} />
                  <h4>Weight</h4>
                  <p>25kg minimum, 115kg maximum (surcharges apply over 95kg)</p>
                </div>
                <div className="requirement-card">
                  <Shield size={24} />
                  <h4>Health</h4>
                  <p>Consult your doctor if over 60 or taking regular medication</p>
                </div>
                <div className="requirement-card">
                  <Clock size={24} />
                  <h4>Scuba Divers</h4>
                  <p>Must wait 18 hours after diving before skydiving</p>
                </div>
              </div>

              <div className="requirements-notes">
                <h4>Important Notes:</h4>
                <ul>
                  <li><Check size={16} /> Wear comfortable clothes and closed-toe shoes</li>
                  <li><Check size={16} /> No alcohol or drugs – no refund if suspected</li>
                  <li><Check size={16} /> Bring valid ID for registration</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Included Section */}
      <section className="tandem-included-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-tag">What's Included</span>
            <h2>Everything You Need</h2>
            <p className="section-subtitle">All the essentials are covered in your package</p>
          </motion.div>

          <motion.div
            className="included-cards"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {included.map((item, index) => (
              <motion.div
                key={item.title}
                className="included-item"
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <span className="included-emoji">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="tandem-cta-section">
        <div className="tandem-cta-bg">
          <div className="cta-bg-image" style={{ backgroundImage: `url('https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-05.jpg')` }} />
          <div className="cta-bg-overlay" />
        </div>
        <div className="container">
          <motion.div
            className="tandem-cta-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Take the Leap?</h2>
            <p>Book your tandem skydive today and experience Thailand from 13,000 feet!</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Book Your Jump <ArrowRight size={20} />
              </Link>
              <a href="tel:+66859003412" className="btn btn-secondary btn-large">
                Call +66 85 900 3412
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
