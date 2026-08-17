import React from 'react';
import Contact from '../components/Contact';
import usePageTitle from '../hooks/usePageTitle';

function ContactPage() {
  usePageTitle('Contact');
  return <Contact />;
}

export default ContactPage;
