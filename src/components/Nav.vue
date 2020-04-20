<template>
  <div class="nav font-display uppercase mt-4 mb-4 md:mt-0 mb-0 xl:mt-0 mb-0">
    <nav id="menu" class="menu">
      <router-link class="mx-6" v-for="page in $site.children.filter(page => page.status === 'listed')" :key="page.id" :to="'/' + page.id">
        {{ page.title }}
      </router-link>
      <!-- @click: to change -->
      <button id="active">EN</button>
      |
      <button>FR</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style>
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
