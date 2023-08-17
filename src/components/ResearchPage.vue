<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      researchPapers: []
    };
  },
  mounted() {
    try {
      fetch('http://localhost:1337/api/researchs')
        .then((response) => response.json())
        .then((data) => {
          this.researchPapers = data.data;
        });

    } catch (error) {
      console.log(error);
    }
  }
})

</script>

<template>
  <div class=" flex flex-col my-10 container  gap-5 ">
    <router-link :to="`/research/pages/${n.id}`" v-for="n in researchPapers"
      class="flex gap-2 p-4 cursor-pointer justify-between transition delay-30 border-solid  border-2 border-transparent rounded-xl shadow-xl hover:shadow-md">
      <div class="flex w-4/5 flex-col items-start gap-2">
        <h1 class=" text-2xl font-bold">{{ n.attributes.title }}</h1>
        <h2 class=" text-sm text-gray-600 font-light">{{ n.attributes.publishedDate }}</h2>
        <p class=" text-base ">Authors: {{ n.attributes.authors }}</p>
      </div>
      <div class=" max-w-1/5 flex flex-col items-center justify-center">
        <i class="fa-solid fa-heart text-3xl text-mainBlue"></i> {{ n.attributes.likes }}
      </div>
    </router-link>
  </div>
</template>