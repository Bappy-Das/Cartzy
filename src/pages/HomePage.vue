<template>
  <div class="my-20">
    <div class="container mx-auto">
      <div class="w-7xl mx-auto">
        <HeroSection></HeroSection>
        <PromotionalSection></PromotionalSection>
        <ProductSection></ProductSection>
      </div>
      <AdvertiseBanner />
      <div class="w-7xl mx-auto">
        <CategorySection></CategorySection>
      </div>
      <LatestTrendSection />
    </div>
  </div>
</template>

<script setup>
import HeroSection from "@/components/Sections/HeroSection.vue";
import PromotionalSection from "@/components/Sections/PromotionalBanners/PromotionalSection.vue";
import ProductSection from "../components/Sections/Products/ProductSection.vue";
import CategorySection from "../components/Sections/Categories/CategorySection.vue";
import LatestTrendSection from "../components/Sections/Latest&TrendSection.vue";
import AdvertiseBanner from "../components/Sections/AdvertiseBanner.vue";
</script>

<style scoped></style>
