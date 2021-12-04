<template>
  <headerpart />
  <div id="nav" >
  </div>
  <div class="container">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition><br><br><br>
  </div>
    <footer class="navbar nabvar-dark bg-dark fixed-bottom">
    <img alt="Vue logo" src="./assets/logo.png">
  </footer>
</template>

<script>
import Headerpart from './components/headerpart.vue'

export default {
  data () {
    return {
      msg: 'Hello World!',
      address:[],
      
    }
  },
  methods: {
    clear () {
      this.msg = ''
    }
  },
  components:{
    Headerpart
  },
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
}

#nav img{
    width: 60px;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
}

footer img{
    width: 50px;
}

#nav a.router-link-exact-active {
  color: #42b983;
  font-size: 24px;   /* <--追加：active要素のみ効果 */
}

/* 以下追加：トランジション(fade-in/out) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
