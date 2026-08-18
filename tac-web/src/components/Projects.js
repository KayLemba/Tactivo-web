import React from 'react';
import useReveal from '../hooks/useReveal';
import fuelPump from '../assets/gallery/fuel-pump.jpg';
import cctvCamera from '../assets/gallery/cctv-camera.jpg';
import tankGauge from '../assets/gallery/tank-gauge.jpg';
import dispenserController from '../assets/gallery/dispenser-controller.jpg';
import posSystem from '../assets/gallery/pos-system.jpg';
import nozzles from '../assets/gallery/nozzles.jpg';

const PROJECTS = [
  {
    img: fuelPump,
    tag: 'Forecourt Solutions',
    title: 'Full Forecourt Upgrade — Lusaka Filling Station',
    desc: 'Replaced ageing dispensers and rebuilt tank monitoring for a multi-pump station, cutting downtime and improving fuel accountability.',
  },
  {
    img: tankGauge,
    tag: 'Fuel Tank / UST / AST',
    title: 'Tank Gauging & Leak Detection Rollout',
    desc: 'Installed digital tank gauging across underground storage tanks for real-time level tracking and compliance reporting.',
  },
  {
    img: cctvCamera,
    tag: 'Surveillance & Access Control',
    title: 'Site-Wide CCTV & Access Control',
    desc: 'Deployed a full camera network and access control system across forecourt, back office, and storage areas.',
  },
  {
    img: dispenserController,
    tag: 'Fuel Automation',
    title: 'Maestro Lite Automation Deployment',
    desc: 'Connected pump controllers to Maestro Lite for live price scheduling, authorised dispensing, and reporting.',
  },
  {
    img: posSystem,
    tag: 'IT Solutions',
    title: 'POS & Network Infrastructure Setup',
    desc: 'Built out LAN/POS infrastructure for a retail forecourt, linking till systems to back-office reporting.',
  },
  {
    img: nozzles,
    tag: 'Forecourt Solutions',
    title: 'Multi-Product Dispenser Retrofit',
    desc: 'Retrofitted existing pump islands with high-flow, multi-product nozzles to reduce queue times at peak hours.',
  },
];

function Projects() {
  const gridRef = useReveal();

  return (
    <section className="section section--flush-top projects-section" id="projects">
      <div className="wrap">
        <div className="projects-grid reveal in" ref={gridRef}>
          {PROJECTS.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-card-media">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="project-card-body">
                <span className="project-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
