import React from 'react';
import Link from 'next/link';
import { Mail, Phone, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer({ lang, content }) {
  const isRtl = lang === 'fa';
  const f = content.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-12 border-t border-white/10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: About Brand (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 p-1.5 flex items-center justify-center border border-white/20">
                <img
                  src="/images/shimia-sadaf-logo-white-2.png"
                  alt="Shimia Sadaf"
                  className="w-full h-full object-contain filter drop-shadow"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                {content.brand.name}
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md font-light">
              {f.about}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-sky-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>PCI PTS 7.x & EMV L1/L2 Certified Hardware</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-200 mb-4">
              {f.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  {content.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  {content.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  {content.nav.products}
                </Link>
              </li>
              <li>
                <Link
                  href="/oem"
                  className="hover:text-white transition-colors"
                >
                  {content.nav.oem}
                </Link>
              </li>
              <li>
                <Link
                  href="/standards"
                  className="hover:text-white transition-colors"
                >
                  {content.nav.standards}
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-white transition-colors"
                >
                  {content.nav.faqs}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  {content.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-200 mb-4">
              {f.contactHeading}
            </h4>
            <div className="space-y-3.5 text-sm text-slate-300">
              <a
                href="mailto:info@shimiasadaf.com"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-sky-300" />
                </div>
                <span>info@shimiasadaf.com</span>
              </a>

              <div className="pt-2 text-xs text-slate-400">
                {isRtl
                  ? 'طراحی، بومی‌سازی و تولید پایانه‌های پرداخت الکترونیک هوشمند.'
                  : 'Design, localization, and manufacturing of smart electronic POS terminals.'}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{f.copyright}</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all text-xs font-semibold"
          >
            <span>{isRtl ? 'بازگشت به بالا' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
