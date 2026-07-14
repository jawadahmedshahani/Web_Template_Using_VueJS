<script setup>
import { ref } from 'vue'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'

</script>

<template>
  <Header />
  <router-view />
  <Footer />

</template>

<style scoped></style>
