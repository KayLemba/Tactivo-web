import React from 'react';
import PageHeader from '../components/PageHeader';
import About from '../components/About';
import CtaBanner from '../components/CtaBanner';
import usePageTitle from '../hooks/usePageTitle';

function AboutPage() {
  usePageTitle('About');
  return (
    <>
      <PageHeader
        eyebrow="About Tactivo"
        title="Engineering the systems modern operations run on."
        subtitle="Fuel infrastructure, IT, and security — designed, installed, and supported by one team, from Lusaka."
      />
      <About />
      <CtaBanner />
    </>
  );
}

export default AboutPage;
