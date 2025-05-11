<template>
  <div>
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
// Add client-side bootstrap JS 
onMounted(() => {
  import('bootstrap/dist/js/bootstrap.bundle.min.js');
});
</script>