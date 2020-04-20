<template>
  <!-- TODO: Insert Tab here -->
  <section class="StreamBar py-10 px-10">
    <div class="mistvideo" id="broadcast_jTK35Fmj8giF">
      <a href="https://streamserver.live:4433/broadcast.html" target="_blank" id="embededStream">
        Click here to play this video
      </a>
    </div>
    <iframe src="https://streamserver.live:9000/?join=vernissage" style="border:0; width:100%; height:500px;" id="embededChat"></iframe>
  </section>
</template>

<script>
export default {
  name: 'StreamBar',
  async created() {
    await this.pageLoaded
    var streamKill = true;
    if(streamKill){
      document.getElementById('embededStream').remove();
      document.getElementById('embededChat').remove();
      console.log("The vernissage is not happening right now.")
    }
    else{
      var a = function(){
        mistPlay("broadcast",{
          target: document.getElementById("broadcast_jTK35Fmj8giF"),
          forcePlayer: "html5",
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

<style>
.StreamBar {
  position: fixed;
  z-index: 100;
}

.mistvideo {
  border-radius: 13px;
}
</style>
