<template>
  <div class="container mx-auto p-1 mb-2">
    <div class="flex justify-between items-center">
      <div>
        <span><font-awesome-icon :icon="['fas', 'square-phone']" /></span>
        <span class="text-xs text-[var(--gray-1)]">
          OUR PHONE NUMBER: +77 (756) 334 876
        </span>
      </div>
      <div>
        <ul class="flex justify-center items-center gap-4">
          <li
            class="text-xs text-[var(--gray-1)] hover:text-[var(--black)] capitalize cursor-pointer border-b border-transparent hover:border-[var(--secondary)] transition-all duration-300]"
          >
            My account
          </li>
          <li
            class="text-xs text-[var(--gray-1)] hover:text-[var(--black)] capitalize cursor-pointer border-b border-transparent hover:border-[var(--secondary)] transition-all duration-300]"
          >
            cart
          </li>
          <li
            class="text-xs text-[var(--gray-1)] hover:text-[var(--black)] capitalize cursor-pointer border-b border-transparent hover:border-[var(--secondary)] transition-all duration-300]"
          >
            our location
          </li>
          <li
            class="text-xs text-[var(--gray-1)] hover:text-[var(--black)] capitalize cursor-pointer border-b border-transparent hover:border-[var(--secondary)] transition-all duration-300]"
          >
            Contact us
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
