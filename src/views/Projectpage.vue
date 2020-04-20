<template>
  <main>
    <!-- Title row -->
    <div>
      <!-- title -->
      <h1 class="text-3xl uppercase">{{ page.title }}</h1>
      <!-- details -->
    </div>

    <!-- text -->
    <div>
      <p>{{ description }}</p>
    </div>

    <!-- gallery -->
    <Gallery></Gallery>
  </main>
</template>

<script>
import page from '@/mixins/page'
import Gallery from '@/components/ProjectGallery.vue'
//import { tags } from '@/mixins/general'

export default {
  name: 'Projectpage',
  components: {
    Gallery
  },
  mixins: [page],
  data() {
    return {
      description: '',
      gallery: []
    }
  },
  async created() {
    await this.pageLoaded

    this.description = this.page.description_english

    const files = await this.$api.getFiles(this.pageId)
    this.gallery = files.filter(file => file.type === 'image')
  }
}
</script>

<style scoped>

</style>
