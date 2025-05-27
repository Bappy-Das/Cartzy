<template>
  <div class="container mx-auto my-20 px-5">
    <div class="flex justify-center items-center" v-motion-fade-visible :duration="1000">
      <div class="text-center flex flex-col justify-center items-center gap-2">
        <h1 class="font-bold text-2xl uppercase">LATEST PRODUCTS</h1>
        <div class="bg-black h-[1px] w-12 mx-auto"></div>
        <p class="w-8/12 mx-auto text-sm text-gray-2 leading-6 tracking-wide">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, aperiam!ipsum dolor,
        </p>
      </div>
    </div>
    <div class="grid grid-cols-4 justify-center items-center gap-4 my-8">
      <!--  -->
      <router-link to="/product-details/1">
        <ProductCard></ProductCard>
      </router-link>
      <router-link to="/product-details/1">
        <ProductCard></ProductCard>
      </router-link>
      <router-link to="/product-details/1">
        <ProductCard></ProductCard>
      </router-link>
      <router-link to="/product-details/1">
        <ProductCard></ProductCard>
      </router-link>
      <router-link to="/product-details/1">
        <ProductCard></ProductCard>
      </router-link>
      <router-link to="/product-details/1">
        <ProductCard></ProductCard>
      </router-link>
      <router-link to="/product-details/1">
        <ProductCard></ProductCard>
      </router-link>
      <router-link to="/product-details/1">
        <ProductCard></ProductCard>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";
</script>

<style lang="scss" scoped></style>
