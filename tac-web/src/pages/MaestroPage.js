import React from 'react';
import PageHeader from '../components/PageHeader';
import Maestro from '../components/Maestro';
import MaestroProducts from '../components/MaestroProducts';
import LiveStatus from '../components/LiveStatus';
import CtaBanner from '../components/CtaBanner';
import usePageTitle from '../hooks/usePageTitle';

function MaestroPage() {
  usePageTitle('Maestro');
  return (
    <>
      <PageHeader
        eyebrow="Tactivo's Control System"
        title="One system. Two ways to run it."
        subtitle="Maestro is the software layer behind Tactivo's fuel infrastructure — connecting your stations, your controllers, and your data into a single, trusted system."
      />
      <Maestro />
      <LiveStatus />
      <MaestroProducts />
      <CtaBanner />
    </>
  );
}

export default MaestroPage;
