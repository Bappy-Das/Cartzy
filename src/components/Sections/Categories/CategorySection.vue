<template>
  <div class="container mx-auto my-20 px-5">
    <div class="flex justify-center items-center" v-motion-slide-visible-top :duration="2000">
      <div class="text-center flex flex-col justify-center items-center gap-2">
        <h1 class="font-bold text-2xl uppercase">TOP CATEGORIES</h1>
        <div class="bg-black h-[1px] w-12 mx-auto"></div>
        <p class="w-8/12 mx-auto text-sm text-gray-2 leading-6 tracking-wide">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, aperiam!ipsum dolor,
        </p>
      </div>
    </div>
    <div class="grid grid-cols-4 justify-center items-center gap-4 my-8">
      <Categorycard :img="img" title="Man" v-motion-fade-visible :duration="1000" />
      <Categorycard :img="img" title="Man" v-motion-fade-visible :duration="1000" :delay="100" />
      <Categorycard :img="img" title="Man" v-motion-fade-visible :duration="1000" :delay="300" />
      <Categorycard :img="img" title="Man" v-motion-fade-visible :duration="1000" :delay="500" />
    </div>
  </div>
</template>

<script setup>
import Categorycard from "./Categorycard.vue";
import img from "@/assets/category/cat-fashing-alt-2.jpg";
</script>

<style lang="scss" scoped></style>
