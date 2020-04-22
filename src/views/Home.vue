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
      <TextWindow class="curatext-english mb-0 max-w-none md:max-w-lg relative md:absolute z-10">
        <span v-html="curationtext"></span>
      </TextWindow>
      <parallax>
        <vimeo-player
          ref="player"
          video-id="400743103"
          :options="options_about"
          class="curatext-video w-screen md:mx-auto my-2 md:w-11/12 lg:w-10/12 relative md:absolute z-0"
        />
      </parallax>
      <span class="humongous-text font-display text-gray-900 absolute">in.finite</span>
      <TextWindow class="curatext-french max-w-none md:max-w-xl italic relative md:absolute z-10">
        <span v-html="curationtext_french"></span>
      </TextWindow>
    </div>

    <!-- Projects -->
    <div class="project-section flex justify-center items-center content-center relative">
      <!-- <Filters></Filters> -->
      <div class="absolute z-0 max-w-3xl">
        <transition name="fade">
          <KirbyImage class="rounded-theme border border-black object-contain h-auto"
            v-if="isHidden && imgFile"
            :file="imgFile"
            thumb="resize"
            :params="[800, 800]" />
        </transition>
      </div>
      <div class="grid grid-cols-2 my-4 gap-4 z-10 md:gap-6 my-6">
        <ul class="">
          <li v-for="(project, projectInd) in projects.slice(0, Math.floor(projects.length / 2))" :key="projectInd" class="">
            <router-link :to="'/' + project.id">
              <p class="font-display text-center text-lg uppercase mb-4 leading-none sm:text-xl md:text-2xl hover:italic"
                @mouseenter="showPicture(project)"
                @mouseleave="hidePicture">{{ project.content.title }}</p>
                <!-- project.content.cover[0].url -->
            </router-link>
          </li>
        </ul>
        <ul class="">
          <li v-for="(project, projectInd) in projects.slice(Math.floor(projects.length / 2)+1, projects.length)" :key="projectInd" class="">
            <router-link :to="'/' + project.id">
              <p class="font-display text-center text-lg uppercase mb-4 leading-none sm:text-xl md:text-2xl hover:italic"
                @mouseenter="showPicture(project)"
                @mouseleave="hidePicture">{{ project.content.title }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- Valérie Lamontagne honor statement  -->
    <div class="honor-statement pt-10">
      <img
        class="rounded-theme mx-auto w-9/12 lg:w-8/12 max-w-3xl object-contain mb-8"
        src="../assets/img/valerie_lamontagne_portrait.jpg"
        alt=""
      />
      <!-- <TextWindow :content="valerie"  class="w-9/12 md:max-w-lg mx-auto"></TextWindow> -->
      <TextWindow class="w-9/12 md:max-w-lg mx-auto">
        <p>
          This exhibition is dedicated to the memory <br />
          of Valérie Lamontagne (1968–2019).
        </p>
        <p class="mt-2 italic">
          Cette exposition est dédiée à la mémoire <br />
          de Valérie Lamontagne (1968–2019).
        </p>
        <p class="mt-8 mb-2">Make a Donation / <em>Faite un don</em></p>
        <div class="flex flex-row honor-link">
          <a href="http://www.concordia.ca/cunews/finearts/design/2019/10/28/valerie-lamontagne-1968-2019.html" target="_blank">
            > Valerie Lamontagne Scholarship Fund</a>
        </div>
      </TextWindow>
    </div>
  </main>
</template>

<script>
import page from '@/mixins/page'
import Filters from '@/components/Filters.vue'
import TextWindow from '@/components/TextWindow.vue'
import Parallax from 'vue-parallaxy'

export default {
  components: {
    //Filters,
    TextWindow,
    Parallax
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
      isHidden: false,
      imgFile: null
    }
  },
  methods:{
    showPicture(project) {
      console.log(project.content.cover[0])
      this.imgFile = project.content.cover[0] ? project.content.cover[0] : null
      this.isHidden = true;
    },
    hidePicture() {
      this.isHidden = false;
    },
  },
  async created() {
    await this.pageLoaded
    this.page.curatext = null

    const kten = await this.$api.getKirbyText(this.pageId, 'curatexten', 'curatextfr')
    console.log(kten)
    this.curationtext = kten.curatexten
    this.curationtext_french = kten.curatextfr

    const projects = await this.$api.getChildren('projects')
    console.log(projects)
    this.projects = projects.filter(project => project.status === 'listed')
  }
}
</script>

<style>

.intro-video {
  border-radius: 0px 0px 13px 13px;
}

.about-section {
  height: 1000px;
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
  top: 45%;
}
.project-section {
  height: 100vh;
  /* border-top: 1px dashed greenyellow;
  border-bottom: 1px dashed cyan; */
}
.honor-link {
  transition: all 0.3s ease;
}
.honor-link:hover {
  color: #d1d3d4;
}

.project-list {
  column-count: 2;
  column-width: 200px;
}

.fade-enter-active {
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scaleY(0.5) scaleX(0.7)

}
</style>
