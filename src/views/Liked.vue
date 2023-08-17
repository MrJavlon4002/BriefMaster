<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            num: 2
        };
    },
})
</script>

<template>
    <div class=" flex flex-col my-10 container  gap-5 ">
        <div v-for="n in num" class="flex flex-col sm:flex-row gap-2 p-4 cursor-pointer transition delay-30 border-solid  border-2 border-transparent rounded-xl shadow-xl hover:shadow-md">
            <router-link :to="`/research/pages/${n}`"  class="flex flex-col items-start gap-2">
                <h1 class=" text-2xl font-bold">Title</h1>
                <h2 class=" text-sm text-gray-600 font-light">Date</h2>
                <p class=" text-base ">Authors: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum deserunt quam impedit voluptatem ducimus repellendus, voluptatum assumenda minima. Soluta, odio. </p>
            </router-link>
            <div class=" max-w-1/5 flex flex-col items-center justify-center">
                <button @click="num=num-1" class=" bg-red-500 text-white text-base p-2 rounded-md">Delete</button>
            </div>
        </div>
    </div>
</template>