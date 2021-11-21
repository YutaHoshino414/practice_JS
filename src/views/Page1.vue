<template>
  <div class="Page1">
    <h1>This is a page1</h1>
    <div class="jumbotron container">
      <div class="row">
        <div class="card col-sm-1 bg-light mt-3 mx-3 p-0" v-for="item,index in items" :key='index'>
          <img :src="item.volumeInfo.imageLinks.thumbnail" class="card-img-top" width="100%">
          <div class="card-body p-2">
            <p>{{item.volumeInfo.title}}</p>
            <p>{{item.volumeInfo.authors[0]}}</p>
            <p>{{item.volumeInfo.publishedDate}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return{
          items:[]
      }
    },
  
      created () {
        let url = "https://www.googleapis.com/books/v1/volumes?q=python"
        fetch(url)
        .then( response => {
          return response.json();
        })
        .then( response => {
          console.log(response);
          this.items = response.items
        })
        .catch( (err) => {
          this.msg = err // エラー処理
        });
      }
  
  }

</script>

<style scoped>

</style>