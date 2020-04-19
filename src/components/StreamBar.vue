<template>
  <section class="StreamBar">
    <div class="mistvideo" id="willitstream_xacigPhnKfjE">
      <a href="https://davidrawalia.com:4433/willitstream.html" target="_blank">
        Click here to play this video
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StreamBar',
  async created() {
    await this.pageLoaded
    var a = function() {
      mistPlay('willitstream', {
        target: document.getElementById('willitstream_xacigPhnKfjE')
      })
    }
    if (!window.mistplayers) {
      var p = document.createElement('script')
      p.src = 'https://davidrawalia.com:4433/player.js'
      document.head.appendChild(p)
      p.onload = a
    } else {
      a()
    }
  }
}
</script>

<style>
/** its not gonna work 
have faith have faith.
*/
.StreamBar {
  height: 100vh;
  /* position: absolute; */
  padding-left: 2.5rem;
  border-bottom: 1px dashed red;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  /* z-index: 98; */
}

.mistvideo {
  border-radius: 8px;
}
</style>
