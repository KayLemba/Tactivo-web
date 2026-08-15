import React, { useEffect, useRef, useState } from 'react';

function Carousel({ slides, interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (paused) return undefined;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [paused, slides.length, interval]);

  const goTo = (i) => setIndex(((i % slides.length) + slides.length) % slides.length);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-frame">
        {slides.map((slide, i) => (
          <figure
            key={slide.label}
            className={`carousel-slide${i === index ? ' active' : ''}`}
            aria-hidden={i !== index}
          >
            <img src={slide.src} alt={slide.label} />
            <figcaption>{slide.label}</figcaption>
          </figure>
        ))}

        <button type="button" className="carousel-arrow carousel-arrow--prev" onClick={prev} aria-label="Previous slide">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button type="button" className="carousel-arrow carousel-arrow--next" onClick={next} aria-label="Next slide">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>

      <div className="carousel-dots">
        {slides.map((slide, i) => (
          <button
            key={slide.label}
            type="button"
            className={`carousel-dot${i === index ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}: ${slide.label}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
