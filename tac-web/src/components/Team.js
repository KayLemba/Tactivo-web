import React from 'react';
import useReveal from '../hooks/useReveal';

const SEATS = [
  'Field Engineering',
  'Software & Systems',
  'Project Management',
  'Client Support',
];

function Team() {
  const gridRef = useReveal();

  return (
    <section className="section section--flush-top team-section" id="team">
      <div className="wrap">
        <p className="team-intro">Profiles for our engineering and support team are coming soon.</p>

        <div className="team-grid reveal in" ref={gridRef}>
          {SEATS.map((role) => (
            <div className="team-card" key={role}>
              <div className="team-avatar">
                <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </div>
              <h4>{role}</h4>
              <span className="team-tag">Profile coming soon</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
