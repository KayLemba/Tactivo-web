import React from 'react';
import PageHeader from '../components/PageHeader';
import Team from '../components/Team';
import CtaBanner from '../components/CtaBanner';
import usePageTitle from '../hooks/usePageTitle';

function TeamPage() {
  usePageTitle('Team');
  return (
    <>
      <PageHeader
        eyebrow="Behind Tactivo"
        title="The people building it."
        subtitle="Field engineers, software developers, and project managers working across fuel, IT, and security systems."
      />
      <Team />
      <CtaBanner />
    </>
  );
}

export default TeamPage;
