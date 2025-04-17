<template>
  <div class="container mx-auto">
    <div class="flex justify-center items-start gap-2">
      <div class="w-1/4 bg-[var(--secondary)] rounded-lg">
        <div class="p-4 bg-[var(--black)]">
          <h2 class="uppercase font-bold text-md text-white">
            BROWSE CATEGORIES
          </h2>
        </div>
        <div class="">
          <ul>
            <li
              class="p-4 flex justify-between items-center text-[var(--primary)] font-extrabold uppercase text-sm cursor-pointer hover:bg-[var(--hover-color)] transition-all duration-300"
            >
              <div>
                <span class="mr-2 clear-start">
                  <font-awesome-icon :icon="['fas', 'person-dress']" />
                </span>
                <span class="text-xs">Women's clothing</span>
              </div>
              <div>
                <font-awesome-icon :icon="['fas', 'angle-right']" />
              </div>
            </li>
            <li
              class="p-4 flex justify-between items-center text-[var(--primary)] font-extrabold uppercase text-sm cursor-pointer hover:bg-[var(--hover-color)] transition-all duration-300"
            >
              <div>
                <span class="mr-2 clear-start">
                  <font-awesome-icon :icon="['fas', 'person']" />
                </span>
                <span class="text-xs">men's clothing</span>
              </div>
              <div>
                <font-awesome-icon :icon="['fas', 'angle-right']" />
              </div>
            </li>
            <li
              class="p-4 flex justify-between items-center text-[var(--primary)] font-extrabold uppercase text-sm cursor-pointer hover:bg-[var(--hover-color)] transition-all duration-300"
            >
              <div>
                <span class="mr-2 clear-start">
                  <font-awesome-icon :icon="['fas', 'clock']" />
                </span>
                <span class="text-xs">Watches</span>
              </div>
              <div></div>
            </li>
            <li
              class="p-4 flex justify-between items-center text-[var(--primary)] font-extrabold uppercase text-sm cursor-pointer hover:bg-[var(--hover-color)] transition-all duration-300"
            >
              <div>
                <span class="mr-2 clear-start">
                  <font-awesome-icon :icon="['fas', 'briefcase']" />
                </span>
                <span class="text-xs">Bags</span>
              </div>
              <div>
                <font-awesome-icon :icon="['fas', 'angle-right']" />
              </div>
            </li>
            <li
              class="p-4 flex justify-between items-center text-[var(--primary)] font-extrabold uppercase text-sm cursor-pointer hover:bg-[var(--hover-color)] transition-all duration-300"
            >
              <div>
                <span class="mr-2 clear-start">
                  <font-awesome-icon :icon="['fas', 'shoe-prints']" />
                </span>
                <span class="text-xs">shoes</span>
              </div>
              <div>
                <font-awesome-icon :icon="['fas', 'angle-right']" />
              </div>
            </li>
            <li
              class="p-4 flex justify-between items-center text-[var(--primary)] font-extrabold uppercase text-sm cursor-pointer hover:bg-[var(--hover-color)] transition-all duration-300"
            >
              <div>
                <span class="mr-2 clear-start">
                  <font-awesome-icon :icon="['fas', 'gem']" />
                </span>
                <span class="text-xs">jewellery</span>
              </div>
              <div></div>
            </li>
            <li
              class="p-4 flex justify-between items-center text-[var(--primary)] font-extrabold uppercase text-sm cursor-pointer hover:bg-[var(--hover-color)] transition-all duration-300"
            >
              <div>
                <span class="mr-2 clear-start">
                  <font-awesome-icon :icon="['fas', 'star-of-life']" />
                </span>
                <span class="text-xs">accessories</span>
              </div>
              <div></div>
            </li>
            <li
              class="p-4 flex justify-between items-center text-[var(--primary)] font-extrabold uppercase text-sm cursor-pointer hover:bg-[var(--hover-color)] transition-all duration-300"
            >
              <div>
                <span class="mr-2 clear-start">
                  <font-awesome-icon :icon="['fas', 'child-reaching']" />
                </span>
                <span class="text-xs">Toys, kids & baby</span>
              </div>
              <div></div>
            </li>
            <li
              class="p-4 flex justify-between items-center text-[var(--primary)] font-extrabold uppercase text-sm cursor-pointer hover:bg-[var(--hover-color)] transition-all duration-300"
            >
              <div>
                <span class="mr-2 clear-start">
                  <font-awesome-icon :icon="['fas', 'futbol']" />
                </span>
                <span class="text-xs">sports & outdoors</span>
              </div>
              <div></div>
            </li>
            <li
              class="p-4 flex justify-between items-center text-[var(--primary)] font-extrabold uppercase text-sm cursor-pointer hover:bg-[var(--hover-color)] transition-all duration-300"
            >
              <div>
                <span class="mr-2 clear-start">
                  <font-awesome-icon :icon="['fas', 'briefcase-medical']" />
                </span>
                <span class="text-xs">health & beauty</span>
              </div>
              <div></div>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="w-3/4 h-[700px] bg-cover bg-center bg-no-repeat flex flex-col justify-center gap-2 items-start text-white px-10"
        :style="`background-image: url(${heroimg})`"
      >
        <h2 class="text-7xl uppercase font-bold mb-4">
          New <br />
          Arrivals
        </h2>
        <h2 class="text-3xl uppercase font-bold mb-4">summer collection</h2>
        <h2
          class="text-3xl capitalize font-bold mb-4 text-[var(--hover-color)]"
        >
          hot trending
        </h2>
        <button class="border p-2 uppercase">shop now</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import heroimg from "@/assets/fashing-hero.webp";
</script>

<style lang="scss" scoped></style>
