"""
اسکریپت بروزرسانی تصاویر اسلایدرها
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'miracle_backend.settings')
django.setup()

from homepage.models import HomeSlider

def update_slider_images():
    """بروزرسانی تصاویر اسلایدرها"""
    
    print("🖼️  در حال بروزرسانی تصاویر اسلایدرها...")
    
    # بروزرسانی M300
    try:
        slider_m300 = HomeSlider.objects.get(slide_id='m300')
        slider_m300.image = 'sliders/m300-rtos-1.jpg'
        slider_m300.device_image = 'sliders/m300-rtos-1.jpg'
        slider_m300.save()
        print(f"  ✅ تصاویر M300 بروزرسانی شد")
    except HomeSlider.DoesNotExist:
        print(f"  ⚠️  اسلاید M300 یافت نشد")
    
    # بروزرسانی M600
    try:
        slider_m600 = HomeSlider.objects.get(slide_id='m600')
        slider_m600.image = 'sliders/m600-linux-new-2.jpg'
        slider_m600.device_image = 'sliders/m600-linux-new-2.jpg'
        slider_m600.save()
        print(f"  ✅ تصاویر M600 بروزرسانی شد")
    except HomeSlider.DoesNotExist:
        print(f"  ⚠️  اسلاید M600 یافت نشد")
    
    print("\n🎉 بروزرسانی تصاویر با موفقیت انجام شد!")
    print("\n📸 لیست تصاویر:")
    for slider in HomeSlider.objects.all():
        print(f"  • {slider.slide_id}: {slider.image}")

if __name__ == '__main__':
    update_slider_images()
