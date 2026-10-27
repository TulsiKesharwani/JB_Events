import React, { useState } from "react";
import { ArrowUpRight, Menu, X, Instagram, Mail } from "lucide-react";

const events = [
  {
    number: "01",
    title: "A long-table evening",
    category: "Intimate dinner celebration",
    image: "/images/event1 - Copy.jpg",
    description: "Thoughtful details, beautiful tablescapes, and a reason to gather."
  },
  {
    number: "02",
    title: "The garden gathering",
    category: "Outdoor celebrations",
    image: "/images/event2.jpg",
    description: "A relaxed garden setting filled with flowers, candlelight, and warmth."
  },
  {
    number: "03",
    title: "A moment to remember",
    category: "Weddings & receptions",
    image: "/images/event3.jpg",
    description: "Personal celebrations designed around the people who matter most."
  }
];


const services = [
  {
    number: "01",
    title: "Wedding Planning",
    description:
      "Beautifully planned weddings, receptions and celebrations."
  },
  {
    number: "02",
    title: "Corporate Events",
    description:
      "Professional events, award nights and brand experiences."
  },
  {
    number: "03",
    title: "Anchoring & Hosting",
    description:
      "Engaging hosting that brings the stage and audience together."
  },
  {
    number: "04",
    title: "Private Celebrations",
    description:
      "Birthdays, anniversaries and memorable personal occasions."
  }
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Gatherkind home">
        <img src="/images/jb_logo.jpeg" alt="" />
        JB Events
      </a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        <a href="#approach" onClick={closeMenu}>Our approach</a>
        <a href="#events" onClick={closeMenu}>Celebrations</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={14} /></a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <p className="eyebrow">THOUGHTFUL EVENTS, BEAUTIFULLY MADE</p>
        <h1>Your people.<br />Your kind of day.</h1>
        <div className="hero-aside">
          <p>Thoughtful celebrations shaped around the way you want to gather. Personal, considered, and full of life.</p>
          <a className="button button-dark" href="#contact">Explore our celebrations <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="hero-image image-frame">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2400&q=90"
          alt="Elegant outdoor wedding reception with flowers and warm evening light"
        />
        <span className="image-note">A day that feels like you.</span>
      </div>
      <div className="hero-bottomline">
        <span>BASED IN RAIPUR · AVAILABLE EVERYWHERE</span>
        <span>MADE WITH CARE, ALWAYS <span aria-hidden="true">↘</span></span>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro section-shell" id="approach">
      <p className="eyebrow">A LITTLE ABOUT US</p>
      <div className="intro-content">
        <h2>Designed with purpose.<br />Gathered with love.</h2>
        <div>
          <p className="intro-text">We believe the best gatherings are the ones that feel unmistakably yours. We bring thoughtful planning, a calm eye for detail, and a little bit of magic to the moments worth celebrating.</p>
          <a className="text-link" href="#services">Get to know our approach <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section className="events section-shell" id="events">
      {events.map((event, index) => (
        <article className={`event-card event-card-${index + 1}`} key={event.number}>
          <div className="event-image image-frame">
            <img src={event.image} alt={event.title} loading="lazy" />
            <span className="event-number">{event.number}</span>
          </div>
          <div className="event-info">
            <div>
              <p className="eyebrow">{event.category}</p>
              <h3>{event.title}</h3>
              <p className="event-description">{event.description}</p>
            </div>
            <a className="round-link" href="#contact" aria-label={`Ask about ${event.title}`}><ArrowUpRight size={18} /></a>
          </div>
        </article>
      ))}
    </section>
  );
}

function Services() {
  return (
    <section className="services section-shell" id="services">
      <div className="services-heading">
        <p className="eyebrow">WHAT WE CAN CREATE TOGETHER</p>
        <h2>Good people.<br /><em>Good reasons</em> to gather.</h2>
      </div>
      <div className="service-list">
        {services.map(({number, title, description}) => (
          <div className="service-row" key={number}>
            <span className="service-number">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <ArrowUpRight className="service-arrow" size={19} />
          </div>
        ))}
      </div>
    </section>
  );
}


function AnchorSection() {
  return (
    <section className="anchor-section section-shell" id="anchor">
      <div className="anchor-intro">
        <div>
          <p className="eyebrow">MEET THE ANCHOR</p>
          <h2>
            Every great event deserves
            <br />
            <em>a memorable host.</em>
          </h2>
        </div>

        <p className="anchor-intro-text">
          Bringing people together, creating energy, and making
          every celebration feel unforgettable.
        </p>
      </div>

      <div className="anchor-layout">
        <div className="anchor-image">
          <img
            src="/images/rahulrj.png"
            alt="RJ Rahul hosting an event"
            loading="lazy"
          />
          <span className="anchor-image-note">
            THE VOICE. THE ENERGY. THE EXPERIENCE.
          </span>
        </div>

        <div className="anchor-details">
          <p className="eyebrow">YOUR EVENT. YOUR MOMENT.</p>
          <h3>RJ Rahul</h3>

          <p className="anchor-description">
            From weddings and private celebrations to corporate
            gatherings, make your event memorable with an engaging
            host and a thoughtfully planned experience.
          </p>

          <div className="anchor-actions">
            <a
              className="button button-dark"
              href="https://www.instagram.com/rjrahulanchor/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Explore Instagram ↗
            </a>

            <a className="text-link" href="#contact">
              Enquire now ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}




function Contact() {
  const [form, setForm] = useState({ name: "", email: "", eventType: "Wedding", date: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }


  
function handleSubmit(event) {
  event.preventDefault();

  const subject = `Event enquiry from ${form.name}`;

  const body = `Name: ${form.name}
  Email: ${form.email}
  Event type: ${form.eventType}
  Preferred date: ${form.date || "Not decided"}

  Tell us more:
  ${form.message}`;

    const gmailUrl = new URL(
      "https://mail.google.com/mail/"
    );

    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set(
      "to",
      "rahul.janbandhu@gmail.com"
    );
    gmailUrl.searchParams.set("su", subject);
    gmailUrl.searchParams.set("body", body);

    window.open(gmailUrl.toString(), "_blank");

    setSubmitted(true);
  }


  return (
    <section className="contact section-shell" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">LET’S MAKE SOMETHING MEANINGFUL</p>
        <h2>Have a date<br />in mind?</h2>
        <p>Tell us a little about what you’re dreaming up. We’ll take it from there.</p>
        <a className="contact-email" href="mailto:rahul.janbandhu@gmail.com"><Mail size={16} />rahul.janbandhu@gmail.com</a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Your name
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        </label>
        <label>
          Email address
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@gmail.com" required />
        </label>
        <div className="form-grid">
        <label>
          Celebration
           <select name="eventType" value={form.eventType} onChange={handleChange}>
              <option>Wedding</option>
              <option>Private celebration</option>
              <option>Corporate event</option>
              <option>Other</option>
           </select>
        </label>
          <label>
          Preferred date
            <input type="date" name="date" value={form.date} onChange={handleChange} />
          </label>
        </div>
        <label>
          Tell us about your plans
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="The feeling, the people, the little details..." rows="4" required />
        </label>
        <button className="button button-dark form-submit" type="submit">Send an enquiry <ArrowUpRight size={15} /></button>
        {submitted && <p className="form-note">Your email draft should open with your enquiry details.Please send it to complete your enquiry.</p>}
      </form>
    </section>
  );
}


function Footer() {
  return (
    <footer className="footer section-shell">
      <a className="wordmark" href="#home"> <img src="/images/jb_logo.jpeg" alt="JB_events_logo" /> JB Events</a>
      {/* <p>Thoughtful celebrations, made together.</p>
      <a className="social-link" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram <Instagram size={15} /></a> */}
      <span className="copyright">© {new Date().getFullYear()} Made with <span className="footer-heart">&#9829;</span> in India</span>
    </footer>
  );
}


export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Events />
        <AnchorSection />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
