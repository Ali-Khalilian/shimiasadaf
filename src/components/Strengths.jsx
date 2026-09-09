import React from 'react';
import { Award } from 'lucide-react';

export default function Strengths({ lang, content }) {
  const isRtl = lang === 'fa';
  const strengths = content.strengths;

  return (
    <section id="strengths" className="py-20 bg-[#004563] text-white relative overflow-hidden w-full">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-sky-200 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>{strengths.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-4">
            {strengths.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
            {strengths.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 hover:bg-white/15 hover:border-white/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/15 p-3 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain filter brightness-0 invert"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-200 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span className="font-mono">0{idx + 1}</span>
                <span className="text-sky-300 font-medium">Shimia Sadaf</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
