<template>
  <div class="container mx-auto bg-gray-7">
    <div class="w-7xl mx-auto">
      <div class="flex justify-center items-start gap-10 p-10">
        <div
          @click="menuToggle('Description')"
          class="text-xl font-medium text-[var(--gray-2)] cursor-pointer hover:text-[var(--hover-color)] duration-150 transition-colors inline-block border-b border-[var(--gray-2)] hover:border-[var(--hover-color)]"
        >
          Description
        </div>
        <div
          @click="menuToggle('Reviews')"
          class="text-xl font-medium text-[var(--gray-2)] cursor-pointer hover:text-[var(--hover-color)] duration-150 transition-colors inline-block border-b border-[var(--gray-2)] hover:border-[var(--hover-color)]"
        >
          Reviews (0)
        </div>
      </div>
      <div>
        <div
          v-if="toggleVelue === 'Description'"
          class="grid grid-cols-3 gap-10 justify-center items-start"
          v-motion-slide-visible-bottom
          :duration="1000"
        >
          <div class="flex flex-col justify-start items-start gap-5 p-4">
            <h1 class="uppercase text-[var(--gray-2)] font-semibold">PRODUCT DETAILS</h1>
            <p class="text-[var(--gray-2)] text-sm leading-6 tracking-wide">
              Venenatis duis tristique accumsan netus enim in posuere torquent ut ullamcorper integer aliquam a mi curae
              elementum. Maecenas iaculis viverra tellus ridiculus a sed vestibulum dapibus. Ante a mollis habitant duis urna cum
              iaculis ullamcorper luctus.
            </p>
            <ul class="text-[var(--gray-2)] text-sm leading-6 tracking-wide list-disc pl-5">
              <li>65% Polyester, 23% Elastane</li>
              <li>Abitur parturient praesent ipsu</li>
              <li>Minceptos pri 187cm/3″1.3″ tall</li>
              <li>Diam parturient dictumst nibh mu</li>
            </ul>
          </div>
          <div class="flex flex-col justify-start items-start gap-5 p-4">
            <h1 class="uppercase text-[var(--gray-2)] font-semibold">ABOUT BRAND</h1>
            <div class="w-4/12">
              <img :src="brand1" alt="" />
            </div>
            <p class="text-[var(--gray-2)] text-sm leading-6 tracking-wide">
              Nunc per mollis pot enti amet imperdiet blandit dis eu sociosqu accumsan dapibus ultricies tristique montes a
              adipiscing a justo. Aliquet mus a aptent ullamcorper metus accumsan. Habitasse a purus nec ipsum a urna ac
              ullamcorper varius metus posuere
            </p>
          </div>
          <div class="flex flex-col justify-start items-start gap-5 p-4">
            <h1 class="uppercase text-[var(--gray-2)] font-semibold">FIT & SIZE</h1>
            <ul class="text-[var(--gray-2)] text-sm leading-6 tracking-wide">
              <li>Model”s height: 4″2.2”/184 cm</li>
              <li>Model is wearing: Size Large</li>
            </ul>
            <h1 class="uppercase text-[var(--gray-2)] font-semibold">BENEFITS</h1>
            <p class="text-[var(--gray-2)] text-sm leading-6 tracking-wide">
              Nunc per mollis pot enti amet imperdiet blandit dis eu sociosqu accumsan dapibus ultricies tristique montes a
              adipiscing a justo. Aliquet mus a aptent ullamcorper metus accumsan. Habitasse a purus nec ipsum a urna ac
              ullamcorper varius metus posuere
            </p>
          </div>
        </div>

        <div v-else class="grid grid-cols-2 gap-10 justify-center items-start p-4" v-motion-slide-visible-bottom :duration="1000">
          <div class="p-4">
            <h1>2 review for “Yitted White Shirt”</h1>
            <div class="flex justify-start items-center gap-4 mt-4 border-b border-gray-200 pb-4">
              <div class="w-1/12 border rounded-full border-gray-200">
                <img :src="avater" alt="" srcset="" />
              </div>
              <div class="w-11/12 p-2">
                <div class="flex justify-between items-center gap-1 w-full">
                  <div class="text-xs text-[var(--gray-2)] leading-6 tracking-wide">
                    Thomas – <span class="italic">April 25, 2016</span>
                  </div>
                  <div>
                    <font-awesome-icon :icon="['fas', 'star']" class="text-xs cursor-pointer text-[var(--hover-color)]" />
                    <font-awesome-icon :icon="['fas', 'star']" class="text-xs cursor-pointer text-[var(--hover-color)]" />
                    <font-awesome-icon :icon="['fas', 'star']" class="text-xs cursor-pointer text-[var(--hover-color)]" />
                    <font-awesome-icon :icon="['fas', 'star']" class="text-xs cursor-pointer text-[var(--hover-color)]" />
                    <font-awesome-icon :icon="['fas', 'star']" class="text-xs cursor-pointer text-[var(--hover-color)]" />
                  </div>
                </div>
                <div class="text-[var(--gray-2)] text-sm">Wonderful!</div>
              </div>
            </div>
            <div class="flex justify-start items-center gap-4 mt-4 border-b border-gray-200 pb-4">
              <div class="w-1/12 border rounded-full border-gray-200">
                <img :src="avater" alt="" srcset="" />
              </div>
              <div class="w-11/12 p-2">
                <div class="flex justify-between items-center gap-1 w-full">
                  <div class="text-xs text-[var(--gray-2)] leading-6 tracking-wide">
                    Thomas – <span class="italic">April 25, 2016</span>
                  </div>
                  <div>
                    <font-awesome-icon :icon="['fas', 'star']" class="text-xs cursor-pointer text-[var(--hover-color)]" />
                    <font-awesome-icon :icon="['fas', 'star']" class="text-xs cursor-pointer text-[var(--hover-color)]" />
                    <font-awesome-icon :icon="['fas', 'star']" class="text-xs cursor-pointer text-[var(--hover-color)]" />
                    <font-awesome-icon :icon="['fas', 'star']" class="text-xs cursor-pointer text-[var(--hover-color)]" />
                    <font-awesome-icon :icon="['fas', 'star']" class="text-xs cursor-pointer text-[var(--hover-color)]" />
                  </div>
                </div>
                <div class="text-[var(--gray-2)] text-sm">Wonderful!</div>
              </div>
            </div>
          </div>
          <div class="border-l border-gray-200 p-4">
            <h1>Be the first to review “Yitted White Shirt”</h1>
            <p class="text-[var(--gray-2)] text-sm leading-6 mt-4">
              Your email address will not be published. Required fields are marked <span class="text-red-500">*</span>
            </p>
            <div class="flex justify-start items-start gap-2 mt-4">
              <div class="text-[var(--gray-2)] text-sm leading-6 capitalize">our rating <span class="text-red-500">*</span>:</div>
              <div class="flex justify-center items-center gap-1 pt-1.5">
                <font-awesome-icon
                  :icon="isHovered ? ['fas', 'star'] : ['far', 'star']"
                  class="text-xs cursor-pointer text-[var(--hover-color)]"
                  @mouseover="isHovered = true"
                  @mouseleave="isHovered = false"
                />
                <font-awesome-icon
                  :icon="isHovered ? ['fas', 'star'] : ['far', 'star']"
                  class="text-xs cursor-pointer text-[var(--hover-color)]"
                  @mouseover="isHovered = true"
                  @mouseleave="isHovered = false"
                />
                <font-awesome-icon
                  :icon="isHovered ? ['fas', 'star'] : ['far', 'star']"
                  class="text-xs cursor-pointer text-[var(--hover-color)]"
                  @mouseover="isHovered = true"
                  @mouseleave="isHovered = false"
                />
                <font-awesome-icon
                  :icon="isHovered ? ['fas', 'star'] : ['far', 'star']"
                  class="text-xs cursor-pointer text-[var(--hover-color)]"
                  @mouseover="isHovered = true"
                  @mouseleave="isHovered = false"
                />
                <font-awesome-icon
                  :icon="isHovered ? ['fas', 'star'] : ['far', 'star']"
                  class="text-xs cursor-pointer text-[var(--hover-color)]"
                  @mouseover="isHovered = true"
                  @mouseleave="isHovered = false"
                />
              </div>
            </div>
            <div>
              <div class="text-[var(--gray-2)] text-sm leading-6 capitalize pt-4">
                Your review<span class="text-red-500">*</span>:
              </div>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-0 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2 pt-4">
              <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="doe@gmail.com"
                  required
                />
              </div>
            </div>
            <div class="flex justify-start items-center gap-2">
              <div class="">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:outline-0"
                />
              </div>

              <p class="text-[var(--gray-2)] text-xs leading-6">
                Save my name, email, and website in this browser for the next time I comment.
              </p>
            </div>
            <div class="pt-4">
              <button class="px-4 py-2.5 bg-black uppercase text-xs cursor-pointer text-white hover:text-[var(--hover-color)]">
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import brand1 from "@/assets/brand/falper-logo.png";
import avater from "@/assets/avatar-15.png";
import { ref } from "vue";

const isHovered = ref(false);
const toggleVelue = ref("Description");

const menuToggle = (e) => {
  toggleVelue.value = e;
  console.log(toggleVelue.value);
};
</script>

<style lang="scss" scoped></style>
