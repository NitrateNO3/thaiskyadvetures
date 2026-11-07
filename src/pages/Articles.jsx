import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const articles = [
  {
    title: 'Your First Tandem Skydive: What to Expect',
    excerpt: 'Everything you need to know before your first jump – from preparation to landing, we cover it all.',
    image: 'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-02.jpg',
    category: 'First Timers',
    readTime: '5 min read'
  },
  {
    title: '10 Tips for Conquering Your Fear of Heights',
    excerpt: 'Nervous about skydiving? These proven techniques will help you overcome your fears and embrace the thrill.',
    image: 'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-08.jpg',
    category: 'Tips & Guides',
    readTime: '4 min read'
  },
  {
    title: 'The Journey from Tandem to Solo: AFF Explained',
    excerpt: 'Learn how the Accelerated Freefall program transforms first-time jumpers into licensed skydivers.',
    image: 'https://thaiskyadventures.com/wp-content/uploads/uspa-accelerated-freefall-learn-to-skydive-pattaya-thailand-05.jpg',
    category: 'Training',
    readTime: '7 min read'
  },
  {
    title: 'Why Thailand is Perfect for Skydiving',
    excerpt: 'Discover what makes Thailand one of the best skydiving destinations in Southeast Asia.',
    image: 'https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-12.jpg',
    category: 'Destination',
    readTime: '3 min read'
  },
  {
    title: 'Understanding Skydiving Safety: A Complete Guide',
    excerpt: 'From equipment checks to emergency procedures – everything you need to know about staying safe in the sky.',
    image: 'https://thaiskyadventures.com/wp-content/uploads/uspa-licensed-skydivers-students-in-the-mock-upat-tsa.jpg',
    category: 'Safety',
    readTime: '6 min read'
  },
  {
    title: 'Progression Tips for New Skydivers',
    excerpt: 'Just got your A license? Here are expert tips for improving your skills and advancing your skydiving career.',
    image: 'https://thaiskyadventures.com/wp-content/uploads/learning-to-skydive-pattaya-thai-sky-adventures-02.jpg',
    category: 'Training',
    readTime: '5 min read'
  },
]

const categories = ['All', 'First Timers', 'Tips & Guides', 'Training', 'Safety', 'Destination']

export default function Articles() {
  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="page-hero short">
        <div className="page-hero-bg" style={{ backgroundImage: `url('https://thaiskyadventures.com/wp-content/uploads/Thai-Sky-Adventures-Gallery-30.jpg')` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Articles & Tips
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Learn everything about skydiving from our experts
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="page-section">
        <div className="container">
          <motion.div
            className="category-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${category === 'All' ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="page-section pt-0">
        <div className="container">
          <div className="articles-grid">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                className="article-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="article-image">
                  <img src={article.image} alt={article.title} />
                  <span className="article-category">{article.category}</span>
                </div>
                <div className="article-content">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="article-meta">
                    <span className="read-time">
                      <Clock size={14} /> {article.readTime}
                    </span>
                    <span className="read-more">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="page-section bg-gradient">
        <div className="container">
          <motion.div
            className="newsletter-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Stay Updated</h2>
            <p>Follow us on social media for the latest news, tips, and skydiving adventures!</p>
            <div className="social-follow">
              <a href="https://www.facebook.com/ThaiSkyAdventures" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Facebook
              </a>
              <a href="https://www.instagram.com/thaiskyadventures/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Instagram
              </a>
              <a href="https://www.youtube.com/@ThaiSkyAdventures" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                YouTube
              </a>
            </div>
          </motion.div>
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
            <h2>Ready to Experience It Yourself?</h2>
            <p>Stop reading about skydiving and start doing it!</p>
            <div className="cta-buttons">
              <Link to="/tandem-skydiving" className="btn btn-primary btn-large">
                Book Your Jump
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                Ask Questions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
