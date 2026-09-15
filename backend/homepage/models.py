from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class HomeSlider(models.Model):
    """
    مدل اسلایدرهای صفحه اصلی (Hero Section)
    """
    
    # شناسه و عنوان
    slide_id = models.CharField(
        max_length=50, 
        unique=True,
        verbose_name='شناسه اسلاید',
        help_text='مثلاً: m300، m600 - این شناسه باید با ID محصول مطابقت داشته باشد'
    )
    
    title_fa = models.CharField(max_length=200, verbose_name='عنوان فارسی')
    title_en = models.CharField(max_length=200, verbose_name='عنوان انگلیسی')
    
    # زیرعنوان (توضیحات کوتاه)
    subtitle_fa = models.TextField(verbose_name='زیرعنوان فارسی')
    subtitle_en = models.TextField(verbose_name='زیرعنوان انگلیسی')
    
    # برچسب (Badge)
    badge_fa = models.CharField(
        max_length=100, 
        verbose_name='برچسب فارسی',
        help_text='متن کوچک بالای عنوان - مثل "محصول جدید" یا "پیشرفته‌ترین نسخه"'
    )
    badge_en = models.CharField(max_length=100, verbose_name='برچسب انگلیسی')
    
    # تصویر اسلاید
    image = models.ImageField(
        upload_to='sliders/',
        verbose_name='تصویر اصلی اسلاید',
        help_text='تصویر اصلی که در سمت راست Hero نمایش داده می‌شود (1200x800px توصیه می‌شود)',
        blank=True,
        null=True
    )
    
    # تصویر دستگاه (برای fallback)
    device_image = models.ImageField(
        upload_to='sliders/devices/',
        verbose_name='تصویر دستگاه',
        blank=True,
        null=True,
        help_text='تصویر پشتیبان در صورت خطا در بارگذاری تصویر اصلی'
    )
    
    # دکمه‌های اقدام (CTA)
    primary_cta_fa = models.CharField(
        max_length=50,
        verbose_name='متن دکمه اصلی (فارسی)',
        default='مشاهده جزئیات'
    )
    primary_cta_en = models.CharField(
        max_length=50,
        verbose_name='متن دکمه اصلی (انگلیسی)',
        default='View Details'
    )
    
    secondary_cta_fa = models.CharField(
        max_length=50,
        verbose_name='متن دکمه ثانویه (فارسی)',
        default='تماس با ما'
    )
    secondary_cta_en = models.CharField(
        max_length=50,
        verbose_name='متن دکمه ثانویه (انگلیسی)',
        default='Contact Us'
    )
    
    # لینک (اختیاری - اگر نخواهید به صفحه محصول لینک بدهید)
    custom_link = models.URLField(
        blank=True,
        null=True,
        verbose_name='لینک سفارشی',
        help_text='اگر خالی بگذارید، به صفحه محصول لینک می‌شود'
    )
    
    # وضعیت و ترتیب
    is_active = models.BooleanField(
        default=True,
        verbose_name='فعال',
        help_text='آیا این اسلاید نمایش داده شود؟'
    )
    
    order = models.IntegerField(
        default=0,
        verbose_name='ترتیب نمایش',
        help_text='اسلایدها بر اساس این عدد مرتب می‌شوند (کوچکترین عدد اولویت دارد)',
        validators=[MinValueValidator(0)]
    )
    
    # تاریخ
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ایجاد')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='تاریخ بروزرسانی')
    
    class Meta:
        ordering = ['order', 'slide_id']
        verbose_name = 'اسلاید صفحه اصلی'
        verbose_name_plural = 'اسلایدرهای صفحه اصلی'
    
    def __str__(self):
        return f"{self.slide_id} - {self.title_fa}"


class SliderHighlight(models.Model):
    """
    نکات برجسته (Highlights) هر اسلاید
    این‌ها در قسمت پایین سمت چپ Hero به صورت کارت‌های کوچک نمایش داده می‌شوند
    """
    
    slider = models.ForeignKey(
        HomeSlider,
        on_delete=models.CASCADE,
        related_name='highlights',
        verbose_name='اسلاید'
    )
    
    label_fa = models.CharField(
        max_length=100,
        verbose_name='برچسب فارسی',
        help_text='مثلاً: "پردازنده" یا "باتری"'
    )
    label_en = models.CharField(max_length=100, verbose_name='برچسب انگلیسی')
    
    value_fa = models.CharField(
        max_length=200,
        verbose_name='مقدار فارسی',
        help_text='مثلاً: "Quad-Core A7" یا "5000 mAh"'
    )
    value_en = models.CharField(max_length=200, verbose_name='مقدار انگلیسی')
    
    order = models.IntegerField(
        default=0,
        verbose_name='ترتیب',
        validators=[MinValueValidator(0), MaxValueValidator(3)],
        help_text='حداکثر 4 نکته برجسته نمایش داده می‌شود (0 تا 3)'
    )
    
    class Meta:
        ordering = ['order']
        verbose_name = 'نکته برجسته اسلاید'
        verbose_name_plural = 'نکات برجسته اسلایدها'
    
    def __str__(self):
        return f"{self.slider.slide_id} - {self.label_fa}: {self.value_fa}"
