from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, ProductFeatureViewSet, ProductHighlightViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')
router.register(r'features', ProductFeatureViewSet, basename='feature')
router.register(r'highlights', ProductHighlightViewSet, basename='highlight')

urlpatterns = [
    path('', include(router.urls)),
]
