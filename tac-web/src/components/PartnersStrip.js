import React from 'react';
import useReveal from '../hooks/useReveal';
import shaanCarriers from '../assets/partners/shaan-carriers.png';
import engen from '../assets/partners/engen.png';
import toyota from '../assets/partners/toyota.png';
import vivoEnergy from '../assets/partners/vivo-energy.png';
import vivoEnergyZambia from '../assets/partners/vivo-energy-zambia.png';

const PARTNERS = [
  { name: 'Toyota', logo: toyota },
  { name: 'Shaan Carriers & General Dealers', logo: shaanCarriers },
  { name: 'Engen', logo: engen },
  { name: 'Toyota (placeholder)', logo: toyota },
  { name: 'Vivo Energy', logo: vivoEnergy },
  { name: 'Vivo Energy Zambia', logo: vivoEnergyZambia },
];

function PartnersStrip() {
  const ref = useReveal();

  return (
    <section className="section section--flush-top partners-section">
      <div className="wrap reveal" ref={ref}>
        <span className="eyebrow">Trusted By</span>
        <h3>Our Partners</h3>
        <div className="partners-grid">
          {PARTNERS.map((p, i) => (
            <div className="partner-slot" key={`${p.name}-${i}`}>
              <img src={p.logo} alt={p.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersStrip;
