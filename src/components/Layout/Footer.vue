<template>
  <div class="flex flex-col justify-center items-center pt-16">
    <div class="container pb-16">
      <hr class="w-full text-gray-200" />
    </div>
    <div class="container grid grid-cols-4 gap-16">
      <div>
        <img :src="logo" alt="" srcset="" />
        <div class="pt-5">
          <h1 class="pb-2 text-md">
            Address: 1234 Fashion Street, Suite 567, New York, NY 10001
          </h1>
          <h1 class="pb-2 text-md">
            Email: <span class="font-semibold">info@fashionshop.com</span>
          </h1>
          <h1 class="pb-2 text-md">
            Phone: <span class="font-semibold">(212) 555-1234</span>
          </h1>
        </div>
        <div class="flex flex-row gap-2 items-center">
          <div
            class="group border border-gray-200 hover:border-blue-500 transition-all duration-400 cursor-pointer w-[35px] h-[35px] rounded-full flex items-center justify-center"
          >
            <font-awesome-icon
              icon="fa-brands fa-facebook-f"
              class="group-hover:text-blue-500 transition-all duration-400"
            />
          </div>
          <div
            class="group border border-gray-200 hover:border-blue-500 transition-all duration-400 cursor-pointer w-[35px] h-[35px] rounded-full flex items-center justify-center"
          >
            <font-awesome-icon
              icon="fa-brands fa-x-twitter"
              class="group-hover:text-blue-500 transition-all duration-400"
            />
          </div>
          <div
            class="group border border-gray-200 hover:border-blue-500 transition-all duration-400 cursor-pointer w-[35px] h-[35px] rounded-full flex items-center justify-center"
          >
            <font-awesome-icon
              icon="fa-brands fa-instagram"
              class="group-hover:text-blue-500 transition-all duration-400"
            />
          </div>
          <div
            class="group border border-gray-200 hover:border-blue-500 transition-all duration-400 cursor-pointer w-[35px] h-[35px] rounded-full flex items-center justify-center"
          >
            <font-awesome-icon
              icon="fa-brands fa-tiktok"
              class="group-hover:text-blue-500 transition-all duration-400"
            />
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-xl font-semibold">Help</h2>
        <ul class="pt-3">
          <li
            class="pb-2 hover:text-blue-500 transition-all duration-200 cursor-pointer"
          >
            Privacy Policy
          </li>
          <li
            class="pb-2 hover:text-blue-500 transition-all duration-200 cursor-pointer"
          >
            Returns + Exchanges
          </li>
          <li
            class="pb-2 hover:text-blue-500 transition-all duration-200 cursor-pointer"
          >
            Shipping
          </li>
          <li
            class="pb-2 hover:text-blue-500 transition-all duration-200 cursor-pointer"
          >
            Terms & Conditions
          </li>
          <li
            class="pb-2 hover:text-blue-500 transition-all duration-200 cursor-pointer"
          >
            FAQ’s
          </li>
          <li
            class="pb-2 hover:text-blue-500 transition-all duration-200 cursor-pointer"
          >
            Compare
          </li>
          <li
            class="pb-2 hover:text-blue-500 transition-all duration-200 cursor-pointer"
          >
            My Wishlist
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-xl font-semibold">About us</h2>
        <ul class="pt-3">
          <li
            class="pb-2 hover:text-blue-500 transition-all duration-200 cursor-pointer"
          >
            Our Story
          </li>
          <li
            class="pb-2 hover:text-blue-500 transition-all duration-200 cursor-pointer"
          >
            Visit Our Store
          </li>
          <li
            class="pb-2 hover:text-blue-500 transition-all duration-200 cursor-pointer"
          >
            About Us
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-xl font-semibold">Sign Up for Email</h2>
        <p class="pt-3">
          Sign up to get first dibs on new arrivals, sales, exclusive content,
          events and more!
        </p>

        <div class="relative pt-6">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          ></div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-4 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Inter Your Email...."
            required
          />
          <button
            type="submit"
            class="text-white absolute end-1.5 bottom-1.5 bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-6 py-3"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div class="container pt-10">
      <hr class="w-full text-gray-200" />
    </div>
    <div class="w-full flex justify-center items-center">
      <div class="container flex flex-row justify-between items-center">
        <div class="py-5 text-gray-500">
          &copy; {{ currentYear }} Ecomus Store. All Rights Reserved
        </div>
        <div class="flex items-center gap-3">
          <div>
            <img :src="visa" alt="" srcset="" />
          </div>
          <div>
            <img :src="img1" alt="" srcset="" />
          </div>
          <div>
            <img :src="img2" alt="" srcset="" />
          </div>
          <div>
            <img :src="img3" alt="" srcset="" />
          </div>
          <div>
            <img :src="img4" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "@/assets/logo.svg";
import visa from "@/assets/bank/visa.png";
import img1 from "@/assets/bank/img-1.png";
import img2 from "@/assets/bank/img-2.png";
import img3 from "@/assets/bank/img-3.png";
import img4 from "@/assets/bank/img-4.png";
const currentYear = new Date().getFullYear();
</script>

<style lang="scss" scoped></style>
