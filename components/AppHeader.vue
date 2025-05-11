<template>
  <header>
    <div class="text-black py-1">
      <div class="container d-flex justify-content-end align-items-center mt-3">
        <div>
          <NuxtLink
            to="/"
            class="text-black i-carbon-text-small-caps text-decoration-none me-3 textsize"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/about"
            class="text-black text-decoration-none me-3 textsize"
            >About Us</NuxtLink
          >
          <NuxtLink to="/media" class="text-black text-decoration-none me-3"
            >Media Center</NuxtLink
          >
          <NuxtLink to="/contact" class="text-black text-decoration-none"
            >Contact Us</NuxtLink
          >
        </div>
        <div class="ms-3">
          <span class="bold">AR</span>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand">
          <img
            src="/public/Icons/DEVELOPER TEST - Logo Black.png"
            alt="Developer Test"
            class="logo"
          />
        </NuxtLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item mx-2">
              <NuxtLink
                to="/category/electronics"
                class="nav-link bold text-black"
                >ELECTRONICS</NuxtLink
              >
            </li>
            <li class="nav-item mx-2">
              <NuxtLink to="/category/jewelery" class="nav-link bold text-black"
                >JEWELRY</NuxtLink
              >
            </li>
            <li class="nav-item mx-2">
              <NuxtLink
                to="/category/men's clothing"
                class="nav-link bold text-black"
                >MEN CLOTHING</NuxtLink
              >
            </li>
            <li class="nav-item mx-2">
              <NuxtLink
                to="/category/women's clothing"
                class="nav-link bold text-black"
                >WOMEN CLOTHING</NuxtLink
              >
            </li>
          </ul>

          <div class="d-flex align-items-center">
            <div class="position-relative me-3">
              <input
                type="search"
                class="bg-gray borderradiusnone"
                placeholder="Search"
              />
              <img
                src="/public/Icons/Search Mouve.png"
                alt="Developer Test"
                class="search"
              />
            </div>
            <div class="d-flex">
              <NuxtLink to="/wishlist" class="text-dark me-3">
                <img
                  src="/public/Icons/Login.png"
                  alt="Developer Test"
                  class="profil"
                />
                <!-- <i class="bi bi-person"></i> -->
              </NuxtLink>
              <NuxtLink to="/account" class="text-dark me-3">
                <img
                  src="/public/Icons/heart_11613265.png"
                  alt="Developer Test"
                  class="heart"
                />
                <!-- <i class="bi bi-heart"></i> -->
              </NuxtLink>
              <NuxtLink to="/cart" class="text-dark cart-icon">
                <img
                  src="/public/Icons/Cart.png"
                  alt="Developer Test"
                  class="heart"
                />
                <!-- <i class="bi bi-bag"></i> -->
                <span v-if="cartStore.totalItems > 0" class="cart-badge">{{
                  cartStore.totalItems
                }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();
</script>
<style scoped>
.bold {
  font-weight: bold;
}
.bg-gray {
  background-color: rgb(240, 230, 230);
}
.search {
  width: 20px;
  position: absolute;
  bottom: 8px;
  right: 20px;
  opacity: 0.7;
}
.borderradiusnone {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* background-color: var(--bs-body-bg); */
  background-clip: padding-box;
  border: var(--bs-border-width) solid var(--bs-border-color);
  /* border-radius: var(--bs-border-radius); */
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.profil {
  width: 15px;
}
.heart {
  width: 20px;
}
</style>
