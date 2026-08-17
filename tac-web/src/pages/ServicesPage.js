import React from 'react';
import PageHeader from '../components/PageHeader';
import Services from '../components/Services';
import CtaBanner from '../components/CtaBanner';
import usePageTitle from '../hooks/usePageTitle';

function ServicesPage() {
  usePageTitle('Services');
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Integrated solutions, unmatched reliability."
        subtitle="From the ground beneath the forecourt to the network that secures it — six core services, each covering design, installation, and compliance."
      />
      <Services />
      <CtaBanner />
    </>
  );
}

export default ServicesPage;
