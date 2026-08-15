import React, { useEffect, useRef, useState } from 'react';
import useReveal from '../hooks/useReveal';

function LiveStatus() {
  const introRef = useReveal();
  const panelRef = useRef(null);
  const [animated, setAnimated] = useState(false);
  const [litres, setLitres] = useState(0);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            animateCounter(48213, 1600, setLitres);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animated]);

  useEffect(() => {
    if (!animated) return undefined;
    const id = setInterval(() => {
      setLitres((prev) => prev + Math.floor(Math.random() * 4) + 1);
    }, 3500);
    return () => clearInterval(id);
  }, [animated]);

  return (
    <section className="section live-status-section" id="live-status">
      <div className="wrap live-status-grid">
        <div className="live-status-copy reveal" ref={introRef}>
          <span className="eyebrow">Real-Time Visibility</span>
          <h2>Your forecourt, live.</h2>
          <p>
            A snapshot of what Tactivo's systems track around the clock — tank levels, dispenser
            status, and daily throughput, all in one view.
          </p>
        </div>

        <div className={`status-panel reveal${animated ? ' in' : ''}`} ref={panelRef}>
          <div className="status-head">
            <span className="label">Live Forecourt Status</span>
            <span className="live-dot"><i></i>Monitoring</span>
          </div>

          <div className="tank-row">
            <div className="row-top"><span>Tank A — Diesel</span><span>82%</span></div>
            <div className="bar-track"><div className="bar-fill" style={{ width: animated ? '82%' : '0%' }} /></div>
          </div>
          <div className="tank-row">
            <div className="row-top"><span>Tank B — Petrol (Unleaded)</span><span>61%</span></div>
            <div className="bar-track"><div className="bar-fill" style={{ width: animated ? '61%' : '0%' }} /></div>
          </div>

          <div className="dispenser-grid">
            <div className="disp-chip"><span>Dispenser 01</span><span className="dot" /></div>
            <div className="disp-chip"><span>Dispenser 02</span><span className="dot" /></div>
            <div className="disp-chip"><span>Dispenser 03</span><span className="dot" /></div>
            <div className="disp-chip"><span>Dispenser 04</span><span className="dot" /></div>
          </div>

          <div className="counter-block">
            <span className="cl-label">Litres dispensed today</span>
            <span className="cl-value">{litres.toLocaleString('en-US')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function animateCounter(target, duration, setValue) {
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    setValue(Math.floor(eased * target));
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

export default LiveStatus;
