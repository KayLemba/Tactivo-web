import React from 'react';
import { Link } from 'react-router-dom';

function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="wrap cta-banner-row">
        <h3>Ready to modernise? Let's build it.</h3>
        <Link to="/contact" className="btn btn-cta">Get In Touch</Link>
      </div>
    </section>
  );
}

export default CtaBanner;
