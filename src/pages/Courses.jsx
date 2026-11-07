import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, ArrowRight, Clock, Award, GraduationCap, Zap, ChevronDown } from 'lucide-react'

const courses = [
  {
    name: 'AFF Level 1',
    price: '฿25,950',
    duration: '3 days',
    description: 'Try AFF with minimal commitment',
    features: ['Ground training session', 'Introductory tandem jump', 'Level 1 jump with 2 instructors', 'Student logbook included'],
    icon: Zap,
    color: '#3b82f6',
    highlight: 'Perfect to Try'
  },
  {
    name: 'AFF Full Course',
    price: '฿90,950',
    duration: '7 days',
    description: 'Complete AFF certification',
    features: ['6 hours ground school', '7 AFF level jumps', '2 USPA instructors initially', 'Solo progression with radio'],
    icon: Award,
    color: '#f97316',
    popular: true,
    highlight: 'Most Popular'
  },
  {
    name: 'USPA "A" License',
    price: '฿149,550',
    duration: '14 days',
    description: 'Full certification to jump worldwide',
    features: ['Complete AFF course', '25 total jumps', 'USPA A License certification', 'Jump solo anywhere'],
    icon: GraduationCap,
    color: '#22c55e',
    highlight: 'Complete Package'
  }
]

const additionalPrices = [
  { item: 'AFF Ground School', price: '฿6,000' },
  { item: 'AFF Levels 2-3 (each)', price: '฿15,000' },
  { item: 'AFF Levels 4-7 (each)', price: '฿9,500' },
  { item: 'Repeat Levels 1-3', price: '฿13,000' },
  { item: 'Repeat Levels 4-7', price: '฿8,000' },
  { item: 'Coach Jump (with gear)', price: '฿6,500' },
  { item: 'Coach Jump (no gear)', price: '฿5,000' },
  { item: 'Video of all AFF jumps', price: '฿3,000' },
]

const requirements = [
  { text: 'Maximum weight: 95kg', important: true },
  { text: 'One tandem jump recommended before AFF', important: false },
  { text: 'Contact us via WhatsApp to confirm availability', important: false },
  { text: 'Accommodation & transport not included', important: false },
  { text: 'Be available to jump when weather permits', important: true },
  { text: 'USPA membership required (~$60 USD)', important: true },
]

export default function Courses() {
  return (
    <div className="courses-scroll-container">
      {/* Section 1: Hero */}
      <section className="course-section hero-section">
        <div className="section-bg">
          <div className="bg-image" style={{ backgroundImage: `url('https://thaiskyadventures.com/wp-content/uploads/uspa-accelerated-freefall-learn-to-skydive-pattaya-thailand-03.jpg')` }} />
          <div className="bg-overlay hero-overlay" />
        </div>
        <div className="section-content">
          <motion.span
            className="hero-tag"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GraduationCap size={16} /> Learn to Skydive Solo
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            AFF <span>Courses</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            The Accelerated Freefall program is the fastest way to become a licensed skydiver.
            Progress from your first assisted jump to solo freefall with USPA certified instructors.
          </motion.p>
          <motion.div
            className="hero-stats-row"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="stat-box">
              <span className="stat-num">25</span>
              <span className="stat-txt">Jumps to License</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">14</span>
              <span className="stat-txt">Days Minimum</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">USPA</span>
              <span className="stat-txt">Certified</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="scroll-hint"
          >
            <span>View Programs</span>
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Course Cards */}
      <section className="course-section programs-section">
        <div className="section-bg light-bg" />
        <div className="section-content">
          <motion.div
            className="section-header center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag green">Programs</span>
            <h2>Choose Your Path</h2>
            <p>From first jump to full license – we have the right program for you</p>
          </motion.div>

          <div className="course-cards-row">
            {courses.map((course, index) => (
              <motion.div
                key={course.name}
                className={`course-card-full ${course.popular ? 'featured' : ''}`}
                style={{ '--accent': course.color }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -12 }}
              >
                <span className="card-highlight">{course.highlight}</span>
                <div className="card-icon-wrap">
                  <course.icon size={28} />
                </div>
                <h3>{course.name}</h3>
                <div className="card-price-big">{course.price}</div>
                <div className="card-duration">
                  <Clock size={14} /> Min. {course.duration}
                </div>
                <p className="card-desc">{course.description}</p>
                <ul className="card-features-list">
                  {course.features.map((f) => (
                    <li key={f}><Check size={14} /> {f}</li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn ${course.popular ? 'btn-primary' : 'btn-secondary'} btn-full`}>
                  Enquire Now <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Additional Pricing */}
      <section className="course-section pricing-section">
        <div className="section-bg dark-bg" />
        <div className="section-content">
          <motion.div
            className="section-header center light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag orange">Pricing</span>
            <h2>Additional Services</h2>
            <p>Individual level pricing and extra services</p>
          </motion.div>

          <motion.div
            className="pricing-grid-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {additionalPrices.map((item, index) => (
              <motion.div
                key={item.item}
                className="price-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="price-name">{item.item}</span>
                <span className="price-amount">{item.price}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="pricing-note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            💡 <strong>Budget Tip:</strong> Plan for at least 1-2 re-jumps on Levels 4-7. Not everyone passes every level on the first attempt!
          </motion.p>
        </div>
      </section>

      {/* Section 4: Requirements & CTA */}
      <section className="course-section requirements-section">
        <div className="section-bg">
          <div className="bg-image" style={{ backgroundImage: `url('https://thaiskyadventures.com/wp-content/uploads/uspa-accelerated-freefall-learn-to-skydive-pattaya-thailand-07.jpg')` }} />
          <div className="bg-overlay gradient-overlay" />
        </div>
        <div className="section-content">
          <div className="req-cta-grid">
            <motion.div
              className="requirements-box"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag white">Requirements</span>
              <h2>Before You Start</h2>
              <ul className="requirements-list-full">
                {requirements.map((req) => (
                  <li key={req.text} className={req.important ? 'important' : ''}>
                    <Check size={18} />
                    <span>{req.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="cta-box-full"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Ready to Start Your Journey?</h2>
              <p>Contact us to discuss which course is right for you and check availability</p>
              <div className="cta-buttons-col">
                <Link to="/contact" className="btn btn-primary btn-large">
                  Get Started <ArrowRight size={20} />
                </Link>
                <Link to="/tandem-skydiving" className="btn btn-ghost btn-large">
                  Try Tandem First
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
