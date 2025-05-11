<template>
  <div class="product-card h-100">
    <div class="card border-0 h-100">
      <div class="position-relative">
        <img :src="product.image" :alt="product.title" class="card-img-top p-3" style="height: 200px; object-fit: contain;">
        <span v-if="discount > 0" class="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 m-2">
          -{{ discount }}%
        </span>
      </div>
      <div class="card-body">
        <span class="category-badge mb-2 d-inline-block">{{ product.category }}</span>
        <h5 class="card-title text-truncate">{{ product.title }}</h5>
        <div class="d-flex align-items-center mb-2">
          <div v-if="discount > 0" class="price-old">AED {{ (product.price * 1.2).toFixed(2) }}</div>
          <div class="price-current">AED {{ product.price.toFixed(2) }}</div>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3">
          <NuxtLink :to="`/product/${product.id}`" class="btn btn-sm btn-outline-dark">View Details</NuxtLink>
          <button @click="addToCart" class="btn btn-sm btn-dark">
            <i class="bi bi-bag-plus"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart';

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  discount: {
    type: Number,
    required: true
  }
});

const cartStore = useCartStore();

const addToCart = () => {
  cartStore.addItem({
    ...props.product,
    quantity: 1
  });
};
</script>