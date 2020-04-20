<template>
  <main>
    <!-- TODO: Add icons for text boxes -->
    <div class="about pt-10 px-10 flex flex-col justify-content items-center">
      <!-- Cruator Text -->
      <div class="title-text text-center font-display text-4xl mb-4 md:text-5xl mb-10 xl:text-5xl mb-10">
        <h1>
          Word from the curation team
        </h1>
      </div>
      <div class="text-box mb-10 md:mb-0 xl:mb-0">
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
      <div class="text-box mb-10 md:mb-0 xl:mb-0">
        <div class="divider"></div>
        <p class="py-4 px-4">{{ page.facultyen }}</p>
      </div>
      <div class="faculty-quote-text font-display mb-10 md:mb-0 xl:mb-0">
        <div class="divider"></div>
        <p class="py-4 px-4">{{ page.facultyquoteen }}</p>
        <!-- <span class="py-4 px-4" v-html="page.facultyquote"></span> -->
      </div>
      <!-- Sponsor & Acknowledgement section -->
      <div class="sponsor-section py-12 px-10 flex flex-col justify center items-center md:flex-row justify-between xl:flex-row justify-between">
        <div class="spon-text-box mb-10 md:mb-0 xl:mb-0">
          <div class="divider"></div> 
          <p class="py-4 px-4">The typefaces used were generously given to us by Pangram Pangram, a Montreal-based type foundry who are dedicated to designing for everyday use, while remaining trend-conscious. We thank them for their support and donation.</p>
          <!-- <img class="ppf-logo pb-4 px-4" src="../assets/img/Official_PPF_Logo_2018-19.svg" alt=""> -->
          <a href="https://pangrampangram.com/"><img class="ppf-logo pb-4 px-4" src="../assets/img/Official_PPF_Logo_2018-19.svg" alt=""></a>
        </div>
        <!-- Acknowledgement -->
        <div class="spon-text-box mb-10 md:mb-0 xl:mb-0">
        <div class="divider"></div>
        <p class="py-4 px-4">{{ page.statementen }}</p>
      </div>
      </div>
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
}
.sponsor-section {
  height: 100%;
  width: 100vw;
  background-color: black;
}
.sponsor-text {
  font-size: 1.5vmax;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
  border-radius: 13px;
  background-color: white;
}
.ppf-logo {
  width: 85%;
}
.title-text {
  display: flex;
  flex-direction: column;
}
.text-box {
  font-size: 1.5vmax;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
  border-radius: 13px;
  background-color: white;
}
.spon-text-box {
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
  .text-box {
    font-size: 18px;
    height: 100%;
    width: 575px;
  }
  .spon-text-box {
    font-size: 18px;
    width: 575px;
  }
  .intro-quote-text {
    position: relative;
    left: 30rem;
    top: -7rem;
    height: auto;
    width: 300px;
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
