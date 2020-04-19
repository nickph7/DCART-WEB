<template>
  <header class="header py-8 px-4 text-white">
    <router-link to="/">
      <div class="title-logo">
        <img src="../assets/img/final_logo3_b2.svg">
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
  border-bottom: 1px solid black;
}


.header a {
  position: relative;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  padding: 0.5rem 0;
  font-weight: 700;
}

.header .logo {
  display: block;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu a {
  color: black;
  margin: 0 0.75rem;
}

.menu a[aria-current],
.menu a.router-link-active {
  border-bottom: 2px solid #000;
}

@media screen and (min-width: 40rem) {
  .header .logo {
    margin-bottom: 0;
  }
  .header {
    flex-direction: row;
    justify-content: space-between;
  }
  .menu {
    margin-right: -0.75rem;
  }
}
</style>
