import React from 'react';

export default function Ticker({ lang, content }) {
  const isRtl = lang === 'fa';
  const slogan = isRtl
    ? 'شیمیا صدف، سریع، امن، مطمئن • پایانه‌های پرداخت هوشمند M300 و M600 • گواهینامه بین‌المللی PCI PTS 7.x و EMV • استاندارد RKI و KLD'
    : 'Shimia Sadaf: Fast, Secure, Reliable • Smart POS Terminals M300 & M600 • PCI PTS 7.x & EMV Certified • RKI & KLD Secure Key Loading';

  const items = [1, 2, 3, 4];

  return (
    <div className="py-3 bg-[#003147] text-white overflow-hidden border-y border-white/10 relative z-20">
      <div className="flex select-none whitespace-nowrap animate-ticker items-center">
        {items.map((i) => (
          <div key={i} className="flex items-center gap-6 mx-4">
            <div className="w-5 h-5 rounded-full bg-white/10 p-1 flex items-center justify-center shrink-0">
              <img
                src="/images/shimia-sadaf-logo-white-2.png"
                alt="Logo"
                className="w-full h-full object-contain filter drop-shadow"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
              {slogan}
            </span>
            <span className="text-sky-400 opacity-60">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
