<template>
  <div class="group">
    <div class="relative w-full h-[380px] overflow-hidden flex flex-col justify-center items-center cursor-pointer">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out group-hover:scale-110"
        :style="`background-image: url(${img});`"
      ></div>
      <div
        class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-black/50 to-black/50 z-0"
      ></div>
      <div class="relative opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
        <h1 class="text-white font-semibold text-base uppercase text-center">
          {{ title }}
        </h1>
      </div>
    </div>
    <div class="text-center mt-2">
      <h1 class="text-black font-mono text-xl uppercase text-center pt-2">{{ title }}</h1>
      <p class="text-xs text-gray-400 border-b border-gray-300 cursor-pointer group-hover:border-gray-400 inline-block">
        View Products
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: String,
  title: String,
});
</script>

<style lang="scss" scoped></style>
