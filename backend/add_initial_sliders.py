"""
اسکریپت اضافه کردن اسلایدرهای اولیه به دیتابیس
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'miracle_backend.settings')
django.setup()

from homepage.models import HomeSlider, SliderHighlight


def add_initial_sliders():
    """اضافه کردن اسلایدرهای اولیه"""
    
    print("🎨 در حال اضافه کردن اسلایدرهای اولیه...")
    
    # اسلاید M300
    slider_m300, created = HomeSlider.objects.update_or_create(
        slide_id='m300',
        defaults={
            'title_fa': 'پایانه پرداخت هوشمند M300 (RTOS)',
            'title_en': 'M300 Smart POS Terminal (RTOS)',
            'subtitle_fa': 'پایانه پرداخت حرفه‌ای با سیستم عامل RTOS، مناسب برای کسب‌وکارهای کوچک و متوسط با امنیت بالا و عملکرد سریع',
            'subtitle_en': 'Professional payment terminal with RTOS operating system, suitable for small and medium businesses with high security and fast performance',
            'badge_fa': '🔒 امنیت PCI PTS 7.x',
            'badge_en': '🔒 PCI PTS 7.x Certified',
            'image': '',  # خالی می‌گذاریم تا دستی آپلود شود
            'device_image': '',
            'primary_cta_fa': 'مشاهده جزئیات محصول',
            'primary_cta_en': 'View Product Details',
            'secondary_cta_fa': 'تماس با ما',
            'secondary_cta_en': 'Contact Us',
            'is_active': True,
            'order': 1
        }
    )
    
    if created:
        print(f"  ✅ اسلاید M300 ایجاد شد")
        
        # اضافه کردن highlights برای M300
        SliderHighlight.objects.create(
            slider=slider_m300,
            label_fa='پردازنده',
            label_en='Processor',
            value_fa='Secure 32-bit',
            value_en='Secure 32-bit',
            order=0
        )
        
        SliderHighlight.objects.create(
            slider=slider_m300,
            label_fa='باتری',
            label_en='Battery',
            value_fa='2600 mAh',
            value_en='2600 mAh',
            order=1
        )
        
        SliderHighlight.objects.create(
            slider=slider_m300,
            label_fa='صفحه نمایش',
            label_en='Display',
            value_fa='3.5" TFT',
            value_en='3.5" TFT',
            order=2
        )
        
        SliderHighlight.objects.create(
            slider=slider_m300,
            label_fa='ارتباطات',
            label_en='Connectivity',
            value_fa='WiFi + 4G',
            value_en='WiFi + 4G',
            order=3
        )
        
        print(f"  ✅ 4 Highlight برای M300 اضافه شد")
    else:
        print(f"  ℹ️  اسلاید M300 از قبل وجود داشت و آپدیت شد")
    
    # اسلاید M600
    slider_m600, created = HomeSlider.objects.update_or_create(
        slide_id='m600',
        defaults={
            'title_fa': 'پایانه پرداخت هوشمند M600 (Linux)',
            'title_en': 'M600 Smart POS Terminal (Linux)',
            'subtitle_fa': 'پایانه پرداخت پیشرفته با سیستم عامل Linux، قدرت پردازش بالا و قابلیت اجرای اپلیکیشن‌های سفارشی برای کسب‌وکارهای بزرگ',
            'subtitle_en': 'Advanced payment terminal with Linux OS, high processing power and ability to run custom applications for large businesses',
            'badge_fa': '⚡ قدرتمندترین نسخه',
            'badge_en': '⚡ Most Powerful Version',
            'image': '',  # خالی می‌گذاریم تا دستی آپلود شود
            'device_image': '',
            'primary_cta_fa': 'مشاهده جزئیات محصول',
            'primary_cta_en': 'View Product Details',
            'secondary_cta_fa': 'درخواست مشاوره',
            'secondary_cta_en': 'Request Consultation',
            'is_active': True,
            'order': 2
        }
    )
    
    if created:
        print(f"  ✅ اسلاید M600 ایجاد شد")
        
        # اضافه کردن highlights برای M600
        SliderHighlight.objects.create(
            slider=slider_m600,
            label_fa='پردازنده',
            label_en='Processor',
            value_fa='Quad-Core A7',
            value_en='Quad-Core A7',
            order=0
        )
        
        SliderHighlight.objects.create(
            slider=slider_m600,
            label_fa='باتری',
            label_en='Battery',
            value_fa='5000 mAh',
            value_en='5000 mAh',
            order=1
        )
        
        SliderHighlight.objects.create(
            slider=slider_m600,
            label_fa='صفحه نمایش',
            label_en='Display',
            value_fa='5.5" HD',
            value_en='5.5" HD',
            order=2
        )
        
        SliderHighlight.objects.create(
            slider=slider_m600,
            label_fa='رم',
            label_en='RAM',
            value_fa='2GB DDR3',
            value_en='2GB DDR3',
            order=3
        )
        
        print(f"  ✅ 4 Highlight برای M600 اضافه شد")
    else:
        print(f"  ℹ️  اسلاید M600 از قبل وجود داشت و آپدیت شد")
    
    print("\n🎉 اسلایدرهای اولیه با موفقیت اضافه شدند!")
    print("\n📊 خلاصه:")
    print(f"  • تعداد کل اسلایدرها: {HomeSlider.objects.count()}")
    print(f"  • اسلایدرهای فعال: {HomeSlider.objects.filter(is_active=True).count()}")
    print(f"  • تعداد کل Highlights: {SliderHighlight.objects.count()}")
    print("\n🔗 برای مشاهده و مدیریت اسلایدرها به پنل ادمین بروید:")
    print("   http://127.0.0.1:8000/admin/homepage/homeslider/")


if __name__ == '__main__':
    add_initial_sliders()
