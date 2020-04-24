<template>
  <div class="nav font-display uppercase mt-4 mb-4 md:mt-0 mb-0 xl:mt-0 mb-0 mr-0 lg:mr-10">
    <nav id="menu" class="menu flex flex-row justify-between">
      <router-link class="link" v-for="page in $site.children.filter(page => page.status === 'listed')" :key="page.id" :to="'/' + page.id">
        {{ page.title }}
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style>
.menu .link:not(:last-child){
  margin-right: 2rem;
}


.nav {
  color: black;
  font-size: 14px;
}

#active {
  color: #D1D3D4;
}

.menu a {
  text-align: center;
  transition: all .3s;
}

.menu a:hover {
  color: #D1D3D4;
}

@media screen and (min-width: 40rem) {
  .nav {
    font-size: 16px;
  }
}
</style>
