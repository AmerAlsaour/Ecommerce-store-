<template>
  <div class="background-section"></div>
</template>

<script>
export default {
  name: "BackgroundSection",
};
</script>

<style scoped>
.background-section {
  background-image: url("/public/images/Untitled-1.jpg"); /* Replace with your image path */
  background-size: cover; /* Cover the whole section */
  background-position: center; /* Centers the image */
  height: 100vh; /* Full viewport height */
  display: flex; /* Align content */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  color: white; /* Text color */
  text-align: center; /* Center text */
}
</style>
