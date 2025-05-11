<!-- <template>
  <section class="py-5">
    <div class="container">
      <h2 class="section-title text-uppercase">New Arrivals</h2>
      <div class="row">
        <div v-for="product in products" :key="product.id" class="col-6 col-md-4 col-lg-3">
          <ProductCard :product="product" :discount="productDiscounts[product.id]" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: products } = await useFetch('https://fakestoreapi.com/products?sort=desc&limit=4');

// Generate consistent discounts using useState
const productDiscounts = useState('new-arrivals-discounts', () => {
  const discounts = {};
  products.value?.forEach(product => {
    discounts[product.id] = Math.random() > 0.6 ? Math.floor(Math.random() * 30) : 0;
  });
  return discounts;
});
</script> -->
<template>
  <!-- <section class="py-5">
    <div class="container">
      <h2 class="section-title text-uppercase">New Arrivals</h2>
      <div class="row">
        <div
          v-for="product in products"
          :key="product.id"
          class="col-6 col-md-4 col-lg-3"
        >
          <ProductCard
            :product="product"
            :discount="productDiscounts[product.id]"
          />
        </div>
      </div>
    </div>
  </section> -->

  <div class="special-offers">
    <h2 class="fw-bold ms-2">NEW ARRIVALS</h2>
    <swiper
      :slides-per-view="4"
      :pagination="{ clickable: true }"
      :effect="'cards'"
      :grabCursor="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(item, index) in offers" :key="index">
        <div class="card">
          <img :src="item.image" class="card-img-top" alt="Product Image" />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <p class="price">{{ item.price }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
// const { data: products } = await useFetch(
//   "https://fakestoreapi.com/products?sort=desc&limit=4"
// );

// // Generate consistent discounts using useState
// const productDiscounts = useState("new-arrivals-discounts", () => {
//   const discounts = {};
//   products.value?.forEach((product) => {
//     discounts[product.id] =
//       Math.random() > 0.6 ? Math.floor(Math.random() * 30) : 0;
//   });
//   return discounts;
// });
export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      offers: [
        {
          title: "Elegant Handbag",
          description: "Lorem ipsum dolor",
          price: "AED 899.00",
          image: "/images/D.png", // Replace with actual image paths
        },
        {
          title: "Stylish Headphones",
          description: "Lorem ipsum dolor",
          price: "AED 990.00",
          image: "/images/F.png",
        },
        {
          title: "Elegant Necklace",
          description: "Lorem ipsum dolor",
          price: "AED 590.00",
          image: "/images/H.png",
        },
        {
          title: "Computer",
          description: "Lorem ipsum dolor",
          price: "AED 1200.00",
          image: "/images/D.png",
        },
        {
          title: "Running Shoes",
          description: "Lorem ipsum dolor",
          price: "AED 991.00",
          image: "/images/G.png",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [EffectFlip, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.special-offers {
  padding: 2rem;
  /* margin-bottom: 500px; */
}
.card {
  margin: 0 10px;
  text-align: center;
}
.price {
  font-weight: bold;
}
.card {
  width: 90%; /* تأكد من أن بطاقة المنتج تشغل المساحة بالكامل */
  margin-bottom: 8vh;
}

.card-img-top {
  width: 100%; /* تأكد من أن الصور تأخذ عرض البطاقة بالكامل */
  height: 70vh; /* لضمان المحافظة على نسبة العرض إلى الارتفاع */
}
</style>
