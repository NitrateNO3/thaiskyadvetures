import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, AlertCircle, Plane, Shield, ChevronDown, Users, Award, Wind } from 'lucide-react'

const jumpPrices = [
  { item: 'Hop and Pop (up to 5,500 ft)', price: '฿1,100' },
  { item: 'Fun Jump (above 11,000 ft)', price: '฿1,500' },
  { item: 'Coach Jump (without gear)', price: '฿5,000' },
  { item: 'Coach Jump (with gear)', price: '฿6,500' },
]

const rentalPrices = [
  { item: 'Parachute (per jump, incl. repack)', price: '฿1,500' },
  { item: 'Altimeter (per day)', price: '฿1,000' },
  { item: 'Jumpsuit (per day)', price: '฿500' },
  { item: 'Helmet (per day)', price: '฿500' },
  { item: 'Goggles (purchase only)', price: '฿1,000' },
]

const rules = [
  { text: 'AAD is mandatory', important: true },
  { text: 'Reserve repacks required every 6 months', important: true },
  { text: 'Helmets required until B license', important: false },
  { text: 'Cameras allowed only with 200+ jumps', important: false },
  { text: 'D license: minimum deploy at 2,500 ft', important: false },
  { text: 'No crossing or spiraling below 1,000 ft', important: true },
  { text: 'No jumping under influence', important: true },
  { text: 'Fun jumpers must not interfere with tandems', important: false },
]

const disciplines = [
  { name: 'Wingsuit', icon: Wind, desc: 'Experienced coaches available' },
  { name: 'Freefly', icon: Users, desc: 'VFS and head-down training' },
  { name: 'CRW', icon: Plane, desc: 'Canopy relative work' },
  { name: 'Formation', icon: Award, desc: 'FS and big-way skills' },
]

export default function LicensedSkydivers() {
  return (
    <div className="licensed-scroll-container">
      {/* Section 1: Hero */}
      <section className="licensed-section hero-section">
        <div className="section-bg">
          <div className="bg-image" style={{ backgroundImage: `url('https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-25.jpg')` }} />
          <div className="bg-overlay licensed-hero-overlay" />
        </div>
        <div className="section-content">
          <motion.span
            className="hero-tag blue"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Plane size={16} /> USPA Affiliated Drop Zone
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Licensed <span>Skydivers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to Thailand's premier drop zone at Nong Khor Reservoir.
            No reservations needed – just bring your license, logbook, and gear!
          </motion.p>
          <motion.div
            className="hero-stats-row"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="stat-box blue">
              <span className="stat-num">฿1,500</span>
              <span className="stat-txt">Fun Jump</span>
            </div>
            <div className="stat-box blue">
              <span className="stat-num">7 Days</span>
              <span className="stat-txt">Open Weekly</span>
            </div>
            <div className="stat-box blue">
              <span className="stat-num">13,000</span>
              <span className="stat-txt">Feet Altitude</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="scroll-hint"
          >
            <span>View Pricing</span>
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Pricing */}
      <section className="licensed-section pricing-section">
        <div className="section-bg light-bg" />
        <div className="section-content">
          <motion.div
            className="section-header center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag blue">Pricing</span>
            <h2>Jump & Rental Prices</h2>
            <p>Affordable rates for experienced jumpers</p>
          </motion.div>

          <div className="pricing-two-boxes">
            <motion.div
              className="price-box"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="price-box-header">
                <Plane size={24} />
                <h3>Jump Prices</h3>
              </div>
              <div className="price-items">
                {jumpPrices.map((item) => (
                  <div key={item.item} className="price-item-row">
                    <span className="item-name">{item.item}</span>
                    <span className="item-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="price-box"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="price-box-header">
                <Shield size={24} />
                <h3>Gear Rental</h3>
              </div>
              <div className="price-items">
                {rentalPrices.map((item) => (
                  <div key={item.item} className="price-item-row">
                    <span className="item-name">{item.item}</span>
                    <span className="item-price">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="price-box-note">Rental rigs: 135-280 sq ft. Priority for AFF students.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Rules & Requirements */}
      <section className="licensed-section rules-section">
        <div className="section-bg dark-bg" />
        <div className="section-content">
          <motion.div
            className="section-header center light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag orange">Requirements</span>
            <h2>DZ Rules & What to Bring</h2>
            <p>Please review before arriving</p>
          </motion.div>

          <div className="rules-two-col">
            <motion.div
              className="rules-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>What to Bring</h3>
              <ul className="bring-list">
                <li><Check size={18} /> Valid skydiving license</li>
                <li><Check size={18} /> Current logbook</li>
                <li><Check size={18} /> Your own gear (or rent from us)</li>
                <li><Check size={18} /> FAI-contracting country licenses accepted</li>
              </ul>
              <div className="rules-note">
                <AlertCircle size={18} />
                <span>Documents abroad? Send scans of last 3 jumps + both sides of license</span>
              </div>
            </motion.div>

            <motion.div
              className="rules-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3>Drop Zone Rules</h3>
              <ul className="rules-list">
                {rules.map((rule) => (
                  <li key={rule.text} className={rule.important ? 'important' : ''}>
                    <Check size={16} />
                    <span>{rule.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Disciplines & CTA */}
      <section className="licensed-section cta-section">
        <div className="section-bg">
          <div className="bg-image" style={{ backgroundImage: `url('https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-30.jpg')` }} />
          <div className="bg-overlay gradient-blue-overlay" />
        </div>
        <div className="section-content">
          <div className="disciplines-cta-grid">
            <motion.div
              className="disciplines-box"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag white">Coaching Available</span>
              <h2>Disciplines</h2>
              <div className="disciplines-cards">
                {disciplines.map((d, i) => (
                  <motion.div
                    key={d.name}
                    className="discipline-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="discipline-icon">
                      <d.icon size={20} />
                    </div>
                    <div className="discipline-info">
                      <h4>{d.name}</h4>
                      <p>{d.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="discipline-note">Coach availability varies – contact us beforehand</p>
            </motion.div>

            <motion.div
              className="licensed-cta-box"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>See You at the DZ!</h2>
              <p>Open 7 days a week, 8am - 5pm<br/>No reservation required</p>
              <div className="cta-info-cards">
                <div className="info-card">
                  <span className="info-label">Location</span>
                  <span className="info-value">Nong Khor Reservoir, Sriracha</span>
                </div>
                <div className="info-card">
                  <span className="info-label">From Bangkok</span>
                  <span className="info-value">96 km south of BKK</span>
                </div>
                <div className="info-card">
                  <span className="info-label">From Pattaya</span>
                  <span className="info-value">42 km north</span>
                </div>
              </div>
              <div className="cta-buttons-col">
                <Link to="/contact" className="btn btn-primary btn-large">
                  Contact Us
                </Link>
                <Link to="/travel-info" className="btn btn-ghost btn-large">
                  How to Get Here
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
