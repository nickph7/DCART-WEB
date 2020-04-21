<template>
  <main class="max-w-screen-lg mx-auto">
    <!-- Title row -->
    <div class="mb-8 flex flex-row flex-wrap">
      <h1 class="project-title text-3xl md:text-5xl uppercase">{{ page.title }}</h1>
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
    <KirbyImage :file="page.cover[0]" thumb="crop" :params="[1024, 768]" class="cover mb-8 mx-auto" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="(image, imageIndex) in gallery.slice(1)" :key="imageIndex" @click="galleryindex = imageIndex + 1" class="cursor-pointer">
        <KirbyImage :file="image" thumb="resize" :params="[400]" class="object-cover h-full h-md w-lg mx-auto" />
      </div>
    </div>

    <!-- artist section -->
    <ArtistSection class="mt-8"></ArtistSection>

    <!-- Previous/Next Section  -->
    <!-- Prev/Next Buttons -->
    <div class="next-prev-section flex flex row justify-between pt-10">
      <div v-show="adjPages.prev">
        <router-link class="btn uppercase my-4" :to="adjPages.prev ? '/' + adjPages.prev.id : ''">Previous</router-link>
        <!-- <p class="pt-10" v-if="adjPages.prev">{{ adjPages.prev.title }}</p> -->
      </div>
      <div v-show="adjPages.next">
        <router-link class="btn uppercase my-4" :to="adjPages.next ? '/' + adjPages.next.id : ''">Next</router-link>
        <!-- <p class="pt-10" v-if="adjPages.next">{{ adjPages.next.title }}</p> -->
      </div>
    </div>  
    <!-- Prev/Next Project Titles -->
     <div class="next-prev-title-section flex flex row justify-between py-10"> 
      <div>
        <p v-if="adjPages.prev">{{ adjPages.prev.title }}</p>
      </div>
      <div>
        <p v-if="adjPages.next">{{ adjPages.next.title }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import page from '@/mixins/page'
import Gallery from '@/components/ProjectGallery.vue'
import VueGallery from 'vue-gallery'
import ArtistSection from '@/components/ArtistSection.vue'
//import { tags } from '@/mixins/general'

export default {
  name: 'Projectpage',
  components: {
    VueGallery, ArtistSection
  },
  mixins: [page],
  data() {
    return {
      description: '',
      gallery: [],
      galleryurls: [],
      galleryindex: null,
      adjPages: {
        prev: null,
        next: null
      }
    }
  },
  async created() {
    await this.pageLoaded
    this.description = this.page.description_english
    //TODO: Need to fix error with ablum.cover.undefined
    const files = await this.$api.getFiles(this.pageId)
    this.gallery = files.filter(file => file.type === 'image' && file.content.content_type !== 'portrait')
    this.gallery.forEach(image => {
      this.galleryurls.push(image.url)
    })

    const adjPages = await this.$api.getNextPage(this.pageId)
    this.adjPages = adjPages
  }
}
</script>

<style scoped>
.cover {
  max-height: 40rem;
}
/* .project-title {
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: black;
  color: transparent;
} */
</style>
