<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      paperID: 0,
      liked: false,
      researchPaper: {
        title: '',
        text: '',
        publishedDate: '',
        authors: '',
        likes: 0,
      },
    };
  },
  created() {
    const paperId = this.$route.params.id as string;
    this.paperID = Number(paperId);
  },
  mounted() {
    this.fetchResearchPaper();
  },
  methods: {
    async fetchResearchPaper() {
      try {
        const response = await axios.get(`http://localhost:1337/api/researchs/${this.paperID}`);
        this.researchPaper = response.data.data.attributes;
      } catch (error) {
        console.log(error);
      }
    },
    async liking() {
      try {
        const updatedLikes = this.liked ? this.researchPaper.likes - 1 : this.researchPaper.likes + 1;
        this.researchPaper.likes = updatedLikes
        const response = await axios.put(`http://localhost:1337/api/researchs/${this.paperID}`, {
          data: {
              ...this.researchPaper,
          }
        });
        this.liked = !this.liked;
        console.log(response);
        
      } catch (error) {
        console.error('Error updating likes:', error);
      }
    },
  },
})
</script>

<template>
  <div class="min-h-screen container flex flex-col gap-5 py-10">
    <div @click="liking" class="z-10 flex justify-end text-mainBlue cursor-pointer">
      <div v-if="liked" class="flex flex-col items-center">
        <i class="fa-solid fa-heart text-3xl"></i>
        {{ researchPaper.likes }}
      </div>
      <div v-else class="flex flex-col items-center">
        <i class="fa-regular fa-heart text-3xl"></i>
        {{ researchPaper.likes }}
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <h1 class="text-5xl text-center font-semibold tracking-wider">{{ researchPaper.title }}</h1>
      <hr class="border-1 border-mainBlue">
      <h2 class="text-gray-400">{{ researchPaper.publishedDate }}</h2>
      <h2 class="text-gray-400 font-semibold">Authors: {{ researchPaper.authors }}</h2>
      <p class="mt-5 text-justify">{{ researchPaper.text }}</p>
    </div>
  </div>
</template>
