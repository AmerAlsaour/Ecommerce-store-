<template>
  <div class="special-offers">
    <h2 class="section-title text-uppercase">SPECIAL OFFERS</h2>
    <swiper
      :slides-per-view="4"
      :pagination="{ clickable: true }"
      navigation
      :effect="'cards'"
      :grabCursor="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(product, index) in products" :key="product.id">
        <div class="card">
          <img :src="product.image" class="card-img-top" alt="Product Image" />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <!-- <p class="card-text">{{ product.description }}</p> -->
            <p class="price">AED {{ product.price }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

const { data: products } = await useFetch(
  "https://fakestoreapi.com/products?limit=5"
);

const modules = [EffectFlip, Pagination, Navigation];
</script>

<style scoped>
.special-offers {
  padding: 2rem;
}

.card {
  margin: 0 10px;
  text-align: center;
  width: 90%; /* Ensure the product card takes full width */
  margin-bottom: 8vh;
}

.card-img-top {
  width: 100%; /* Ensure images take full width of the card */
  height: 70vh; /* Maintain aspect ratio */
}

.price {
  font-weight: bold;
}
</style>
