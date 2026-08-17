import React from 'react';
import useReveal from '../hooks/useReveal';
import maestroSoftware from '../assets/maestro-software.jpeg';
import maestroCentral from '../assets/maestro-central.jpeg';
import maestroTaxi from '../assets/maestro-taxi.jpeg';
import maestroOtp from '../assets/maestro-otp.jpeg';

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

// duplicated once so the marquee track can loop seamlessly
const TRACK = [...PRODUCTS, ...PRODUCTS];

function MaestroProducts() {
  const subheadRef = useReveal();

  return (
    <section className="section section--flush-top">
      <div className="wrap">
        <div className="services-subhead reveal" ref={subheadRef}>
          <h3>The Maestro Product Suite</h3>
          <p>Tactivo's own software products, built to run alongside the hardware.</p>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {TRACK.map((p, i) => (
            <div className="product-card" key={`${p.name}-${i}`} aria-hidden={i >= PRODUCTS.length}>
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

export default MaestroProducts;
