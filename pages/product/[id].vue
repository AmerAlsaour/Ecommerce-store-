<template>
  <div class="py-5">
    <div class="container">
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      
      <div v-else-if="product" class="row">
        <div class="col-md-6 mb-4">
          <div class="card border-0">
            <img :src="product.image" :alt="product.title" class="card-img-top p-4" style="height: 400px; object-fit: contain;">
          </div>
        </div>
        
        <div class="col-md-6">
          <span class="category-badge mb-3 d-inline-block">{{ product.category }}</span>
          <h1 class="h3 mb-3">{{ product.title }}</h1>
          
          <div class="d-flex align-items-center mb-3">
            <div v-if="discount > 0" class="price-old">AED {{ (product.price * 1.2).toFixed(2) }}</div>
            <div class="price-current h4 mb-0">AED {{ product.price.toFixed(2) }}</div>
            <div v-if="discount > 0" class="ms-3 badge bg-danger">{{ discount }}% OFF</div>
          </div>
          
          <div class="mb-4">
            <div class="d-flex align-items-center">
              <div class="me-2">Rating:</div>
              <div class="d-flex">
                <template v-for="i in 5" :key="i">
                  <i :class="i <= Math.round(product.rating.rate) ? 'bi bi-star-fill text-warning' : 'bi bi-star text-muted'"></i>
                </template>
                <span class="ms-2">({{ product.rating.count }} reviews)</span>
              </div>
            </div>
          </div>
          
          <p class="mb-4">{{ product.description }}</p>
          
          <div class="mb-4">
            <label for="quantity" class="form-label">Quantity</label>
            <div class="d-flex align-items-center">
              <button @click="decrementQuantity" class="btn btn-outline-dark">-</button>
              <input type="number" id="quantity" v-model="quantity" min="1" class="form-control mx-2 text-center" style="width: 60px;">
              <button @click="incrementQuantity" class="btn btn-outline-dark">+</button>
            </div>
          </div>
          
          <div class="d-grid gap-2">
            <button @click="addToCart" class="btn btn-dark btn-lg">
              <i class="bi bi-bag-plus me-2"></i> Add to Cart
            </button>
            <button class="btn btn-outline-dark">
              <i class="bi bi-heart me-2"></i> Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      
      <div v-else class="alert alert-danger">
        Product not found.
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const productId = route.params.id;
const loading = ref(true);
const quantity = ref(1);

const { getProductById } = useProducts();
const cartStore = useCartStore();

// Generate the discount on the server side using useState
const discount = useState(`product-${productId}-discount`, () => {
  return Math.floor(Math.random() * 20) + 10;
});

const product = await getProductById(productId);
loading.value = false;

useHead({
  title: product.value ? `${product.value.title} - Developer Test Store` : 'Product Not Found'
});

const incrementQuantity = () => {
  quantity.value++;
};

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const addToCart = () => {
  if (product.value) {
    cartStore.addItem({
      ...product.value,
      quantity: quantity.value
    });
    // Show a toast or notification
    alert(`Added ${quantity.value} item(s) to cart`);
  }
};
</script>