<template>
  <div class="page2">
    <h1>This is a page 2</h1>
    <div class="card container bg-warning p-4">
      <div class="row">
        <div class="card text-white bg-primary col-sm-2 mt-3 mx-3 p-0" v-for="movie,index in movies" :key='index'>
        <img :src="movie.Poster" class="card-img-top" width="100%">
          <div class="card-body p-2">
            <p>{{ movie.Title }}</p>
            <p>{{ movie.Year }}</p>
          </div>
        </div>
      </div>
    </div>
    <br><br><br><br><br>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return{
          movies:[],
      }
    },
    created () {
      axios.get(`https://www.omdbapi.com/?s=man&page=2&apikey=${process.env.VUE_APP_URL}`)
      .then( response => {
        console.log(response.data);
        this.movies = response.data.Search
      })
      .catch( (err) => {
        this.msg = err // エラー処理
      });
    }
  
  }

</script>
