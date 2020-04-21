<template>
  <div>
    <!-- portraits -->
    <div :class="'grid grid-cols-'+numCols+' grid-rows-'+numRows+' grid-flow-row gap-2 w-md'">
      <figure v-for="(image, index) in imageFiles" :key="index">
        <img :src="image" alt="">
      </figure>
    </div>   
    <!-- text - add border around text -->
        <!-- Border -->
          <!-- <div class="divider flex pt-1">
                <span class="px-1"> <img src="../assets/img/element_dot-02.svg" alt=""> </span>
                <span class="px-1"> <img src="../assets/img/element_min-02-02.svg" alt=""> </span>
                <span class="px-1"> <img src="../assets/img/element_plus-02.svg" alt=""> </span>
          </div> -->
  </div>
</template>

<script>
export default {
  name: 'ArtistSection',
  data() {
    return {
      dummyImage: [
        'chi', 'foo', 'mi'
      ]
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
      type: Array,
      default() {
        return ['Sideshow Bob', 'Montgomery Burns', 'Lisa Simpson', 'Milhouse Van Houten', 'Matt Groening']
      }
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
      console.log(cols)
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
/* .divider {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid black;
} */

@media screen and (min-width: 45rem) {
}
</style>
