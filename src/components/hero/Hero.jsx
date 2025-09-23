import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">Discover & Collect Stunning Digital Art</h1>
          <p className="hero-sub">A curated marketplace connecting top creators with collectors. Browse exclusive drops, join auctions, and showcase your collection.</p>
          <div className="hero-cta">
            <a className="cta btn-cta" href="#explore">Explore Now</a>
            <a className="cta btn-outline" href="#about">Learn More</a>
          </div>
        </div>
        <div className="hero-art">
          <div className="art-card">
            <img src="https://picsum.photos/seed/hero1/520/520" alt="hero-art" />
            <div className="art-overlay">
              <div className="badge">Top Pick</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
