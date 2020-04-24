<template>
  <!-- TODO: Insert Tab here -->
  <div>
    <button class="btn uppercase fixed mx-10 pt-10 z-50 transform rotate-90" @click="toggleStream">{{ buttonMessage }}</button>
    <section v-show="!isHidden" class="StreamBar my-10 mx-10 py-4 px-4 max-w-screen-sm w-11/12 inset-y-0 border border-theme">
      <div class="mistvideo h-auto" id="broadcast_jTK35Fmj8giF">
        <a href="https://www.streamserver.live:4433/broadcast.html" target="_blank" id="embededStream">
          Click here to play this video
        </a>
      </div>
      <iframe src="https://www.streamserver.live:9000/?join=vernissage" style="border:0; width:100%; height:500px;" id="embededChat"></iframe>
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
      return this.isHidden ? 'open stream' : 'close stream' 
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
          forcePriority: {"source":[["type",["html5/video/webm"]]]},
          controls: none
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
  right: -6.5rem;
  top: 8rem;
}

.StreamBar {
  position: fixed;
  right: -1rem;
  z-index: 49;
  background-color: #000000c4
}

.mistvideo {
  border-radius: 13px;
  overflow: hidden;
}


</style>
