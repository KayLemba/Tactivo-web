import React from 'react';
import useReveal from '../hooks/useReveal';

const CORE_SERVICES = [
  {
    title: 'Forecourt Solutions',
    slug: 'forecourt-solutions',
    desc: 'Everything for your forecourt — from fuel tanks and dispensers to automation — delivered as one seamless system built to maximise profit and uptime.',
    tags: ['Design', 'Installation', 'Compliance'],
    img: 'https://images.unsplash.com/photo-1727483771218-c1cc488d020c?auto=format&fit=crop&w=200&h=200&q=70',
    imgAlt: 'Forecourt canopy and fuel pumps at a filling station',
    process: [
      'Site survey and forecourt layout design',
      'Canopy, pump island and drainage planning',
      'Civil works coordination with contractors',
      'Equipment installation and calibration',
      'Commissioning and handover',
    ],
    specs: [
      'Compatible with major pump and dispenser brands',
      'Canopy lighting and signage integration',
      'Hazardous-area zoning taken into account for electrical layout',
    ],
    compliance: 'Installations follow standard hazardous-area electrical practice and local fire/safety requirements, with documentation prepared for authority inspection.',
  },
  {
    title: 'IT Solutions',
    slug: 'it-solutions',
    desc: 'Total control over your business, with trusted solutions in surveillance, networking, and solar energy that keep your operation always on.',
    tags: ['Surveillance', 'LAN/WAN', 'Software Dev', 'Intercom', 'Solar'],
    img: 'https://images.unsplash.com/photo-1680691257251-5fead813b73e?auto=format&fit=crop&w=200&h=200&q=70',
    imgAlt: 'Network patch panel and cabling in a server cabinet',
    process: [
      'Network and infrastructure audit',
      'Structured cabling and rack design',
      'Server and network hardware installation',
      'Software deployment and system integration',
      'Monitoring and support handover',
    ],
    specs: [
      'LAN/WAN design with wireless bridge links for remote sites',
      'Site-to-head-office VPN connectivity',
      'UPS-backed power for critical IT equipment',
    ],
    compliance: 'Configured around standard IT security practice — access control, scheduled backups, and patch management.',
  },
  {
    title: 'Fuel Tank / UST / AST',
    slug: 'fuel-tank',
    desc: 'Built to last, our underground and aboveground storage tanks provide a safe, reliable foundation for your fuel operations — securely stored and fully compliant.',
    tags: ['UST', 'AST', 'Leak Protection'],
    img: 'https://images.unsplash.com/31/khLPhykbRGiQmBGR4V6K__DSC1730.jpg?auto=format&fit=crop&w=200&h=200&q=70',
    imgAlt: 'Industrial aboveground fuel storage tanks',
    process: [
      'Ground and site assessment',
      'Tank selection — single or double-wall',
      'Excavation and foundation, or bunding for above-ground tanks',
      'Leak-detection and monitoring probe fitting',
      'Pressure/vacuum testing and commissioning',
    ],
    specs: [
      'Double-wall construction options with interstitial leak monitoring',
      'Overfill prevention valves',
      'Correctly sized vent stacks',
    ],
    compliance: 'Installed with secondary containment and spill-control principles in mind, consistent with standard fuel storage safety practice.',
  },
  {
    title: 'Fuel Dispensers',
    slug: 'fuel-dispensers',
    desc: 'Maximise every transaction with high-flow dispensers built for speed and reliability — engineered for zero downtime and more throughput at the pump.',
    tags: ['High-Flow', 'Multi-Product'],
    img: 'https://images.unsplash.com/photo-1758362066807-39825a297aa4?auto=format&fit=crop&w=200&h=200&q=70',
    imgAlt: 'Close-up of a fuel dispenser nozzle',
    process: [
      'Site electrical and piping preparation',
      'Dispenser mounting and plumbing',
      'Flow calibration and metrology check',
      'POS and payment system integration',
      'Load testing before go-live',
    ],
    specs: [
      'Multi-hose, multi-product configurations',
      'Suction or submersible pump compatibility',
      'Card and fleet payment integration',
    ],
    compliance: 'Volumetric accuracy calibrated to standard metrology tolerances; safety shear valves and emergency stops fitted as standard.',
  },
  {
    title: 'Fuel Automation',
    slug: 'fuel-automation',
    desc: 'Total control over your fuel, drop by drop. Intelligent automation tracks every litre, eliminates waste, and cuts operating costs.',
    tags: ['Real-Time Tracking', 'Loss Prevention'],
    img: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=200&h=200&q=70',
    imgAlt: 'Real-time monitoring dashboard screen',
    process: [
      'Define control points — tanks, pumps, POS',
      'Install automatic tank gauges and controllers',
      'Integrate with the Maestro software platform',
      'Configure alerts and reporting',
      'Staff training and handover',
    ],
    specs: [
      'Real-time tank gauging',
      'Automatic stock reconciliation',
      'Remote shutdown and price-board sync',
    ],
    compliance: 'Loss-prevention data logging supports stock reconciliation and gives you an audit trail for every transaction.',
  },
  {
    title: 'Surveillance & Access Control',
    slug: 'surveillance-access-control',
    desc: 'See every corner of your site and control exactly who gets in. CCTV coverage and access control systems built for round-the-clock protection.',
    tags: ['CCTV Cameras', 'Access Control', 'Remote Monitoring'],
    img: 'https://images.unsplash.com/photo-1529265895721-65945a176cff?auto=format&fit=crop&w=200&h=200&q=70',
    imgAlt: 'CCTV security camera mounted on a wall',
    process: [
      'Site risk assessment',
      'Camera placement and coverage planning',
      'Cabling and recorder (NVR/DVR) installation',
      'Access control hardware — readers, gates, barriers',
      'Remote viewing setup and staff handover',
    ],
    specs: [
      'HD/IP cameras with night vision and motion alerts',
      'RFID or biometric access control integration',
      'Cloud or on-premise recording options',
    ],
    compliance: 'Footage retention and access should follow your own site privacy policy and applicable data protection principles.',
  },
];

function Services() {
  const stripRef = useReveal();

  return (
    <section className="section section--flush-top" id="services">
      <div className="wrap">
        <div className="capability-strip reveal" ref={stripRef}>
          <a href="#it-solutions" className="capability-item">
            <img
              className="cap-illustration cap-photo"
              src="https://images.unsplash.com/photo-1680691257251-5fead813b73e?auto=format&fit=crop&w=300&q=70"
              alt="IT solutions — network patch panel"
            />
            <span>IT Solutions</span>
          </a>
          <a href="#it-solutions" className="capability-item">
            <img
              className="cap-illustration cap-photo"
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=300&q=70"
              alt="Network cabling and switches"
            />
            <span>Network</span>
          </a>
          <a href="#forecourt-solutions" className="capability-item">
            <img
              className="cap-illustration cap-photo"
              src="https://images.unsplash.com/photo-1727483771218-c1cc488d020c?auto=format&fit=crop&w=300&q=70"
              alt="Forecourt canopy and fuel pumps"
            />
            <span>Forecourt</span>
          </a>
          <a href="#fuel-tank" className="capability-item">
            <img
              className="cap-illustration cap-photo"
              src="https://images.unsplash.com/31/khLPhykbRGiQmBGR4V6K__DSC1730.jpg?auto=format&fit=crop&w=300&q=70"
              alt="Industrial fuel storage tanks"
            />
            <span>Storage</span>
          </a>
          <a href="#surveillance-access-control" className="capability-item">
            <img
              className="cap-illustration cap-photo"
              src="https://images.unsplash.com/photo-1529265895721-65945a176cff?auto=format&fit=crop&w=300&q=70"
              alt="CCTV security cameras"
            />
            <span>Security</span>
          </a>
        </div>

        <div className="services-list">
          {CORE_SERVICES.map((s, i) => (
            <div className={`service-detail reveal in${i % 2 ? ' service-detail--rev' : ''}`} key={s.title} id={s.slug}>
              <div className="service-detail-media">
                <img src={s.img.replace('w=200&h=200', 'w=640&h=520')} alt={s.imgAlt} loading="lazy" />
              </div>
              <div className="service-detail-copy">
                <h2>{s.title}</h2>
                <p>{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map((t) => <span key={t}>{t}</span>)}
                </div>

                <div className="service-tech-grid">
                  <div>
                    <h5>Install Process</h5>
                    <ul>{s.process.map((p) => <li key={p}>{p}</li>)}</ul>
                  </div>
                  <div>
                    <h5>Specifications</h5>
                    <ul>{s.specs.map((p) => <li key={p}>{p}</li>)}</ul>
                  </div>
                </div>
                <div className="service-compliance">
                  <h5>Compliance &amp; Safety</h5>
                  <p>{s.compliance}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
export { CORE_SERVICES };
