<script setup>
import { ref, onMounted } from "vue";
import Loader from "./components/Base/Loader/Loader.vue";
const loading = ref(true);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2000); // Simulate a loading delay of 2 seconds
});
</script>

<template>
  <div v-if="loading">
    <Loader />
  </div>
  <div v-else>
    <router-view />
  </div>
</template>

<style scoped></style>
