<template>
<div class="Page1">
  <h1>This is a page1</h1>
  <div class="jumbotron m-4"></div>
  <div class="card container bg-success p-4">
    
    <div class="row">
      <div class="card col-sm-4 mb-3 mx-4" style="width: 340px;" v-for="item,i in items" :key='i'>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img :src="item.volumeInfo.imageLinks.thumbnail" class="p-0" >
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">{{item.volumeInfo.title}}</p>
              <p class="card-text"><small class="text-muted">{{item.volumeInfo.authors[0]}}</small></p>
              <p class="card-text"><small class="text-muted">{{item.volumeInfo.publishedDate}}</small></p>
            </div>
          </div>
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
      const url = "https://www.googleapis.com/books/v1/volumes?q=python&maxResults=40"
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