<template>
  <div class="py-5">
    <div class="container">
      <h1 class="mb-4 text-capitalize">{{ categoryName }} Products</h1>
      
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      
      <div v-else-if="products && products.length" class="row">
        <div v-for="product in products" :key="product.id" class="col-md-4 col-lg-3 mb-4">
          <ProductCard :product="product" :discount="productDiscounts[product.id]" />
        </div>
      </div>
      
      <div v-else class="alert alert-info">
        No products found in this category.
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const categoryId = route.params.id;
const categoryName = decodeURIComponent(categoryId);
const loading = ref(true);

const { getProductsByCategory } = useProducts();

useHead({
  title: `${categoryName} - Developer Test Store`
});

const products = await getProductsByCategory(categoryId);

// Generate consistent discounts using useState
const productDiscounts = useState(`category-${categoryId}-discounts`, () => {
  const discounts = {};
  products?.forEach(product => {
    discounts[product.id] = Math.random() > 0.6 ? Math.floor(Math.random() * 30) : 0;
  });
  return discounts;
});

loading.value = false;
</script>