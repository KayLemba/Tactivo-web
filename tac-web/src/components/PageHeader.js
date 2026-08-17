import React from 'react';
import useReveal from '../hooks/useReveal';

function PageHeader({ eyebrow, title, subtitle }) {
  const ref = useReveal();
  return (
    <section className="page-header">
      <div className="wrap reveal" ref={ref}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHeader;
