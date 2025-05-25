<script setup>
import Header from "@/components/Layout/Header.vue";
import Nav from "@/components/Layout/Navbar.vue";
import Footer from "@/components/Layout/Footer.vue";
</script>
<template>
  <div>
    <Header></Header>
    <Nav></Nav>
    <div class="my-20"><router-view /></div>
    <Footer></Footer>
  </div>
</template>
