<template>
  <div class="my-20">
    <Breadcumb />
    <div class="container mx-auto" v-motion-slide-visible-bottom :duration="1000">
      <div class="w-7xl mx-auto">
        <div class="flex justify-center items-start gap-10 p-10">
          <div class="w-full flex justify-end gap-4">
            <div class="w-2/12 flex flex-col justify-start items-center gap-4">
              <img :src="productImg" alt="" srcset="" />
              <img :src="productImg" alt="" srcset="" />
            </div>
            <div class="w-8/12">
              <img :src="productImg" alt="" srcset="" />
            </div>
          </div>
          <div class="w-full">
            <h1 class="font-light text-4xl tracking-wide">Yitted White Shirt</h1>
            <p class="my-2.5 text-2xl text-highlight">571.00</p>
            <p class="text-gray-2 text-xs leading-6 tracking-wide mb-2.5">
              Lectus parturient a vestibulum arcu habitasse blandit phasellus odio parturient per cursus id risus himenaeos
              suscipit pretium vestibulum eget aliquet quam parturient a nam a.Eu ac dignissim curabitur proin.
            </p>
            <div class="text-sm">Size: <span class="font-bold">M</span></div>
            <div class="flex justify-start items-center gap-2 py-3">
              <div
                class="border-1 w-8 h-8 border-gray-200 text-xs font-bold hover-text-highlight hover:border-amber-500 transition-all duration-200 rounded flex justify-center items-center cursor-pointer uppercase"
              >
                s
              </div>
              <div
                class="border-1 w-8 h-8 bg-blue-500 text-white border-gray-200 hover:border-amber-500 transition-all duration-200 rounded flex justify-center items-center cursor-pointer uppercase"
              >
                m
              </div>
              <div
                class="border-1 w-8 h-8 border-gray-200 text-xs font-bold hover-text-highlight hover:border-amber-500 transition-all duration-200 rounded flex justify-center items-center cursor-pointer uppercase"
              >
                l
              </div>
              <div
                class="border-1 w-8 h-8 border-gray-200 text-xs font-bold hover-text-highlight hover:border-amber-500 transition-all duration-200 rounded flex justify-center items-center cursor-pointer uppercase"
              >
                xl
              </div>
            </div>
            <div class="text-sm mt-4">Quantity</div>
            <div class="flex flex-col justify-start items-start gap-4 mt-2">
              <div class="border border-gray-5">
                <span class="bg-[var(--gray-7)] hover:bg-[var(--hover-color)] w-6 h-10 p-2.5 cursor-pointer">-</span>
                <span class="">
                  <input type="text" class="w-10 h-10 text-center border-x border-gray-200" value="1" />
                </span>
                <span class="bg-[var(--gray-7)] hover:bg-[var(--hover-color)] w-6 h-10 p-2.5 cursor-pointer">+</span>
              </div>
              <div>
                <button class="px-4 py-2.5 bg-black uppercase text-xs cursor-pointer text-white hover:text-[var(--hover-color)]">
                  Add to cart
                </button>
              </div>
            </div>
            <hr class="my-4 text-gray-5" />
            <div class="text-sm text-gray-2 font-semibold">Category: <span class="font-light">New brands</span></div>
          </div>
        </div>
      </div>
    </div>
    <ProductDetailsInfoSection />
  </div>
</template>

<script setup>
import productImg from "@/assets/product/product-6.webp";
import Breadcumb from "../components/Sections/Breadcumb.vue";
import ProductDetailsInfoSection from "../components/Sections/Products/ProductDetailsInfoSection.vue";
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo({ top: 0 });
});
</script>

<style lang="scss" scoped></style>
