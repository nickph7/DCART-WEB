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
.StreamBar {
  height: 100vh;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.mistvideo {
  border-radius: 13px;
}
</style>
