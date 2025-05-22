<template>
  <div class="my-20">
    <div class="container mx-auto">
      <HeroSection></HeroSection>
      <PromotionalSection></PromotionalSection>
      <ProductSection></ProductSection>
    </div>
  </div>
</template>

<script setup>
import HeroSection from "@/components/Sections/HeroSection.vue";
import PromotionalSection from "@/components/Sections/PromotionalBanners/PromotionalSection.vue";
import ProductSection from "../components/Sections/Products/ProductSection.vue";
</script>

<style scoped></style>
