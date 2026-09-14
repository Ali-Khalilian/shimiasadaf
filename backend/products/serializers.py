from rest_framework import serializers
from .models import Product, ProductFeature, ProductHighlight


class ProductFeatureSerializer(serializers.ModelSerializer):
    """
    Serializer برای ویژگی‌های محصول
    """
    class Meta:
        model = ProductFeature
        fields = ['id', 'feature_fa', 'feature_en', 'order']


class ProductHighlightSerializer(serializers.ModelSerializer):
    """
    Serializer برای نکات برجسته محصول
    """
    class Meta:
        model = ProductHighlight
        fields = ['id', 'label', 'value', 'order']


class ProductListSerializer(serializers.ModelSerializer):
    """
    Serializer ساده برای لیست محصولات
    """
    class Meta:
        model = Product
        fields = [
            'id', 'title_fa', 'title_en', 'slug', 'tag', 
            'os_type', 'image', 'summary_fa', 'summary_en',
            'status', 'is_featured', 'order'
        ]


class ProductDetailSerializer(serializers.ModelSerializer):
    """
    Serializer کامل برای جزئیات محصول
    """
    features = ProductFeatureSerializer(many=True, read_only=True)
    highlights = ProductHighlightSerializer(many=True, read_only=True)
    
    class Meta:
        model = Product
        fields = [
            'id', 'title_fa', 'title_en', 'slug', 'tag', 'os_type',
            'summary_fa', 'summary_en',
            'image', 'banner', 'device_image',
            'display', 'processor', 'memory', 'battery',
            'connectivity', 'keyboard', 'sim_sam', 'dimensions',
            'printer', 'card_readers', 'certifications',
            'catalog_file',
            'status', 'is_featured', 'order',
            'features', 'highlights',
            'created_at', 'updated_at'
        ]


class ProductCreateUpdateSerializer(serializers.ModelSerializer):
    """
    Serializer برای ایجاد و ویرایش محصول
    """
    features = ProductFeatureSerializer(many=True, required=False)
    highlights = ProductHighlightSerializer(many=True, required=False)
    
    class Meta:
        model = Product
        fields = [
            'id', 'title_fa', 'title_en', 'tag', 'os_type',
            'summary_fa', 'summary_en',
            'image', 'banner', 'device_image',
            'display', 'processor', 'memory', 'battery',
            'connectivity', 'keyboard', 'sim_sam', 'dimensions',
            'printer', 'card_readers', 'certifications',
            'catalog_file',
            'status', 'is_featured', 'order',
            'features', 'highlights'
        ]
    
    def create(self, validated_data):
        features_data = validated_data.pop('features', [])
        highlights_data = validated_data.pop('highlights', [])
        
        product = Product.objects.create(**validated_data)
        
        for feature_data in features_data:
            ProductFeature.objects.create(product=product, **feature_data)
        
        for highlight_data in highlights_data:
            ProductHighlight.objects.create(product=product, **highlight_data)
        
        return product
    
    def update(self, instance, validated_data):
        features_data = validated_data.pop('features', None)
        highlights_data = validated_data.pop('highlights', None)
        
        # بروزرسانی فیلدهای محصول
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        
        # بروزرسانی ویژگی‌ها
        if features_data is not None:
            instance.features.all().delete()
            for feature_data in features_data:
                ProductFeature.objects.create(product=instance, **feature_data)
        
        # بروزرسانی نکات برجسته
        if highlights_data is not None:
            instance.highlights.all().delete()
            for highlight_data in highlights_data:
                ProductHighlight.objects.create(product=instance, **highlight_data)
        
        return instance
