import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Target, Shield, AlertCircle } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const firearms = [
  {
    name: 'Glock 9mm',
    packages: [
      { rounds: 15, price: '฿1,300' },
      { rounds: 25, price: '฿2,000' },
      { rounds: 50, price: '฿3,500' },
    ]
  },
  {
    name: '.357 Magnum Revolver',
    packages: [
      { rounds: 5, price: '฿1,200' },
      { rounds: 10, price: '฿2,000' },
      { rounds: 25, price: '฿3,500' },
      { rounds: 50, price: '฿6,000' },
    ]
  },
  {
    name: '1911 .45 ACP',
    packages: [
      { rounds: 15, price: '฿1,400' },
      { rounds: 25, price: '฿2,650' },
      { rounds: 50, price: '฿4,000' },
    ]
  },
  {
    name: '.44 Magnum Revolver',
    packages: [
      { rounds: 5, price: '฿1,800' },
      { rounds: 10, price: '฿2,800' },
      { rounds: 25, price: '฿5,000' },
      { rounds: 50, price: '฿8,000' },
    ]
  },
  {
    name: 'AR9 Submachine Gun',
    packages: [
      { rounds: 10, price: '฿1,600' },
      { rounds: 25, price: '฿2,500' },
      { rounds: 50, price: '฿4,000' },
      { rounds: 100, price: '฿7,000' },
    ]
  },
  {
    name: '.22 LR Rifle',
    packages: [
      { rounds: 15, price: '฿900' },
      { rounds: 25, price: '฿1,600' },
      { rounds: 50, price: '฿2,500' },
    ]
  },
  {
    name: 'AR15 Assault Rifle',
    packages: [
      { rounds: 59, price: '฿3,000' },
      { rounds: 89, price: '฿5,500' },
      { rounds: 119, price: '฿7,500' },
      { rounds: 199, price: '฿9,500' },
    ]
  },
  {
    name: 'Shotgun',
    packages: [
      { rounds: 5, price: '฿800' },
      { rounds: 10, price: '฿1,300' },
      { rounds: 25, price: '฿2,000' },
      { rounds: 50, price: '฿3,500' },
    ]
  },
]

export default function ShootingRange() {
  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url('https://thaiskyadventures.com/wp-content/uploads/viewing-deck-thai-sky-adventures-skydiving-pattaya.jpg')` }} />
        <div className="page-hero-overlay dark" />
        <div className="page-hero-content">
          <motion.span
            className="page-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            On-Site Activity
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Shooting Range
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Experience the thrill on the ground too!
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="page-section">
        <div className="container">
          <motion.div
            className="shooting-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="intro-icon">
              <Target size={48} />
            </div>
            <h2>Add Some Action</h2>
            <p>
              While you're at Thai Sky Adventures, why not try our on-site shooting range?
              Whether you're waiting for your jump slot or just looking for more excitement,
              we offer a variety of firearms for all experience levels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Firearms & Pricing */}
      <section className="page-section bg-dark">
        <div className="container">
          <motion.div
            className="section-header light"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-tag">Firearms</span>
            <h2>Available Weapons & Pricing</h2>
          </motion.div>

          <div className="firearms-grid">
            {firearms.map((firearm, index) => (
              <motion.div
                key={firearm.name}
                className="firearm-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <h3>{firearm.name}</h3>
                <div className="package-options">
                  {firearm.packages.map((pkg) => (
                    <div key={pkg.rounds} className="package-option">
                      <span className="rounds">{pkg.rounds} rounds</span>
                      <span className="price">{pkg.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="page-section">
        <div className="container">
          <motion.div
            className="safety-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="safety-icon">
              <Shield size={48} />
            </div>
            <h2>Safety First</h2>
            <p>
              All shooting activities are supervised by trained range officers. Safety equipment
              including ear and eye protection is provided. First-time shooters receive a comprehensive
              safety briefing before handling any firearms.
            </p>
            <div className="safety-note">
              <AlertCircle size={20} />
              <span>No prior experience required – our instructors will guide you through everything.</span>
            </div>
          </motion.div>
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
            <h2>Ready for Double the Adventure?</h2>
            <p>Combine skydiving with shooting for the ultimate adrenaline day!</p>
            <div className="cta-buttons">
              <Link to="/tandem-skydiving" className="btn btn-primary btn-large">
                Book a Tandem Jump
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
