import React from 'react';
import PageHeader from '../components/PageHeader';
import Projects from '../components/Projects';
import CtaBanner from '../components/CtaBanner';
import usePageTitle from '../hooks/usePageTitle';

function ProjectsPage() {
  usePageTitle('Projects');
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Case studies & completed projects."
        subtitle="A look at forecourt, IT, and automation projects Tactivo has delivered."
      />
      <Projects />
      <CtaBanner />
    </>
  );
}

export default ProjectsPage;
