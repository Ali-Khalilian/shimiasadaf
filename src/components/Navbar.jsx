'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Globe, Menu, X, ChevronDown, Mail, Phone, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Navbar({ lang, setLang, content, activeSection, onNavigate, onOpenProduct }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    setProductsDropdown(false);
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isRtl = lang === 'fa';

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-primary shadow-lg shadow-primary/20 py-3 border-b border-white/10'
          : 'bg-primary py-4 border-b border-white/10'
      }`}
    >
      {/* Top micro bar for quick contacts */}
      <div className="hidden lg:block border-b border-white/10 pb-2 mb-2 text-xs text-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 opacity-90">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              {isRtl ? 'گواهینامه‌های رسمی PCI PTS 7.x و EMV' : 'PCI PTS 7.x & EMV Certified POS Terminals'}
            </span>
            <span className="inline-block w-1 h-1 rounded-full bg-white/40"></span>
            <span className="opacity-80">
              {content.brand.slogan}
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="mailto:info@shimiasadaf.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-300" />
              <span>info@shimiasadaf.com</span>
            </a>
            <a
              href="tel:+8613522300616"
              className="flex items-center gap-1.5 hover:text-white transition-colors font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-sky-300" />
              <span dir="ltr">+86 13522300616</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link
            href="/"
            id="brand-logo-btn"
            className="flex items-center gap-3 group text-start focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 p-1.5 flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all shadow-inner">
              <img
                src="/images/shimia-sadaf-logo-white-2.png"
                alt="Shimia Sadaf Logo"
                className="w-full h-full object-contain filter drop-shadow"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="font-extrabold text-lg sm:text-xl text-white tracking-tight flex items-center gap-2">
                <span>{content.brand.name}</span>
              </div>
              <p className="text-[11px] text-sky-200/80 tracking-wider uppercase font-medium">
                {content.brand.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              id="nav-link-home"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeSection === 'hero'
                  ? 'text-white bg-white/15 shadow-sm'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {content.nav.home}
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <Link
                href="/products"
                id="nav-link-products"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 whitespace-nowrap ${
                  activeSection === 'products'
                    ? 'text-white bg-white/15'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{content.nav.products}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdown ? 'rotate-180' : ''}`} />
              </Link>

              {productsDropdown && (
                <div className={`absolute top-full ${isRtl ? 'right-0' : 'left-0'} pt-2 w-56 z-50`}>
                  <div className="bg-primary-dark border border-white/15 rounded-xl shadow-2xl p-2 backdrop-blur-xl">
                    <Link
                      href="/products/m300"
                      onClick={() => {
                        setProductsDropdown(false);
                      }}
                      className="w-full text-start p-2.5 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-white text-sm font-semibold group-hover:text-sky-300 whitespace-nowrap">
                          {content.nav.m300}
                        </div>
                        <div className="text-xs text-slate-300">
                          RTOS / Linux (285g)
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    </Link>

                    <Link
                      href="/products/m600"
                      onClick={() => {
                        setProductsDropdown(false);
                      }}
                      className="w-full text-start p-2.5 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-white text-sm font-semibold group-hover:text-sky-300 whitespace-nowrap">
                          {content.nav.m600}
                        </div>
                        <div className="text-xs text-slate-300">
                          Android / Linux (5000mAh)
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/oem"
              id="nav-link-oem"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeSection === 'oem'
                  ? 'text-white bg-white/15'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {content.nav.oem}
            </Link>

            <Link
              href="/about"
              id="nav-link-about"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeSection === 'about'
                  ? 'text-white bg-white/15'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {content.nav.about}
            </Link>

            <Link
              href="/standards"
              id="nav-link-standards"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeSection === 'standards'
                  ? 'text-white bg-white/15'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {content.nav.standards}
            </Link>

            <Link
              href="/faqs"
              id="nav-link-faqs"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeSection === 'faqs'
                  ? 'text-white bg-white/15'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {content.nav.faqs}
            </Link>

            <Link
              href="/contact"
              id="nav-link-contact"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeSection === 'contact'
                  ? 'text-white bg-white/15'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {content.nav.contact}
            </Link>
          </nav>

          {/* Right Action Area: Language switcher + CTA button */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              id="lang-toggle-btn"
              onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold transition-all shadow-sm"
              title={lang === 'fa' ? 'Switch to English' : 'تغییر به زبان فارسی'}
            >
              <Globe className="w-3.5 h-3.5 text-sky-300" />
              <span>{lang === 'fa' ? 'EN' : 'fa'}</span>
              <span className="opacity-50 text-[10px]">|</span>
              <span className="text-[11px] font-normal opacity-90">
                {lang === 'fa' ? 'انگلیسی' : 'فارسی'}
              </span>
            </button>

            {/* Desktop Contact CTA */}
            <Link
              href="/contact"
              id="navbar-cta-btn"
              className="hidden sm:inline-flex w-40 items-center justify-center px-4 py-2 rounded-lg bg-white text-primary font-bold text-xs sm:text-sm hover:bg-slate-100 transition-all shadow-md active:scale-95"
            >
              {content.nav.contactBtn}
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary-dark border-b border-white/10 px-4 pt-3 pb-6 mt-3 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-start py-2.5 px-3 rounded-lg text-slate-100 font-medium hover:bg-white/10 transition-colors"
            >
              {content.nav.home}
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="text-start py-2.5 px-3 rounded-lg text-slate-100 font-medium hover:bg-white/10 transition-colors flex items-center justify-between"
            >
              <span>{content.nav.products}</span>
              <span className="text-xs bg-white/10 text-sky-200 px-2 py-0.5 rounded">M300 & M600</span>
            </Link>
            <Link
              href="/oem"
              onClick={() => setMobileMenuOpen(false)}
              className="text-start py-2.5 px-3 rounded-lg text-slate-100 font-medium hover:bg-white/10 transition-colors"
            >
              {content.nav.oem}
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-start py-2.5 px-3 rounded-lg text-slate-100 font-medium hover:bg-white/10 transition-colors"
            >
              {content.nav.about}
            </Link>
            <Link
              href="/standards"
              onClick={() => setMobileMenuOpen(false)}
              className="text-start py-2.5 px-3 rounded-lg text-slate-100 font-medium hover:bg-white/10 transition-colors"
            >
              {content.nav.standards}
            </Link>
            <Link
              href="/faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-start py-2.5 px-3 rounded-lg text-slate-100 font-medium hover:bg-white/10 transition-colors"
            >
              {content.nav.faqs}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-start py-2.5 px-3 rounded-lg text-slate-100 font-medium hover:bg-white/10 transition-colors"
            >
              {content.nav.contact}
            </Link>

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-lg bg-white text-primary font-bold text-center text-sm shadow"
              >
                {content.nav.contactBtn}
              </Link>

              <div className="flex items-center justify-between text-xs text-slate-300 pt-2">
                <a href="mailto:info@shimiasadaf.com" className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-sky-300" />
                  <span>info@shimiasadaf.com</span>
                </a>
                <a href="tel:+8613522300616" className="flex items-center gap-1 font-mono" dir="ltr">
                  <Phone className="w-3.5 h-3.5 text-sky-300" />
                  <span>+86 13522300616</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
