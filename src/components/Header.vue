<template>
  <header class="px-10 flex flex-col items-center w-screen z-50 md:flex-row md:justify-between">
    <router-link to="/">
      <img src="../assets/img/final_logo8_b2.svg" id="logo-back" class=""/>
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
  name: 'Header',
  data() {
    return {
      logoBack: 0,
      logoFront: 0
    }
  }
}

</script>

<style>
/* .header {
  display: flex;
  flex-direction: column;
  align-items: center;
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
*/

</style>
