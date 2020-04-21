<template>
  <main>
    <div class="intro-section mx-auto rounded-theme border-solid border-black border-1 flex flex-col w-full md:w-11/12 lg:w-10/12 xl:w-9/12">
      <div class="divider w-full text-center text-xs sm:text-sm md:text-base flex items-center justify-center">
        <div class="block sm:hidden">
          <h1 class="inline">IN.FINITE</h1>
          <span class="font-display mx-1">&ndash;</span>
          <h2 class="inline">Concordia D/Cart Year End Show</h2>
        </div>
        <div class="hidden sm:block">
          <h1 class="inline">IN.FINITE</h1>
          <span class="font-display mx-1">&ndash;</span>
          <h2 class="inline">Concordia Design and Computation Art Year End Show</h2>
        </div>
      </div>
      <div class="intro-video overflow-hidden z-10 bg-black">
        <vimeo-player ref="player" :options="options" video-id="409639362" />
      </div>
    </div>
    <!--Curatorial statement/About section -->
    <div class="about-section my-10 py-20 flex flex-col relative">
      <TextWindow :content="curationtext" class="curatext-english max-w-none md:max-w-lg relative md:absolute z-10"></TextWindow>
      <vimeo-player
        ref="player"
        video-id="400743103"
        :options="options_about"
        class="curatext-video w-screen md:mx-auto my-2 md:w-11/12 lg:w-10/12 relative md:absolute z-0"
      />
      <span class="humongous-text font-display text-gray-900 absolute">IN.FINITE</span>
      <TextWindow :content="curationtext_french" class="curatext-french max-w-none md:max-w-xl italic relative md:absolute z-10"></TextWindow>
    </div>
    <!-- Projects -->
    <div class="project-section">
      <Filters></Filters>
    </div>
    <!-- Valérie Lamontagne honor statement  -->
    <div class="honor-statement py-10">
      <img class="rounded-theme mx-auto w-9/12 lg:w-8/12 max-w-3xl object-contain" src="../assets/img/valerie_lamontagne_portrait.jpg" alt="" />
      <TextWindow :content="valerie"  class="w-9/12 md:max-w-lg mx-auto"></TextWindow>
    </div>
  </main>
</template>

<script>
import page from '@/mixins/page'
import Filters from '@/components/Filters.vue'
import TextWindow from '@/components/TextWindow.vue'

export default {
  components: {
    Filters,
    TextWindow
  },
  name: 'Home',
  mixins: [page],
  data() {
    return {
      curationtext: '',
      curationtext_french: '',
      projects: [],
      options: {
        responsive: true,
        color: 'f7f7f7',
        portrait: false,
        loop: true,
        autoplay: true,
        controls: false
      },
      options_about: {
        responsive: true,
        color: 'f7f7f7'
      },
      valerie: `<p>
          This exhibition is dedicated to the memory <br> of 
          Valérie Lamontagne (1968–2019).</p>
          <p class="mt-2 italic">Cette exposition est dédiée à la mémoire <br> de Valérie Lamontagne (1968–2019).</p>
          <p class="mt-8 mb-2">Make a Donation / <em>Faite un don</em></p>
        <div class="flex flex-row honor-link">
          <a 
          href="http://www.concordia.ca/cunews/finearts/design/2019/10/28/valerie-lamontagne-1968-2019.html"
          target="_blank"
          > > Valerie Lamontagne Scholarship Fund</a>
        </div>`
    }
  },
  async created() {
    await this.pageLoaded
    this.page.curatext = null

    const kten = await this.$api.getKirbyText(this.pageId, 'curatexten', 'curatextfr')
    console.log(kten)
    this.curationtext = kten.curatexten
    this.curationtext_french = kten.curatextfr
  }
}
</script>

<style>
.intro-video {
  border-radius: 0px 0px 13px 13px;
}

.about-section {
  height: 1200px;
  /* border-bottom: 1px dashed slateblue; */
}

@media screen and (min-width: 768px) {
  .curatext-english {
    top: 0;
    right: 44%;
  }

  .curatext-video {
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
  }

  .curatext-french {
    bottom: 0;
    right: 0;
  }
}

.humongous-text {
  z-index: -10;
  font-size: 15rem;
  top: 45%
}

.divider {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid black;
}
.project-section {
  height: 100vh;
  border-bottom: 1px dashed cyan;
}
.honor-statement {
  height: 100%;
}
.honor-link {
  transition: all 0.3s ease;
}
.honor-link:hover {
  color: #d1d3d4;
}
</style>
