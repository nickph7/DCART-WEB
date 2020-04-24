<template>
  <main>
    <div class="project-directory h-full mb-10">
      <ul class="project-dir grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 max-w-screen-xl mx-auto">
        <li class="" v-for="(project,index) in projects" :key="index">
          <router-link :to="'/' + project.id">
            <figure class="relative rounded-theme border border-solide border-black overflow-hidden" style="padding-bottom: 90%;">
              <div class="absolute inset-x-0 h-6 w-full bg-white border-b border-solid border-black z-10">
                <figcaption class="font-display uppercase text-center text-xs my-1">{{ transformTitle(project.content.title) }}</figcaption>
              </div>
              <img
                class="absolute inset-0 w-full h-full object-cover"
                :src="thumbnails[index].url"
              >
            </figure>
          </router-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import page from '@/mixins/page'

export default {
  name: 'Projects',
  mixins: [page],
  data() {
    return {
      projects: [],
      thumbnails: []
    }
  },
  methods: {
    transformTitle(title) {
      return title.length > 20 ? title.slice(0, 19 - 3) + '...' : title
    }
  },
  async created() {
    const projects = await this.$api.getChildren(this.pageId)
    this.projects = projects.filter(project => project.status === 'listed')

    const thumbnails = await this.$api.getFiles('projects+thumbnails')
    console.log(thumbnails)
    this.thumbnails = thumbnails
  }
}
</script>

<style>
.project-dir img {
  transition: all 0.2s;
}

.project-dir img:hover {
  transform: scale(1.1);
}
</style>
