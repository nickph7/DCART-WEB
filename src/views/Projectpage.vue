<template>
  <main class="max-w-screen-lg mx-auto">
    <!-- Title row -->
    <div class="mb-8 flex flex-row flex-wrap">
      <h1 class="text-3xl md:text-5xl uppercase">{{ page.title }}</h1>
      <div>
        <p>{{ page.year_created }}</p>
      </div>
    </div>

    <!-- text -->
    <div class="mb-8">
      <p>{{ description }}</p>
    </div>

    <!-- gallery -->
    <!-- <Gallery></Gallery> -->
    <VueGallery :images="galleryurls" :index="galleryindex" @close="galleryindex = null"></VueGallery>
    <KirbyImage :file="page.cover[0]" thumb="crop" :params="[1024, 768]" class="mb-8" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="(image, imageIndex) in gallery.slice(1)" :key="imageIndex" @click="galleryindex = imageIndex + 1" class="cursor-pointer">
        <KirbyImage :file="image" thumb="resize" :params="[400]" class="object-cover h-full" style="height: 100%" />
      </div>
    </div>

    <!-- artist section -->
    <div>
      
    </div>
  </main>
</template>

<script>
import page from '@/mixins/page'
import Gallery from '@/components/ProjectGallery.vue'
import VueGallery from 'vue-gallery'
//import { tags } from '@/mixins/general'

export default {
  name: 'Projectpage',
  components: {
    VueGallery
  },
  mixins: [page],
  data() {
    return {
      description: '',
      gallery: [],
      galleryurls: [],
      galleryindex: null
    }
  },
  async created() {
    await this.pageLoaded

    this.description = this.page.description_english

    const files = await this.$api.getFiles(this.pageId)
    this.gallery = files.filter(file => file.type === 'image')
    this.gallery.forEach(image => {
      this.galleryurls.push(image.url)
    })
  }
}
</script>

<style scoped></style>
