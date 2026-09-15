'use client'

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ShieldCheck, Cpu, BatteryCharging, Zap, ArrowRight, ArrowLeft } from 'lucide-react';
import { api } from '../lib/api';

export default function Hero({ lang, onOpenContact }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const autoPlayRef = useRef(null);
  const isRtl = lang === 'fa';

  // دریافت اسلایدرها از API
  useEffect(() => {
    async function fetchSliders() {
      try {
        setLoading(true);
        const slidersData = await api.getActiveSliders();
        
        if (slidersData && slidersData.length > 0) {
          // تبدیل داده‌های API به فرمت مورد نیاز
          const formattedSlides = slidersData.map(slider => ({
            id: slider.slide_id,
            title: lang === 'fa' ? slider.title_fa : slider.title_en,
            subtitle: lang === 'fa' ? slider.subtitle_fa : slider.subtitle_en,
            badge: lang === 'fa' ? slider.badge_fa : slider.badge_en,
            image: slider.image_url || slider.image,
            deviceImg: slider.device_image_url || slider.device_image || slider.image,
            primaryCta: lang === 'fa' ? slider.primary_cta_fa : slider.primary_cta_en,
            secondaryCta: lang === 'fa' ? slider.secondary_cta_fa : slider.secondary_cta_en,
            customLink: slider.custom_link,
            highlights: slider.highlights?.map(h => ({
              label: lang === 'fa' ? h.label_fa : h.label_en,
              value: lang === 'fa' ? h.value_fa : h.value_en
            })) || []
          }));
          
          setSlides(formattedSlides);
          setError(null);
        } else {
          setError(lang === 'fa' ? 'اسلایدری یافت نشد' : 'No slides found');
        }
      } catch (err) {
        console.error('خطا در دریافت اسلایدرها:', err);
        setError(lang === 'fa' ? 'خطا در بارگذاری اسلایدرها' : 'Error loading slides');
      } finally {
        setLoading(false);
      }
    }

    fetchSliders();
  }, [lang]);

  
  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (slides.length <= 1) return; // اگر فقط یک اسلاید داریم، autoplay نداشته باشیم
    
    autoPlayRef.current = setInterval(() => {
      handleSlideChange('next');
    }, 7000);
  };

  useEffect(() => {
    if (slides.length > 0) {
      startAutoPlay();
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [slides.length]);

  const handleSlideChange = (dir) => {
    if (isAnimating || slides.length === 0) return;
    
    setIsAnimating(true);
    setDirection(dir);
    
    setActiveSlideIndex((prev) => {
      if (dir === 'next') {
        return (prev + 1) % slides.length;
      } else {
        return (prev - 1 + slides.length) % slides.length;
      }
    });

    setTimeout(() => setIsAnimating(false), 600);
    startAutoPlay();
  };

  const handleManualSlideChange = (index) => {
    if (isAnimating || index === activeSlideIndex || slides.length === 0) return;
    
    setDirection(index > activeSlideIndex ? 'next' : 'prev');
    setIsAnimating(true);
    setActiveSlideIndex(index);
    
    setTimeout(() => setIsAnimating(false), 600);
    startAutoPlay();
  };

  // حالت Loading
  if (loading) {
    return (
      <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-primary text-white w-full">
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full filter blur-[120px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-[500px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-slate-300">
                {lang === 'fa' ? 'در حال بارگذاری...' : 'Loading...'}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // حالت Error یا عدم وجود اسلاید
  if (error || slides.length === 0) {
    return (
      <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-primary text-white w-full">
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full filter blur-[120px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-[500px]">
            <div className="text-center max-w-2xl">
              <div className="text-6xl mb-4">⚠️</div>
              <h2 className="text-2xl font-bold mb-3">
                {error || (lang === 'fa' ? 'اسلایدری یافت نشد' : 'No slides found')}
              </h2>
              <p className="text-slate-300 mb-6">
                {lang === 'fa' 
                  ? 'لطفاً از پنل ادمین اسلایدر اضافه کنید'
                  : 'Please add slides from the admin panel'}
              </p>
              <a 
                href="http://192.168.30.129/admin/homepage/homeslider/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-primary font-bold hover:bg-sky-50 transition-all"
              >
                {lang === 'fa' ? '🔗 باز کردن پنل ادمین' : '🔗 Open Admin Panel'}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentSlide = slides[activeSlideIndex];

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-primary text-white w-full">
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full filter blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7 z-10 space-y-6">
            <div 
              key={`badge-${activeSlideIndex}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-xs sm:text-sm font-medium text-sky-200 backdrop-blur-md animate-slide-fade-in"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400 animate-pulse-subtle"/>
              <span>{currentSlide.badge}</span>
            </div>

            <h1 
              key={`title-${activeSlideIndex}`}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white animate-slide-up-fade"
            >
              {currentSlide.title}
            </h1>

            <p 
              key={`subtitle-${activeSlideIndex}`}
              className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light animate-slide-up-fade animation-delay-100"
            >
              {currentSlide.subtitle}
            </p>

            <div 
              key={`specs-${activeSlideIndex}`}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3"
            >
              {currentSlide.highlights.slice(0, 4).map((h, idx) => (
                <div
                  key={idx}
                  style={{ animationDelay: `${150 + idx * 50}ms` }}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-2 sm:p-3 text-start hover:bg-white/15 hover:scale-105 hover:border-white/25 transition-all duration-300 animate-slide-up-fade min-w-0"
                >
                  <div className="text-slate-300 text-xs font-medium mb-1 flex items-center gap-1 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse-subtle shrink-0"></span>
                    <span className="truncate">{h.label}</span>
                  </div>
                  <div className="text-white text-xs sm:text-sm font-bold truncate">
                    {h.value}
                  </div>
                </div>
              ))}
            </div>

            <div 
              key={`cta-${activeSlideIndex}`}
              className="flex flex-wrap items-center gap-4 animate-slide-up-fade animation-delay-400"
            >
              <Link
                href={currentSlide.customLink || `/products/${currentSlide.id}`}
                id={`hero-cta-${currentSlide.id}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-primary font-bold text-sm sm:text-base hover:bg-sky-50 shadow-xl shadow-black/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span>{currentSlide.primaryCta}</span>
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Link>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-md transition-all active:scale-95"
              >
                <span>{currentSlide.secondaryCta}</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-6 border-t border-white/15">
              <span className="text-xs text-slate-300 font-medium">
                {isRtl ? 'سوئیچ مدل‌های پرچمدار:' : 'Select Terminal Model:'}
              </span>

              <div className="flex items-center gap-2 flex-wrap">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => handleManualSlideChange(idx)}
                    disabled={isAnimating}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                      activeSlideIndex === idx
                        ? 'bg-white text-primary shadow-md scale-105'
                        : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white hover:scale-105'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {s.id.toUpperCase()}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1 sm:ms-auto">
                <button
                  onClick={() => handleSlideChange('prev')}
                  disabled={isAnimating}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 hover:scale-110 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous Slide"
                >
                  <ChevronRight className={`w-4 h-4 ${isRtl ? '' : 'rotate-180'}`} />
                </button>
                <button
                  onClick={() => handleSlideChange('next')}
                  disabled={isAnimating}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 hover:scale-110 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next Slide"
                >
                  <ChevronLeft className={`w-4 h-4 ${isRtl ? '' : 'rotate-180'}`} />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div 
              key={`glow-${activeSlideIndex}`}
              className="absolute inset-0 bg-sky-500/20 rounded-3xl filter blur-2xl transform scale-90 animate-pulse-glow"
            ></div>

            <div 
              key={`card-${activeSlideIndex}`}
              className={`relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 shadow-2xl overflow-hidden group ${
                direction === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left'
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/15 text-xs text-slate-200">
                <span className="font-mono uppercase font-bold tracking-wider text-sky-300 animate-slide-fade-in">
                  {currentSlide.id.toUpperCase()} SMART POS
                </span>
                <span className="flex items-center gap-1 text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full animate-slide-fade-in animation-delay-100">
                  <Zap className="w-3 h-3 animate-pulse-subtle" />
                  {isRtl ? 'آماده تحویل سازمانی' : 'Enterprise Ready'}
                </span>
              </div>

              {/* Terminal Image Display */}
              <div className="my-6 relative h-64 sm:h-72 flex items-center justify-center rounded-xl bg-gradient-to-b from-white/10 to-transparent p-4 overflow-hidden">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 animate-zoom-in"
                  onError={(e) => {
                    // Fallback to deviceImg if banner image fails
                    e.target.src = currentSlide.deviceImg;
                  }}
                />
                
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-sky-400 rounded-full animate-float-particle opacity-60"></div>
                  <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-float-particle animation-delay-1000 opacity-50"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-amber-400 rounded-full animate-float-particle animation-delay-2000 opacity-40"></div>
                </div>
              </div>

              <div className="bg-black/20 rounded-xl p-2.5 sm:p-3 border border-white/10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-slate-200 animate-slide-up-fade animation-delay-200">
                <div className="flex items-center gap-1.5 hover:scale-105 transition-transform shrink-0">
                  <BatteryCharging className="w-4 h-4 text-emerald-400 animate-pulse-subtle shrink-0" />
                  <span className="text-[10px] sm:text-xs whitespace-nowrap">{currentSlide.id === 'm600' ? '5000 mAh' : '2600 mAh'}</span>
                </div>
                <div className="flex items-center gap-1.5 hover:scale-105 transition-transform shrink-0">
                  <Cpu className="w-4 h-4 text-sky-400 animate-pulse-subtle shrink-0" />
                  <span className="text-[10px] sm:text-xs whitespace-nowrap">{currentSlide.id === 'm600' ? 'Quad A7' : 'Secure 32-bit'}</span>
                </div>
                <div className="flex items-center gap-1.5 hover:scale-105 transition-transform shrink-0">
                  <ShieldCheck className="w-4 h-4 text-amber-400 animate-pulse-subtle shrink-0" />
                  <span className="text-[10px] sm:text-xs whitespace-nowrap">PCI PTS 7.x</span>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
