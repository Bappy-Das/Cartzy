<script setup>
import imgParallax from "@/assets/best-menswear-stores.webp";
</script>

<template>
  <div
    class="w-full aspect-[16/9] bg-cover bg-center bg-no-repeat md:bg-fixed lg:bg-fixed shadow-lg md:h-[460px] lg:h-[720px] flex justify-center items-center"
    :style="{ backgroundImage: `url(${imgParallax})` }"
  >
    <div class="bg-white opacity-75 w-[32rem] h-[32rem] rounded-full flex flex-col justify-center items-center p-5">
      <h1 class="tracking-[.3rem] uppercase">The Best of</h1>
      <h1 class="py-5 text-5xl uppercase font-normal tracking-widest text-center">Classic Fashion</h1>
      <h1 class="text-center font-medium py-5">
        Fashion is transient and ever-changing one whereas style is more or less permanent. It is your very attitude!
      </h1>
      <button
        class="px-8 bg-blue-900 py-2 text-white text-xl opacity-100 cursor-pointer hover:bg-rose-600 transition-all duration-300"
      >
        Shop now
      </button>
    </div>
  </div>
</template>

<style scoped></style>
