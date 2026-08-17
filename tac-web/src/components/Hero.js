import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

import fuelPump from '../assets/gallery/fuel-pump.jpg';
import tagReader from '../assets/gallery/tag-reader.jpg';
import cctvCamera from '../assets/gallery/cctv-camera.jpg';
import posSystem from '../assets/gallery/pos-system.jpg';
import probe from '../assets/gallery/probe.jpg';
import tankGauge from '../assets/gallery/tank-gauge.jpg';
import dispenserController from '../assets/gallery/dispenser-controller.jpg';
import nozzles from '../assets/gallery/nozzles.jpg';

const SLIDES = [
  { src: fuelPump, label: 'Fuel Pump' },
  { src: tagReader, label: 'Tag Reader' },
  { src: cctvCamera, label: 'CCTV Camera' },
  { src: posSystem, label: 'POS System' },
  { src: probe, label: 'Probe' },
  { src: tankGauge, label: 'Tank Gauge' },
  { src: dispenserController, label: 'Fuel Dispenser Controller' },
  { src: nozzles, label: 'Nozzles' },
];

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1735379595192-1bbbd0fffedf?auto=format&fit=crop&w=1800&q=70"
          alt=""
          aria-hidden="true"
        />
      </div>
      <div className="hero wrap">
        <div className="hero-copy glass-panel">
          <span className="eyebrow">Fuel Infrastructure &amp; IT Systems · Lusaka, Zambia</span>
          <h1>Precision, Progress, <em>Partnership.</em></h1>
          <p>
            Tactivo Technologies builds and secures the systems behind modern filling stations,
            logistics, and industrial operations — from the tank to the transaction, the sensor to
            the server.
          </p>
          <div className="hero-ctas">
            <Link to="/services" className="btn btn-primary">Explore Solutions</Link>
            <Link to="/maestro" className="btn btn-ghost">Meet Maestro</Link>
          </div>
        </div>

        <Carousel slides={SLIDES} />
      </div>
    </section>
  );
}

export default Hero;
