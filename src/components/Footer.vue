<template>
  <footer class="footer bg-black py-8 px-4 sm:px-8 md:px-12 text-white">
    <router-link to="/"> {{ $site.title }} </router-link>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      about: {}
    }
  },
  async created() {
    this.about = await this.$api.getPage('about')
  }
}
</script>

<style>
</style>
