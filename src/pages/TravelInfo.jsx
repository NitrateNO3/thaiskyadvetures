import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Bus, Plane, Car, Train, MapPin, Clock } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const transportOptions = [
  {
    icon: Bus,
    title: 'Bangkok Shuttle Bus',
    description: 'Free daily shuttle from Bangkok',
    details: [
      'Departs 09:00 from Novotel Hotel Siam Square',
      'Arrive by 08:45 at the hotel',
      '5-minute walk from Siam BTS Exit 6',
      'Return when all passengers have jumped'
    ]
  },
  {
    icon: Bus,
    title: 'Pattaya Pickup',
    description: 'Included with tandem bookings',
    details: [
      'Air-conditioned minibus from your hotel',
      'Choose pickup: 07:00-07:30 or 10:00-10:30',
      'Returns around 1pm or 4pm',
      'Pattaya North Bus Station pickup available'
    ]
  },
  {
    icon: Car,
    title: 'Taxi / Ride-Hailing',
    description: 'Door-to-door convenience',
    details: [
      'Bolt Taxi recommended (use Bolt app)',
      'Grab also available',
      'From Don Muang/U-Tapao: ~฿1,800',
      'Direct to drop zone address'
    ]
  },
  {
    icon: Car,
    title: 'Self-Drive',
    description: 'Just off the No. 7 motorway',
    details: [
      'Follow signs for Sri Racha Tiger Zoo',
      'Continue 1.8km past the zoo',
      'Turn left at "Nong Khor Reservoir" sign',
      'Continue 5.2km – we\'re on the left'
    ]
  }
]

const airports = [
  { name: 'Suvarnabhumi Airport (BKK)', distance: '~96 km', note: "Thailand's main international airport" },
  { name: 'Don Muang Airport (DMK)', distance: '~156 km', note: 'Budget airlines (AirAsia, Nok Air)' },
  { name: 'U-Tapao Airport (UTP)', distance: '~56 km', note: 'Closest option, limited flights' },
]

export default function TravelInfo() {
  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="page-hero short">
        <div className="page-hero-bg" style={{ backgroundImage: `url('https://thaiskyadventures.com/wp-content/uploads/arriving-at-thai-sky-adventures-skydiving-pattaya.jpg')` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Travel Information
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            How to reach Thai Sky Adventures
          </motion.p>
        </div>
      </section>

      {/* Location Overview */}
      <section className="page-section">
        <div className="container">
          <motion.div
            className="location-overview"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="location-icon">
              <MapPin size={48} />
            </div>
            <h2>Our Location</h2>
            <p className="location-address">
              777 77, Pattaya City, Si Racha District, Chon Buri 20230, Thailand
            </p>
            <p className="location-desc">
              Located near Nong Khor Reservoir in Sri Racha, we're conveniently situated between
              Bangkok and Pattaya – about 1 hour from Bangkok and 20 minutes from Pattaya.
            </p>
            <div className="location-distances">
              <div className="distance-item">
                <span className="distance-value">96 km</span>
                <span className="distance-label">from Bangkok</span>
              </div>
              <div className="distance-item">
                <span className="distance-value">42 km</span>
                <span className="distance-label">from Pattaya</span>
              </div>
              <div className="distance-item">
                <span className="distance-value">56 km</span>
                <span className="distance-label">from U-Tapao</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transport Options */}
      <section className="page-section bg-light">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-tag">Getting Here</span>
            <h2>Transport Options</h2>
          </motion.div>

          <div className="transport-grid">
            {transportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                className="transport-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="transport-icon">
                  <option.icon size={28} />
                </div>
                <h3>{option.title}</h3>
                <p className="transport-desc">{option.description}</p>
                <ul className="transport-details">
                  {option.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BTS Directions */}
      <section className="page-section">
        <div className="container">
          <motion.div
            className="bts-directions"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bts-icon">
              <Train size={32} />
            </div>
            <h2>From BTS Skytrain</h2>
            <div className="bts-steps">
              <div className="bts-step">
                <span className="step-num">1</span>
                <p>Take BTS Green Sukhumvit Line to <strong>Siam Station</strong></p>
              </div>
              <div className="bts-step">
                <span className="step-num">2</span>
                <p>Exit via <strong>Exit 6</strong></p>
              </div>
              <div className="bts-step">
                <span className="step-num">3</span>
                <p>Walk ~200m to <strong>Novotel Siam Square</strong></p>
              </div>
              <div className="bts-step">
                <span className="step-num">4</span>
                <p>Board our shuttle at <strong>09:00</strong></p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Airports */}
      <section className="page-section bg-dark">
        <div className="container">
          <motion.div
            className="section-header light"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-tag">Airports</span>
            <h2>Flying In?</h2>
          </motion.div>

          <div className="airports-grid">
            {airports.map((airport, index) => (
              <motion.div
                key={airport.name}
                className="airport-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Plane size={24} />
                <h4>{airport.name}</h4>
                <span className="airport-distance">{airport.distance}</span>
                <p>{airport.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Need Help Getting Here?</h2>
            <p>Contact us and we'll help you plan your journey</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Contact Us
              </Link>
              <a
                href="https://maps.app.goo.gl/42dRVq3z6h2wjQRBA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-large"
              >
                Open Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
