<script lang="ts">
import { defineComponent } from 'vue';
import Published from '@/views/Published.vue';
import Liked from '@/views/Liked.vue';
import { userInfo } from '../components/LogingPage.vue';
export default defineComponent({
    data() {
        return {
            activeWindow: 'Published',
            researchPapers: null
        };
    },
    components: { Published, Liked },
    setup() {
    return {
      userInfo
    };
  },
})
</script>

<template>
    <div class="container  py-10 flex flex-col gap-10  mb-10">
        <div class="flex flex-col gap-5">
            <h1 class=" text-2xl sm:text-5xl sm:mt-16">Hello <span class=" text-mainBlue">Mr.{{userInfo.surename.charAt(0).toUpperCase() + userInfo.surename.slice(1)}} {{userInfo.name.charAt(0).toUpperCase()}}.</span> <span class=" text-base text-darkBlue">({{ userInfo.username }})</span></h1>
            <h2 class=" text-lg text-gray-500">We really want to assist you in your <span class=" text-mainBlue">Education Journey</span></h2>
        </div>
        <div class="flex flex-col gap-5">
            {{ userInfo }}
            <div class="flex justify-between sm:flex-row flex-col gap-5">
                <div @click="activeWindow = 'Published'" :class="{'before:w-full':activeWindow == 'Published'}" class=" relative cursor-pointer p-1 text-lg before:content-[''] before:bg-mainBlue before:absolute before:left-0 before:bottom-0 before:h-[3px] before:w-0 hover:before:w-full before:transition before:duration-150 " >Published Papaers</div>
                <div @click="activeWindow = 'Liked'" :class="{'before:w-full':activeWindow == 'Liked'}" class=" relative cursor-pointer p-1 text-lg before:content-[''] before:bg-mainBlue before:absolute before:left-0 before:bottom-0 before:h-[3px] before:w-0 hover:before:w-full before:transition before:duration-150 ">Liked Researches</div>
                <div @click="activeWindow = 'SummarEase'" :class="{'before:w-full':activeWindow == 'SummarEase'}" class=" relative cursor-pointer p-1 text-lg before:content-[''] before:bg-mainBlue before:absolute before:left-0 before:bottom-0 before:h-[3px] before:w-0 hover:before:w-full before:transition before:duration-150 ">SummarEase History</div>
            </div>
            <Published v-if="activeWindow == 'Published'"></Published>
            <Liked v-if="activeWindow == 'Liked'"></Liked>
        </div>
    </div>
</template>