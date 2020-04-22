<template>
  <!-- TODO: Insert Tab here -->
  <div>
    <button class="btn uppercase fixed mx-10 z-50 transform rotate-90" @click="toggleStream">{{ buttonMessage }}</button>
    <section v-show="!isHidden" class="StreamBar py-10 px-10">
      <div class="mistvideo" id="broadcast_jTK35Fmj8giF">
        <a href="https://streamserver.live:4433/broadcast.html" target="_blank" id="embededStream">
          Click here to play this video
        </a>
      </div>
      <iframe src="https://streamserver.live:9000/?join=vernissage" style="border:0; width:100%; height:500px;" id="embededChat"></iframe>
    </section>
  </div>
</template>

<script>
export default {
  name: 'StreamBar',
  data() {
    return{
      isHidden: true
    }
  },
  methods: {
    toggleStream() {
      this.isHidden = !this.isHidden
    }
  },
  computed: {
    buttonMessage: function(){
      return this.isHidden ? 'open' : 'close' 
    }
  },
  async created() {
    await this.pageLoaded
    var streamKill = false;   //change to false to make stream appear!
    if(streamKill){
      document.getElementById('embededStream').remove();
      document.getElementById('embededChat').remove();
    }
    else{
      var a = function(){
        mistPlay("broadcast",{
          target: document.getElementById("broadcast_jTK35Fmj8giF"),
          forcePriority: {"source":[["type",["html5/video/webm"]]]}
        });
      };
      if (!window.mistplayers) {
        var p = document.createElement("script");
        p.src = "https://streamserver.live:4433/player.js"
        document.head.appendChild(p);
        p.onload = a;
      }
      else { a(); }
    }
  }
}
</script>

<style scoped>
.btn {
  left: -4rem;
}

.StreamBar {
  position: fixed;
  z-index: 49;
}

.mistvideo {
  border-radius: 13px;
}
</style>
