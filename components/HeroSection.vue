<template>
  <section class="hero-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 hero-content">
          <h1 class="hero-heading mb-3">Sale</h1>
          <p class="hero-subheading mb-4">
            ACCESS A LIMITED SELECTION<br />
            WITH UP TO 70% OFF
          </p>
          <NuxtLink
            to="https://amer-alsaour-portfolio.netlify.app/  "
            class="btn btn-dark button"
          >
            SHOP NOW <i class="bi bi-arrow-right"></i>
          </NuxtLink>
        </div>
        <div class="pagination-container">
          <nav
            aria-label="Page navigation example "
            class="d-flex justify-content-center margint"
          >
            <ul class="pagination pagination-dash">
              <li
                v-for="page in 5"
                :key="page"
                class="page-item"
                :class="{ active: page === currentPage }"
                @click.prevent="changePage(page)"
                :aria-current="page === currentPage ? 'page' : null"
              >
                <a class="page-link" href="#"></a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- <div class="col-md-6">
          <img
            src="/public/images/Header.jpg"
            alt="Electronics Sale"
            class=""
            onerror="this.src=''"
          />
        </div> -->
      </div>
    </div>
  </section>
</template>
<style scoped>
.button {
  /* padding: 10px;
  border: 1px solid black; */
  border-radius: 0;
}
.margint {
  margin-top: 100vh;
}
.pagination-container {
  margin-top: 20px; /* يمكنك تعديل المسافة حسب الحاجة */
}

.pagination-dash {
  padding-left: 0;
  list-style: none;
  display: flex;
  gap: 10px;
  user-select: none;
}

.pagination-dash .page-item .page-link {
  display: inline-block;
  width: 25px;
  height: 6px;
  border-radius: 3px;
  background-color: gray;
  cursor: pointer;
  position: relative;
  padding: 0;
  margin: 0;
  border: none;
  transition: background-color 0.3s ease;
}

.pagination-dash .page-item.active .page-link {
  background-color: rgb(36, 34, 34); /* Bootstrap primary */
}

.pagination-dash .page-item.disabled .page-link {
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
}

/* Override anchor with no text, to show dashed line */
.pagination-dash .page-item .page-link::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: inherit;
  border-radius: 1px;
  transform: translateY(-50%);
}
</style>

<script>
export default {
  name: "PaginationDash",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(page) {
      if (page < 1 || page > 5 || page === this.currentPage) {
        return;
      }
      this.$emit("update:currentPage", page);
      this.$emit("page-changed", page);
    },
  },
};
</script>
