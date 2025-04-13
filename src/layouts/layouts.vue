<script setup>
import Nav from "@/components/Layout/Navbar.vue";
import Footer from "@/components/Layout/Footer.vue";
</script>
<template>
  <div>
    <Nav></Nav>
    <div><router-view /></div>
    <Footer></Footer>
  </div>
</template>
