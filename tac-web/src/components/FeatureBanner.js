import React from 'react';
import useReveal from '../hooks/useReveal';

function FeatureBanner() {
  const ref = useReveal();

  return (
    <section className="feature-banner">
      <div className="feature-bg">
        <img
          src="https://images.unsplash.com/photo-1705579611249-9861db5469ea?auto=format&fit=crop&w=1800&q=70"
          alt=""
          aria-hidden="true"
        />
      </div>
      <div className="wrap">
        <div className="feature-panel glass-panel reveal" ref={ref}>
          <span className="eyebrow">End-to-End Delivery</span>
          <h2>Full-service, start to finish.</h2>
          <p>
            From the first site survey to years of ongoing support, Tactivo stays with your
            project through every phase — design, installation, compliance, and the maintenance
            that keeps it all running.
          </p>
          <ul className="feature-checklist">
            <li>Site assessment &amp; system design</li>
            <li>Certified installation &amp; commissioning</li>
            <li>Regulatory compliance documentation</li>
            <li>24/7 monitoring &amp; remote diagnostics</li>
            <li>Scheduled maintenance &amp; callout support</li>
            <li>Staff training &amp; handover</li>
          </ul>
          <a href="#contact" className="btn btn-primary">Start a Project</a>
        </div>
      </div>
    </section>
  );
}

export default FeatureBanner;
