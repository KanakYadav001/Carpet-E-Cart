import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]')
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [])
  return (
    <div className="page">
      <header className="top-bar">
        <div className="shell">
          <p>Extra 10% off on prepaid orders · Free shipping above ₹5,000</p>
        </div>
      </header>

      <nav className="navbar">
        <div className="shell navbar-inner">
          <div className="navbar-left">
            <span className="logo-mark">CR</span>
            <div className="brand">
              <span className="brand-name">Carpet Room</span>
              <span className="brand-tagline">Handcrafted rugs for warm homes</span>
            </div>
          </div>
          <div className="navbar-center">
            <a
              href="#collections"
              className={activeSection === 'collections' ? 'nav-link active' : 'nav-link'}
            >
              Collections
            </a>
            <a
              href="#rooms"
              className={activeSection === 'rooms' ? 'nav-link active' : 'nav-link'}
            >
              Shop by Room
            </a>
            <a
              href="#colors"
              className={activeSection === 'colors' ? 'nav-link active' : 'nav-link'}
            >
              Shop by Color
            </a>
            <a
              href="#about"
              className={activeSection === 'about' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </div>
          <div className="navbar-right">
            <div className="search">
              <input placeholder="Search carpets, colors, rooms..." />
            </div>
            <button className="icon-button" aria-label="Wishlist">
              ♥
            </button>
            <button className="icon-button" aria-label="Cart">
              🛒
            </button>
            <button
              className="icon-button menu-button"
              aria-label="Toggle navigation"
              onClick={() => setNavOpen((open) => !open)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {navOpen && (
        <div className="mobile-nav">
          <div className="shell">
            <a href="#collections" onClick={() => setNavOpen(false)}>
              Collections
            </a>
            <a href="#rooms" onClick={() => setNavOpen(false)}>
              Shop by Room
            </a>
            <a href="#colors" onClick={() => setNavOpen(false)}>
              Shop by Color
            </a>
            <a href="#about" onClick={() => setNavOpen(false)}>
              About
            </a>
            <a href="#contact" onClick={() => setNavOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}

      <main>
        <div className="shell">
          <section className="hero" id="hero" data-section>
          <div className="hero-text">
            <p className="eyebrow">CURATED FOR EVERY CORNER</p>
            <h1>Elevate your space with modern, handmade carpets.</h1>
            <p className="subtitle">
              Soft textures, rich weaves, and crafted patterns designed to feel as
              good as they look. Built for daily life, made to last.
            </p>
            <div className="hero-actions">
              <button className="primary">Shop Hand‑Tufted Rugs</button>
              <button className="ghost">Explore all collections</button>
            </div>
            <div className="hero-stats">
              <div>
                <span className="stat-value">5K+</span>
                <span className="stat-label">Happy homes styled</span>
              </div>
              <div>
                <span className="stat-value">100%</span>
                <span className="stat-label">Handmade in India</span>
              </div>
              <div>
                <span className="stat-value">48 hrs</span>
                <span className="stat-label">Dispatch on ready stock</span>
              </div>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-card hero-card-main">
              <span className="badge badge-accent">New</span>
              <div className="hero-carpet-swatch" />
              <div className="hero-card-info">
                <p className="hero-card-title">Crescent Loom Wool Carpet</p>
                <p className="hero-card-meta">Textured · Hand‑tufted · 8x10 ft</p>
              </div>
            </div>
            <div className="hero-card hero-card-secondary">
              <p className="hero-card-label">Try our room‑view mockups</p>
              <p className="hero-card-sub">
                Upload a photo of your space and preview any rug in minutes.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="collections" data-section>
          <header className="section-header">
            <h2>Shop by Category</h2>
            <p>Discover designs tailored for comfort, calm, and character.</p>
          </header>
          <div className="grid grid-4">
            <article className="card category-card">
              <div className="card-media category-media category-handtufted" />
              <div className="card-body">
                <h3>Hand‑Tufted Rugs</h3>
                <p>Plush wool surfaces with bold, modern motifs.</p>
                <button className="link-button">Shop hand‑tufted</button>
              </div>
            </article>
            <article className="card category-card">
              <div className="card-media category-media category-shaggy" />
              <div className="card-body">
                <h3>Shaggy Carpets</h3>
                <p>Sink‑in softness for bedrooms, lounge corners, and nooks.</p>
                <button className="link-button">Shop shaggy</button>
              </div>
            </article>
            <article className="card category-card">
              <div className="card-media category-media category-jute" />
              <div className="card-body">
                <h3>Jute & Natural Fiber</h3>
                <p>Earthy, breathable weaves that ground every room.</p>
                <button className="link-button">Shop jute</button>
              </div>
            </article>
            <article className="card category-card">
              <div className="card-media category-media category-irregular" />
              <div className="card-body">
                <h3>Irregular Shapes</h3>
                <p>Organic silhouettes that turn floors into focal points.</p>
                <button className="link-button">View sculpted rugs</button>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-alt" id="new-arrivals" data-section>
          <header className="section-header">
            <h2>New Arrivals</h2>
            <p>Fresh palettes and patterns just added to the studio.</p>
          </header>
          <div className="carousel">
            <article className="card product-card">
              <div className="card-media product-media product-1" />
              <div className="card-body">
                <h3>Stonewave Abstract Wool Rug</h3>
                <p className="pill-row">
                  <span className="pill">Hand‑tufted</span>
                  <span className="pill">8x10 ft</span>
                </p>
                <p className="price">
                  <span className="price-current">₹18,500</span>
                  <span className="price-original">₹24,500</span>
                  <span className="price-off">25% off</span>
                </p>
              </div>
            </article>
            <article className="card product-card">
              <div className="card-media product-media product-2" />
              <div className="card-body">
                <h3>Cloudline Beige Shag Carpet</h3>
                <p className="pill-row">
                  <span className="pill">High‑pile</span>
                  <span className="pill">5x7 ft</span>
                </p>
                <p className="price">
                  <span className="price-current">₹7,200</span>
                  <span className="price-original">₹9,600</span>
                  <span className="price-off">25% off</span>
                </p>
              </div>
            </article>
            <article className="card product-card">
              <div className="card-media product-media product-3" />
              <div className="card-body">
                <h3>Indigo Loom Jute Runner</h3>
                <p className="pill-row">
                  <span className="pill">Flatweave</span>
                  <span className="pill">2.5x8 ft</span>
                </p>
                <p className="price">
                  <span className="price-current">₹4,450</span>
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="colors" data-section>
          <header className="section-header">
            <h2>Shop by Color</h2>
            <p>Start with a shade that matches your mood.</p>
          </header>
          <div className="grid grid-6 color-grid">
            <button className="color-pill color-emerald">Green tones</button>
            <button className="color-pill color-ruby">Warm reds</button>
            <button className="color-pill color-sand">Soft beige</button>
            <button className="color-pill color-sunset">Terracotta</button>
            <button className="color-pill color-rose">Blush pink</button>
            <button className="color-pill color-ink">Deep blues</button>
          </div>
        </section>

        <section className="section section-alt" id="rooms" data-section>
          <header className="section-header">
            <h2>Shop by Room</h2>
            <p>Built for every way you live at home.</p>
          </header>
          <div className="grid grid-4">
            <article className="card room-card">
              <div className="card-media room-media room-bedroom" />
              <div className="card-body">
                <h3>Bedroom</h3>
                <p>Cloud‑soft textures to start and end your day.</p>
                <span className="meta">72 styles</span>
              </div>
            </article>
            <article className="card room-card">
              <div className="card-media room-media room-living" />
              <div className="card-body">
                <h3>Living Room</h3>
                <p>Oversized pieces that anchor gatherings and movie nights.</p>
                <span className="meta">96 styles</span>
              </div>
            </article>
            <article className="card room-card">
              <div className="card-media room-media room-dining" />
              <div className="card-body">
                <h3>Dining</h3>
                <p>Low‑pile weaves that are easy to clean and maintain.</p>
                <span className="meta">32 styles</span>
              </div>
            </article>
            <article className="card room-card">
              <div className="card-media room-media room-kids" />
              <div className="card-body">
                <h3>Kids & Play</h3>
                <p>Playful shapes with cushioned support for little feet.</p>
                <span className="meta">28 styles</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="about" data-section>
          <div className="two-column">
            <div>
              <header className="section-header align-left">
                <h2>Crafted slowly, delivered swiftly.</h2>
                <p>
                  Every Carpet Room piece is designed in‑house and tufted in small,
                  expert workshops across India. We keep batches limited so quality
                  stays high and designs stay special.
                </p>
              </header>
              <div className="icon-row">
                <div className="icon-card">
                  <span className="icon-dot" />
                  <h3>Free custom sizing</h3>
                  <p>Most designs can be tailored to the exact size you need.</p>
                </div>
                <div className="icon-card">
                  <span className="icon-dot" />
                  <h3>Design concierge</h3>
                  <p>Share your room photos for curated carpet recommendations.</p>
                </div>
                <div className="icon-card">
                  <span className="icon-dot" />
                  <h3>Pan‑India delivery</h3>
                  <p>Carefully rolled, packed, and shipped with tracking.</p>
                </div>
              </div>
            </div>
            <div className="about-panel">
              <div className="about-badge">Customer stories</div>
              <p className="quote">
                “The rug instantly tied our living room together. The pile feels
                luxurious, but it still handles daily use like a champ.”
              </p>
              <p className="quote-meta">— Aanya, Bengaluru</p>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="contact" data-section>
          <div className="two-column contact-block">
            <div>
              <header className="section-header align-left">
                <h2>Need help choosing a rug?</h2>
                <p>
                  Tell us about your room size, light, and style. Our team will
                  suggest a shortlist that works for your space and budget.
                </p>
              </header>
              <ul className="contact-list">
                <li>
                  <span className="label">Call / WhatsApp</span>
                  <a href="tel:+919129788793">+91‑9129‑788‑793</a>
                </li>
                <li>
                  <span className="label">Email</span>
                  <a href="mailto:hello@carpetroom.in">hello@carpetroom.in</a>
                </li>
                <li>
                  <span className="label">Studio</span>
                  <span>Bhadohi, Uttar Pradesh · View by appointment</span>
                </li>
              </ul>
            </div>
            <div className="contact-panel">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <input placeholder="Name" required />
                  <input placeholder="Email" type="email" required />
                </div>
                <div className="form-row">
                  <input placeholder="City" />
                  <input placeholder="Room (living, bedroom, etc.)" />
                </div>
                <textarea
                  rows={4}
                  placeholder="Tell us about your space, size, and preferred colors."
                />
                <button className="primary full-width" type="submit">
                  Request styling help
                </button>
                <p className="form-note">
                  We’ll respond within one business day with tailored suggestions.
                </p>
              </form>
            </div>
          </div>
        </section>
        </div>
      </main>

      <footer className="footer">
        <div className="shell">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="logo-mark">CR</span>
              <div>
                <p className="brand-name">Carpet Room</p>
                <p className="brand-tagline">Thoughtful carpets for modern homes.</p>
              </div>
            </div>
            <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
              <p>Sign up for new launches, styling tips, and previews.</p>
              <div className="newsletter-input">
                <input placeholder="Enter your email" type="email" required />
                <button type="submit">Sign up</button>
              </div>
            </form>
          </div>
          <div className="footer-columns">
            <div>
              <h3>Quick links</h3>
              <ul>
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#collections">Collections</a>
                </li>
                <li>
                  <a href="#rooms">Shop by room</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Policies</h3>
              <ul>
                <li>
                  <a href="#">Shipping & delivery</a>
                </li>
                <li>
                  <a href="#">Returns & exchanges</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Follow</h3>
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Pinterest</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Carpet Room. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
