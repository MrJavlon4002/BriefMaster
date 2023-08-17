<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
          
        };
    },
})
</script>

<template>

  <!-- header -->
  <header class=" h-[90vh] flex items-center gap-20 container font-mainFont  lg:bg-none  bg-[url('../assets/media/homePage.png')] bg-center bg-no-repeat bg-cover">
    <div class=" lg:w-3/6 text-center lg:text-left flex rounded-[10px] flex-col gap-5 bg-[#ffffff] p-5 backdrop-blur">
      <h1 class="text-mainBlue text-5xl lg:text-6xl ">BriefMaster</h1>
      <p class=" text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita beatae commodi minus quis ex qui natus tempore aliquam voluptatibus?</p>
      <a href="" class=" mt-3 text-gray-600">More...</a>
    </div>
    <div class="w-5/6 hidden lg:block">
      <img src="../assets/media/homePage.png" alt="">
    </div>
  </header>


  <!-- About the company -->
  <div class=" bg-darkBlue py-[50px] lg:h-[60vh]">
    <div class="text-white w-full h-full flex flex-col items-center justify-center gap-2 text-center py-20 container">
      <h1 class=" text-5xl">About Us</h1>
      <h2 class=" text-2xl font-thin tracking-[.125rem]">Subtitle</h2>
      <p class=" lg:w-1/2 text-base mt-[50px]">The NANOGrav collaboration is also trying to detect spacetime ripples, but on an interstellar scale. The team used pulsars, rapidly spinning dead stars that emit a beam of radio emissions. Pulsars are functionally similar to a lighthouse - as they spin, their beams can sweep across the Earth at regular intervals.</p>
    </div>
  </div>


  <!-- Offers of the company -->
  <div class=" lg:h-screen flex flex-col gap-10 container py-10">
    <div class="flex flex-col items-center justify-center gap-2 text-center  container">
      <h1 class=" text-5xl">Our Portal Offers</h1>
      <h2 class=" text-2xl font-thin tracking-[.125rem]">Subtitle</h2>
    </div>
    <div class=" flex flex-col lg:flex-row justify-between gap-[50px]">
      <router-link :to="{name: 'research'}" class=" lg:w-[45%]">
        <div class=" flex items-end justify-center overflow-hidden h-[70vh] rounded-[15px] bg-[url('../assets/media/homePage.png')] bg-center bg-no-repeat bg-cover">
          <h1 class=" text-3xl text-white font-light flex items-center justify-center text-center w-full h-1/5 bg-mainBlue">Research</h1>
        </div>
      </router-link>
      <router-link :to="{name: 'summery'}" class=" lg:w-[45%]">
        <div class=" flex items-end justify-center overflow-hidden h-[70vh] rounded-[15px] bg-[url('../assets/media/homePage.png')] bg-center bg-no-repeat bg-cover">
          <h1 class=" text-3xl text-white font-light flex items-center justify-center text-center w-full h-1/5 bg-mainBlue">SummarEase</h1>
        </div>
      </router-link>
    </div>
  </div>

</template>