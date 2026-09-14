from django.db import models
from django.utils.text import slugify


class Product(models.Model):
    """
    مدل محصول برای پایانه‌های پرداخت
    """
    
    # انواع سیستم عامل
    OS_CHOICES = [
        ('RTOS', 'RTOS'),
        ('Linux', 'Linux'),
        ('Android', 'Android'),
        ('RTOS/Linux', 'RTOS/Linux'),
        ('Linux/Android', 'Linux/Android'),
    ]
    
    # وضعیت محصول
    STATUS_CHOICES = [
        ('active', 'فعال'),
        ('inactive', 'غیرفعال'),
        ('coming_soon', 'به زودی'),
    ]
    
    # اطلاعات اصلی
    id = models.CharField(max_length=50, primary_key=True, help_text='شناسه یکتا (مثل m300, m600)')
    title_fa = models.CharField(max_length=200, verbose_name='عنوان فارسی')
    title_en = models.CharField(max_length=200, verbose_name='عنوان انگلیسی')
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    
    # توضیحات
    summary_fa = models.TextField(verbose_name='خلاصه توضیحات فارسی')
    summary_en = models.TextField(verbose_name='خلاصه توضیحات انگلیسی')
    
    # تصاویر
    image = models.ImageField(upload_to='products/', verbose_name='تصویر اصلی محصول')
    banner = models.ImageField(upload_to='products/banners/', verbose_name='تصویر بنر', blank=True, null=True)
    device_image = models.ImageField(upload_to='products/devices/', verbose_name='تصویر دستگاه', blank=True, null=True)
    
    # مشخصات فنی
    os_type = models.CharField(max_length=50, choices=OS_CHOICES, verbose_name='سیستم عامل')
    tag = models.CharField(max_length=100, verbose_name='برچسب محصول', help_text='مثل RTOS / Linux')
    
    # مشخصات سخت‌افزاری (JSON-like fields)
    display = models.CharField(max_length=200, verbose_name='صفحه نمایش')
    processor = models.CharField(max_length=200, verbose_name='پردازنده')
    memory = models.CharField(max_length=200, verbose_name='حافظه')
    battery = models.CharField(max_length=200, verbose_name='باتری')
    connectivity = models.CharField(max_length=300, verbose_name='قابلیت‌های ارتباطی')
    sim_sam = models.CharField(max_length=200, verbose_name='اسلات SIM و SAM')
    dimensions = models.CharField(max_length=200, verbose_name='ابعاد و وزن')
    printer = models.CharField(max_length=300, verbose_name='پرینتر')
    card_readers = models.CharField(max_length=300, verbose_name='کارتخوان‌ها')
    certifications = models.CharField(max_length=300, verbose_name='گواهینامه‌ها')
    
    # ویژگی‌های اضافی
    keyboard = models.CharField(max_length=200, verbose_name='کیبورد', blank=True, null=True)
    
    # کاتالوگ
    catalog_file = models.FileField(upload_to='catalogs/', verbose_name='فایل کاتالوگ PDF', blank=True, null=True)
    
    # وضعیت و ترتیب
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active', verbose_name='وضعیت')
    order = models.IntegerField(default=0, verbose_name='ترتیب نمایش')
    is_featured = models.BooleanField(default=False, verbose_name='محصول ویژه')
    
    # تاریخ
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ایجاد')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='تاریخ بروزرسانی')
    
    class Meta:
        ordering = ['order', 'id']
        verbose_name = 'محصول'
        verbose_name_plural = 'محصولات'
    
    def __str__(self):
        return f"{self.title_fa} ({self.id})"
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title_en, allow_unicode=True)
        super().save(*args, **kwargs)


class ProductFeature(models.Model):
    """
    ویژگی‌های محصول (چند ویژگی برای هر محصول)
    """
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='features')
    feature_fa = models.TextField(verbose_name='ویژگی فارسی')
    feature_en = models.TextField(verbose_name='ویژگی انگلیسی')
    order = models.IntegerField(default=0, verbose_name='ترتیب')
    
    class Meta:
        ordering = ['order']
        verbose_name = 'ویژگی محصول'
        verbose_name_plural = 'ویژگی‌های محصول'
    
    def __str__(self):
        return f"{self.product.id} - {self.feature_fa[:50]}"


class ProductHighlight(models.Model):
    """
    نکات برجسته محصول برای نمایش در هیرو
    """
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='highlights')
    label = models.CharField(max_length=100, verbose_name='برچسب')
    value = models.CharField(max_length=200, verbose_name='مقدار')
    order = models.IntegerField(default=0, verbose_name='ترتیب')
    
    class Meta:
        ordering = ['order']
        verbose_name = 'نکته برجسته'
        verbose_name_plural = 'نکات برجسته'
    
    def __str__(self):
        return f"{self.product.id} - {self.label}: {self.value}"
