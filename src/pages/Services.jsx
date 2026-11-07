import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Camera, Video, Users, Plane, GraduationCap, Target, ArrowRight } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const services = [
  {
    icon: Plane,
    title: 'Tandem Skydiving',
    description: 'Experience the thrill of freefall from 13,000 feet with an expert instructor.',
    price: 'From ฿9,700',
    link: '/tandem-skydiving',
    features: ['No experience needed', '60 seconds freefall', 'Hotel pickup included']
  },
  {
    icon: GraduationCap,
    title: 'Skydive Courses',
    description: 'Learn to skydive solo with our AFF program and earn your USPA license.',
    price: 'From ฿25,950',
    link: '/courses',
    features: ['AFF Level 1 to A License', 'USPA certified training', 'Expert instructors']
  },
  {
    icon: Users,
    title: 'Licensed Skydivers',
    description: 'Fun jumps and coaching for experienced skydivers at our USPA-affiliated DZ.',
    price: 'From ฿1,100',
    link: '/licensed-skydivers',
    features: ['Fun jumps', 'Gear rental', 'Coaching available']
  },
  {
    icon: Target,
    title: 'Shooting Range',
    description: 'Try our on-site shooting range with a variety of firearms.',
    price: 'From ฿800',
    link: '/shooting-range',
    features: ['Multiple firearms', 'All skill levels', 'Safety supervised']
  },
]

const videoPackages = [
  { name: 'Tandem with Video', price: '฿13,650', description: 'Professional edited video' },
  { name: 'Video & Photos', price: '฿14,650', description: 'Video + high-res photos' },
  { name: 'Deluxe Package', price: '฿15,650', description: 'Full video + premium photos + USB' },
  { name: 'AFF Video Package', price: '฿3,000', description: 'All AFF jumps from instructor helmet' },
]

export default function Services() {
  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url('https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-10.jpg')` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <motion.span
            className="page-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            What We Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Everything you need for the ultimate skydiving experience
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="page-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-tag">Services</span>
            <h2>What We Offer</h2>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card-large"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon">
                  <service.icon size={32} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-price">{service.price}</div>
                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link to={service.link} className="btn btn-secondary btn-full">
                  Learn More <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Packages */}
      <section className="page-section bg-dark">
        <div className="container">
          <motion.div
            className="section-header light"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-tag">Capture the Moment</span>
            <h2>Video & Photo Packages</h2>
          </motion.div>

          <div className="video-packages-grid">
            {videoPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className="video-package-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Camera size={24} />
                <h4>{pkg.name}</h4>
                <p>{pkg.description}</p>
                <span className="package-price">{pkg.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="page-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-tag">Extras</span>
            <h2>Additional Services</h2>
          </motion.div>

          <div className="extras-grid">
            {[
              { title: 'Bangkok Shuttle', price: '฿500/person', desc: 'Round trip from Siam Square' },
              { title: 'Spectator Bus', price: '฿500/person', desc: 'First spectator rides free' },
              { title: 'Gear Rental', price: 'From ฿500/day', desc: 'Helmets, jumpsuits, altimeters' },
              { title: 'Parachute Packing Course', price: '฿7,000', desc: 'Learn to pack your own' },
            ].map((extra, index) => (
              <motion.div
                key={extra.title}
                className="extra-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4>{extra.title}</h4>
                <span className="extra-price">{extra.price}</span>
                <p>{extra.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section bg-gradient">
        <div className="container">
          <motion.div
            className="cta-box light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Book?</h2>
            <p>Contact us to plan your perfect skydiving experience</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Contact Us
              </Link>
              <a href="tel:+66859003412" className="btn btn-secondary btn-large">
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
