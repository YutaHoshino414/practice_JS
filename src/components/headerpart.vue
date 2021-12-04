<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary"> <h1>header</h1>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
            <router-link to="/" class="nav-link">home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <ul class="nav-item dropdown menu">
          <li>
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <ul class="dropdown-menu">
            <router-link to="/page1" class="dropdown-item">Page1</router-link>
            <router-link to="/page2" class="dropdown-item">Page2</router-link>
            <router-link to="/page3" class="dropdown-item">Page3</router-link>
            <router-link to="/page4" class="dropdown-item">Page4</router-link>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
            
          </ul></li>
        </ul>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="text" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data () {
    return {}
  }
}

</script>

<style scoped>
img{
    width: 50px;
}
h1{
  color:azure;
}
.menu {
	list-style-type:none;
}
.menu > li {
	display:inline-block;
	position:relative;
}
.menu > li > ul {
	display:none;
}
.menu > li:hover ul {
	display:block;
	position:absolute;
	padding:0;
	margin:0;
	top:2.0em;
	left:0;
	list-style-type:none;
}
.nav-item  a.router-link-exact-active {
  /* color: #42b983; */
    /* <--追加：active要素のみ効果 */
}

</style>