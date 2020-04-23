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
    <div class="flex flex-col sm:flex-row mb-8 mx-auto">
      <p class="flex-1 mb-8 sm:mr-3 md:mr-6 max-w-xl">{{ description_english }}</p>
      <p class="flex-1 italic sm:ml-3 md:ml-6 max-w-xl">{{ description_french }}</p>
    </div>
    <span></span>

    <!-- gallery -->
    <!-- <Gallery></Gallery> -->
    <VueGallery :images="galleryurls" :index="galleryindex" @close="galleryindex = null"></VueGallery>
    <img :src="cover.url" class="cover mb-8 mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="(image, imageIndex) in galleryurls.slice(1)" :key="imageIndex" @click="galleryindex = imageIndex + 1" class="cursor-pointer">
        <img :src="image" class="object-cover h-full h-md w-lg mx-auto" >
      </div>
    </div>

    <!-- artist section -->
    <ArtistSection
      :imageFiles="artistsHeadshots"
      :artistNames="artist.artistNames"
      :program="artist.program"
      :year="artist.year"
      :quote_english="artist.quote_english"
      :quote_french="artist.quote_french"
      class="mt-8"></ArtistSection>

    <!-- Previous/Next Section  -->
    <!-- Prev/Next Buttons -->
    <div class="next-prev-section flex flex row justify-between pt-10">
      <div>
        <router-link v-if="adjPages.prev" class="btn uppercase my-4" :to="adjPages.prev ? '/' + adjPages.prev.id : '/'">Previous</router-link>
        <!-- <p class="pt-10" v-if="adjPages.prev">{{ adjPages.prev.title }}</p> -->
      </div>
      <div>
        <router-link v-if="adjPages.next" class="btn uppercase my-4" :to="adjPages.next ? '/' + adjPages.next.id : '/'">Next</router-link>
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
      cover: {},
      description_english: '',
      description_french: '',
      artist: {
        artistNames: '',
        program: '',
        year: '',
        quote_english: '',
        quote_french: ''
      },
      gallery: [],
      galleryurls: [],
      galleryindex: null,
      artistsHeadshots: [],
      adjPages: {
        prev: null,
        next: null
      }
    }
  },
  async created() {
    await this.pageLoaded
    //--data from api assignment--
    this.description_english = this.page.description_english
    this.description_french = this.page.description_french
    this.artist.artistNames = this.page.artist
    this.artist.program = this.page.program
    this.artist.year = this.page.year_of_student
    this.artist.quote_english = this.page.quote_english
    this.artist.quote_french = this.page.quote_french

    //TODO: Need to fix error with ablum.cover.undefined
    const cover = this.page.cover[0]
    this.cover = cover
    const files = await this.$api.getFiles(this.pageId)
    this.gallery = files.filter(file => file.type === 'image' && file.content.content_type !== 'portrait')
    this.artistsHeadshots = files.filter(file => file.type === 'image' && file.content.content_type === 'portrait')
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
