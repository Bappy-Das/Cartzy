<template>
  <div class="container mx-auto my-20 px-5">
    <div class="flex justify-center items-center">
      <div class="text-center flex flex-col justify-center items-center gap-2">
        <h1 class="font-bold text-2xl uppercase">LATEST PRODUCTS</h1>
        <div class="bg-black h-0.5 w-12 mx-auto"></div>
        <p class="w-8/12 mx-auto text-sm text-gray-2 leading-6 tracking-wide">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates,
          aperiam!ipsum dolor,
        </p>
      </div>
    </div>
    <div class="grid grid-cols-4 justify-center items-center gap-4 my-8">
      <!--  -->
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </div>
  </div>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";
</script>

<style lang="scss" scoped></style>
