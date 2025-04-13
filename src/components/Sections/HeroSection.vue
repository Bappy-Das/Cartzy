<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :loop="true"
    :modules="[Autoplay, Pagination]"
    class="mySwiper"
  >
    <swiper-slide v-for="i in 4">
      <div class="relative top-0">
        <div
          class="absolute w-3xl top-5/12 left-1/4 transform -translate-x-1/4"
        >
          <h1 class="font-bold text-7xl pb-3">Glamorous Glam</h1>
          <h1 class="py-4">From casual to formal, we've got you covered</h1>
          <div
            class="py-2 px-6 cursor-pointer hover:bg-blue-500 transition-all duration-200 bg-black rounded-md text-white font-semibold text-center w-44 mt-4"
          >
            Shop Collection
          </div>
        </div>
        <img :src="bannerImg1" alt="" srcset="" />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import bannerImg1 from "@/assets/fashion-slideshow-01.jpg";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: 100vh;
}
</style>
