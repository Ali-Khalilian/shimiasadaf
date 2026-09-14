from rest_framework import viewsets, filters, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import Product, ProductFeature, ProductHighlight
from .serializers import (
    ProductListSerializer, 
    ProductDetailSerializer,
    ProductCreateUpdateSerializer,
    ProductFeatureSerializer,
    ProductHighlightSerializer
)


class ProductViewSet(viewsets.ModelViewSet):
    """
    ViewSet برای مدیریت محصولات
    
    Endpoints:
    - GET /api/products/ - لیست تمام محصولات
    - GET /api/products/{id}/ - جزئیات یک محصول
    - POST /api/products/ - ایجاد محصول جدید
    - PUT /api/products/{id}/ - بروزرسانی کامل محصول
    - PATCH /api/products/{id}/ - بروزرسانی جزئی محصول
    - DELETE /api/products/{id}/ - حذف محصول
    - GET /api/products/active/ - لیست محصولات فعال
    - GET /api/products/featured/ - لیست محصولات ویژه
    """
    queryset = Product.objects.all().prefetch_related('features', 'highlights')
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['status', 'os_type', 'is_featured']
    search_fields = ['title_fa', 'title_en', 'summary_fa', 'summary_en']
    ordering_fields = ['order', 'created_at', 'updated_at']
    ordering = ['order', 'id']
    
    def get_serializer_class(self):
        if self.action == 'list':
            return ProductListSerializer
        elif self.action in ['create', 'update', 'partial_update']:
            return ProductCreateUpdateSerializer
        return ProductDetailSerializer
    
    @action(detail=False, methods=['get'])
    def active(self, request):
        """
        دریافت فقط محصولات فعال
        """
        products = self.queryset.filter(status='active')
        serializer = ProductListSerializer(products, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """
        دریافت محصولات ویژه
        """
        products = self.queryset.filter(is_featured=True, status='active')
        serializer = ProductDetailSerializer(products, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def add_feature(self, request, pk=None):
        """
        اضافه کردن ویژگی به محصول
        """
        product = self.get_object()
        serializer = ProductFeatureSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save(product=product)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=True, methods=['post'])
    def add_highlight(self, request, pk=None):
        """
        اضافه کردن نکته برجسته به محصول
        """
        product = self.get_object()
        serializer = ProductHighlightSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save(product=product)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductFeatureViewSet(viewsets.ModelViewSet):
    """
    ViewSet برای مدیریت ویژگی‌های محصول
    """
    queryset = ProductFeature.objects.all()
    serializer_class = ProductFeatureSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['product']
    ordering_fields = ['order']
    ordering = ['order']


class ProductHighlightViewSet(viewsets.ModelViewSet):
    """
    ViewSet برای مدیریت نکات برجسته محصول
    """
    queryset = ProductHighlight.objects.all()
    serializer_class = ProductHighlightSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['product']
    ordering_fields = ['order']
    ordering = ['order']
