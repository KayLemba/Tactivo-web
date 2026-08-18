import React from 'react';
import PageHeader from '../components/PageHeader';
import FAQ from '../components/FAQ';
import CtaBanner from '../components/CtaBanner';
import usePageTitle from '../hooks/usePageTitle';

function FAQPage() {
  usePageTitle('FAQ');
  return (
    <>
      <PageHeader
        eyebrow="Questions"
        title="Frequently asked questions."
        subtitle="Answers to the questions we hear most from filling station and industrial clients."
      />
      <FAQ />
      <CtaBanner />
    </>
  );
}

export default FAQPage;
