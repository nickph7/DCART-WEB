<template>
  <footer class="footer">
    <router-link to="/"> &copy; {{ new Date().getFullYear() }} / {{ $site.title }} </router-link>

    <!-- <nav class="social">
      <a v-for="social in about.social" :key="social.id" :href="social.url"> {{ social.platform }} </a>
    </nav> -->
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
.footer {
  color: white;
  background-color: black;
  border: 1px solid black;
  padding: 1.5rem;
  margin-top: 2rem;
  text-align: center;
  max-width: var(--content-width);
  line-height: 1.5em;
  height: 100px;
}

.footer a {
  display: inline-block;
  font-size: 0.875rem;
}
.footer > a {
  margin-bottom: 1.5rem;
  border-top: 2px solid #000;
  width: 16.5rem;
  padding-top: 0.5rem;
}

.social a {
  margin: 0 0.75rem;
  padding: 0.5rem 1rem;
  border: 2px solid #000;
  width: 7.5rem;
}
.social a:hover {
  background: #000;
  color: #fff;
}
</style>
