<template>
  <div class="flex flex-col justify-around items-center md:flex-row md:justify-around md:items-start mx-auto">
    <!-- portraits -->
    <div :class="'grid grid-cols-'+numRows+' grid-rows-'+numCols+' grid-flow-row md:grid-cols-'+numCols+' md:grid-rows-'+numRows+' gap-2 w-lg mb-8 md:mb-0 md:w-md md:mr-8'">
      <figure class="rounded-theme" v-for="(image, index) in imageFiles" :key="index">
        <KirbyImage :file="image" thumb="crop" :params="[200]" class="rounded-theme object-cover" style="width: 200; height: 100%;"/>
      </figure>
    </div>   
    <!-- text - add border around text -->
    <TextWindow class="artist-window w-full md:w-7/10">
      <p class="font-display pb-2">Artists</p>
      <input 
        id="artistInput"
        class="rounded-theme border border-solid border-black px-4 py-2 leading-tight w-full" 
        type="text" 
        :value="artistNames"
        @focusout="resetValues('artistInput', artistNames)">
      <p class="font-display py-2">Program</p>
      <input 
        id="programInput"
        class="rounded-theme border border-solid border-black px-4 py-2 leading-tight w-full" 
        type="text" 
        :value="program"
        @focusout="resetValues('programInput', program)">
      <p class="font-display py-2">Year</p>
      <input 
        id="yearInput"
        class="rounded-theme border border-solid border-black px-4 py-2 leading-tight w-full" 
        type="text" 
        :value="year"
        @focusout="resetValues('yearInput', year)">
      <p class="font-display py-2">Quote</p>
      <div class="rounded-theme border border-solid border-black px-4 py-2 leading-tight w-full cursor-text">
        <p class="mb-4">{{ quote_english }}</p>
        <p class="italic">{{ quote_french }}</p>
      </div>
    </TextWindow>
  </div>
</template>

<script>
/**
 * - Artists Name
 * - Program / Year of student
 * - Quote english and french
 * - Contact
 */

import TextWindow from '@/components/TextWindow.vue'
import KirbyImage from '@/components/KirbyImage.vue'

export default {
  components: {
    TextWindow, KirbyImage
  },
  name: 'ArtistSection',
  data() {
    return {
      dummyImage: [
        'chi', 'foo', 'mi'
      ],
    }
  },
  props: {
    imageFiles: {
      type: Array,
      default() {
        return [
          'https://i.picsum.photos/id/890/200/200.jpg',
          'https://i.picsum.photos/id/428/200/200.jpg',
          'https://i.picsum.photos/id/915/200/200.jpg',
          'https://i.picsum.photos/id/704/200/200.jpg',
          'https://i.picsum.photos/id/516/200/200.jpg'
        ]
      }
    },
    artistNames: {
      type: String,
      default: 'Sideshow Bob, Montgomery Burns, Lisa Simpson, Milhouse Van Houten, Matt Groening'
    },
    program: {
      type: String,
      default: 'Biology'
    },
    year: {
      type: String,
      default: 'Fifth'
    },
    quote_english: {
      type: String,
      default: "Shia Laboeuf says that you should just do it and I related to that"
    },
    quote_french: {
      type: String,
      default: "Shia laboeuf a dit que je devrais juste le faire et je pense que c'est vrai"
    }
  },
  methods: {
    resetValues(id, values) {
      let inputTest = document.getElementById(id)
      inputTest.value = values
    }
  },
  computed: {
    numRows: function(){
      let rows = Math.floor((this.imageFiles.length / 2) + 1)
      //console.log(rows)
      return rows
    },
    numCols: function(){
      let cols = this.imageFiles.length > 1 ? 2 : 1
      //console.log(cols)
      return cols
    }
  }
}

/**

 *    [1] [2] 
 *    [4] [3]
 *        [5]
 
 */
</script>

<style>
</style>
