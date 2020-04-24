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
        <!-- Placeholder -->
        <vimeo-player ref="playerIntro" :options="options" video-id="410838309" />
      </div>
    </div>
    <!--Curatorial statement/About section -->
    <div class="about-section my-10 py-20 mx-auto flex flex-col relative my-20 max-w-screen-xl">
      <TextWindow class="curatext-english max-w-none md:max-w-lg relative md:absolute z-10">
        <span v-html="curationtext"></span>
      </TextWindow>
      <div
        class="rellax"
        :class="[isPlaying ? 'z-50' : 'z-0']"
        v-rellax="{
        speed: -2.5
      }">
        <vimeo-player
          ref="playerAbout"
          video-id="411433483"
          :options="options_about"
          @play="enterVideoTheatre"
          @pause="exitVideoTheatre"
          @stop="exitVideoTheatre"
          class="curatext-video w-screen -ml-4 md:ml-0 md:mx-auto my-2 md:w-11/12 lg:w-10/12 relative md:absolute"
        />
      </div>
      <span class="hidden md:block humongous-text font-display text-gray-900 absolute">in.finite</span>
      <TextWindow class="curatext-french max-w-none md:max-w-xl italic relative md:absolute z-10">
        <span v-html="curationtext_french"></span>
      </TextWindow>
    </div>

    <!-- Projects -->
    <div class="project-section flex justify-center items-center content-center relative">
      <div class="absolute z-0 max-w-3xl top-0" :style="{top: imgTop + '%'}">
        <transition name="fade">
          <img
            class="rounded-theme border border-black object-contain h-auto"
            v-if="isHidden"
            :src="imgFile.url"
          >
        </transition>
      </div>
      <div class="grid grid-cols-2 my-4 gap-4 z-10 md:gap-6 my-6">
        <ul class="">
          <li v-for="(project, projectInd) in projects.slice(0, Math.floor(projects.length / 2))" :key="projectInd" class="">
            <router-link :to="'/' + project.id">
              <p
                class="font-display text-center text-lg uppercase mb-4 leading-none sm:text-xl md:text-2xl hover:italic"
                @mouseenter="showPicture(project, projectInd)"
                @mouseleave="hidePicture"
              >
                {{ project.content.title }}
              </p>
              <!-- project.content.cover[0].url -->
            </router-link>
          </li>
        </ul>
        <ul class="">
          <li v-for="(project, projectInd) in projects.slice(Math.floor(projects.length / 2) + 1, projects.length)" :key="projectInd" class="">
            <router-link :to="'/' + project.id">
              <p
                class="font-display text-center text-lg uppercase mb-4 leading-none sm:text-xl md:text-2xl hover:italic"
                @mouseenter="showPicture(project, projectInd)"
                @mouseleave="hidePicture"
              >
                {{ project.content.title }}
              </p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- Valérie Lamontagne honor statement  -->
    <div class="honor-statement pt-10 mb-10">
      <img class="rounded-theme mx-auto w-9/12 lg:w-8/12 max-w-3xl object-contain mb-8" src="../assets/img/valerie_lamontagne_portrait.jpg" alt="" />
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
        <!-- <p class="mt-8 mb-2">Make a Donation / <em>Faite un don</em></p> -->
        <div class="flex flex-row honor-link">
          <a href="http://www.concordia.ca/cunews/finearts/design/2019/10/28/valerie-lamontagne-1968-2019.html" target="_blank">
            <div class="flex flex-row mt-8">
              <p class="pr-4">></p>
              <div>
                <p>Make a Donation / <em>Faite un don</em></p>
                <p>Valerie Lamontagne Scholarship Fund</p>
              </div>
            </div>
          </a>
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
        controls: false,
        muted: true
      },
      options_about: {
        responsive: true,
        color: 'f7f7f7'
      },
      isHidden: false,
      imgFile: null,
      imgTop: 0,
      isPlaying: false
    }
  },
  methods: {
    showPicture(project, index) {
      //console.log(index)
      this.imgFile = project.content.cover[0] ? project.content.cover[0] : null
      this.imgTop = (index % 28) * 2.142857
      this.isHidden = true
    },
    hidePicture() {
      this.isHidden = false
    },
    enterVideoTheatre(){
      //console.log('Enter Video Theatre')
      this.isPlaying = true;

    },
    exitVideoTheatre(){
      this.isPlaying = false;
    }
  },
  async created() {
    await this.pageLoaded
    this.page.curatext = null

    const kten = await this.$api.getKirbyText(this.pageId, 'curatexten', 'curatextfr')
    //console.log(kten)
    this.curationtext = kten.curatexten
    this.curationtext_french = kten.curatextfr

    const projects = await this.$api.getChildren('projects')
    //console.log(projects)
    this.projects = projects.filter(project => project.status === 'listed')
  }
}
</script>

<style>
.intro-video {
  border-radius: 0px 0px 13px 13px;
}

.about-section {
  height: 1280px;
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

@media screen and (max-width: 768px){
  .rellax {
    transform:translate3d(0, 0 ,0) !important;
  }
}

.humongous-text {
  z-index: -10;
  font-size: 15rem;
  top: 45%;
  right: 19%;
  -webkit-text-stroke: 1px black;
  -webkit-text-fill-color: white;
  color: #0c0c0c
}
.project-section {
  height: auto;
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

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.5) scaleX(0.7);
}
</style>
