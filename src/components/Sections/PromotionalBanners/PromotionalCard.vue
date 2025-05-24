<template>
  <div
    v-motion-fade-visible
    :duration="2000"
    class="relative w-full h-[200px] overflow-hidden group flex flex-col justify-center items-center cursor-pointer"
  >
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out group-hover:scale-110"
      :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img});`"
    ></div>
    <div class="relative z-10">
      <h1 class="text-white font-semibold text-2xl uppercase text-center">
        {{ title.split(" ")[0] }}<br />
        {{ title.split(" ").slice(1).join(" ") }}
      </h1>
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
