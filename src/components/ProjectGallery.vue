/* eslint-disable prettier/prettier */
<template>
  <div>
    <VueGallery :images="images" :index="index" @close="index = null"></VueGallery>
    <div :class="'grid grid-cols-' + size + ' gap-' + gap">
      <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '300px' }"
      ></div>
    </div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery'

export default {
  name: 'Gallery',
  components: {
    VueGallery
  },
  props: {
    size: {
      type: Number,
      default: 4
    },
    gap: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      images: [
        'https://picsum.photos/400/300',
        'https://picsum.photos/300/500',
        'https://picsum.photos/300/400',
        'https://picsum.photos/500/300',
        'https://picsum.photos/400/300',
        'https://picsum.photos/300/500',
        'https://picsum.photos/300/400',
        'https://picsum.photos/500/300'
      ],
      index: null
    }
  }
}
</script>

<style></style>
