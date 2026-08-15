import React from 'react';
import useReveal from '../hooks/useReveal';

const GALLERY_ITEMS = [
  {
    label: 'Forecourt & Fuel Pumps',
    img: 'https://images.unsplash.com/photo-1727483771218-c1cc488d020c?auto=format&fit=crop&w=600&q=70',
  },
  {
    label: 'Network & Server Infrastructure',
    img: 'https://images.unsplash.com/photo-1680691257251-5fead813b73e?auto=format&fit=crop&w=600&q=70',
  },
  {
    label: 'Fuel Storage Tanks',
    img: 'https://images.unsplash.com/31/khLPhykbRGiQmBGR4V6K__DSC1730.jpg?auto=format&fit=crop&w=600&q=70',
  },
  {
    label: 'CCTV & Access Control',
    img: 'https://images.unsplash.com/photo-1529265895721-65945a176cff?auto=format&fit=crop&w=600&q=70',
  },
  {
    label: 'Solar Power Systems',
    img: 'https://images.unsplash.com/photo-1698752822107-69f8973936e4?auto=format&fit=crop&w=600&q=70',
  },
  {
    label: 'Fuel Dispensers',
    img: 'https://images.unsplash.com/photo-1758362066807-39825a297aa4?auto=format&fit=crop&w=600&q=70',
  },
];

function Gallery() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="section gallery-section" id="gallery">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">The Systems We Work With</span>
          <h2>Precision engineering, sector by sector.</h2>
          <p>
            Representative examples of the equipment and infrastructure our services cover —
            not photos of a specific client site.
          </p>
        </div>

        <div className="gallery-grid reveal in" ref={gridRef}>
          {GALLERY_ITEMS.map((item) => (
            <figure className="gallery-item" key={item.label}>
              <img src={item.img} alt={item.label} loading="lazy" />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
