<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
        
    }
  }
})
</script>

<template>
    <footer class=" bg-darkBlue text-white py-20 ">
    <div class=" container flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10">
      <div class=" flex flex-col gap-5 md:w-1/4">
        <h1 class="text-3xl">BriefMaster</h1>
        <p>Gravitational waves change the distance between these pulsars and Earth by tens of miles.</p>
      </div>
      <div class=" md:w-fit flex flex-col gap-2">
        <h1 class=" text-xl mb-2">Site-Map</h1>
        <router-link :to="{name: 'home'}">Home</router-link>
          <router-link :to="{name: 'research'}">Research</router-link>
          <router-link :to="{name: 'summery'}">SummerEase</router-link>
      </div>
      <div class=" flex flex-col gap-2 md:w-1/4">
        <h1 class=" text-xl mb-2">Contact</h1>
        <a href="###">Email: uzbekistan@gmail.com</a>
        <a href="$$$">Tel: +99899-999-99-99</a>
        <hr>
        <div class=" w-full flex gap-3 text-2xl md:justify-start justify-center">
          <a href=""><i class="fa-brands fa-telegram"></i></a>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href=""><i class="fa-brands fa-facebook"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>