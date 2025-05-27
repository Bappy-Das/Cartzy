<template>
  <div class="flex flex-col justify-center items-center pt-16 px-5 bg-black">
    <div class="container pb-16">
      <hr class="w-full text-gray-800" />
    </div>

    <div class="container gap-15 mx-auto flex justify-center items-start">
      <div class="w-8/12 text-gray-400">
        <div class="grid grid-cols-4 gap-16">
          <div class="text-gray-400">
            <h2 class="text-md uppercase text-gray-50 font-semibold">OUR STORES</h2>
            <hr class="w-1/4 text-gray-50" />
            <ul class="space-y-1 pt-3">
              <li class="cursor-pointer">
                <span
                  class="inline-block text-sm border-b border-transparent hover:border-gray-300 hover:text-gray-50 transition-all duration-200"
                >
                  Dhaka
                </span>
              </li>
              <li class="cursor-pointer">
                <span
                  class="inline-block text-sm border-b border-transparent hover:border-gray-300 hover:text-gray-50 transition-all duration-200"
                >
                  Chittagong
                </span>
              </li>
              <li class="cursor-pointer">
                <span
                  class="inline-block text-sm border-b border-transparent hover:border-gray-300 hover:text-gray-50 transition-all duration-200"
                >
                  Sylhet
                </span>
              </li>
              <li class="cursor-pointer">
                <span
                  class="inline-block text-sm border-b border-transparent hover:border-gray-300 hover:text-gray-50 transition-all duration-200"
                >
                  Rajshahi
                </span>
              </li>
              <li class="cursor-pointer">
                <span
                  class="inline-block text-sm border-b border-transparent hover:border-gray-300 hover:text-gray-50 transition-all duration-200"
                >
                  Khulna
                </span>
              </li>
              <li class="cursor-pointer">
                <span
                  class="inline-block text-sm border-b border-transparent hover:border-gray-300 hover:text-gray-50 transition-all duration-200"
                >
                  Barisal
                </span>
              </li>
            </ul>
          </div>

          <div class="text-gray-400">
            <h2 class="text-md uppercase text-gray-50 font-semibold">INFORMATION</h2>
            <hr class="w-1/4 text-gray-50" />
            <ul class="space-y-1 pt-3">
              <li class="cursor-pointer">
                <span
                  class="inline-block text-sm border-b border-transparent hover:border-gray-300 hover:text-gray-50 transition-all duration-200"
                >
                  About Store
                </span>
              </li>
              <li class="cursor-pointer">
                <span
                  class="inline-block text-sm border-b border-transparent hover:border-gray-300 hover:text-gray-50 transition-all duration-200"
                >
                  New Collection
                </span>
              </li>
              <li class="cursor-pointer">
                <span
                  class="inline-block text-sm border-b border-transparent hover:border-gray-300 hover:text-gray-50 transition-all duration-200"
                >
                  Woman Dress
                </span>
              </li>
              <li class="cursor-pointer">
                <span
                  class="inline-block text-sm border-b border-transparent hover:border-gray-300 hover:text-gray-50 transition-all duration-200"
                >
                  Contact Us
                </span>
              </li>
              <li class="cursor-pointer">
                <span
                  class="inline-block text-sm border-b border-transparent hover:border-gray-300 hover:text-gray-50 transition-all duration-200"
                >
                  Latest News
                </span>
              </li>
              <li class="cursor-pointer">
                <span
                  class="inline-block text-sm border-b border-transparent hover:border-gray-300 hover:text-gray-50 transition-all duration-200"
                >
                  Our Sitemap
                </span>
              </li>
            </ul>
          </div>
          <div class="text-gray-400">
            <h2 class="text-md uppercase text-gray-50 font-semibold">USEFUL LINKS</h2>
            <hr class="w-1/4 text-gray-50" />
            <ul class="space-y-1 pt-3">
              <li class="cursor-pointer">
                <span
                  class="inline-block text-sm border-b border-transparent hover:border-gray-300 hover:text-gray-50 transition-all duration-200"
                >
                  Privacy Policy
                </span>
              </li>
              <li class="cursor-pointer">
                <span
                  class="inline-block text-sm border-b border-transparent hover:border-gray-300 hover:text-gray-50 transition-all duration-200"
                >
                  Returns
                </span>
              </li>
              <li class="cursor-pointer">
                <span
                  class="inline-block text-sm border-b border-transparent hover:border-gray-300 hover:text-gray-50 transition-all duration-200"
                >
                  Terms & Conditions
                </span>
              </li>
              <li class="cursor-pointer">
                <span
                  class="inline-block text-sm border-b border-transparent hover:border-gray-300 hover:text-gray-50 transition-all duration-200"
                >
                  Contact Us
                </span>
              </li>
            </ul>
          </div>
          <div class="text-gray-400">
            <h2 class="text-md uppercase text-gray-50 font-semibold">FOOTER MENU</h2>
            <hr class="w-1/4 text-gray-50" />
            <ul class="space-y-1 pt-3">
              <li class="cursor-pointer">
                <span
                  class="inline-block text-sm border-b border-transparent hover:border-gray-300 hover:text-gray-50 transition-all duration-200"
                >
                  New Collection
                </span>
              </li>
              <li class="cursor-pointer">
                <span
                  class="inline-block text-sm border-b border-transparent hover:border-gray-300 hover:text-gray-50 transition-all duration-200"
                >
                  Woman Dress
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-4/12 text-gray-400">
        <div class="text-gray-400">
          <h2 class="text-md uppercase text-gray-50 font-semibold">About The Store</h2>
          <hr class="w-1/8 text-gray-50" />
          <ul class="space-y-1 pt-3">
            <li class="cursor-pointer">
              <span class="inline-block text-sm border-b border-transparent hover:text-gray-50 transition-all duration-200">
                STORE - worldwide fashion store since 1978. We sell over 1000+ branded products on our web-site.
              </span>
            </li>
            <li class="cursor-pointer">
              <span class="mr-2">
                <font-awesome-icon :icon="['fas', 'location-arrow']" />
              </span>
              <span class="inline-block text-sm border-b border-transparent hover:text-gray-50 transition-all duration-200">
                Section 11, Mirpur, Dhaka, Bangladesh
              </span>
            </li>
            <li class="cursor-pointer">
              <span class="mr-2">
                <font-awesome-icon :icon="['fas', 'square-phone']" />
              </span>
              <span class="inline-block text-sm border-b border-transparent hover:text-gray-50 transition-all duration-200">
                Phone: +880 1000 000000
              </span>
            </li>
          </ul>
          <div class="container flex justify-start items-center gap-5 py-5 text-gray-400 text-xl">
            <span class="hover:text-gray-50 cursor-pointer">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </span>
            <span class="hover:text-gray-50 cursor-pointer">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </span>
            <span class="hover:text-gray-50 cursor-pointer">
              <font-awesome-icon :icon="['far', 'envelope']" />
            </span>
            <span class="hover:text-gray-50 cursor-pointer">
              <font-awesome-icon :icon="['fab', 'threads']" />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-10">
      <hr class="w-full text-gray-800" />
    </div>
    <div class="w-full flex justify-center items-center">
      <div class="container flex flex-row justify-between items-center">
        <div class="py-5 text-gray-500 text-sm">&copy; {{ currentYear }} Cartzy. All Rights Reserved</div>

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
import visa from "@/assets/bank/visa.png";
import img1 from "@/assets/bank/img-1.png";
import img2 from "@/assets/bank/img-2.png";
import img3 from "@/assets/bank/img-3.png";
import img4 from "@/assets/bank/img-4.png";
const currentYear = new Date().getFullYear();
</script>

<style lang="scss" scoped></style>
