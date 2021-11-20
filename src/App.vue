<template>
  <div>
    
    <headerpart></headerpart>
    <div class="container">
      <div class="jumbotron mt-5">
        <p v-if="msg.length > 0">
          {{msg}}
        </p>
        <p v-else>
          no text 
        </p>
        <form class="form-inline">
          <input type="text" v-model="msg" class="form-control w-50">
          <button @click="clear()" class="btn btn-primary">clear</button>
        </form>
      </div>
      <div class="mt-5" v-for="add,index in address" :key='index'>
      <p>都道府県：{{ add.address1 }}</p>
      <p>市区町村：{{ add.address2 }}</p>
      <p>区域：{{ add.address3 }}</p>
      </div><br>
    <Movie></Movie>
    </div>
    
  </div>
</template>

<script>
import headerpart from './components/headerpart'
import Movie from './components/Movie'

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
    headerpart, Movie
  },
}
</script>