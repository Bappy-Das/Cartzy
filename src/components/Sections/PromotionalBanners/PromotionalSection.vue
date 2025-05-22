<template>
  <div class="container mx-auto my-8">
    <div class="px-5">
      <div class="grid grid-cols-3 gap-5 justify-center items-center">
        <PromotionalCard :img="img22" title="Sale Handmade Shoes" />
        <PromotionalCard :img="img33" title="Woman Collection" />
        <PromotionalCard :img="img44" title="2017 Accessories" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PromotionalCard from "./PromotionalCard.vue";
import img22 from "@/assets/promotion/fashion22.avif";
import img33 from "@/assets/promotion/fashion33.jpg";
import img44 from "@/assets/promotion/fashion44.jpg";
</script>

<style lang="scss" scoped></style>
