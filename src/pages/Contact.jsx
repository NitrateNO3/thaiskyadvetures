import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+66 (0) 85 900 3412', link: 'tel:+66859003412' },
  { icon: Phone, label: 'Phone 2', value: '+66 (0) 82 693 5198', link: 'tel:+66826935198' },
  { icon: Mail, label: 'Email', value: 'info@thaiskyadventures.com', link: 'mailto:info@thaiskyadventures.com' },
  { icon: Clock, label: 'Hours', value: 'Mon-Sun: 8:00 AM - 5:00 PM', link: null },
  { icon: MapPin, label: 'Address', value: '777 77, Pattaya City, Si Racha District, Chon Buri 20230', link: 'https://maps.app.goo.gl/42dRVq3z6h2wjQRBA' },
]

const socialLinks = [
  { name: 'WhatsApp', link: 'https://wa.me/message/DDV2GB7FXP7DI1', color: '#25D366' },
  { name: 'LINE', link: 'https://line.me/ti/p/muo2I9bBFH', color: '#00B900' },
  { name: 'Facebook', link: 'https://www.facebook.com/ThaiSkyAdventures', color: '#1877F2' },
  { name: 'Instagram', link: 'https://www.instagram.com/thaiskyadventures/', color: '#E4405F' },
  { name: 'YouTube', link: 'https://www.youtube.com/@ThaiSkyAdventures', color: '#FF0000' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Booking Inquiry - Thai Sky Adventures')
    const body = encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\n\n${formData.message}`)
    window.location.href = `mailto:info@thaiskyadventures.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="page-hero short">
        <div className="page-hero-bg" style={{ backgroundImage: `url('https://thaiskyadventures.com/wp-content/uploads/spectator-viewing-deck-restaurant-facilities-thai-sky-adventures-dropzone-pattaya.jpg')` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Get in touch – we'd love to hear from you!
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="page-section">
        <div className="container">
          <div className="contact-page-grid">
            {/* Info Side */}
            <motion.div
              className="contact-info-side"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Get in Touch</h2>
              <p>Have questions about booking, courses, or anything else? We're here to help!</p>

              <div className="contact-methods">
                {contactInfo.map((item) => (
                  <div key={item.label} className="contact-method">
                    <div className="method-icon">
                      <item.icon size={20} />
                    </div>
                    <div className="method-content">
                      <span className="method-label">{item.label}</span>
                      {item.link ? (
                        <a href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                          {item.value}
                        </a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-section">
                <h3>Connect With Us</h3>
                <div className="social-buttons">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      style={{ '--social-color': social.color }}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              className="contact-form-side"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Send a Message</h2>
              <p>Fill out the form and we'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="contact-form-page">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+66 XX XXX XXXX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your inquiry..."
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  Send Message <ArrowRight size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="page-section bg-light">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-tag">Location</span>
            <h2>Find Us</h2>
          </motion.div>

          <motion.div
            className="map-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.0!2d100.9!3d13.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDEyJzAwLjAiTiAxMDDCsDU0JzAwLjAiRQ!5e0!3m2!1sen!2sth!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Thai Sky Adventures Location"
            />
          </motion.div>

          <motion.div
            className="location-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              <strong>Location:</strong> Near Nong Khor Reservoir, Sri Racha |
              <strong> ~96km</strong> from Bangkok | <strong>~42km</strong> from Pattaya
            </p>
            <a
              href="https://maps.app.goo.gl/42dRVq3z6h2wjQRBA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
