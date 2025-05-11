export function useProducts() {
  const getProducts = async (limit = 10) => {
    try {
      const { data } = await useFetch(`https://fakestoreapi.com/products?limit=${limit}`);
      return data.value;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };

  const getProductsByCategory = async (category) => {
    try {
      const { data } = await useFetch(`https://fakestoreapi.com/products/category/${category}`);
      return data.value;
    } catch (error) {
      console.error(`Error fetching products for category ${category}:`, error);
      return [];
    }
  };

  const getProductById = async (id) => {
    try {
      const { data } = await useFetch(`https://fakestoreapi.com/products/${id}`);
      return data.value;
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
      return null;
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await useFetch('https://fakestoreapi.com/products/categories');
      return data.value;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  };

  return {
    getProducts,
    getProductsByCategory,
    getProductById,
    getCategories
  };
}