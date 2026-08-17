import React from 'react';
import useReveal from '../hooks/useReveal';

const SLOTS = new Array(6).fill(null);

function PartnersStrip() {
  const ref = useReveal();

  return (
    <section className="section section--flush-top partners-section">
      <div className="wrap reveal" ref={ref}>
        <span className="eyebrow">Trusted By</span>
        <h3>Our Partners</h3>
        <p className="partners-note">Partner logos coming soon.</p>
        <div className="partners-grid">
          {SLOTS.map((_, i) => (
            <div className="partner-slot" key={i}>
              <span>Logo</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersStrip;
