import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

function AboutTeaser() {
  const ref = useReveal();

  return (
    <section className="section" id="about-teaser">
      <div className="wrap">
        <div className="about-teaser reveal" ref={ref}>
          <div>
            <span className="eyebrow">Since 2021</span>
            <h2>Built by engineers who saw the gap.</h2>
            <p>
              Tactivo Technologies was founded by a team of visionary engineers and IT specialists
              who recognised a critical need: integrated technology to modernise and secure
              essential operations across African industries. We work across the fuel retail,
              logistics, and industrial sectors — closing the gap left by outdated systems, energy
              loss, data inefficiencies, and security vulnerabilities.
            </p>
            <Link to="/about" className="btn btn-ghost">More About Tactivo</Link>
          </div>
          <div className="about-highlights">
            <div className="about-highlight">
              <span className="ah-value">2021</span>
              <span className="ah-label">Founded</span>
            </div>
            <div className="about-highlight">
              <span className="ah-value">Lusaka, ZM</span>
              <span className="ah-label">Based &amp; Operating</span>
            </div>
            <div className="about-highlight">
              <span className="ah-value">Fuel · IT · Security</span>
              <span className="ah-label">Core Sectors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTeaser;
