<template>
  <!-- component -->
  <!-- class="absolute top-8 left-0 w-full bg-transparent shadow-md flex items-center justify-between px-8 py-02 z-100" -->
  <header
    :class="[
      'flex items-center justify-between px-8 py-2 z-50 transition-all duration-600 text-gray-900',
      isScrolled
        ? 'bg-white sticky top-0 shadow-md '
        : 'bg-transparent absolute top-0 left-0 w-full ',
    ]"
  >
    <!-- logo -->
    <h1 class="w-3/12">
      <router-link to="/">
        <img :src="logo" alt="" srcset="" />
      </router-link>
    </h1>

    <!-- navigation -->
    <nav class="nav font-semibold text-lg">
      <ul class="flex items-center">
        <router-link to="/">
          <li
            class="p-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-500 cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:after:w-full"
          >
            Home
          </li>
        </router-link>
        <router-link to="/showrooms">
          <li
            class="p-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-500 cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:after:w-full"
          >
            Our Showroom
          </li>
        </router-link>
        <!-- <router-link to="/shop">
            <li
              class="p-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-500 cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:after:w-full"
            >
              Shop
            </li>
          </router-link> -->
        <router-link to="/product">
          <li
            class="p-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-500 cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:after:w-full"
          >
            Products
          </li>
        </router-link>
        <router-link to="/about">
          <li
            class="p-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-500 cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:after:w-full"
          >
            About Us
          </li>
        </router-link>

        <router-link to="/contact">
          <li
            class="p-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-500 cursor-pointer hover:text-blue-500 transition-colors duration-300 hover:after:w-full"
          >
            Contact
          </li>
        </router-link>
      </ul>
    </nav>

    <!-- buttons --->
    <div class="w-3/12 flex justify-end">
      <div class="flex justify-center items-center gap-3">
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          class="text-gray-900 text-xl cursor-pointer"
        />
        <font-awesome-icon
          icon="fa-regular fa-circle-user"
          class="text-gray-900 text-xl cursor-pointer"
        />
        <font-awesome-icon
          icon="fa-regular fa-heart"
          class="text-gray-900 text-xl cursor-pointer"
        />
        <router-link to="/cart">
          <font-awesome-icon
            icon="fa-solid fa-bag-shopping"
            class="text-gray-900 text-xl cursor-pointer"
          />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import logo from "@/assets/logo.svg";
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped></style>
