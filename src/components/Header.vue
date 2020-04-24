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
</style>
