"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-left">
        <div className="nav-logo">
          <a href="/">
            <img src="./ayan_logo.png" alt="Ayanshu Logo" className="logo-img" />
          </a>

          <div className="nav-logo-text">
            <div className="nav-name">AYANSHU INNOVATIONS</div>
            <div className="nav-tagline">
              Where Ideas Transform Into Intelligent Solutions
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Links */}
      <nav className="nav-links">
        <a href="#services">Services</a>
        <a href="/about">About</a>
        <a href="#case-studies">Case Studies</a>
        <a href="#insights">Insights</a>
      </nav>

      <button className="nav-cta">Let's Talk</button>

      {/* Mobile Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#case-studies" onClick={() => setMenuOpen(false)}>Case Studies</a>
        <a href="#insights" onClick={() => setMenuOpen(false)}>Insights</a>
        <button className=" mobile-cta">Let's Talk</button>
      </div>
    </header>
  );
}
