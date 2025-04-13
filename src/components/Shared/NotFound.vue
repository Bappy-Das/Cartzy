<script setup></script>
<template>
  <div
    class="bg-white flex flex-col items-center my-40 min-h-full overflow-hidden"
  >
    <div class="max-w-xs">
      <div class="text-xl md:text-3xl lg:text-4xl font-bold py-5">
        Not Found
      </div>
      <!-- <img :src="notfound" alt="Your Image" class="w-full h-auto" /> -->
    </div>
    <h1 class="text-xl md:text-3xl lg:text-4xl font-bold py-5">
      Oops... It looks like you're lost !
    </h1>
    <p class="font-bold pb-5">The page you were looking for doesn't exist.</p>
    <RouterLink to="/">
      <button
        type="button"
        class="text-white cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-0 font-medium rounded-3xl text-md px-8 py-1 text-center me-2 mb-2"
      >
        Go To Home
      </button>
    </RouterLink>
  </div>
</template>
<style></style>
