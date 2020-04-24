<template>
  <main class="max-w-screen-lg mx-auto">
    <!-- Title row -->
    <div class="mb-8 flex flex-row flex-wrap">
      <h1 class="project-title text-3xl md:text-5xl uppercase mr-4">{{ page.title }}</h1>
      <div>
        <p>{{ page.year_created }}</p>
      </div>
    </div>

    <!-- text -->
    <div class="flex flex-col sm:flex-row mb-8 mx-auto">
      <p class="flex-1 mb-8 sm:mr-3 md:mr-6 max-w-xl">{{ description_english }}</p>
      <p class="flex-1 italic sm:ml-3 md:ml-6 max-w-xl">{{ description_french }}</p>
    </div>
    
    <!-- attributes -->
    <div class="my-8 flex flex-row flex-wrap items-start">
      <div class="flex flex-row mr-16">
        <div class="attribute font-display font-bold text-lg mr-4">T</div>
        <div class="leading-loose">{{ type }}</div>
      </div>
      <div class="flex flex-row mr-16">
        <div class="attribute font-display font-bold text-lg mr-4">M</div>
        <div class="leading-loose">{{ materials }}</div>
      </div>
      <div class="flex flex-row mr-16" v-if="url">
        <div class="attribute font-display font-bold text-lg mr-4">D</div>
        <div class="leading-loose"><a :href="url" target="_blank" rel="noopener noreferrer"><span class="text-lg pr-1">></span> Download Link</a></div>
      </div>
    </div>

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
      :contact="artist.contact"
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
      type: '',
      materials: '',
      url: null,
      artist: {
        artistNames: '',
        program: '',
        year: '',
        quote_english: '',
        quote_french: '',
        contact: ''
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
    //--Description--
    this.description_english = this.page.description_english
    this.description_french = this.page.description_french
    //--Artist--
    this.artist.artistNames = this.page.artist
    this.artist.program = this.page.program
    this.artist.year = this.page.year_of_student
    this.artist.quote_english = this.page.quote_english
    this.artist.quote_french = this.page.quote_french
    this.artist.contact = this.page.contact
    //--Attribute--
    this.type = this.page.type_of_project
    this.materials = this.page.materials
    this.url = this.page.url
    //photos
    const cover = this.page.cover[0]
    this.cover = cover
    const files = await this.$api.getFiles(this.pageId)
    this.gallery = files.filter(file => file.type === 'image' && file.content.content_type !== 'portrait')
    this.artistsHeadshots = files.filter(file => file.type === 'image' && file.content.content_type === 'portrait')
    this.gallery.forEach(image => {
      this.galleryurls.push(image.url)
    })
    //previous next
    const adjPages = await this.$api.getNextPage(this.pageId)
    this.adjPages = adjPages
  }
}
</script>

<style scoped>
.cover {
  max-height: 40rem;
}

.attribute {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 8px;
  background: #000000;
  color: #ffffff;
  text-align: center;
  line-height: 0.9rem;
}
</style>
