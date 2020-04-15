<template>
  <div id="app">
    <div class="page">
      <Header />

      <keep-alive>
        <router-view :key="$route.path" @update-title="updateTitle" />
      </keep-alive>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  methods: {
    updateTitle(pageTitle) {
      document.title = `in.finite - Concordia Design Show`
    }
  }
}
</script>

<style src="./assets/tailwind.css">
