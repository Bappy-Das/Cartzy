<template>
  <div>
    <div class="group relative overflow-hidden">
      <img
        :src="productData?.img"
        class="rounded-2xl transition-transform duration-800 group-hover:scale-105 group-hover:opacity-80"
        alt=""
        srcset=""
      />
      <div
        class="w-full flex justify-center gap-2 translate-y-5 group-hover:translate-y-0 items-center absolute bottom-12 transition-all duration-500 opacity-0 group-hover:opacity-100"
      >
        <div
          class="bg-white p-3 rounded text-gray-700 py-2 flex justify-center items-center"
        >
          <font-awesome-icon
            icon="fa-solid fa-bag-shopping"
            class="text-gray-900"
          />
        </div>
        <div
          class="bg-white p-3 rounded text-gray-700 py-2 flex justify-center items-center"
        >
          <font-awesome-icon icon="fa-solid fa-heart" class="text-gray-900" />
        </div>
        <div
          class="bg-white p-3 rounded text-gray-700 py-2 flex justify-center items-center"
        >
          <font-awesome-icon icon="fa-solid fa-check" class="text-gray-900" />
        </div>
        <div
          class="bg-white p-3 rounded text-gray-700 py-2 flex justify-center items-center"
        >
          <font-awesome-icon icon="fa-solid fa-eye" class="text-gray-900" />
        </div>
      </div>

      <div
        class="absolute text-center bottom-0 translate-y-5 transition-all duration-500 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-gray-400 w-full text-white py-2"
      >
        <div class="flex justify-center items-center gap-4">
          <div>S</div>
          <div>M</div>
          <div>L</div>
        </div>
      </div>
    </div>
    <div class="py-3">
      <h1 class="font-semibold tracking-wider text-gray-700 capitalize">
        {{ productData?.title }}
      </h1>
      <h1 class="font-bold text-gray-800">${{ productData?.price }}</h1>
      <!-- need to dynamic -->
      <div class="flex justify-start items-center gap-1">
        <div
          class="hover:border-1 w-7 h-7 rounded-full flex justify-center items-center cursor-pointer"
        >
          <div class="w-5 h-5 rounded-full bg-black"></div>
        </div>
        <div
          class="hover:border-1 w-7 h-7 rounded-full flex justify-center items-center cursor-pointer"
        >
          <div class="w-5 h-5 rounded-full bg-blue-500"></div>
        </div>
        <div
          class="hover:border-1 w-7 h-7 rounded-full flex justify-center items-center cursor-pointer"
        >
          <div class="w-5 h-5 rounded-full bg-rose-500"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import productImg from "@/assets/white-4.jpg";
// import productImgUpdate from "@/assets/product/pdt21.jpg";

const props = defineProps({
  productData: { type: Object },
});
</script>

<style lang="scss" scoped></style>
