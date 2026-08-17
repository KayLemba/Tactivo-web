import React from 'react';
import useReveal from '../hooks/useReveal';

function PageHeader({ eyebrow, title, subtitle, bgImage }) {
  const ref = useReveal();
  return (
    <section className={`page-header${bgImage ? ' page-header--bg' : ''}`}>
      {bgImage && (
        <div className="page-header-bg">
          <img src={bgImage} alt="" aria-hidden="true" />
        </div>
      )}
      <div className="wrap">
        <div className={`page-header-inner reveal${bgImage ? ' glass-panel' : ''}`} ref={ref}>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}

export default PageHeader;
