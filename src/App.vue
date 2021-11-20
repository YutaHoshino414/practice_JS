<template>
  <Headerpart></Headerpart>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/page1">Page1</router-link> |
    <router-link to="/page2">Page2</router-link> 
  </div>
  <transition name="fade" mode="out-in">
    <router-view/>
  </transition>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
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
