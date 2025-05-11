<template>
  <footer>
    <div class="container">
      <div class="row mb-4">
        <div class="col-md-3 mb-4 mb-md-0">
          <img
            src="/public/Icons/DEVELOPER TEST - Logo.png"
            alt="Developer Test"
            class="mb-3 widthlogo"
          />
          <div class="d-flex mt-3 me-5 justify-content-center">
            <a
              href="https://www.facebook.com/amer.alsaour"
              class="social-icon me-2"
            >
              <img
                src="/public/Icons/facebook_Gold.png"
                alt="Developer Test"
                class="widthicons bg-black"
              />
            </a>
            <a
              href="https://www.facebook.com/amer.alsaour"
              class="social-icon me-2"
            >
              <img
                src="/public/Icons/Youtube - Gold.png"
                alt="Developer Test"
                class="widthicons bg-black"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/amer-alsaoor-026898193"
              class="social-icon me-2"
            >
              <img
                src="/public/Icons/instagram_Gold.png"
                alt="Developer Test"
                class="widthicons bg-black"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/amer-alsaoor-026898193"
              class="social-icon"
            >
              <img
                src="/public/Icons/Twitter - Gold.png"
                alt="Developer Test"
                class="widthicons bg-black"
              />
            </a>
          </div>
        </div>
        <div class="col-md-3 mb-4 mb-md-0">
          <h5 class="mb-3">Quick Links</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <NuxtLink to="/" class="text-white text-decoration-none"
                >Home</NuxtLink
              >
            </li>
            <li class="mb-2">
              <NuxtLink to="/about" class="text-white text-decoration-none"
                >About us</NuxtLink
              >
            </li>
            <li class="mb-2">
              <NuxtLink to="/media" class="text-white text-decoration-none"
                >Media center</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/contact" class="text-white text-decoration-none"
                >Contact us</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="col-md-3 mb-4 mb-md-0">
          <h5 class="mb-3">Categories</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <NuxtLink
                to="/category/electronics"
                class="text-white text-decoration-none"
                >Electronics</NuxtLink
              >
            </li>
            <li class="mb-2">
              <NuxtLink
                to="/category/jewelery"
                class="text-white text-decoration-none"
                >Jewelry</NuxtLink
              >
            </li>
            <li class="mb-2">
              <NuxtLink
                to="/category/men's clothing"
                class="text-white text-decoration-none"
                >Men Clothing</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/category/women's clothing"
                class="text-white text-decoration-none"
                >Women Clothing</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="mb-3">Contact us</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <i class="bi bi-telephone me-2"></i> +971 50 000 0000
            </li>
            <li class="mb-2">
              <i class="bi bi-telephone me-2"></i> +971 50 000 0000
            </li>
            <li><i class="bi bi-envelope me-2"></i> info@example.com</li>
          </ul>
        </div>
      </div>
      <div class="border-top border-2 pt-3">
        <p class="text-center small">
          © Developer Test 2024. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
<style scoped>
/* img {
  background-color: black;
} */
.widthicons {
  width: 36px;
}
.widthlogo {
  max-width: 200px;
  /* height: auto; */
}
</style>
