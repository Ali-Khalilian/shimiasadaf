from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import HomeSlider, SliderHighlight
from .serializers import HomeSliderSerializer, HomeSliderListSerializer, SliderHighlightSerializer


class HomeSliderViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ViewSet برای اسلایدرهای صفحه اصلی
    
    لیست اسلایدرها:
    GET /api/sliders/
    
    جزئیات یک اسلاید:
    GET /api/sliders/{id}/
    
    فقط اسلایدرهای فعال:
    GET /api/sliders/active/
    """
    
    queryset = HomeSlider.objects.prefetch_related('highlights').all()
    serializer_class = HomeSliderSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_fields = ['is_active', 'slide_id']
    search_fields = ['title_fa', 'title_en', 'slide_id', 'subtitle_fa', 'subtitle_en']
    ordering_fields = ['order', 'created_at', 'updated_at']
    ordering = ['order', 'slide_id']
    
    def get_serializer_class(self):
        """استفاده از سریالایزر ساده‌تر برای لیست"""
        if self.action == 'list':
            return HomeSliderListSerializer
        return HomeSliderSerializer
    
    @action(detail=False, methods=['get'])
    def active(self, request):
        """
        برگرداندن فقط اسلایدرهای فعال
        GET /api/sliders/active/
        """
        active_sliders = self.queryset.filter(is_active=True)
        serializer = HomeSliderSerializer(
            active_sliders,
            many=True,
            context={'request': request}
        )
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'])
    def highlights(self, request, pk=None):
        """
        برگرداندن فقط highlights یک اسلاید خاص
        GET /api/sliders/{id}/highlights/
        """
        slider = self.get_object()
        highlights = slider.highlights.all()
        serializer = SliderHighlightSerializer(highlights, many=True)
        return Response(serializer.data)


class SliderHighlightViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ViewSet برای نکات برجسته اسلایدرها
    
    لیست همه highlights:
    GET /api/slider-highlights/
    
    جزئیات یک highlight:
    GET /api/slider-highlights/{id}/
    """
    
    queryset = SliderHighlight.objects.select_related('slider').all()
    serializer_class = SliderHighlightSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['slider']
    ordering_fields = ['order']
    ordering = ['order']
