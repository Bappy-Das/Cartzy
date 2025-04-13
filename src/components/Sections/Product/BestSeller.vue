<template>
  <div class="px-8 py-16 flex flex-col justify-center items-center">
    <h1 class="">Just in now</h1>
    <hr class="border-b-5 border-blue-500 w-[100px]" />
    <h1 class="font-medium text-4xl py-3 uppercase tracking-wider">
      Best seller
    </h1>
    <hr class="border-b-5 border-blue-500 w-[100px]" />
    <h1 class="py-3 font-semibold text-gray-500">
      Shop the Latest Styles: Stay ahead of the curve with our newest arrivals
    </h1>
    <div>
      <ul
        class="pt-8 flex justify-center items-center gap-10 uppercase font-bold text-gray-500"
      >
        <li class="hover:text-blue-500 cursor-pointer text-blue-500">All</li>
        <li class="hover:text-blue-500 cursor-pointer">best</li>
        <li class="hover:text-blue-500 cursor-pointer">sale</li>
        <li class="hover:text-blue-500 cursor-pointer">new</li>
      </ul>
    </div>
    <!-- <div class="container grid grid-cols-5 gap-4 py-10"> -->
    <div class="grid grid-cols-5 gap-4 py-10">
      <div v-for="i in 13">
        <RouterLink to="/product-details/1">
          <productCard :productData="productData"></productCard>
        </RouterLink>
      </div>
    </div>
    <div
      class="border py-2 px-4 hover:border-blue-500 hover:text-blue-500 cursor-pointer transition-all duration-300"
    >
      Load More
    </div>
  </div>
</template>

<script setup>
import productCard from "./productCard.vue";
import productImgUpdate from "@/assets/product/pdt21.jpg";
import { ref } from "vue";

const productData = ref({
  id: 1,
  img: productImgUpdate,
  title: "ribbed tank top",
  price: "16.95",
  color: ["black", "red", "green"],
});
</script>

<style lang="scss" scoped></style>
