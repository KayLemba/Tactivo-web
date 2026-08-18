import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';

const FAQS = [
  {
    q: 'What areas do you service?',
    a: 'We work across the fuel retail, logistics, and industrial sectors, primarily in and around Lusaka, Zambia, with capacity to take on projects further afield.',
  },
  {
    q: "What's the difference between Maestro Central and Maestro Lite?",
    a: 'Maestro Central is the web-based dashboard for managing one or many filling stations from a single screen. Maestro Lite is the backend engine that talks directly to the hardware in real time at each station.',
  },
  {
    q: 'Do you handle both installation and ongoing support?',
    a: 'Yes. We design and install forecourt and IT systems, and provide proactive support afterward — this includes maintenance, troubleshooting, and system updates.',
  },
  {
    q: 'Can you retrofit existing fuel stations, or only new builds?',
    a: 'Both. Most of our projects are retrofits — upgrading existing tanks, dispensers, and IT systems on operating sites with minimal disruption.',
  },
  {
    q: 'Do you offer CCTV and access control as standalone services?',
    a: 'Yes, surveillance and access control can be installed independently of forecourt work, as part of our IT Solutions offering.',
  },
  {
    q: 'How do I get a quote for my site?',
    a: "Reach out through our Contact page or WhatsApp with a few details about your site, and we'll follow up with next steps.",
  },
];

function FAQ() {
  const listRef = useReveal();
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((current) => (current === i ? -1 : i));

  return (
    <section className="section section--flush-top faq-section" id="faq">
      <div className="wrap">
        <div className="faq-list reveal in" ref={listRef}>
          {FAQS.map((item, i) => (
            <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={item.q}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.q}</span>
                <span className="faq-icon" aria-hidden="true">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && <p className="faq-answer">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
