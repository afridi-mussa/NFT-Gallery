import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <div className="brand">
          <div className="logo-mark">∘</div>
          <div className="brand-text">
            <div className="brand-title">Mussa</div>
            <div className="brand-sub">NFT Gallery</div>
          </div>
        </div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="#explore">Explore</a>
          <a href="#wallet">Wallet</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-actions">
          <button className="btn connect">Connect Wallet</button>
          <div className="avatar">
            <img src="https://i.pravatar.cc/40?img=12" alt="me" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
