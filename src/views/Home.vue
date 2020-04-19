<template>
  <main>
    <!-- <Intro :pageTitle="page.title" /> -->

    <!--Curatorial statement -->
    <div class="about-section justify-center items-center text-justify py-10 px-10 flex flex-col md:flex-row xl:flex-row ">
      <div class="curatext-box mb-10 md:mb-0 xl:mb-0">
        <div class="intro-text-divider"></div>
        <span class="py-4 px-4" v-html="curationtext"></span>
      </div>
      <!-- TODO: Could transfer this into its own component -->
      <div class="intro-video py-4 px-4">
        <vimeo-player ref="player" :video-id="407147635" />
      </div>
    </div>
    <!-- Projects -->
    <div class="project-section">
      <Filters></Filters>
    </div>
    <!-- Valérie Lamontagne honor statement  -->
    <div class="honor-statement"></div>

    <!-- Sponsors -->
    <div class="sponsor-section justify-center items-center text-justify py-10 px-10 flex flex-col md:flex-row xl:flex-row ">
      <!-- <h2>{{ $t('home.sponsor.title') }}</h2> -->
      <p class="py-4 px-4">{{ $t('home.sponsor.message') }}</p>
    </div>
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
  height: 400px;
  width: 100%;
  border: 1px solid black;
  border-radius: 8px;
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

.sponsor-section {
  height: 100vh;
  border-bottom: 1px dashed blue;
}

/* .grid {
  display: grid;
  list-style: none;
  grid-gap: 1rem;
  line-height: 0;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-flow: dense;
}
.grid li {
  position: relative;
  --cols: 1;
  --rows: 1;

  overflow: hidden;
  background: #000;
  line-height: 0;
}
.grid li:first-child {
  --cols: 2;
  --rows: 2;
}
.grid li:nth-child(5) {
  --cols: 2;
}
.grid li:nth-child(6) {
  --rows: 2;
}
.grid li:nth-child(7) {
  --cols: 2;
}
.grid a {
  display: block;
  height: 10rem;
}
.grid img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s;
}
.grid figcaption {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: #fff;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  line-height: 1;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 0.125em;
  font-weight: 600;
} */

@media screen and (min-width: 45em) {
  /* .grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .grid li {
    grid-column-start: span var(--cols);
    grid-row-start: span var(--rows);
  }
  .grid a {
    padding-bottom: 52.65%;
  } */
  .curatext-box {
    position: absolute;
    left: 2.5rem;
    height: 400px;
    width: 500px;
  }
  .intro-video {
    border: 1px solid red;
    border-radius: 8px;
  }
}
</style>
