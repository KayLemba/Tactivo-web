import React from 'react';
import useReveal from '../hooks/useReveal';
import maestroSoftware from '../assets/maestro-software.jpeg';
import maestroCentral from '../assets/maestro-central.jpeg';
import maestroTaxi from '../assets/maestro-taxi.jpeg';
import maestroOtp from '../assets/maestro-otp.jpeg';

const CORE_SERVICES = [
  {
    title: 'Forecourt Solutions',
    desc: 'Everything for your forecourt — from fuel tanks and dispensers to automation — delivered as one seamless system built to maximise profit and uptime.',
    tags: ['Design', 'Installation', 'Compliance'],
    img: 'https://images.unsplash.com/photo-1727483771218-c1cc488d020c?auto=format&fit=crop&w=160&h=160&q=70',
    imgAlt: 'Forecourt canopy and fuel pumps at a filling station',
  },
  {
    title: 'IT Solutions',
    desc: 'Total control over your business, with trusted solutions in surveillance, networking, and solar energy that keep your operation always on.',
    tags: ['Surveillance', 'LAN/WAN', 'Software Dev', 'Intercom', 'Solar'],
    img: 'https://images.unsplash.com/photo-1680691257251-5fead813b73e?auto=format&fit=crop&w=160&h=160&q=70',
    imgAlt: 'Network patch panel and cabling in a server cabinet',
  },
  {
    title: 'Fuel Tank / UST / AST',
    desc: 'Built to last, our underground and aboveground storage tanks provide a safe, reliable foundation for your fuel operations — securely stored and fully compliant.',
    tags: ['UST', 'AST', 'Leak Protection'],
    img: 'https://images.unsplash.com/31/khLPhykbRGiQmBGR4V6K__DSC1730.jpg?auto=format&fit=crop&w=160&h=160&q=70',
    imgAlt: 'Industrial aboveground fuel storage tanks',
  },
  {
    title: 'Fuel Dispensers',
    desc: 'Maximise every transaction with high-flow dispensers built for speed and reliability — engineered for zero downtime and more throughput at the pump.',
    tags: ['High-Flow', 'Multi-Product'],
    img: 'https://images.unsplash.com/photo-1758362066807-39825a297aa4?auto=format&fit=crop&w=160&h=160&q=70',
    imgAlt: 'Close-up of a fuel dispenser nozzle',
  },
  {
    title: 'Fuel Automation',
    desc: 'Total control over your fuel, drop by drop. Intelligent automation tracks every litre, eliminates waste, and cuts operating costs.',
    tags: ['Real-Time Tracking', 'Loss Prevention'],
    img: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=160&h=160&q=70',
    imgAlt: 'Real-time monitoring dashboard screen',
  },
  {
    title: 'Surveillance & Access Control',
    desc: 'See every corner of your site and control exactly who gets in. CCTV coverage and access control systems built for round-the-clock protection.',
    tags: ['CCTV Cameras', 'Access Control', 'Remote Monitoring'],
    img: 'https://images.unsplash.com/photo-1529265895721-65945a176cff?auto=format&fit=crop&w=160&h=160&q=70',
    imgAlt: 'CCTV security camera mounted on a wall',
  },
];

const PRODUCTS = [
  {
    name: 'Maestro Software',
    desc: 'The core software platform powering Tactivo\'s fuel and forecourt systems.',
    img: maestroSoftware,
  },
  {
    name: 'Maestro Central',
    desc: 'Web dashboard for managing one or many filling stations from a single screen.',
    img: maestroCentral,
  },
  {
    name: 'Maestro Taxi Metering',
    desc: 'Fare metering built for taxi and fleet operators, integrated with the Maestro platform.',
    img: maestroTaxi,
  },
  {
    name: 'Maestro OTP',
    desc: 'One-time-password authentication for secure access and transaction verification.',
    img: maestroOtp,
  },
];

function Services() {
  const headRef = useReveal();
  const stripRef = useReveal();
  const subheadRef = useReveal();

  return (
    <section className="section section--flush-top" id="services">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">Our Services</span>
          <h2>Integrated solutions, unmatched reliability.</h2>
          <p>From the ground beneath the forecourt to the network that secures it, every service is built on the same foundation of precision engineering.</p>
        </div>

        <div className="capability-strip reveal" ref={stripRef}>
          <div className="capability-item">
            <img
              className="cap-illustration cap-photo"
              src="https://images.unsplash.com/photo-1698752822107-69f8973936e4?auto=format&fit=crop&w=200&q=70"
              alt="Solar panel array"
            />
            <span>Solar</span>
          </div>
          <div className="capability-item">
            <img
              className="cap-illustration cap-photo"
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=200&q=70"
              alt="Network cabling and switches"
            />
            <span>Network</span>
          </div>
          <div className="capability-item">
            <img
              className="cap-illustration cap-photo"
              src="https://images.unsplash.com/photo-1727483771218-c1cc488d020c?auto=format&fit=crop&w=200&q=70"
              alt="Forecourt canopy and fuel pumps"
            />
            <span>Forecourt</span>
          </div>
          <div className="capability-item">
            <img
              className="cap-illustration cap-photo"
              src="https://images.unsplash.com/31/khLPhykbRGiQmBGR4V6K__DSC1730.jpg?auto=format&fit=crop&w=200&q=70"
              alt="Industrial fuel storage tanks"
            />
            <span>Storage</span>
          </div>
          <div className="capability-item">
            <img
              className="cap-illustration cap-photo"
              src="https://images.unsplash.com/photo-1529265895721-65945a176cff?auto=format&fit=crop&w=200&q=70"
              alt="CCTV security cameras"
            />
            <span>Security</span>
          </div>
        </div>

        <div className="services-grid">
          {CORE_SERVICES.map((s) => (
            <div className="service-card reveal in" key={s.title}>
              <div className="icon-badge">
                <img src={s.img} alt={s.imgAlt} loading="lazy" />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="services-subhead reveal" ref={subheadRef}>
          <h3>The Maestro Product Suite</h3>
          <p>Tactivo's own software products, built to run alongside the hardware.</p>
        </div>
        <div className="product-grid">
          {PRODUCTS.map((p) => (
            <div className="product-card reveal in" key={p.name}>
              <div className="product-logo-frame">
                <img src={p.img} alt={`${p.name} logo`} />
              </div>
              <h4>{p.name}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
