<template>
  <main>
    <div class="about py-10 px-10 flex flex-col justify-content items-center">
      <!-- Cruator Text -->
      <div class="title-text text-center font-display text-4xl mb-4 md:text-5xl mb-10 xl:text-5xl mb-10">
        <h1>
          Word from <br />
          the curation team
        </h1>
      </div>
      <div class="intro-text mb-10 md:mb-0 xl:mb-0">
        <div class="divider"></div>
        <span class="py-4 px-4" v-html="page.text"></span>
      </div>
      <div class="intro-quote-text font-display mb-10 md:mb-0 xl:mb-0">
        <div class="divider"></div>
        <span class="py-4 px-4" v-html="page.quoteen"></span>
      </div>
      <!-- Faculty Text -->
      <div class="title-text text-center font-display text-4xl mt-4 mb-4 md:text-5xl mt-10 mb-10 xl:text-5xl mt-10 mb-10">
        <h1>
          Word from <br />
          the faculty advisors
        </h1>
      </div>
      <div class="faculty-text mb-10 md:mb-0 xl:mb-0">
        <div class="divider"></div>
        <p class="py-4 px-4">{{ page.facultyen }}</p>
      </div>
      <div class="faculty-quote-text font-display">
        <div class="divider"></div>
        <p class="py-4 px-4">{{ page.facultyquoteen }}</p>
        <!-- <span class="py-4 px-4" v-html="page.facultyquote"></span> -->
      </div>
    </div>
    <!-- Sponsorship and Acknowledgement section -->
      <div class="sponsorship py-10 px-10 flex flex-col justify-content items-center mt-4 mb-4 md:mt-10 mb-10 xl:mt-10 mb-10">
        <h1>Sponsorship</h1>
        <!-- <p>{{ page.sponsoren }}</p> -->
        <p>The typefaces used were generously given to us by Pangram Pangram, a Montreal-based type foundry who are dedicated to designing for everyday use, while remaining trend-conscious. We thank them for their support and donation.</p>
        <!-- link pangram logo and link to website -->
      </div>
  </main>
</template>

<script>
import page from '@/mixins/page'

export default {
  name: 'About',
  mixins: [page],
  data() {
    return {
      text: {
        facultyen: ''
      }
    }
  },
  async created() {
    await this.pageLoaded
    this.page.address = this.page.text = this.page.textfr = null

    const kts = await this.$api.getKirbyText(this.pageId, 'address', 'texten', 'textfr', 'facultyen')
    this.facultyen = kts.facultyen

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
  border-bottom: 1px dashed cyan;
}
.sponsorship {
  height:100vh;
  background-color: #00000050;

}
.title-text {
  display: flex;
  flex-direction: column;
}

.intro-text {
  font-size: 1.5vmax;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
  border-radius: 13px;
  background-color: white;
}

.divider {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid black;
}

.intro-quote-text {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 13px;
  background-color: white;
}

.faculty-text {
  font-size: 1.5vmax;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
  border-radius: 13px;
  background-color: white;
}

.faculty-quote-text {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 13px;
  background-color: white;
}

@media screen and (min-width: 45rem) {
  .title-text {
    position: relative;
  }
  .divider {
    width: 100%;
    height: 30px;
    border-bottom: 1px solid black;
  }
  .intro-text {
    font-size: 14px;
    /* position: absolute;
    left: 2.5rem; */
    height: 100%;
    width: 575px;
  }
  .intro-quote-text {
    position: relative;
    left: 30rem;
    top: -7rem;
    height: auto;
    width: 300px;
  }
  .faculty-text {
    font-size: 14px;
    /* position: absolute;
    left: 2.5rem; */
    height: 100%;
    width: 575px;
  }
  .faculty-quote-text {
    position: relative;
    left: -30rem;
    top: -7rem;
    height: auto;
    width: 300px;
  }
}
</style>
