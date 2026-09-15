// Data content for Shimia Sadaf website in Persian (fa) and English (en)
// Pure JavaScript - No TypeScript

export const siteContent = {
  fa: {
    lang: 'fa',
    dir: 'rtl',
    brand: {
      name: 'شیمیا صدف',
      enName: 'Shimia Sadaf',
      tagline: 'پایانه‌های پرداخت هوشمند، ساخته‌شده برای اعتماد',
      slogan: 'سریع، امن، مطمئن',
      logoText: 'SHIMIA SADAF'
    },
    nav: {
      home: 'خانه',
      products: 'محصولات',
      oem: 'خدمات OEM / ODM',
      about: 'درباره ما',
      standards: 'استانداردها و امنیت',
      strengths: 'نقاط قوت',
      faqs: 'سوالات متداول',
      contact: 'تماس با ما',
      contactBtn: 'با ما در تماس باشید',
      m300: 'کارتخوان M300',
      m600: 'کارتخوان M600'
    },
    hero: {
      // ⚠️ DEPRECATED: داده‌های اسلایدر اکنون از API دیتابیس دریافت می‌شوند
      // این بخش فقط برای مرجع نگه داشته شده است
      // برای مدیریت اسلایدرها به admin panel بروید:
      // http://127.0.0.1:8000/admin/homepage/homeslider/
      
      slides: [
        // داده‌های استاتیک دیگر استفاده نمی‌شوند
        // همه اسلایدرها از Django API بارگذاری می‌شوند
      ]
      
      /*
      slides: [
        {
          id: 'm600',
          badge: 'پرچمدار پرداخت هوشمند',
          title: 'پایانه پرداخت هوشمند M600',
          subtitle: 'مجهز به سیستم‌عامل‌های اندروید و لینوکس، صفحه نمایش لمسی ۴ اینچ، باتری فوق‌العاده ۵۰۰۰ میلی‌آمپرساعت و کیبورد شیشه‌ای با نور پس‌زمینه.',
          image: '/images/miracle-home-banner-new-5.jpg',
          deviceImg: '/images/m600-linux-new-2.jpg',
          highlights: [
            { label: 'صفحه نمایش', value: '۴.۰ اینچ WVGA لمسی' },
            { label: 'باتری دوبل', value: '۵۰۰۰ میلی‌آمپرساعت' },
            { label: 'فناوری کیبورد', value: 'صفحه‌کلید شیشه‌ای با بک‌لایت' },
            { label: 'سیستم‌عامل', value: 'Android / Linux' }
          ],
          primaryCta: 'مشاهده جزئیات M600',
          secondaryCta: 'درخواست کاتالوگ و دمو'
        },
        {
          id: 'm300',
          badge: 'پایداری و چابکی بی‌نظیر',
          title: 'پایانه پرداخت سبک و ارگونومیک M300',
          subtitle: 'طراحی فوق‌العاده جمع‌وجور ۲۸۵ گرمی، پردازنده امنیتی سرعت بالا، گواهینامه PCI PTS 7.x و پشتیبانی از کلیه روش‌های پرداخت تماسی و غیرتماسی.',
          image: '/images/miracle-home-banner-new-4.jpg',
          deviceImg: '/images/m300-rtos-1.jpg',
          highlights: [
            { label: 'صفحه نمایش', value: '۲.۸ اینچ QVGA لمسی' },
            { label: 'وزن دستگاه', value: 'تنها ۲۸۵ گرم' },
            { label: 'گواهینامه امنیتی', value: 'PCI PTS 7.x & EMV L1/L2' },
            { label: 'سیستم‌عامل', value: 'RTOS / Linux' }
          ],
          primaryCta: 'مشاهده جزئیات M300',
          secondaryCta: 'درخواست سفارش سازمانی'
        }
      ]
      */
    },
    about: {
      badge: 'درباره شیمیا صدف',
      title: 'پایانه‌های پرداخت هوشمند،',
      titleHighlight: 'ساخته‌شده برای اعتماد',
      desc: 'ما راه‌حل‌های پرداختی طراحی و تولید می‌کنیم که امنیت، پایداری و عملکرد بالا را همزمان ارائه می‌دهند. از پایانه‌های لینوکس و اندروید تا مدل‌های RTOS، محصولات ما برای کسب‌وکارهایی ساخته شده‌اند که به کیفیت و اطمینان اهمیت می‌دهند.',
      keyAdvantagesTitle: 'مزایای کلیدی ما:',
      advantages: [
        'گواهینامه‌های بین‌المللی معتبر PCI PTS 7.x و EMV L1 & L2',
        'کیفیت ساخت ممتاز و دوام طولانی‌مدت در انواع محیط‌های کاری',
        'پشتیبانی همه‌جانبه از شبکه‌های ۴G، وای‌فای ۲.۴ گیگاهرتز و بلوتوث ۴.۲',
        'باتری با ظرفیت بالا و چاپگر حرارتی پرسرعت با وضوح فوق‌العاده',
        'امکان تزریق کلید امن به‌صورت محلی (KLD) و از راه دور (RKI)'
      ],
      stats: [
        { num: '+۶ سال', label: 'سابقه تخصصی در صنعت پرداخت' },
        { num: '۱۸ ماه', label: 'گارانتی معتبر و پشتیبانی قطعات' },
        { num: '۱۰۰٪', label: 'منطبق بر استانداردهای بین‌المللی' },
        { num: '۲۴/۷', label: 'پشتیبانی فنی اختصاصی' }
      ]
    },
    standards: {
      badge: 'امنیت و انطباق',
      title: 'بالاترین سطوح استانداردهای امنیتی',
      subtitle: 'حفاظت پیشرفته از تراکنش‌های مالی با پروتکل‌های سخت‌افزاری و نرم‌افزاری رمزنگاری‌شده',
      image: '/images/standards-2.jpg',
      cards: [
        {
          id: 'rki',
          name: 'استاندارد RKI',
          fullName: 'Remote Key Injection (تزریق کلید از راه دور)',
          desc: 'ما از روش «تزریق کلید از راه دور» (Remote Key Injection) استفاده می‌کنیم که یک رویکرد پیشرفته جهت تسهیل مدیریت متمرکز و ایمن کلیدهای رمزنگاری است. با ادغام این قابلیت در معماری امنیتیِ دارای گواهی PCI PTS، ما خطرات مرتبط با کاربری دستی را حذف می‌کنیم و اطمینان حاصل می‌نماییم که کلیدهای تراکنش شما مستقیماً و از طریق یک کانال رمزنگاری‌شده و محافظت‌شده، به دستگاه تزریق می‌شوند.',
          tag: 'PCI PTS Compliant'
        },
        {
          id: 'kld',
          name: 'استاندارد KLD',
          fullName: 'Key Loading Device (دستگاه بارگذاری کلید)',
          desc: 'برای نیازهای محلی و در محل، ما از «دستگاه بارگذاری کلید» (Key Loading Device) استفاده می‌کنیم. این دستگاه، یک راهکار سخت‌افزاری دارای گواهی PCI PTS است که به‌طور اختصاصی برای تزریق ایمن و محلی کلید طراحی شده است. این استاندارد تضمین می‌کند که هر پایانه (ترمینال)، کلیدهای رمزنگاری خود را در یک محیط کنترل‌شده و غیرقابل‌دستکاری دریافت می‌کند؛ امری که بالاترین سطح امنیت را پیش از آنکه دستگاه حتی یک تراکنش واقعی را پردازش کند، تضمین می‌نماید.',
          tag: 'Hardware Security Module'
        }
      ]
    },
    products: {
      badge: 'محصولات ما',
      title: 'مهندسی آینده‌ی',
      titleHighlight: 'پرداخت‌های الکترونیک',
      subtitle: 'دستگاه‌های پایانه فروش مدرن با تاییدیه شاپرک و استانداردهای جهانی، طراحی‌شده برای پایداری و سهولت کاربر',
      viewDetails: 'مشاهده مشخصات کامل',
      selectOs: 'انتخاب نسخه سیستم‌عامل:',
      items: [
        {
          id: 'm300',
          title: 'دستگاه کارتخوان هوشمند M300',
          enTitle: 'Smart POS Terminal M300',
          tag: 'RTOS / Linux',
          image: '/images/m300-rtos-1.jpg',
          banner: '/images/miracle-home-banner-new-4.jpg',
          summary: 'پایانه پرداخت فوق سبک و اقتصادی، دارای بدنه مقاوم و ارگونومیک، مجهز به پرینتر پرسرعت و تراشه امنیتی قدرتمند.',
          specs: {
            display: '۲.۸ اینچ TFT QVGA ۳۲۰×۴۸۰ لمسی رنگی',
            os: 'سیستم‌عامل بلادرنگ RTOS یا Linux امن',
            processor: 'پردازنده امنیتی ۳۲ بیتی با معماری ضد دستکاری',
            memory: 'حافظه بهینه‌سازی‌شده Flash + RAM پرسرعت',
            battery: 'لیتیوم پلیمر ۳.۷ ولت ۲۶۰۰ میلی‌آمپرساعت',
            connectivity: '4G LTE کامل + Wi-Fi 2.4GHz + بلوتوث ۴.۲',
            simSam: '۱ اسلات Micro SIM + ۱ اسلات Normal SIM + ۱ اسلات SAM',
            dimensions: '۱۴۶.۹ × ۷۹ × ۵۷ میلی‌متر | وزن: ۲۸۵ گرم',
            printer: 'پرینتر حرارتی سریع ۵۸ میلی‌متری (قطر رول ۴۰ میلی‌متر)',
            cardReaders: 'کارتخوان مغناطیسی سه‌ترک، کارت هوشمند تماسی (Chip & PIN) و NFC غیرتماسی',
            certifications: 'PCI PTS 7.x, EMV L1 & L2, PayPass, payWave'
          },
          features: [
            'سیستم‌عامل بلادرنگ (RTOS) با ثبات فوق‌العاده و کمترین میزان داون‌تایم',
            'گواهینامه امنیتی بین‌المللی PCI PTS 7.x بالاترین سطح امنیت پرداخت',
            'پشتیبانی از کارت‌های بانکی، کارت‌های بدون‌تماس NFC و کیوآرکد',
            'پرینتر پرسرعت کم‌صدا مناسب برای فروشگاه‌ها و پذیرندگان پرتراکنش'
          ]
        },
        {
          id: 'm600',
          title: 'دستگاه کارتخوان پیشرفته M600',
          enTitle: 'Advanced POS Terminal M600',
          tag: 'Linux / Android',
          image: '/images/m600-linux-new-2.jpg',
          banner: '/images/miracle-home-banner-new-5.jpg',
          summary: 'پرچمدار قدرتمند با صفحه نمایش بزرگ ۴ اینچی، پردازنده ۴ هسته‌ای Cortex-A7، باتری دوبل ۵۰۰۰ میلی‌آمپر و کیبورد شیشه‌ای مدرن.',
          specs: {
            display: '۴.۰ اینچ TFT WVGA ۴۸۰×۸۰۰ لمسی رنگی با وضوح بالا',
            os: 'اندروید اختصاصی پرداخت / سیستم‌عامل لینوکس سازمانی',
            processor: 'پردازنده قدرتمند و پرسرعت ARM Cortex-A7',
            memory: 'ظرفیت بالای حافظه داخلی و رم پردازشی جهت اجرای روان اپلیکیشن‌ها',
            battery: 'لیتیوم پلیمر ۳.۷ ولت ۵۰۰۰ میلی‌آمپرساعت (۲ سلول ۲۵۰۰ میلی‌آمپر ۱۸۶۵۰)',
            connectivity: '4G + 2G (با پشتیبانی A5/3) + Wi-Fi 2.4GHz + بلوتوث ۴.۲',
            keyboard: 'فناوری اختصاصی کیبورد شیشه‌ای مات ضدخش به همراه نور پس‌زمینه یکنواخت',
            simSam: '۱ اسلات Micro SIM + ۱ اسلات Normal SIM + ۱ اسلات SAM',
            dimensions: '۱۴۶.۹ × ۷۹ × ۵۷ میلی‌متر | وزن: ۲۸۵ گرم',
            printer: 'پرینتر حرارتی فوق‌سریع ۵۸ میلی‌متری با قابلیت چاپ انواع فونت و لوگو',
            cardReaders: 'کارتخوان سه‌گانه: نوار مغناطیسی، چیپ هوشمند EMV، و تراشه NFC',
            certifications: 'PCI PTS 7.x, EMV L1 & L2, CE, RoHS'
          },
          features: [
            'صفحه نمایش بزرگ ۴ اینچی با وضوح خیره‌کننده جهت تجربه کاربری راحت',
            'پردازنده ۴ هسته‌ای پرسرعت Cortex-A7 برای پاسخگویی آنی به تراکنش‌ها',
            'کیبورد مدرن با پوشش شیشه‌ای مقاوم و نور پس‌زمینه برای استفاده در شب',
            'باتری پرظرفیت ۵۰۰۰ میلی‌آمپر با دوام چندین روز کاری مداوم'
          ]
        }
      ]
    },
    oem: {
      badge: 'خدمات تخصصی',
      title: 'راهکارهای جامع',
      titleHighlight: 'OEM و ODM',
      subtitle: 'متخصصان حوزه پرداخت و تولید سفارشی تجهیزات پرداخت الکترونیک متناسب با نیاز سازمانی و برند اختصاصی شما',
      intro: 'ما نیازهای گوناگون کسب‌وکارها را از طریق قابلیت‌های گسترده OEM و ODM پوشش می‌دهیم. شرکای ما می‌توانند از طرح‌های اختصاصی خود یا از دانش آماده ما جهت کاهش زمان ورود به بازار استفاده نمایند.',
      info1: 'در میراکل، ما پشتیبانی فنی شبانه‌روزی ارائه می‌دهیم و عملکرد روان و حل سریع مشکلات را برای راهکارهای پرداخت سفارشی خود تضمین می‌کنیم. شبکه پشتیبانی جهانی ما، در صورت نیاز، هم تشخیص از راه دور و هم کمک در محل را ارائه می‌دهد و خدمات شخصی‌سازی‌شده و راهنمایی‌های تخصصی را برای حفظ عملکرد روان کسب و کار شما ارائه می‌دهد.',
      info2:'',
      pillars: [
        {
          title: 'طراحی و توسعه سخت‌افزار اختصاصی',
          enTitle: 'Custom Hardware Development',
          desc: 'طراحی بدنه، ماژول‌های الکترونیکی، برد اصلی و پیکربندی‌های سخت‌افزاری منحصربه‌فرد متناسب با نیاز مشتری.'
        },
        {
          title: 'بهینه‌سازی تجهیزات',
          enTitle: 'Device Optimization',
          desc: 'شخصی‌سازی کیپدها، ابعاد نمایشگر، ماژول‌های اسکنر بارکد دو بعدی و گزینه‌های ارتباطی پیشرفته.'
        },
        {
          title: 'توسعه فریمور و یکپارچگی امنیتی',
          enTitle: 'Firmware & Security Integration',
          desc: 'رمزنگاری سطح بالا، انطباق کامل با پروتکل‌های PCI PTS و اتصال امن به سیستم‌های HSM و KMS.'
        },
        {
          title: 'ماژول‌های توسعه‌پذیر',
          enTitle: 'Modular Expansion',
          desc: 'طراحی و ساخت پایه شارژ (داک)، پورت‌های ارتباطی ویژه و اکسسوری‌های مکمل فروشگاهی.'
        },
        {
          title: 'یکپارچه‌سازی سامانه‌ای بی‌نقص',
          enTitle: 'Seamless System Integration',
          desc: 'تضمین سازگاری کامل با زیرساخت‌های پرداخت، سوئیچ‌های بانکی شاپرک و پلتفرم‌های نرم‌افزاری.'
        },
        {
          title: 'هویت بصری و برندینگ کامل',
          enTitle: 'Branding & Aesthetics',
          desc: 'رنگ‌آمیزی بدنه با کد رنگ سازمانی، حک لیزری لوگو، شخصی‌سازی رابط کاربری و طراحی بسته‌بندی سفارشی.'
        }
      ]
    },
    strengths: {
      badge: 'مزیت‌های رقابتی',
      title: 'نقاط قوت ما',
      subtitle: 'ستون‌های اصلی موفقیت شیمیا صدف در ارائه خدمات برتر به صنعت پرداخت',
      items: [
        {
          icon: '/images/experience.svg',
          title: 'تجربیات گسترده',
          desc: 'دارای بیش از ۶ سال تجربه موفق در طراحی، مهندسی معکوس و تولید تجهیزات پرداخت الکترونیک.'
        },
        {
          icon: '/images/quality.svg',
          title: 'کیفیت ممتاز',
          desc: 'بهره‌گیری از فناوری‌های پیشرفته قطعات و استانداردهای روز بین‌المللی جهت تضمین ارائه خدمات برتر.'
        },
        {
          icon: '/images/warranty.svg',
          title: 'ضمانت معتبر',
          desc: 'ضمانت ۱۸ ماهه رسمی به همراه شرایط و ضوابط استاندارد جامع و تامین پیوسته قطعات یدکی.'
        },
        {
          icon: '/images/growth2.svg',
          title: 'تعهد به رشد',
          desc: 'تکامل و گسترش مستمر شبکه‌های فروش، نمایندگی‌های استانی و مراکز خدمات پس از فروش.'
        }
      ]
    },
    faqs: {
      badge: 'پرسش و پاسخ',
      title: 'پاسخ‌های مورد نیاز شما از یک',
      titleHighlight: 'شرکت پیشرو در صنعت',
      subtitle: 'پاسخ به متداول‌ترین سوالات مشتریان و پذیرندگان محترم پایانه‌های پرداخت شیمیا صدف',
      items: [
        {
          id: 'q1',
          q: 'کدام مدل برای محیط‌های حرفه‌ای یا با حجم کاری بالا مناسب‌تر است؟',
          a: 'مدل M600 به دلیل حافظه بیشتر، نمایشگر بزرگ‌تر ۴ اینچی، باتری قدرتمند ۵۰۰۰ میلی‌آمپر و پردازنده قوی‌تر، برای محیط‌های حرفه‌ای و کسب‌وکارهایی با حجم تراکنش بالا کاملاً مناسب‌تر است.'
        },
        {
          id: 'q2',
          q: 'آیا هر دو دستگاه از پرداخت‌های غیرتماسی پشتیبانی می‌کنند؟',
          a: 'بله، هر دو مدل M300 و M600 به ماژول سخت‌افزاری NFC مجهز بوده و توانایی پردازش کلیه تراکنش‌های کارت‌های تراشه‌دار (Chip & PIN)، پرداخت‌های بدون‌تماس (NFC) و کارت‌های نوار مغناطیسی (Magnetic Stripe) را دارند.'
        },
        {
          id: 'q3',
          q: 'چه تفاوتی میان سیستم‌عامل RTOS، Linux و Android در این پایانه‌ها وجود دارد؟',
          a: 'سیستم‌عامل RTOS (Real-Time OS) بر روی M300 بالاترین سرعت بوت، کمترین مصرف باتری و پایداری فوق‌العاده را ارائه می‌دهد. نسخه لینوکس امنیت سطح بالایی داشته و نسخه اندروید بر روی M600 امکان نصب نرم‌افزارهای حسابداری، انبارداری و اپلیکیشن‌های پرداخت پیشرفته را فراهم می‌آورد.'
        },
        {
          id: 'q4',
          q: 'ظرفیت باتری و زمان نگهداری شارژ دستگاه‌ها چقدر است؟',
          a: 'دستگاه M300 مجهز به باتری ۲۶۰۰ میلی‌آمپرساعت است که به دلیل بهینگی سیستم‌عامل تا چند روز در حالت آماده‌به‌کار می‌ماند. دستگاه M600 دارای باتری ۵۰۰۰ میلی‌آمپرساعتی دو سلولی است که جوابگوی طولانی‌ترین شیفت‌های کاری پرتردد می‌باشد.'
        },
        {
          id: 'q5',
          q: 'تجهیزات شیمیا صدف چه گواهینامه‌های امنیتی و استانداردهایی دارند؟',
          a: 'تمامی دستگاه‌های شیمیا صدف موفق به اخذ گواهینامه‌های جهانی PCI PTS 7.x (بالاترین استاندارد حفاظت از داده‌های پرداخت)، EMV Contact L1 & L2، EMV Contactless L1، و استانداردهای تزریق امن کلید RKI و KLD شده‌اند.'
        }
      ]
    },
    support: {
      badge: 'پشتیبانی و ارتباط ۲۴ ساعته',
      title: 'ما همواره',
      titleHighlight: 'در کنار شما هستیم',
      desc: 'با تیم پشتیبانی تخصصی، پاسخگویی سریع و خدمات پس از فروش قدرتمند، آماده رفع هرگونه مشکل و تامین نیازهای فنی و نرم‌افزاری شما بدون کمترین تأخیر.',
      btn: 'درخواست تماس یا پشتیبانی',
      phone: '+86 13522300616',
      email: 'info@shimiasadaf.com'
    },
    contact: {
      badge: 'ارتباط مستقیم',
      title: 'با ما در',
      titleHighlight: 'تماس باشید',
      subtitle: 'برای دریافت مشاوره، خرید عمده، خدمات سفارشی OEM/ODM و سوالات فنی، کارشناسان ما آماده پاسخگویی هستند.',
      emailLabel: 'ایمیل مستقیم:',
      phoneLabel: 'شماره تماس بین‌المللی:',
      hoursLabel: 'پاسخگویی:',
      hoursVal: 'شنبه تا چهارشنبه ۸:۳۰ الی ۱۷:۰۰',
      form: {
        name: 'نام و نام خانوادگی',
        email: 'آدرس ایمیل',
        phone: 'شماره تماس',
        subject: 'موضوع درخواست',
        productInterest: 'محصول یا خدمت مورد نظر',
        selectProduct: 'انتخاب محصول یا خدمت',
        options: ['دستگاه کارتخوان M300', 'دستگاه کارتخوان M600', 'خدمات سفارشی‌سازی OEM / ODM', 'پشتیبانی فنی و قطعات', 'سایر موارد'],
        message: 'متن پیام یا توضیحات سفارش',
        submit: 'ارسال پیام به شیمیا صدف',
        submitting: 'در حال ارسال...',
        success: 'پیام شما با موفقیت دریافت شد. کارشناسان ما در کوتاه‌ترین زمان با شما تماس خواهند گرفت.',
        error: 'خطایی در ثبت پیام رخ داد. لطفاً با ایمیل info@shimiasadaf.com تماس حاصل فرمایید.'
      }
    },
    footer: {
      about: 'شیمیا صدف طراح و تولیدکننده پیشرو پایانه‌های هوشمند پرداخت الکترونیک، ارائه راه‌حل‌های جامع سخت‌افزاری و نرم‌افزاری با تعهد به امنیت و نوآوری مداوم.',
      quickLinks: 'دسترسی سریع',
      productsHeading: 'پایانه‌ها و محصولات',
      contactHeading: 'ارتباط با شرکت',
      copyright: '© کلیه حقوق مادی و معنوی متعلق به شیمیا صدف (Shimia Sadaf) می‌باشد.'
    }
  },
  en: {
    lang: 'en',
    dir: 'ltr',
    brand: {
      name: 'Shimia Sadaf',
      enName: 'Shimia Sadaf',
      tagline: 'Smart Payment Terminals, Built for Trust',
      slogan: 'Fast, Secure, Reliable',
      logoText: 'SHIMIA SADAF'
    },
    nav: {
      home: 'Home',
      products: 'Products',
      oem: 'OEM / ODM',
      about: 'About Us',
      standards: 'Standards & Security',
      strengths: 'Strengths',
      faqs: 'FAQs',
      contact: 'Contact Us',
      contactBtn: 'Get In Touch',
      m300: 'M300 Terminal',
      m600: 'M600 Terminal'
    },
    hero: {
      // ⚠️ DEPRECATED: Slider data is now fetched from API database
      // This section is kept for reference only
      // To manage sliders, go to admin panel:
      // http://127.0.0.1:8000/admin/homepage/homeslider/
      
      slides: [
        // Static data is no longer used
        // All sliders are loaded from Django API
      ]
      
      /*
      slides: [
        {
          id: 'm600',
          badge: 'Smart Payment Flagship',
          title: 'M600 Smart POS Terminal',
          subtitle: 'Powered by Android and Linux OS, featuring a crisp 4.0-inch WVGA touchscreen, ultra-durable 5000 mAh dual-cell battery, and scratch-resistant backlit glass keypad.',
          image: '/images/miracle-home-banner-new-5.jpg',
          deviceImg: '/images/m600-linux-new-2.jpg',
          highlights: [
            { label: 'Display', value: '4.0" WVGA Touchscreen' },
            { label: 'Dual Battery', value: '5000 mAh Li-Polymer' },
            { label: 'Keypad Tech', value: 'Backlit Glass Keypad' },
            { label: 'Operating System', value: 'Android / Linux' }
          ],
          primaryCta: 'Explore M600 Specs',
          secondaryCta: 'Request Demo & Catalog'
        },
        {
          id: 'm300',
          badge: 'Ultra-Stable & Agile',
          title: 'M300 Compact POS Terminal',
          subtitle: 'Ultra-lightweight 285g ergonomic body, high-speed secure processor, PCI PTS 7.x certified, with seamless NFC contactless and chip payment capabilities.',
          image: '/images/miracle-home-banner-new-4.jpg',
          deviceImg: '/images/m300-rtos-1.jpg',
          highlights: [
            { label: 'Display', value: '2.8" QVGA Touch' },
            { label: 'Weight', value: 'Only 285 grams' },
            { label: 'Security Cert', value: 'PCI PTS 7.x & EMV L1/L2' },
            { label: 'Operating System', value: 'RTOS / Linux' }
          ],
          primaryCta: 'Explore M300 Specs',
          secondaryCta: 'Enterprise Bulk Inquiry'
        }
      ]
      */
    },
    about: {
      badge: 'About Shimia Sadaf',
      title: 'Smart Payment Terminals,',
      titleHighlight: 'Built for Trust',
      desc: 'We engineer and manufacture payment solutions that deliver security, stability, and high performance simultaneously. From Linux and Android terminals to RTOS models, our products are crafted for businesses that value quality and uncompromising reliability.',
      keyAdvantagesTitle: 'Our Core Advantages:',
      advantages: [
        'Global PCI PTS 7.x and EMV L1 & L2 International Certifications',
        'Exceptional build quality and long-term durability in intensive environments',
        'Comprehensive 4G LTE, 2.4 GHz Wi-Fi, and Bluetooth 4.2 connectivity',
        'High-capacity power management and ultra-fast thermal printing',
        'Secure key injection via local KLD (Key Loading Device) and remote RKI'
      ],
      stats: [
        { num: '6+ Years', label: 'Payment Industry Track Record' },
        { num: '18 Months', label: 'Official Hardware Warranty' },
        { num: '100%', label: 'International Security Compliance' },
        { num: '24/7', label: 'Dedicated Technical Support' }
      ]
    },
    standards: {
      badge: 'Security & Compliance',
      title: 'Uncompromising Security Standards',
      subtitle: 'Safeguarding transactions with hardware-rooted cryptographic protection and international certifications',
      image: '/images/standards-2.jpg',
      cards: [
        {
          id: 'rki',
          name: 'RKI Standard',
          fullName: 'Remote Key Injection',
          desc: 'We utilize Remote Key Injection (RKI) methodology, an advanced framework facilitating centralized, encrypted management of cryptographic keys. Integrating seamlessly into our PCI PTS certified architecture, it removes manual tampering risks and ensures transaction keys are securely injected over an encrypted channel.',
          tag: 'PCI PTS Compliant'
        },
        {
          id: 'kld',
          name: 'KLD Standard',
          fullName: 'Key Loading Device',
          desc: 'For on-site deployments, we employ Key Loading Devices (KLD). This PCI PTS certified hardware solution is engineered exclusively for safe, local key injection in an isolated and tamper-evident environment, assuring peak integrity before processing the first live transaction.',
          tag: 'Hardware Security Module'
        }
      ]
    },
    products: {
      badge: 'Our Terminals',
      title: 'Engineering the',
      titleHighlight: 'Future of Payments',
      subtitle: 'Modern POS terminals combining ergonomic aesthetics, speed, and compliant financial transaction engines',
      viewDetails: 'View Technical Specifications',
      selectOs: 'Select OS Edition:',
      items: [
        {
          id: 'm300',
          title: 'Smart POS Terminal M300',
          enTitle: 'Smart POS Terminal M300',
          tag: 'RTOS / Linux',
          image: '/images/m300-rtos-1.jpg',
          banner: '/images/miracle-home-banner-new-4.jpg',
          summary: 'Ultra-portable, economic terminal featuring an ergonomic 285g enclosure, high-velocity thermal printer, and secure financial microprocessor.',
          specs: {
            display: '2.8" TFT QVGA 320×480 color touchscreen',
            os: 'Real-Time OS (RTOS) or Secure Embedded Linux',
            processor: '32-bit Secure Microcontroller with active anti-tamper',
            memory: 'Optimized high-speed Flash + RAM',
            battery: 'Li-polymer 3.7V 2600 mAh',
            connectivity: 'Full 4G LTE + Wi-Fi 2.4 GHz + Bluetooth 4.2',
            simSam: '1 Micro SIM + 1 Normal SIM + 1 SAM slot',
            dimensions: '146.9 × 79 × 57 mm | Weight: 285 g',
            printer: 'High-speed 58mm thermal printer (40mm roll diameter)',
            cardReaders: 'Triple reader: Triple-track Magstripe, EMV Chip & PIN, Contactless NFC',
            certifications: 'PCI PTS 7.x, EMV L1 & L2, PayPass, payWave'
          },
          features: [
            'Real-Time Operating System (RTOS) providing zero-latency boot and minimal downtime',
            'PCI PTS 7.x certified for maximum transactional protection',
            'Full acceptance of magnetic cards, smart EMV cards, contactless NFC, and QR codes',
            'Compact whisper-quiet thermal printer built for high-throughput retail'
          ]
        },
        {
          id: 'm600',
          title: 'Advanced POS Terminal M600',
          enTitle: 'Advanced POS Terminal M600',
          tag: 'Linux / Android',
          image: '/images/m600-linux-new-2.jpg',
          banner: '/images/miracle-home-banner-new-5.jpg',
          summary: 'Flagship enterprise terminal featuring an expansive 4.0-inch touchscreen, ARM Cortex-A7 processing, 5000 mAh dual battery, and backlit glass keypad.',
          specs: {
            display: '4.0" TFT WVGA 480×800 vibrant high-res touchscreen',
            os: 'Dedicated Secure Android or Enterprise Linux',
            processor: 'High-performance ARM Cortex-A7 quad-core processor',
            memory: 'High-capacity storage and RAM for complex POS applications',
            battery: 'Li-polymer 3.7V 5000 mAh (2x 2500mAh 18650 cells)',
            connectivity: '4G LTE + 2G (A5/3 supported) + Wi-Fi 2.4 GHz + BT 4.2',
            keyboard: 'Proprietary backlit scratch-resistant glass keypad',
            simSam: '1 Micro SIM + 1 Normal SIM + 1 SAM slot',
            dimensions: '146.9 × 79 × 57 mm | Weight: 285 g',
            printer: 'Ultra-fast 58mm thermal printer with custom graphic/font support',
            cardReaders: 'Triple reader: Triple-track Magstripe, Smart EMV Contact, Contactless NFC',
            certifications: 'PCI PTS 7.x, EMV L1 & L2, CE, RoHS'
          },
          features: [
            'Generous 4.0-inch HD display offering intuitive touch navigation for operators',
            'Rapid ARM Cortex-A7 processing core for instantaneous transaction approval',
            'Modern glass touch-panel with uniform LED illumination for evening operations',
            'Heavy-duty 5000 mAh battery providing multiple uninterrupted working days'
          ]
        }
      ]
    },
    oem: {
      badge: 'Specialized Capabilities',
      title: 'End-to-End',
      titleHighlight: 'OEM & ODM Services',
      subtitle: 'Global payment hardware experts tailoring customized POS solutions to match your corporate identity and operational targets.',
      intro: 'We cater to diverse business requirements through our OEM and ODM capabilities. This allows partners to either utilize their own specialized designs via OEM or leverage our ready-to-customize expertise through ODM to dramatically shorten time-to-market.',
      info1: 'At Shimia Sadaf, we provide 24/7 technical support and ensure smooth operations for your custom payment solutions. Our global support network offers both remote diagnostics and on-site assistance when needed, delivering personalized guidance to maintain uninterrupted business performance.',
      info2: '',
      pillars: [
        {
          title: 'Custom Hardware Development',
          enTitle: 'Custom Hardware Development',
          desc: 'Tailored industrial casing, motherboard architecture, and specialized peripheral configurations.'
        },
        {
          title: 'Device Optimization',
          enTitle: 'Device Optimization',
          desc: 'Custom glass keypads, screen dimensions, high-precision 2D scanners, and varied RF connectivity.'
        },
        {
          title: 'Firmware & Security Integration',
          enTitle: 'Firmware & Security Integration',
          desc: 'Hardware-level encryption, seamless PCI PTS validation, and direct HSM/KMS infrastructure hooks.'
        },
        {
          title: 'Modular Expansion',
          enTitle: 'Modular Expansion',
          desc: 'Bespoke charging docking stations, multi-protocol communication ports, and merchant accessories.'
        },
        {
          title: 'Seamless System Integration',
          enTitle: 'Seamless System Integration',
          desc: 'Full compatibility with acquiring banking switches, payment gateways, and core payment applications.'
        },
        {
          title: 'Branding & Industrial Aesthetics',
          enTitle: 'Branding & Aesthetics',
          desc: 'Pantone-matched chassis colors, precision laser-etched branding, customized UI skins, and gift packaging.'
        }
      ]
    },
    strengths: {
      badge: 'Competitive Edge',
      title: 'Our Core Strengths',
      subtitle: 'The foundational pillars driving Shimia Sadaf’s technological leadership in payment hardware',
      items: [
        {
          icon: '/images/experience.svg',
          title: 'Extensive Experience',
          desc: 'Over 6 years of successful engineering, design, and manufacturing in electronic payment hardware.'
        },
        {
          icon: '/images/quality.svg',
          title: 'Premium Quality',
          desc: 'Leveraging cutting-edge component technology to ensure top-tier reliability across every unit.'
        },
        {
          icon: '/images/warranty.svg',
          title: 'Reliable Warranty',
          desc: 'Comprehensive 18-month warranty backed by standard service agreements and genuine spare parts.'
        },
        {
          icon: '/images/growth2.svg',
          title: 'Commitment to Growth',
          desc: 'Continuous scaling of distributor networks, technical service hubs, and customer care centers.'
        }
      ]
    },
    faqs: {
      badge: 'Q & A',
      title: 'Answers You Need from an',
      titleHighlight: 'Industry Pioneer',
      subtitle: 'Clear insights into our terminals, operational security, and deployment guidelines',
      items: [
        {
          id: 'q1',
          q: 'Which model is better suited for high-usage or demanding commercial environments?',
          a: 'The M600 model is ideal for demanding, high-throughput environments due to its expansive 4.0-inch touchscreen, robust 5000 mAh dual-cell battery, superior processor power, and larger application memory.'
        },
        {
          id: 'q2',
          q: 'Do both devices support contactless and NFC transactions?',
          a: 'Yes, both the M300 and M600 are equipped with full-speed NFC hardware and are certified to handle Chip & PIN (smart cards), Contactless NFC payments, and traditional Magnetic Stripe cards.'
        },
        {
          id: 'q3',
          q: 'What are the main distinctions between RTOS, Linux, and Android on these devices?',
          a: 'RTOS on M300 delivers instant boot speeds, ultra-low power consumption, and peak system uptime. Linux delivers robust, hardened security. Android on M600 unlocks rich touch interfaces and the capability to run third-party inventory or ERP software.'
        },
        {
          id: 'q4',
          q: 'What is the battery endurance for each terminal?',
          a: 'The M300 features an optimized 2600 mAh Li-polymer battery lasting several days on standby. The M600 boasts a dual-cell 5000 mAh battery built for continuous, multi-shift high-traffic operations.'
        },
        {
          id: 'q5',
          q: 'What security standards and certifications do these terminals hold?',
          a: 'All terminals hold PCI PTS 7.x (the highest global standard for payment protection), EMV L1 & L2 Contact and Contactless certifications, CE/RoHS compliance, and support both RKI and KLD secure key loading.'
        }
      ]
    },
    support: {
      badge: 'Support & Assistance 24/7',
      title: 'We Are Always',
      titleHighlight: 'By Your Side',
      desc: 'With our expert technical support team, rapid response times, and dependable post-sales assistance, we ensure seamless operations with zero downtime.',
      btn: 'Contact Technical Support',
      phone: '+86 13522300616',
      email: 'info@shimiasadaf.com'
    },
    contact: {
      badge: 'Get In Touch',
      title: 'Connect With',
      titleHighlight: 'Our Team',
      subtitle: 'Whether you require technical consultations, volume purchasing, or custom OEM/ODM payment engineering, our team is ready to assist.',
      emailLabel: 'Direct Inquiries:',
      phoneLabel: 'International Phone:',
      hoursLabel: 'Business Hours:',
      hoursVal: 'Saturday - Wednesday 8:30 to 17:00',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        productInterest: 'Product or Service of Interest',
        selectProduct: 'Select product or service',
        options: ['M300 POS Terminal', 'M600 POS Terminal', 'OEM / ODM Customization', 'Technical Support & Spare Parts', 'Other Inquiries'],
        message: 'Your Message or Specifications',
        submit: 'Send Inquiry to Shimia Sadaf',
        submitting: 'Submitting Inquiry...',
        success: 'Your message has been received successfully. Our sales and engineering team will get back to you shortly.',
        error: 'An issue occurred while submitting. Please feel free to reach us directly at info@shimiasadaf.com.'
      }
    },
    footer: {
      about: 'Shimia Sadaf is a leading designer and manufacturer of smart POS payment terminals, delivering comprehensive hardware and software architectures rooted in reliability and cutting-edge security.',
      quickLinks: 'Quick Links',
      productsHeading: 'Terminals & Hardware',
      contactHeading: 'Contact Information',
      copyright: '© All rights reserved. Shimia Sadaf.'
    }
  }
};
