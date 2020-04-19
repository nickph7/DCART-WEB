<template>
  <main>
    <!-- <Intro :pageTitle="page.title" /> -->
    <div class="issuu py-10 px-10">
      hello
    </div>
  </main>
</template>

<script>
import page from '@/mixins/page'

export default {
  name: 'Catalogue',
  mixins: [page],
  data() {
    return {
      notes: []
    }
  },
  async created() {
    let notes = await this.$api.getChildren(this.pageId)
    notes = notes.filter(note => note.status === 'listed')
    notes.sort((a, b) => new Date(b.content.date) - new Date(a.content.date))
    this.notes = notes
  }
}
</script>

<style>
.issuu {
  height: 100vh;
  border-bottom: 1px dashed cyan;
}
</style>
