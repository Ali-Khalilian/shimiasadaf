from django.contrib import admin
from .models import Product, ProductFeature, ProductHighlight


class ProductFeatureInline(admin.TabularInline):
    """
    ویرایش ویژگی‌های محصول به صورت inline
    """
    model = ProductFeature
    extra = 1
    fields = ('feature_fa', 'feature_en', 'order')


class ProductHighlightInline(admin.TabularInline):
    """
    ویرایش نکات برجسته محصول به صورت inline
    """
    model = ProductHighlight
    extra = 1
    fields = ('label', 'value', 'order')


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    """
    پنل مدیریت محصولات
    """
    list_display = ('id', 'title_fa', 'title_en', 'os_type', 'status', 'is_featured', 'order', 'updated_at')
    list_filter = ('status', 'os_type', 'is_featured')
    search_fields = ('id', 'title_fa', 'title_en', 'summary_fa', 'summary_en')
    list_editable = ('status', 'is_featured', 'order')
    readonly_fields = ('created_at', 'updated_at', 'slug')
    
    fieldsets = (
        ('اطلاعات اصلی', {
            'fields': ('id', 'title_fa', 'title_en', 'slug', 'tag', 'os_type', 'status', 'order', 'is_featured')
        }),
        ('توضیحات', {
            'fields': ('summary_fa', 'summary_en')
        }),
        ('تصاویر', {
            'fields': ('image', 'banner', 'device_image'),
            'classes': ('collapse',)
        }),
        ('مشخصات فنی', {
            'fields': (
                'display', 'processor', 'memory', 'battery', 
                'connectivity', 'keyboard', 'sim_sam', 
                'dimensions', 'printer', 'card_readers', 'certifications'
            ),
            'classes': ('collapse',)
        }),
        ('فایل‌ها', {
            'fields': ('catalog_file',),
            'classes': ('collapse',)
        }),
        ('تاریخ‌ها', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    inlines = [ProductFeatureInline, ProductHighlightInline]
    
    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.prefetch_related('features', 'highlights')


@admin.register(ProductFeature)
class ProductFeatureAdmin(admin.ModelAdmin):
    """
    مدیریت ویژگی‌های محصول
    """
    list_display = ('product', 'feature_fa_short', 'feature_en_short', 'order')
    list_filter = ('product',)
    search_fields = ('feature_fa', 'feature_en')
    list_editable = ('order',)
    
    def feature_fa_short(self, obj):
        return obj.feature_fa[:50] + '...' if len(obj.feature_fa) > 50 else obj.feature_fa
    feature_fa_short.short_description = 'ویژگی فارسی'
    
    def feature_en_short(self, obj):
        return obj.feature_en[:50] + '...' if len(obj.feature_en) > 50 else obj.feature_en
    feature_en_short.short_description = 'ویژگی انگلیسی'


@admin.register(ProductHighlight)
class ProductHighlightAdmin(admin.ModelAdmin):
    """
    مدیریت نکات برجسته محصول
    """
    list_display = ('product', 'label', 'value', 'order')
    list_filter = ('product',)
    search_fields = ('label', 'value')
    list_editable = ('order',)
