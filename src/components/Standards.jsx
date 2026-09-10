import React from 'react';
import { KeyRound, ShieldAlert, Lock, CheckCircle, Server } from 'lucide-react';

export default function Standards({ lang, content }) {
  const isRtl = lang === 'fa';
  const standards = content.standards;

  return (
    <section id="standards" className="py-20 bg-white relative overflow-hidden w-full">
      {/* Subtle background glow */}
      <div className="absolute top-0 end-0 w-96 h-96 bg-sky-100 rounded-full filter blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 start-0 w-96 h-96 bg-blue-100 rounded-full filter blur-[100px] opacity-50 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>{standards.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            {standards.title}
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            {standards.subtitle}
          </p>
        </div>

        {/* 2-Column Standards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {standards.cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all hover:border-sky-400 group relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 start-0 w-24 h-1 bg-gradient-to-r from-sky-400 to-emerald-400"></div>

              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center border border-sky-200 group-hover:scale-110 transition-transform">
                  {card.id === 'rki' ? (
                    <KeyRound className="w-6 h-6" />
                  ) : (
                    <Server className="w-6 h-6" />
                  )}
                </div>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {card.tag}
                </span>
              </div>

              <div className="mb-2">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                  {card.name}
                </h3>
                <span className="text-xs font-medium text-sky-600">
                  {card.fullName}
                </span>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
                {card.desc}
              </p>

              <div className="mt-6 pt-5 border-t border-gray-200 flex items-center gap-2 text-xs text-gray-600">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  {isRtl
                    ? 'تضمین بالاترین استانداردهای امنیتی شاپرک و PCI PTS'
                    : 'Compliant with PCI PTS & Central Banking Security Standards'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Image / Info */}
        <div className="bg-gradient-to-r from-primary to-[#002b3d] border border-sky-300 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <ShieldAlert className="w-7 h-7 text-sky-300" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                {isRtl ? 'حفاظت داده‌های تراکنش در بالاترین لایه سخت‌افزاری' : 'Hardware-Rooted Data Protection'}
              </h4>
              <p className="text-sm text-slate-200">
                {isRtl
                  ? 'تمامی اطلاعات حساس مالی در ماژول‌های امنیتی رمزنگاری‌شده پردازش و ذخیره می‌شوند.'
                  : 'All sensitive transactional tokens are processed and isolated within certified hardware cryptographic units.'}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-black/30 border border-white/20 text-white">
              EMV L1 & L2
            </div>
            <div className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-black/30 border border-white/20 text-white">
              PCI PTS 7.x
            </div>
            <div className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-black/30 border border-white/20 text-white">
              RKI / KLD
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
