<template>
<div class="nav font-display uppercase">
    <nav id="menu" class="menu">
      <router-link v-for="page in $site.children.filter(page => page.status === 'listed')" :key="page.id" :to="'/' + page.id">
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
.nav {
}

.menu a {
  color: black;
}

.menu a:hover {
  
}

</style>
