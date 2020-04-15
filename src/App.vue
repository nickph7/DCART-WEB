<template>
  <div id="app">
    <div class="page">
      <Header />
      <StreamBar />

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
import StreamBar from '@/components/StreamBar.vue'

export default {
  name: 'App',
  components: {
    Header,
    StreamBar,
    Footer
  },
  methods: {
    updateTitle(pageTitle) {
      document.title = `${this.$site.title} | ${pageTitle}`
    }
  }
}
</script>

<style src="./assets/tailwind.css">
