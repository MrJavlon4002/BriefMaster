<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavbarVue from '@/views/Navbar.vue';
import FooterVue from '@/views/Footer.vue';
</script>

<template>
  <NavbarVue class="container h-1/5"></NavbarVue>

  <RouterView/>
  
  <FooterVue class=" h-2/5"></FooterVue>
</template>
