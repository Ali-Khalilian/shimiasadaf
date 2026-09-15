from django.contrib import admin
from django.utils.html import format_html
from .models import HomeSlider, SliderHighlight


class SliderHighlightInline(admin.TabularInline):
    """
    Inline برای مدیریت نکات برجسته داخل هر اسلاید
    """
    model = SliderHighlight
    extra = 1
    max_num = 4  # حداکثر 4 highlight
    fields = ['order', 'label_fa', 'label_en', 'value_fa', 'value_en']
    verbose_name = 'نکته برجسته'
    verbose_name_plural = 'نکات برجسته (حداکثر 4 مورد)'


@admin.register(HomeSlider)
class HomeSliderAdmin(admin.ModelAdmin):
    """
    پنل مدیریت اسلایدرهای صفحه اصلی
    """
    
    list_display = [
        'slide_id',
        'title_fa',
        'image_preview',
        'is_active',
        'order',
        'highlights_count',
        'updated_at'
    ]
    
    list_filter = ['is_active', 'created_at', 'updated_at']
    
    search_fields = ['slide_id', 'title_fa', 'title_en', 'subtitle_fa', 'subtitle_en']
    
    list_editable = ['is_active', 'order']
    
    inlines = [SliderHighlightInline]
    
    fieldsets = (
        ('شناسایی و عنوان', {
            'fields': ('slide_id', 'title_fa', 'title_en')
        }),
        ('توضیحات', {
            'fields': ('subtitle_fa', 'subtitle_en')
        }),
        ('برچسب (Badge)', {
            'fields': ('badge_fa', 'badge_en')
        }),
        ('تصاویر', {
            'fields': ('image', 'device_image'),
            'description': 'تصویر اصلی: 1200x800px توصیه می‌شود'
        }),
        ('دکمه‌های اقدام (CTA)', {
            'fields': (
                ('primary_cta_fa', 'primary_cta_en'),
                ('secondary_cta_fa', 'secondary_cta_en'),
                'custom_link'
            ),
            'classes': ('collapse',)
        }),
        ('تنظیمات نمایش', {
            'fields': ('is_active', 'order')
        })
    )
    
    readonly_fields = ['created_at', 'updated_at']
    
    def image_preview(self, obj):
        """نمایش پیش‌نمایش تصویر در لیست"""
        if obj.image:
            return format_html(
                '<img src="{}" style="width: 100px; height: auto; border-radius: 8px;" />',
                obj.image.url
            )
        return '—'
    image_preview.short_description = 'پیش‌نمایش'
    
    def highlights_count(self, obj):
        """تعداد نکات برجسته"""
        count = obj.highlights.count()
        if count == 0:
            return format_html('<span style="color: red;">⚠️ 0</span>')
        elif count < 4:
            return format_html('<span style="color: orange;">⚡ {}</span>', count)
        else:
            return format_html('<span style="color: green;">✓ {}</span>', count)
    highlights_count.short_description = 'نکات برجسته'
    
    class Media:
        css = {
            'all': ('admin/css/custom_admin.css',)
        }


@admin.register(SliderHighlight)
class SliderHighlightAdmin(admin.ModelAdmin):
    """
    پنل مدیریت مجزای نکات برجسته (در صورت نیاز)
    """
    
    list_display = [
        'slider',
        'label_fa',
        'value_fa',
        'order'
    ]
    
    list_filter = ['slider']
    
    search_fields = ['label_fa', 'label_en', 'value_fa', 'value_en', 'slider__slide_id']
    
    list_editable = ['order']
    
    fieldsets = (
        (None, {
            'fields': ('slider',)
        }),
        ('برچسب', {
            'fields': (('label_fa', 'label_en'),)
        }),
        ('مقدار', {
            'fields': (('value_fa', 'value_en'),)
        }),
        ('ترتیب', {
            'fields': ('order',)
        })
    )
