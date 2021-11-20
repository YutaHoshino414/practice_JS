<template>
  <div class="navbar nabvar-dark bg-dark">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>header</h1>
    <img v-bind:src="picture" class="rounded-circle mr-5">
  </div>
</template>

<script>
export default {
  data () {
    return {picture: 'https://randomuser.me/api/portraits/men/10.jpg'}
  }
}

</script>
<style scoped>
img{
    width: 50px;

}
</style>