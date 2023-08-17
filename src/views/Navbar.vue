<script lang="ts">
import { defineComponent } from 'vue';
import { userLogin } from '../components/LogingPage.vue';

export default defineComponent({
  setup() {
    return {
      userLogin,
    };
  },
});
</script>




<template>
    <nav class=" h-[10vh] py-6 flex items-center flex-auto w-full justify-between"> 
      <div class=" text-mainBlue text text-4xl">
        <router-link :to="{name: 'home'}">BriefMaster</router-link>
      </div>
      <div class="flex gap-20 items-center">
        <div class=" text-black text-lg hidden md:flex gap-5 font-mainFont">
          <router-link :to="{name: 'home'}">Home</router-link>
          <router-link :to="{name: 'research'}">Research</router-link>
          <router-link :to="{name: 'summery'}">SummerEase</router-link>
        </div>
        <div class=" sm:block hidden">
          <router-link v-if="!userLogin" :to="{name: 'register'}" >
            <button class=" text-mainBlue px-4 py-2 text-xl border-solid border-2 border-mainBlue rounded-xl  hover:bg-mainBlue  hover:text-white transition delay-30">Register</button>
          </router-link>
          <router-link  v-if="userLogin" :to="{name: 'user'}" >
            <div class=" text-mainBlue text-3xl"><i class="fa-solid fa-user"></i></div>
          </router-link>
        </div>
      </div>
    </nav>
</template>