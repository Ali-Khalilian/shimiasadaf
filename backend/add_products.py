import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'miracle_backend.settings')
django.setup()

from products.models import Product, ProductFeature, ProductHighlight

# حذف محصولات قبلی (برای جلوگیری از تکراری)
Product.objects.all().delete()

# داده‌های محصول M300
m300_data = {
    'id': 'm300',
    'title_fa': 'دستگاه کارتخوان هوشمند M300',
    'title_en': 'Smart POS Terminal M300',
    'tag': 'RTOS / Linux',
    'os_type': 'RTOS/Linux',
    'summary_fa': 'پایانه پرداخت فوق سبک و اقتصادی، دارای بدنه مقاوم و ارگونومیک، مجهز به پرینتر پرسرعت و تراشه امنیتی قدرتمند.',
    'summary_en': 'Ultra-portable, economic terminal featuring an ergonomic 285g enclosure, high-velocity thermal printer, and secure financial microprocessor.',
    # به جای آپلود فایل، از path استاتیک استفاده می‌کنیم
    # image, banner, device_image خالی می‌مونن و از public/images استفاده می‌کنیم
    'display': '۲.۸ اینچ TFT QVGA ۳۲۰×۴۸۰ لمسی رنگی',
    'processor': 'پردازنده امنیتی ۳۲ بیتی با معماری ضد دستکاری',
    'memory': 'حافظه بهینه‌سازی‌شده Flash + RAM پرسرعت',
    'battery': 'لیتیوم پلیمر ۳.۷ ولت ۲۶۰۰ میلی‌آمپرساعت',
    'connectivity': '4G LTE کامل + Wi-Fi 2.4GHz + بلوتوث ۴.۲',
    'sim_sam': '۱ اسلات Micro SIM + ۱ اسلات Normal SIM + ۱ اسلات SAM',
    'dimensions': '۱۴۶.۹ × ۷۹ × ۵۷ میلی‌متر | وزن: ۲۸۵ گرم',
    'printer': 'پرینتر حرارتی سریع ۵۸ میلی‌متری (قطر رول ۴۰ میلی‌متر)',
    'card_readers': 'کارتخوان مغناطیسی سه‌ترک، کارت هوشمند تماسی (Chip & PIN) و NFC غیرتماسی',
    'certifications': 'PCI PTS 7.x, EMV L1 & L2, PayPass, payWave',
    'status': 'active',
    'order': 1,
    'is_featured': True,
}

m300_features = [
    ('سیستم‌عامل بلادرنگ (RTOS) با ثبات فوق‌العاده و کمترین میزان داون‌تایم', 'Real-Time Operating System (RTOS) providing zero-latency boot and minimal downtime'),
    ('گواهینامه امنیتی بین‌المللی PCI PTS 7.x بالاترین سطح امنیت پرداخت', 'PCI PTS 7.x certified for maximum transactional protection'),
    ('پشتیبانی از کارت‌های بانکی، کارت‌های بدون‌تماس NFC و کیوآرکد', 'Full acceptance of magnetic cards, smart EMV cards, contactless NFC, and QR codes'),
    ('پرینتر پرسرعت کم‌صدا مناسب برای فروشگاه‌ها و پذیرندگان پرتراکنش', 'Compact whisper-quiet thermal printer built for high-throughput retail'),
]

m300_highlights = [
    ('صفحه نمایش', '۲.۸ اینچ QVGA لمسی'),
    ('وزن دستگاه', 'تنها ۲۸۵ گرم'),
    ('گواهینامه امنیتی', 'PCI PTS 7.x & EMV L1/L2'),
    ('سیستم‌عامل', 'RTOS / Linux'),
]

# ایجاد محصول M300
print('🔄 در حال اضافه کردن محصول M300...')
m300 = Product.objects.create(**m300_data)

for i, (fa, en) in enumerate(m300_features, 1):
    ProductFeature.objects.create(
        product=m300,
        feature_fa=fa,
        feature_en=en,
        order=i
    )

for i, (label, value) in enumerate(m300_highlights, 1):
    ProductHighlight.objects.create(
        product=m300,
        label=label,
        value=value,
        order=i
    )

print('✅ محصول M300 با موفقیت اضافه شد')

# داده‌های محصول M600
m600_data = {
    'id': 'm600',
    'title_fa': 'دستگاه کارتخوان پیشرفته M600',
    'title_en': 'Advanced POS Terminal M600',
    'tag': 'Linux / Android',
    'os_type': 'Linux/Android',
    'summary_fa': 'پرچمدار قدرتمند با صفحه نمایش بزرگ ۴ اینچی، پردازنده ۴ هسته‌ای Cortex-A7، باتری دوبل ۵۰۰۰ میلی‌آمپر و کیبورد شیشه‌ای مدرن.',
    'summary_en': 'Flagship enterprise terminal featuring an expansive 4.0-inch touchscreen, ARM Cortex-A7 processing, 5000 mAh dual battery, and backlit glass keypad.',
    'display': '۴.۰ اینچ TFT WVGA ۴۸۰×۸۰۰ لمسی رنگی با وضوح بالا',
    'processor': 'پردازنده قدرتمند و پرسرعت ARM Cortex-A7',
    'memory': 'ظرفیت بالای حافظه داخلی و رم پردازشی جهت اجرای روان اپلیکیشن‌ها',
    'battery': 'لیتیوم پلیمر ۳.۷ ولت ۵۰۰۰ میلی‌آمپرساعت (۲ سلول ۲۵۰۰ میلی‌آمپر ۱۸۶۵۰)',
    'connectivity': '4G + 2G (با پشتیبانی A5/3) + Wi-Fi 2.4GHz + بلوتوث ۴.۲',
    'keyboard': 'فناوری اختصاصی کیبورد شیشه‌ای مات ضدخش به همراه نور پس‌زمینه یکنواخت',
    'sim_sam': '۱ اسلات Micro SIM + ۱ اسلات Normal SIM + ۱ اسلات SAM',
    'dimensions': '۱۴۶.۹ × ۷۹ × ۵۷ میلی‌متر | وزن: ۲۸۵ گرم',
    'printer': 'پرینتر حرارتی فوق‌سریع ۵۸ میلی‌متری با قابلیت چاپ انواع فونت و لوگو',
    'card_readers': 'کارتخوان سه‌گانه: نوار مغناطیسی، چیپ هوشمند EMV، و تراشه NFC',
    'certifications': 'PCI PTS 7.x, EMV L1 & L2, CE, RoHS',
    'status': 'active',
    'order': 2,
    'is_featured': True,
}

m600_features = [
    ('صفحه نمایش بزرگ ۴ اینچی با وضوح خیره‌کننده جهت تجربه کاربری راحت', 'Generous 4.0-inch HD display offering intuitive touch navigation for operators'),
    ('پردازنده ۴ هسته‌ای پرسرعت Cortex-A7 برای پاسخگویی آنی به تراکنش‌ها', 'Rapid ARM Cortex-A7 processing core for instantaneous transaction approval'),
    ('کیبورد مدرن با پوشش شیشه‌ای مقاوم و نور پس‌زمینه برای استفاده در شب', 'Modern glass touch-panel with uniform LED illumination for evening operations'),
    ('باتری پرظرفیت ۵۰۰۰ میلی‌آمپر با دوام چندین روز کاری مداوم', 'Heavy-duty 5000 mAh battery providing multiple uninterrupted working days'),
]

m600_highlights = [
    ('صفحه نمایش', '۴.۰ اینچ WVGA لمسی'),
    ('باتری دوبل', '۵۰۰۰ میلی‌آمپرساعت'),
    ('فناوری کیبورد', 'صفحه‌کلید شیشه‌ای با بک‌لایت'),
    ('سیستم‌عامل', 'Android / Linux'),
]

# ایجاد محصول M600
print('🔄 در حال اضافه کردن محصول M600...')
m600 = Product.objects.create(**m600_data)

for i, (fa, en) in enumerate(m600_features, 1):
    ProductFeature.objects.create(
        product=m600,
        feature_fa=fa,
        feature_en=en,
        order=i
    )

for i, (label, value) in enumerate(m600_highlights, 1):
    ProductHighlight.objects.create(
        product=m600,
        label=label,
        value=value,
        order=i
    )

print('✅ محصول M600 با موفقیت اضافه شد')

print('\n🎉 همه محصولات با موفقیت به دیتابیس اضافه شدند!')
print(f'📊 تعداد محصولات: {Product.objects.count()}')
print(f'📝 تعداد ویژگی‌ها: {ProductFeature.objects.count()}')
print(f'✨ تعداد Highlights: {ProductHighlight.objects.count()}')
