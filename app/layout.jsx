import './globals.css'

export const metadata = {
  title: 'شیمیا صدف | Shimia Sadaf - پایانه‌های پرداخت هوشمند',
  description: 'تولیدکننده پایانه‌های پرداخت هوشمند POS با استانداردهای RKI و KLD',
  keywords: 'پایانه پرداخت, POS, شیمیا صدف, M300, M600, RKI, KLD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body suppressHydrationWarning={true} className="overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
