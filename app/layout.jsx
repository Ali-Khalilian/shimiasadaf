'use client'

import './globals.css'
import { LanguageProvider } from '../src/contexts/LanguageContext'

export default function RootLayout({ children }) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <title>شیمیا صدف | Shimia Sadaf - پایانه‌های پرداخت هوشمند</title>
        <meta name="description" content="تولیدکننده پایانه‌های پرداخت هوشمند POS با استانداردهای RKI و KLD" />
        <meta name="keywords" content="پایانه پرداخت, POS, شیمیا صدف, M300, M600, RKI, KLD" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body suppressHydrationWarning={true} className="overflow-x-hidden">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
