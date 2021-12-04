<template>
<div class="Page1">
  <h1>This is a page1</h1>
  <div class="jumbotron m-4"></div>
    <div class="row">
      <transition-group name="cards" tag="div"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
          class="d-flex flex-wrap "
      >
      <div class="card col-sm-4 mb-3 mx-4" style="width: 380px;" 
          v-for="(item, index) in items" :key='item.volumeInfo.title' :data-index="index">
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
      </transition-group>
    </div>
</div>
</template>

<script>
import gsap from 'gsap'
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
    },
    methods:{
      beforeEnter(el) {
        el.style.opacity = 0;
        el.style.transform = 'translateX(150px)'
      },

      enter(el, done) {
        gsap.to(el, {
          opacity: 1,
          x : 0,
          duration: 0.8,
          delay: el.dataset.index * 0.2,
          onComplete: done
        })
      },
    }
  }

</script>

<style scoped>
/*  .cards-enter-active, .cards-leave-active {
  transition: opacity 1s, transform 2s ease;
}

.cards-enter-from {
  opacity: 0;
}
.cards-leave-to {
  opacity: 0;
  
} */
</style>