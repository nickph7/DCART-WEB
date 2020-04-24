<template>
  <div id="app" class="custom-cursor overflow-x-hidden h-full flex flex-col">
    <StreamBar />
    <div class="page" style="flex: 1 0 auto;">
      <Header />
      <keep-alive>
        <router-view :key="$route.path" @update-title="updateTitle" />
      </keep-alive>
    </div>

    <Footer style="flex-shrink: 0;" />
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
