from rest_framework import serializers
from .models import HomeSlider, SliderHighlight


class SliderHighlightSerializer(serializers.ModelSerializer):
    """
    سریالایزر برای نکات برجسته اسلاید
    """
    
    class Meta:
        model = SliderHighlight
        fields = ['id', 'label_fa', 'label_en', 'value_fa', 'value_en', 'order']


class HomeSliderSerializer(serializers.ModelSerializer):
    """
    سریالایزر برای اسلایدرهای صفحه اصلی
    """
    
    highlights = SliderHighlightSerializer(many=True, read_only=True)
    image_url = serializers.SerializerMethodField()
    device_image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = HomeSlider
        fields = [
            'id',
            'slide_id',
            'title_fa',
            'title_en',
            'subtitle_fa',
            'subtitle_en',
            'badge_fa',
            'badge_en',
            'image',
            'image_url',
            'device_image',
            'device_image_url',
            'primary_cta_fa',
            'primary_cta_en',
            'secondary_cta_fa',
            'secondary_cta_en',
            'custom_link',
            'is_active',
            'order',
            'highlights',
            'created_at',
            'updated_at'
        ]
    
    def get_image_url(self, obj):
        """دریافت URL کامل تصویر"""
        if obj.image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None
    
    def get_device_image_url(self, obj):
        """دریافت URL کامل تصویر دستگاه"""
        if obj.device_image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.device_image.url)
            return obj.device_image.url
        return None


class HomeSliderListSerializer(serializers.ModelSerializer):
    """
    سریالایزر ساده‌تر برای لیست اسلایدرها (بدون جزئیات کامل)
    """
    
    highlights_count = serializers.SerializerMethodField()
    
    class Meta:
        model = HomeSlider
        fields = [
            'id',
            'slide_id',
            'title_fa',
            'title_en',
            'badge_fa',
            'badge_en',
            'image',
            'is_active',
            'order',
            'highlights_count'
        ]
    
    def get_highlights_count(self, obj):
        """تعداد نکات برجسته"""
        return obj.highlights.count()
