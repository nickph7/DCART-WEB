<template>
  <main>
    <div class="about py-10 px-10">
      <div class="intro-text mb-10 md:mb-0 xl:mb-0">
        <div class="divider"></div>
        <span class="py-4 px-4" v-html="page.text"></span>
      </div>
      <div class="intro-quote-text font-display text-justify">
        <div class="divider"></div>
        <span class="py-4 px-4" v-html="page.quoteen"></span>
      </div>
    </div>
  </main>
</template>

<script>
import page from '@/mixins/page'

export default {
  name: 'About',
  mixins: [page],
  async created() {
    await this.pageLoaded
    this.page.address = this.page.text = this.page.textfr = null

    const kts = await this.$api.getKirbyText(this.pageId, 'address', 'texten', 'textfr')

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
  height: 100vh;
  border-bottom: 1px dashed cyan;
}

.intro-text {
  font-size: 1.5vmax;
  display: flex;
  flex-direction: column;
  height: 675px;
  width: 100%;
  border: 1px solid black;
  border-radius: 8px;
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
  border-radius: 8px;
  background-color: white;
}

@media screen and (min-width: 45rem) {
  .intro-text {
    font-size: 14px;
    position: absolute;
    left: 2.5rem;
    height: 750px;
    width: 575px;
  }
  .intro-quote-text {
    position: relative;
    left: 30rem;
    top: 35rem;
    height: auto;
    width: 300px;
  }
}
</style>