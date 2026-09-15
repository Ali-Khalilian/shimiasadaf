from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HomeSliderViewSet, SliderHighlightViewSet

router = DefaultRouter()
router.register(r'sliders', HomeSliderViewSet, basename='slider')
router.register(r'slider-highlights', SliderHighlightViewSet, basename='slider-highlight')

urlpatterns = [
    path('', include(router.urls)),
]
