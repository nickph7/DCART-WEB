<template>
  <main>
    <!-- TODO: Add icons for text boxes -->

    <!--Curatorial statement -->
    <div class="about-section justify-center items-center py-10 px-10 flex flex-col md:flex-row xl:flex-row">
      <!-- TODO: Could transfer this into its own component -->
      <div class="intro-video w-4/5 xl:flex-row justify-between">
        <!--  Resize video *check May Contain for reference -->
        <vimeo-player ref="player" :video-id="409639362" :options="options" :autoplay=true />
      </div>
      <div class="curatext-box mt-10">
        <div class="text-divider"></div>
        <span class="py-4 px-4" v-html="curationtext"></span>
      </div>
    </div>
    <!-- Projects -->
    <div class="project-section">
      <Filters></Filters>
    </div>
    <!-- Valérie Lamontagne honor statement  -->
    <div class="honor-statement justify-center items-center py-10 px-10 flex flex-col md:flex-row xl:flex-row">
      <div class="honor-text mb-10 md:mb-0 xl:mb-0">
        <div class="text-divider"></div>
        <p class="py-4 px-4">This exhibition is dedicated to the memory of <br /> Valérie Lamontagne (1968–2019).</p>
        <a class="honor-link py-4 px-4" href="http://www.concordia.ca/cunews/finearts/design/2019/10/28/valerie-lamontagne-1968-2019.html" target="_blank">Make a donation to the Valerie Lamontagne Scholarship Fund</a>
      </div>
      <img class="val-img" src="../assets/img/valerie_lamontagne_portrait.jpg" alt="">
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
      projects: [],
      options: {
        responsive: true,
        color: 'f7f7f7',
        portrait: false,
        loop: true

      }
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
  border-bottom: 1px dashed slateblue;
}
.curatext-box {
  font-size: 1.5vmax;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
  border-radius: 13px;
  background-color: white;
}
.text-divider {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid black;
}
.intro-video {
  border-radius: 13px;
}
.project-section {
  height: 100vh;
  border-bottom: 1px dashed cyan;
}
.honor-statement {
  height: 100vh;
}
.val-img {
  border-radius: 13px;
}
.honor-text {
  font-size: 1.5vmax;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
  border-radius: 13px;
  background-color: white;
}
.honor-link {
  transition: all .3s ease;
}
.honor-link:hover {
  color: #d1d3d4;
}
@media screen and (min-width: 45em) {
  .curatext-box {
    position: absolute;
    left: 2.5rem;
    font-size: 18px;
    /* height: 100%; */
    width: 575px;
  }
  .honor-text {
    position: absolute;
    left: 2.5rem;
    font-size: 18px;
    /* height: 100%; */
    width: 575px;
  }
}
</style>
