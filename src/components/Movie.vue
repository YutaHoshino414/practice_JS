<template>
<div class="jumbotron container">
  <div class="row">
    <div class="card col-sm-2 bg-light mt-3 mx-3 p-0" v-for="movie,index in movies" :key='index'>
    <img :src="movie.Poster" class="card-img-top" width="100%">
      <div class="card-body p-2">
        <p>{{ movie.Title }}</p>
        <p>{{ movie.Year }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return{
          movies:[]
      }
    },
  
      created () {
        let url = process.env.VUE_APP_URL
        fetch(url)
        .then( response => {
          return response.json();
        })
        .then( response => {
          console.log(response);
          this.movies = response.Search
        })
        .catch( (err) => {
          this.msg = err // エラー処理
        });
      }
  
  }

</script>

<style scoped>

</style>