import React from 'react';
import { Cpu, Wrench, Shield, Layers, Workflow, Palette, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

export default function OemOdm({ lang, content, onOpenContact }) {
  const isRtl = lang === 'fa';
  const oem = content.oem;

  const pillarIcons = [
    <Cpu className="w-6 h-6 text-[#004563]" key="cpu" />,
    <Wrench className="w-6 h-6 text-[#004563]" key="wrench" />,
    <Shield className="w-6 h-6 text-[#004563]" key="shield" />,
    <Layers className="w-6 h-6 text-[#004563]" key="layers" />,
    <Workflow className="w-6 h-6 text-[#004563]" key="workflow" />,
    <Palette className="w-6 h-6 text-[#004563]" key="palette" />
  ];

  return (
    <section id="oem" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-[#004563] text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>{oem.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            {oem.title}{' '}
            <span className="text-[#004563] relative inline-block">
              {oem.titleHighlight}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
            {oem.subtitle}
          </p>
          <p className="text-sm text-[#939598] max-w-2xl mx-auto leading-relaxed">
            {oem.intro}
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {oem.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:border-sky-300 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-sky-50 transition-all">
                  {pillarIcons[idx % pillarIcons.length]}
                </div>

                <span className="text-xs font-mono font-bold text-[#939598] block mb-1">
                  0{idx + 1}
                </span>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#004563] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-[#004563]">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>{pillar.enTitle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA Box */}
        <div className="rounded-3xl bg-[#004563] text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <h3 className="text-xl sm:text-3xl font-black mb-3">
              {isRtl
                ? 'پایانه اختصاصی کسب‌وکار شما با استانداردهای بین‌المللی'
                : 'Your Brand, Your Innovation, Our Hardware Expertise'}
            </h3>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-8">
              {isRtl
                ? 'از تغییر ظاهر، رنگ و برندینگ تا طراحی کامل بردهای الکترونیکی و فریمور اختصاصی، تیم مهندسی شیمیا صدف در تمام مراحل همراه شماست.'
                : 'From custom branding, chassis colors, and packaging to ground-up board design and secure firmware development, our engineering team handles it all.'}
            </p>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#004563] font-bold text-sm sm:text-base hover:bg-slate-100 shadow-xl transition-all active:scale-95"
            >
              <span>{isRtl ? 'درخواست مشاوره OEM/ODM' : 'Schedule OEM/ODM Consultation'}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
