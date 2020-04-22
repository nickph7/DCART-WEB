<template>
  <main>
    <div class="about pt-10 px-1 md:px-10 flex flex-col justify-content items-center">
      <!-- ENG -Curator Text -->
      <div class="title-text text-center font-display text-4xl mb-4 md:text-5xl mb-10 xl:text-5xl mb-10">
        <h1>
          Word from the curation team
        </h1>
      </div>
      <TextWindow class="max-w-none md:max-w-lg">
        <p> {{ page.texten }} </p>
      </TextWindow>
      <TextWindow class="quote-text font-display max-w-none md:max-w-lg relative">
        <p> {{ page.quoteen }} </p>
      </TextWindow>

      <!-- FRE   -Curator Text -->
      <div class="title-text text-center font-display text-4xl mb-4 md:text-5xl mb-10 xl:text-5xl mb-10">
        <h1>
          Mot de l’équipe de curation
        </h1>
      </div>
      <TextWindow class="italic max-w-none md:max-w-lg">
        <p>{{ page.textfrench }}</p>
      </TextWindow>
      <TextWindow class="quote-text font-display max-w-none md:max-w-lg relative">
        <p>{{ page.quotefr }}</p>
      </TextWindow>

      <!-- ENG -Faculty Text -->
      <div class="title-text text-center font-display text-4xl mt-4 mb-4 md:text-5xl mt-10 mb-10 xl:text-5xl mt-10 mb-10">
        <h1>
          Word from the faculty advisors
        </h1>
      </div>
      <TextWindow class="max-w-none md:max-w-lg">
        <p>{{ page.facultyen }}</p>
      </TextWindow>
      <TextWindow class="quote-text font-display max-w-none md:max-w-lg relative">
        <p>{{ page.facultyquoteen }}</p>
      </TextWindow>

      <!-- FRE -Faculty Text -->
      <div class="title-text text-center font-display text-4xl mt-4 mb-4 md:text-5xl mt-10 mb-10 xl:text-5xl mt-10 mb-10">
        <h1>
          Mot des conseillères académiques
        </h1>
      </div>
      <TextWindow class="max-w-none italic md:max-w-lg">
        <p>{{ page.facultyfr }}</p>
      </TextWindow>
      <TextWindow class="quote-text font-display max-w-none md:max-w-lg relative">
        <p>{{ page.facultyquotefr }}</p>
      </TextWindow>

      <div class="bg-black w-screen">
        <div class="sponsor-section px-10 py-10 flex flex-col justify-content items-center">
          <!-- ENG/FRE - Sponsor -->
          <div>
            <TextWindow class="max-w-full md:max-w-lg">
              <p>
                The typefaces used were generously given to us by Pangram Pangram, a Montreal-based type foundry who are dedicated to designing for
                everyday use, while remaining trend-conscious. We thank them for their support and donation.
              </p>
              <br />
              <p class="italic mb-4">
                Les polices de caractères utilisées ont été généreusement données par Pangram Pangram, une typofoundrie Montréalaise qui se donne
                comme mission de créer pour utilisation quotidienne, tout en restant conscient des tendances.
              </p>
              <a href="https://pangrampangram.com/"
                ><img class="pb-4 px-4" :src="pangramLogo.url" alt="Pangram Logo" style="width:85%;"
              /></a>
            </TextWindow>
          </div>
          <!-- ENG/FRE - Acknowledgement -->
          <div>
            <TextWindow :content="statement" class="max-w-full md:max-w-lg relative">
              <p>Designed at Concordia University, located in Tiohtià:ke/Montréal on unceded Kanien’kehá:ka territory, 2020.</p>
                <br>
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

export default {
  components: {
    TextWindow
  },
  name: 'About',
  mixins: [page],
  data() {
    return {
      text: {
        
      },
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
@media screen and (min-width: 45rem) {
  .title-text {
    position: relative;
  }
  .quote-text {
    right: 10%;
  }
}
</style>
