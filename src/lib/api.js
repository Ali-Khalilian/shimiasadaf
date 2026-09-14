// API Service برای ارتباط با بک‌اند Django

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';

/**
 * تابع helper برای fetch با error handling
 */
async function fetchAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      // غیرفعال کردن cache برای به‌روزرسانی real-time
      cache: 'no-store',
      // یا می‌تونی از revalidate استفاده کنی:
      // next: { revalidate: 0 }
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch ${endpoint}:`, error);
    throw error;
  }
}

/**
 * API endpoints
 */
export const api = {
  /**
   * دریافت تمام محصولات
   * @param {Object} params - پارامترهای query (status, os_type, search, ordering)
   * @returns {Promise<Array>} لیست محصولات
   */
  async getProducts(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = `/products/${queryString ? `?${queryString}` : ''}`;
    return fetchAPI(endpoint);
  },

  /**
   * دریافت فقط محصولات فعال
   * @returns {Promise<Array>} لیست محصولات فعال
   */
  async getActiveProducts() {
    return fetchAPI('/products/active/');
  },

  /**
   * دریافت محصولات ویژه
   * @returns {Promise<Array>} لیست محصولات ویژه
   */
  async getFeaturedProducts() {
    return fetchAPI('/products/featured/');
  },

  /**
   * دریافت جزئیات یک محصول
   * @param {string} id - شناسه محصول (مثل 'm300')
   * @returns {Promise<Object>} جزئیات کامل محصول
   */
  async getProduct(id) {
    return fetchAPI(`/products/${id}/`);
  },

  /**
   * جستجو در محصولات
   * @param {string} query - عبارت جستجو
   * @returns {Promise<Array>} نتایج جستجو
   */
  async searchProducts(query) {
    return fetchAPI(`/products/?search=${encodeURIComponent(query)}`);
  },

  /**
   * دریافت محصولات بر اساس سیستم‌عامل
   * @param {string} osType - نوع سیستم‌عامل (RTOS, Linux, Android, ...)
   * @returns {Promise<Array>} لیست محصولات
   */
  async getProductsByOS(osType) {
    return fetchAPI(`/products/?os_type=${encodeURIComponent(osType)}`);
  },

  // اگر در آینده نیاز به ایجاد، ویرایش، یا حذف داشتید:
  
  /**
   * ایجاد محصول جدید (نیاز به authentication)
   * @param {Object} data - داده‌های محصول
   * @returns {Promise<Object>} محصول ایجاد شده
   */
  async createProduct(data) {
    return fetchAPI('/products/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * بروزرسانی محصول (نیاز به authentication)
   * @param {string} id - شناسه محصول
   * @param {Object} data - داده‌های جدید
   * @returns {Promise<Object>} محصول بروزرسانی شده
   */
  async updateProduct(id, data) {
    return fetchAPI(`/products/${id}/`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },

  /**
   * حذف محصول (نیاز به authentication)
   * @param {string} id - شناسه محصول
   * @returns {Promise<boolean>} موفقیت عملیات
   */
  async deleteProduct(id) {
    const response = await fetch(`${API_BASE_URL}/products/${id}/`, {
      method: 'DELETE',
    });
    return response.ok;
  },
};

/**
 * Helper function برای تبدیل URL تصاویر
 * اگر تصویر نسبی باشد، به آدرس کامل تبدیل می‌شود
 */
export function getImageURL(imagePath) {
  if (!imagePath) {
    // اگر تصویر نداریم، null برگردون تا از fallback استفاده بشه
    return null;
  }
  
  // اگر URL کامل است، همان را برگردان
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // اگر از /media شروع می‌شود، به URL بک‌اند اضافه کن
  if (imagePath.startsWith('/media/')) {
    return `http://127.0.0.1:8000${imagePath}`;
  }
  
  // اگر نسبی است، همان را برگردان (برای تصاویر استاتیک در public)
  return imagePath;
}

export default api;
