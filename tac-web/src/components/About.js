import React from 'react';
import useReveal from '../hooks/useReveal';

function About() {
  const ref1 = useReveal();
  const ref2 = useReveal();

  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy reveal" ref={ref1}>
            <span className="eyebrow">Since 2021</span>
            <h2>Built by engineers who saw the gap.</h2>
            <p>
              Tactivo Technologies was founded by a team of visionary engineers and IT specialists
              who recognised a critical need: integrated technology to modernise and secure
              essential operations across African industries.
            </p>
            <p>
              We work across the fuel retail, logistics, and industrial sectors, closing the gap
              left by outdated systems, energy loss, data inefficiencies, and security
              vulnerabilities — with engineering built on precision, and support built on
              partnership.
            </p>

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

            <div className="philosophy-list">
              <div className="philosophy-item">
                <span className="pill">Precision</span>
                <div>
                  <h4>Engineering built to spec</h4>
                  <p>Compliant installations and exact systems, with no shortcuts on safety or accuracy.</p>
                </div>
              </div>
              <div className="philosophy-item">
                <span className="pill">Progress</span>
                <div>
                  <h4>Modernisation that pays for itself</h4>
                  <p>Automation that replaces manual processes and cuts waste, energy loss, and downtime.</p>
                </div>
              </div>
              <div className="philosophy-item">
                <span className="pill">Partnership</span>
                <div>
                  <h4>Your operations, our priority</h4>
                  <p>Proactive support through every stage of your digital transformation journey.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal" ref={ref2}>
            <span className="eyebrow">What we solve</span>
            <div className="challenge-grid">
              <div className="challenge-card">
                <svg viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
                  <path d="M4 4h16v16H4z" /><path d="M4 9h16M9 20V9" />
                </svg>
                <div><h4>Outdated Systems</h4><p>Legacy equipment slowing operations down.</p></div>
              </div>
              <div className="challenge-card">
                <svg viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
                  <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>
                <div><h4>Energy Loss</h4><p>Inefficiency that quietly drains margins.</p></div>
              </div>
              <div className="challenge-card">
                <svg viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
                  <path d="M4 19h16M4 15l4-5 4 3 4-7 4 4" />
                </svg>
                <div><h4>Data Inefficiencies</h4><p>Numbers that don't reach decision-makers in time.</p></div>
              </div>
              <div className="challenge-card">
                <svg viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
                  <path d="M12 3l8 3.5V11c0 5-3.4 8.7-8 9.9-4.6-1.2-8-4.9-8-9.9V6.5L12 3z" />
                </svg>
                <div><h4>Security Vulnerabilities</h4><p>Sites and data left exposed to risk.</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
