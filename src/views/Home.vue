<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="">
    <HelloWorld msg="Welcome to Your Vue.js App" class="animate__animated animate__bounceInDown animate__delay-1s" />
    <Movie />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Movie from '@/components/Movie.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld, Movie
  }
}
</script>

<style scoped>

img {
  animation: rotate-anime 4s linear infinite;
}
@keyframes rotate-anime {
  0%  {transform: rotateY(0);}
  100%  {transform: rotateY(360deg);}
}

</style>
