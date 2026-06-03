import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Services pour les catégories
export const getCategories = async () => {
  const response = await api.get('/categories');
  return response.data.categories;
};

export const getCategoryById = async (id) => {
  const response = await api.get(`/categories/${id}`);
  return response.data.category;
};

// Services pour les produits
export const getProducts = async (category = null) => {
  const params = category ? { category } : {};
  const response = await api.get('/products', { params });
  return response.data.products;
};

export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data.product;
};

export const createProduct = async (productData) => {
  const response = await api.post('/products', productData);
  return response.data;
};

// Services pour les commandes
export const createOrder = async (orderData) => {
  const response = await api.post('/orders', orderData);
  return response.data;
};

export const getOrders = async () => {
  const response = await api.get('/orders');
  return response.data.orders;
};

export const getOrderById = async (id) => {
  const response = await api.get(`/orders/${id}`);
  return response.data.order;
};

// Service WhatsApp
export const getWhatsAppUrl = async (message = '') => {
  const response = await axios.get(`http://localhost:5000/whatsapp`, {
    params: { message }
  });
  return response.data.whatsappUrl;
};

export default api;
