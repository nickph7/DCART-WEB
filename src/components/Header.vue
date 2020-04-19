<template>
  <header class="header px-10 text-white">
    <router-link to="/">
      <div class="title-logodisplay: flex;
  flex-direction: column;
  align-items: center;">
        <img src="../assets/img/final_logo8_b2.svg">
      </div>
    </router-link>

    <Nav></Nav>
  </header>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  components: {
    Nav
  },
  name: 'Header'
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  border-bottom: 1px solid black;
  width: 100vw;
  background-color: #ffffff;
  z-index: 99;
}

.menu a {
  color: black;
}

.menu a[aria-current],
.menu a.router-link-active {
  border-bottom: 2px solid #000;
}

@media screen and (min-width: 40rem) {
  .header {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
