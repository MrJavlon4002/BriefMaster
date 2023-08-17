<script lang="ts">
import {defineComponent, ref } from 'vue';
import axios from 'axios';
export let userInfo = ref<any>(null);
export let userLogin = ref<boolean>(false);
export default defineComponent({
  data(){
    return {
      Login : true,
      data: {
        email: '',
        password: '',
        name: '',
        surename: '',
        username : '',

      }
    }
  },
  methods: {
    async handleSubmit() {
      let response
      if(this.Login) {
        try {
           response = await axios.post('http://localhost:1337/api/auth/local', {
            identifier: this.data.email,
            password: this.data.password,
          });
          // console.log('Logged in successfully!', response.data);
          this.$router.push('/user');
          userLogin.value = true;
        } catch (error) {
          console.error('Login error:', error);
        }
      } else {
        // Register user
        try {
              response = await axios.post(`http://localhost:1337/api/auth/local/register`, {
              email: this.data.email,
              password: this.data.password,
              username: this.data.username,
              role:'Public',
              name: this.data.name,
              surename: this.data.surename,
              published: [],
              liked: [],
            })
            // console.log('Register successfully!', response.data);
            this.$router.push('/user')
            userLogin.value = true;
        } catch(error) {
            error = true
        } 
      }
      userInfo = response?.data.user;
      console.log(userLogin);
      
    }
  }
})
</script>



<template>
  <div class="container bg-darkBlue my-20 py-10">
    <div class="flex flex-col gap-5">
      <div class="text-white flex-col items-center sm:flex-row flex justify-center gap-5">
        <div @click="Login = true" :class="{ 'before:w-full': Login == true }"
          class="relative cursor-pointer p-1 text-xl before:content-[''] before:bg-white before:absolute before:left-0 before:bottom-0 before:h-[3px] before:w-0 hover:before:w-full before:transition before:duration-150">
          Sign in
        </div>
        <div class="w-full h-[2px] sm:w-[2px] sm:h-10 bg-white"></div>
        <div @click="Login = false" :class="{ 'before:w-full': Login == false }"
          class="relative cursor-pointer p-1 text-xl before:content-[''] before:bg-white before:absolute before:left-0 before:bottom-0 before:h-[3px] before:w-0 hover:before:w-full before:transition before:duration-150">
          Sign up
        </div>
      </div>
    </div>
    <form @submit.prevent="handleSubmit" class="sm:mt-0 mt-10 p-5 flex flex-col gap-2 items-center">
      <label for="email" class="text-white text-2xl">Email</label>
      <input required class="p-2 px-3 text-lg md:w-2/5 w-full" type="email" v-model="data.email" name="email" id="email"
        placeholder="Example@gmail.com" /><br />

      <label for="password" class="text-white text-2xl">Password</label>
      <input required class="p-2 px-3 text-lg md:w-2/5 w-full" type="password" v-model="data.password" name="password"
        id="password" placeholder="At least 8 characters" />
      <br v-if="!Login" />

      <label v-if="!Login" for="name" class="text-white text-2xl">Name</label>
      <input required v-if="!Login" class="p-2 px-3 text-lg md:w-2/5 w-full" type="text" v-model="data.name" name="name"
        id="name" placeholder="Enter your Name" /><br />

      <label v-if="!Login" for="surname" class="text-white text-2xl">Surname</label>
      <input required v-if="!Login" class="p-2 px-3 text-lg md:w-2/5 w-full" type="text" v-model="data.surename" name="surname"
        id="surname" placeholder="Enter your Surname" />
      <br v-if="!Login" />

      <label v-if="!Login" for="username" class="text-white text-2xl">Username</label>
      <input required v-if="!Login" class="p-2 px-3 text-lg md:w-2/5 w-full" type="text" v-model="data.username"
        name="username" id="username" placeholder="Enter your Username" /><br />

      <div class="flex gap-5">
        <button v-if="Login" type="submit"
          :class="'bg-mainBlue text-white border-solid border-2 border-white px-4 py-2 text-xl rounded-xl hover:bg-white hover:text-mainBlue transition delay-30'">
          Sign In
        </button>
        <button v-if="Login === false" type="submit"
          class="bg-mainBlue text-white border-solid border-2 border-white px-4 py-2 text-xl rounded-xl hover:bg-white hover:text-mainBlue transition delay-30">
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>