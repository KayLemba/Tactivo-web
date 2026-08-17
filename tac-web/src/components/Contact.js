import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';

function Contact() {
  const leftRef = useReveal();
  const formRef = useReveal();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks — this form is not yet connected to an inbox. Add form handling before going live.');
  };

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div className="reveal" ref={leftRef}>
            <span className="eyebrow">Let's Talk</span>
            <h2 className="contact-heading">Ready to modernise your operations?</h2>
            <p className="contact-subtext">Tell us about your site, your systems, or your challenge — we'll get back to you with next steps.</p>

            <div className="contact-info-item">
              <div className="l">Location</div>
              <div className="v">Lusaka, Zambia</div>
            </div>
            <div className="contact-info-item">
              <div className="l">Email</div>
              <div className="placeholder-note">Add company email address here</div>
            </div>
            <div className="contact-info-item">
              <div className="l">Phone</div>
              <div className="placeholder-note">Add company phone number here</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal" ref={formRef}>
            <div className="form-row">
              <div>
                <label htmlFor="fname">Full name</label>
                <input id="fname" name="fname" type="text" required />
              </div>
              <div>
                <label htmlFor="femail">Email</label>
                <input id="femail" name="femail" type="email" required />
              </div>
            </div>
            <div>
              <label htmlFor="fcompany">Company</label>
              <input id="fcompany" name="fcompany" type="text" />
            </div>
            <div>
              <label htmlFor="fmsg">What do you need help with?</label>
              <textarea id="fmsg" name="fmsg" required />
            </div>
            <button type="submit" className="btn btn-primary btn-submit">Send Message</button>
            <p className="form-status">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
