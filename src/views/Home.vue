<template>
  <main>
    <!-- <Intro :pageTitle="page.title" /> -->

    <!--Curatorial statement -->
    <div class="about-section justify-center items-center py-10 px-10 flex flex-col md:flex-row xl:flex-row">
      <div class="curatext-box mb-10 md:mb-0 xl:mb-0">
        <div class="intro-text-divider"></div>
        <span class="py-4 px-4" v-html="curationtext"></span>
      </div>
      <!-- TODO: Could transfer this into its own component -->
      <div class="intro-video">
        <vimeo-player ref="player" :video-id="409639362" />
      </div>
    </div>
    <!-- Projects -->
    <div class="project-section">
      <Filters></Filters>
    </div>
    <!-- Valérie Lamontagne honor statement  -->
    <div class="honor-statement"></div>
  </main>
</template>

<script>
import page from '@/mixins/page'
import Filters from '@/components/Filters.vue'

export default {
  components: {
    Filters
  },
  name: 'Home',
  mixins: [page],
  data() {
    return {
      curationtext: '',
      projects: []
    }
  },
  async created() {
    await this.pageLoaded
    this.page.curatext = null

    const kten = await this.$api.getKirbyText(this.pageId, 'curatexten')
    console.log(kten)
    this.curationtext = kten.curatexten
  }
}
</script>

<style>
.about-section {
  height: 100vh;
  border-bottom: 1px dashed pink;
}
.curatext-box {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border: 1px solid black;
  border-radius: 13px;
  background-color: white;
}

.intro-text-divider {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid black;
}

.intro-video {
  border: 1px solid red;
  border-radius: 8px;
}

.project-section {
  height: 100vh;
  border-bottom: 1px dashed cyan;
}

.honor-statement {
  height: 100vh;
  border-bottom: 1px dashed green;
}

@media screen and (min-width: 45em) {
  .curatext-box {
    position: absolute;
    left: 2.5rem;
    height: 350px;
    width: 475px;
  }
  .intro-video {
    border: 1px solid red;
    border-radius: 8px;
  }
}
</style>
