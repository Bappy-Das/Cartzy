<template>
  <div class="relative group cursor-pointer w-[300px]">
    <div class="">
      <img :src="img1" alt="" class="h-[350px] w-full object-cover transition-opacity duration-300 ease-in-out" />

      <!-- Hover Image -->
      <img
        :src="img2"
        alt=""
        class="absolute top-0 left-0 h-[350px] w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
      />
    </div>
    <div
      class="absolute top-0 right-0 mt-4 p-2 bg-transparent text-black text-xs opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-1 transition-all duration-300 ease-in-out"
    >
      <div class="flex flex-col gap-2 text-black">
        <font-awesome-icon
          :icon="['far', 'heart']"
          class="text-lg transition-transform duration-300 group-hover:scale-110 cursor-pointer"
        />
        <font-awesome-icon
          :icon="['fas', 'cart-plus']"
          class="text-lg transition-transform duration-300 group-hover:scale-110 cursor-pointer"
        />
      </div>
    </div>

    <h1 class="text-gray-1 text-sm pt-3 border-b border-gray-300 inline-block mb-2">Yitted White Shirt</h1>

    <div class="relative overflow-hidden h-5 mt-1">
      <div class="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-5">
        <div class="h-5 text-gray-3 text-sm flex items-center">520 Taka</div>
        <div class="h-5 text-sm text-black flex items-center gap-1 cursor-pointer">
          <font-awesome-icon :icon="['fas', 'cart-plus']" class="text-sm" />
          <span>Add to Cart</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from "@/assets/product/product-6.webp";
import img2 from "@/assets/product/product-5.webp";
</script>

<style lang="scss" scoped></style>
