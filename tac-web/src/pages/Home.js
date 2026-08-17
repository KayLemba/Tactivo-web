import React from 'react';
import Hero from '../components/Hero';
import AboutTeaser from '../components/AboutTeaser';
import FeatureBanner from '../components/FeatureBanner';
import Gallery from '../components/Gallery';
import PartnersStrip from '../components/PartnersStrip';
import CtaBanner from '../components/CtaBanner';
import usePageTitle from '../hooks/usePageTitle';

function Home() {
  usePageTitle();
  return (
    <>
      <Hero />
      <div className="wrap"><div className="divider" /></div>
      <AboutTeaser />
      <FeatureBanner />
      <Gallery />
      <PartnersStrip />
      <CtaBanner />
    </>
  );
}

export default Home;
