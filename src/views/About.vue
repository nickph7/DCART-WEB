<template>
  <main>
    <div class="about pt-10 md:px-10 flex flex-col justify-content items-center">
      <!-- ENG -Curator Text -->
      <div class="title-text text-center font-display text-4xl my-4 md:text-5xl my-10">
        <h1>
          Word from the curation team
        </h1>
      </div>
      <div class="flex flex-col lg:flex-row items-center px-0 md:px-12">
        <TextWindow class="max-w-none md:max-w-lg mb-8">
          <p>{{ page.texten }}</p>
        </TextWindow>
        <!-- Add parallax here -->
        <div
          class="rellax"
          v-rellax="{
            speed: -3
          }"
        >
          <TextWindow class="quote-text font-display max-w-none md:max-w-lg relative mb-12">
            <p>{{ page.quoteen }}</p>
          </TextWindow>
        </div>
      </div>
      <!-- FRE   -Curator Text -->
      <div class="title-text text-center font-display text-4xl mb-4 md:text-5xl mb-10 xl:text-5xl mb-10">
        <h1>
          Mot de l’équipe de curation
        </h1>
      </div>
      <div class="flex flex-col-reverse lg:flex-row items-center px-0 md:px-12">
        <!-- Add parallax here -->
        <div
          class="rellax"
          v-rellax="{
            speed: -2
          }"
        >
          <TextWindow class="quote-text-left font-display max-w-none md:max-w-lg relative mb-12">
            <p>{{ page.quotefr }}</p>
          </TextWindow>
        </div>
        <TextWindow class="italic max-w-none md:max-w-lg mb-8">
          <p>{{ page.textfrench }}</p>
        </TextWindow>
      </div>

      <!-- ENG -Faculty Text -->
      <div class="title-text text-center font-display text-4xl my-4 md:text-5xl my-10">
        <h1>
          Word from the faculty advisors
        </h1>
      </div>
      <div class="flex flex-col lg:flex-row items-center px-0 md:px-12">
        <TextWindow class="max-w-none md:max-w-lg mb-8">
          <p>{{ page.facultyen }}</p>
        </TextWindow>
        <!-- Add parallax here -->
        <div
          class="rellax"
          v-rellax="{
            speed: -.75
          }"
        >
          <TextWindow class="quote-text font-display max-w-none md:max-w-lg relative mb-12">
            <p>{{ page.facultyquoteen }}</p>
          </TextWindow>
        </div>
      </div>
      <!-- FRE -Faculty Text -->
      <div class="title-text text-center font-display text-4xl my-4 md:text-5xl my-10">
        <h1>
          Mot des conseillères académiques
        </h1>
      </div>
      <div class="flex flex-col-reverse lg:flex-row items-center px-0 md:px-12">
        <div
          class="rellax"
          v-rellax="{
            speed: -0.5
          }"
        >
          <!-- Add parallax here -->
          <TextWindow class="quote-text-left font-display max-w-none md:max-w-lg relative mb-12">
            <p>{{ page.facultyquotefr }}</p>
          </TextWindow>
        </div>
        <TextWindow class="max-w-none italic md:max-w-lg mb-8">
          <p>{{ page.facultyfr }}</p>
        </TextWindow>
      </div>
      <div class="bg-black w-screen">
        <div class="sponsor-section px-2 md:px-10 py-10 flex flex-col justify-content items-center">
          <!-- ENG/FRE - Sponsor -->
          <div>
            <TextWindow class="max-w-full md:max-w-lg mb-8">
              <p>
                The typefaces used were generously given to us by Pangram Pangram, a Montreal-based type foundry who are dedicated to designing for
                everyday use, while remaining trend-conscious. We thank them for their support and donation.
              </p>
              <br />
              <p class="italic mb-4">
                Les polices de caractères utilisées ont été généreusement données par Pangram Pangram, une typofoundrie Montréalaise qui se donne
                comme mission de créer pour utilisation quotidienne, tout en restant conscient des tendances.
              </p>
              <a href="https://pangrampangram.com/"><img class="pb-4 px-2" :src="pangramLogo.url" alt="Pangram Logo" style="width:85%;"/></a>
            </TextWindow>
          </div>
          <!-- ENG/FRE - Acknowledgement -->
          <div>
            <TextWindow :content="statement" class="max-w-full md:max-w-lg mb-8">
              <p>Designed at Concordia University, located in Tiohtià:ke/Montréal on unceded Kanien’kehá:ka territory, 2020.</p>
              <br />
              <p class="italic">Conçu à l’Université Concordia, situé à Tiohtià:ke/Montréal sur des terres Kanien’kehá:ka non cédées, 2020.</p>
            </TextWindow>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import page from '@/mixins/page'
import TextWindow from '@/components/TextWindow.vue'
import Parallax from 'vue-parallaxy'

export default {
  components: {
    TextWindow
  },
  name: 'About',
  mixins: [page],
  data() {
    return {
      text: {},
      pangramLogo: {},
      statement: ``
    }
  },
  async created() {
    await this.pageLoaded
    this.page.address = this.page.text = this.page.textfr = null

    const kts = await this.$api.getKirbyText(this.pageId, 'address', 'texten', 'textfr', 'facultyen')
    this.facultyen = kts.facultyen

    let logo = await this.$api.getFileFromPage('pangram-logo.svg', this.pageId)
    this.pangramLogo = logo

    if (this.vueI18n.locale === 'en') {
      this.page.address = kts.address
      this.page.text = kts.texten
    } else {
      this.page.address = kts.address
      this.page.text = kts.textfr
    }
  }
}
</script>

<style>
.about {
  height: 100%;
}
.sponsor-section {
  height: 100%;
}
.title-text {
  display: flex;
  flex-direction: column;
}
@media screen and (min-width: 1024px) {
  .title-text {
    position: relative;
  }
  .quote-text {
    top: 15%;
    right: 3%;
  }
  .quote-text-left {
    right: -2%;
  }
}

@media screen and (max-width: 1024px) {
  .rellax {
    transform: translate3d(0, 0, 0) !important;
  }
}
</style>
