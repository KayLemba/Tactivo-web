import React from 'react';
import PageHeader from '../components/PageHeader';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';
import usePageTitle from '../hooks/usePageTitle';

function TestimonialsPage() {
  usePageTitle('Testimonials');
  return (
    <>
      <PageHeader
        eyebrow="Client Feedback"
        title="What clients say."
        subtitle="Feedback from teams we've worked with across fuel retail and industrial sites."
      />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

export default TestimonialsPage;
