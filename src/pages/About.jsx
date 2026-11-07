import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Award, Users, Plane } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function About() {
  return (
    <section className="about-page">
      {/* Background */}
      <div className="about-bg">
        <div className="about-bg-image" style={{ backgroundImage: `url('https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-20.jpg')` }} />
        <div className="about-bg-overlay" />
      </div>

      {/* Content */}
      <div className="container about-container">
        {/* Left: Info */}
        <motion.div
          className="about-info"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <span className="about-tag">Our Story</span>
          <h1>About Thai Sky Adventures</h1>
          <p className="about-subtitle">Southeast Asia's Premier Skydiving Destination</p>

          <div className="about-text">
            <p>
              Thai Sky Adventures is a premier skydiving center located in Sriracha, Thailand.
              Founded by international experts with over <strong>40 years of combined experience</strong>,
              we offer a professional yet welcoming atmosphere where adventure meets safety.
            </p>
            <p>
              Whether you're a first-time jumper or an experienced skydiver, our team of
              <strong> USPA certified instructors</strong> and commercial pilots are here to make your
              skydiving dreams a reality. No prior experience needed – just bring your sense of adventure!
            </p>
          </div>

          {/* Stats inline */}
          <div className="about-stats">
            <div className="about-stat">
              <span className="stat-num">13,000</span>
              <span className="stat-text">Feet Altitude</span>
            </div>
            <div className="about-stat">
              <span className="stat-num">60s</span>
              <span className="stat-text">Freefall</span>
            </div>
            <div className="about-stat">
              <span className="stat-num">40+</span>
              <span className="stat-text">Years Exp.</span>
            </div>
            <div className="about-stat">
              <span className="stat-num">100%</span>
              <span className="stat-text">Safety</span>
            </div>
          </div>

          <div className="about-cta">
            <Link to="/tandem-skydiving" className="btn btn-primary">Book Your Jump</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </motion.div>

        {/* Right: Features */}
        <motion.div
          className="about-features-section"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="about-features-header">
            <span className="features-label">Why Choose Us</span>
            <h3>The Thai Sky Difference</h3>
          </div>
          <div className="about-features-cards">
            {[
              { icon: Shield, title: 'Safety First', desc: 'USPA guidelines & Thai aviation certified', color: '#22c55e' },
              { icon: Award, title: 'Expert Team', desc: '40+ years combined experience', color: '#f97316' },
              { icon: Users, title: 'All Welcome', desc: 'First-timers to pros', color: '#3b82f6' },
              { icon: Plane, title: 'Modern Fleet', desc: 'Well-maintained aircraft', color: '#a855f7' },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="about-feature-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{ '--accent': feature.color }}
              >
                <div className="feature-card-glow" />
                <div className="feature-card-icon">
                  <feature.icon size={24} />
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
