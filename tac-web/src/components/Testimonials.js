import React from 'react';
import useReveal from '../hooks/useReveal';

const TESTIMONIALS = [
  {
    quote: "Tactivo rebuilt our forecourt monitoring from the ground up. We finally have visibility into every tank and pump without chasing paperwork.",
    name: 'Mwansa Chileshe',
    role: 'Operations Manager, filling station client',
  },
  {
    quote: "The Maestro Lite rollout was smooth and the support afterward has been consistent. Price changes that used to take hours now take minutes.",
    name: 'David Phiri',
    role: 'Site Manager, fuel retail client',
  },
  {
    quote: "Their CCTV and access control installation was thorough and the team clearly understood forecourt security, not just generic IT.",
    name: 'Grace Banda',
    role: 'Facilities Lead, industrial client',
  },
];

function Testimonials() {
  const gridRef = useReveal();

  return (
    <section className="section section--flush-top testimonials-section" id="testimonials">
      <p className="testimonials-note wrap">
        Sample client feedback shown below is illustrative and will be replaced with real testimonials.
      </p>
      <div className="wrap">
        <div className="testimonials-grid reveal in" ref={gridRef}>
          {TESTIMONIALS.map((t) => (
            <blockquote className="testimonial-card" key={t.name}>
              <QuoteIcon />
              <p>&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="testimonial-quote-icon">
      <path d="M7 7h4v4c0 2.2-1.8 4-4 4H6v-2h1c1.1 0 2-.9 2-2H7V7Z" />
      <path d="M15 7h4v4c0 2.2-1.8 4-4 4h-1v-2h1c1.1 0 2-.9 2-2h-2V7Z" />
    </svg>
  );
}

export default Testimonials;
