'use client'

import React, { useEffect, useState } from 'react';
import { Loader2, Zap, ShieldCheck, CreditCard } from 'lucide-react';

export default function Preloader({ isLoading, onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setFadeOut(true);
      const timer = setTimeout(() => {
        if (onFinish) onFinish();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isLoading, onFinish]);

  useEffect(() => {
    if (isLoading && progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) return prev;
          return prev + Math.random() * 15;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isLoading, progress]);

  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
    }
  }, [isLoading]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#004563] via-[#003147] to-[#002233] transition-opacity duration-600 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Animated Patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6">
        {/* Logo Area with Animation */}
        <div className="relative">
          {/* Rotating Circle Border */}
          <div className="absolute inset-0 w-32 h-32 rounded-full border-4 border-transparent border-t-sky-400 border-r-sky-300 animate-spin"></div>
          
          {/* Logo Container */}
          <div className="relative w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
            <img
              src="/images/shimia-sadaf-logo-white-2.png"
              alt="Shimia Sadaf"
              className="w-20 h-20 object-contain filter drop-shadow-lg animate-pulse-slow"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            {/* Fallback icon if image doesn't load */}
            <div className="hidden w-20 h-20 items-center justify-center">
              <CreditCard className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Orbiting Icons */}
          <div className="absolute inset-0 animate-spin-slow">
            <Zap className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-5 h-5 text-yellow-400 animate-pulse" />
          </div>
          <div className="absolute inset-0 animate-spin-reverse-slow">
            <ShieldCheck className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-5 h-5 text-emerald-400 animate-pulse" />
          </div>
        </div>

        {/* Brand Name */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3 animate-fade-in">
            <span>شیمیا صدف</span>
            <span className="text-sky-300">|</span>
            <span className="text-xl sm:text-2xl font-semibold text-sky-200">Shimia Sadaf</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 tracking-wide animate-fade-in animation-delay-300">
            پایانه‌های پرداخت هوشمند، ساخته‌شده برای اعتماد
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-72 sm:w-96 space-y-3">
          {/* Progress Track */}
          <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 rounded-full transition-all duration-300 ease-out shadow-lg shadow-sky-500/50"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="flex items-center justify-center gap-2 text-slate-200 text-sm">
            <Loader2 className="w-4 h-4 animate-spin text-sky-400" />
            <span className="font-medium">در حال بارگذاری...</span>
            <span className="text-sky-300 font-mono font-semibold">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading Hints */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 animate-fade-in animation-delay-500">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>PCI PTS 7.x</span>
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <Zap className="w-3.5 h-3.5 text-yellow-400" />
            <span>EMV L1 & L2</span>
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <CreditCard className="w-3.5 h-3.5 text-sky-400" />
            <span>4G + NFC</span>
          </span>
        </div>
      </div>
    </div>
  );
}
