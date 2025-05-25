<template>
  <div class="container mx-auto">
    <div class="w-7xl mx-auto">
      <div class="flex justify-center items-center my-20" v-motion-slide-visible-bottom :duration="1000">
        <div class="text-center flex flex-col justify-center items-center gap-2">
          <h1 class="font-bold text-2xl uppercase">Related PRODUCTS</h1>
          <div class="bg-black h-[1px] w-12 mx-auto"></div>
        </div>
      </div>
      <div class="grid grid-cols-4 justify-center items-center gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";
</script>

<style lang="scss" scoped></style>
