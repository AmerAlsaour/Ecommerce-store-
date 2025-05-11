<template>
  <div class="py-5">
    <div class="container">
      <h1 class="mb-4">Shopping Cart</h1>
      
      <div v-if="cartStore.items.length === 0" class="text-center py-5">
        <i class="bi bi-bag display-1 text-muted"></i>
        <h3 class="mt-3">Your cart is empty</h3>
        <p class="mb-4">Add some items to your cart to continue shopping.</p>
        <NuxtLink to="/" class="btn btn-dark">
          Continue Shopping
        </NuxtLink>
      </div>
      
      <div v-else>
        <div class="row">
          <div class="col-lg-8">
            <div class="card mb-4 border-0 shadow-sm">
              <div class="card-body">
                <div v-for="item in cartStore.items" :key="item.id" class="row align-items-center mb-3 pb-3 border-bottom">
                  <div class="col-md-2">
                    <img :src="item.image" :alt="item.title" class="img-fluid" style="height: 80px; object-fit: contain;">
                  </div>
                  <div class="col-md-4">
                    <h5 class="mb-1">{{ item.title }}</h5>
                    <div class="small text-muted text-capitalize">{{ item.category }}</div>
                  </div>
                  <div class="col-md-2">
                    <div class="price-current">AED {{ item.price.toFixed(2) }}</div>
                  </div>
                  <div class="col-md-2">
                    <div class="d-flex align-items-center">
                      <button @click="decrementQuantity(item)" class="btn btn-sm btn-outline-dark">-</button>
                      <input type="number" :value="item.quantity" @change="updateQuantity(item.id, $event)" min="1" class="form-control mx-1 text-center" style="width: 50px;">
                      <button @click="incrementQuantity(item)" class="btn btn-sm btn-outline-dark">+</button>
                    </div>
                  </div>
                  <div class="col-md-1">
                    <div class="fw-bold">AED {{ (item.price * item.quantity).toFixed(2) }}</div>
                  </div>
                  <div class="col-md-1 text-end">
                    <button @click="removeItem(item.id)" class="btn btn-sm text-danger" aria-label="Remove item">
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
                
                <div class="d-flex justify-content-between align-items-center">
                  <NuxtLink to="/" class="btn btn-outline-dark">
                    <i class="bi bi-arrow-left me-2"></i> Continue Shopping
                  </NuxtLink>
                  <button @click="clearCart" class="btn btn-outline-danger">
                    <i class="bi bi-trash me-2"></i> Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4">
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <h4 class="mb-3">Order Summary</h4>
                
                <div class="d-flex justify-content-between mb-2">
                  <div>Subtotal ({{ cartStore.totalItems }} items)</div>
                  <div>AED {{ cartStore.totalAmount.toFixed(2) }}</div>
                </div>
                
                <div class="d-flex justify-content-between mb-2">
                  <div>Shipping</div>
                  <div class="text-success">Free</div>
                </div>
                
                <div class="d-flex justify-content-between mb-3 pb-3 border-bottom">
                  <div>Tax</div>
                  <div>AED {{ (cartStore.totalAmount * 0.05).toFixed(2) }}</div>
                </div>
                
                <div class="d-flex justify-content-between mb-4">
                  <div class="h5">Total</div>
                  <div class="h5">AED {{ (cartStore.totalAmount * 1.05).toFixed(2) }}</div>
                </div>
                
                <button class="btn btn-dark w-100 mb-3">
                  Proceed to Checkout
                </button>
                
                <div class="text-center text-muted small">
                  <i class="bi bi-shield-check me-1"></i>
                  Secure checkout with 100% purchase protection
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart';

const cartStore = useCartStore();

useHead({
  title: 'Shopping Cart - Developer Test Store'
});

const updateQuantity = (itemId, event) => {
  const quantity = parseInt(event.target.value);
  if (quantity > 0) {
    cartStore.updateQuantity(itemId, quantity);
  }
};

const incrementQuantity = (item) => {
  cartStore.updateQuantity(item.id, item.quantity + 1);
};

const decrementQuantity = (item) => {
  if (item.quantity > 1) {
    cartStore.updateQuantity(item.id, item.quantity - 1);
  }
};

const removeItem = (itemId) => {
  if (confirm('Are you sure you want to remove this item from your cart?')) {
    cartStore.removeItem(itemId);
  }
};

const clearCart = () => {
  if (confirm('Are you sure you want to clear your cart?')) {
    cartStore.clearCart();
  }
};
</script>