<template>
  <div class="w-full my-20 flex justify-center items-center overflow-hidden">
    <div class="relative w-full group">
      <div class="w-full relative overflow-hidden group-hover:scale-105 transition-all duration-500">
        <img :src="img1" alt="" srcset="" />
      </div>
      <div class="absolute top-1/3 left-4">
        <div class="w-full h-full flex justify-start">
          <div class="h-full flex flex-col justify-center items-center gap-3 w-4/6">
            <h1 class="text-4xl text-black font-bold uppercase text-center">
              Style & <br />
              trending
            </h1>
            <p class="text-center text-gray-3">ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <button class="uppercase bg-red-800/80 text-white text-xs p-2 hover:opacity-90 cursor-pointer">
              View Collection
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="relative w-full group">
      <div class="w-full relative overflow-hidden group-hover:scale-105 transition-all duration-500">
        <img :src="img2" alt="" srcset="" />
      </div>
      <div class="absolute top-1/3 right-4">
        <div class="w-full h-full flex justify-end">
          <div class="h-full flex flex-col justify-center items-center gap-3 w-4/6">
            <h1 class="text-4xl text-black font-bold uppercase text-center">
              Latest <br />
              Collection
            </h1>
            <p class="text-center text-gray-3">ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <button class="uppercase bg-red-800/80 text-white text-xs p-2 hover:opacity-90 cursor-pointer">
              View Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from "@/assets/big-baner-flat-bottom.jpg";
import img2 from "@/assets/big-baner-flat-bottom-2.jpg";
</script>

<style lang="scss" scoped></style>
