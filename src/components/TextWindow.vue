<template>
  <div>
    <div class="text-window w-full bg-white rounded-theme mt-10 flex flex-col mb-10">
      <div class="divider w-full flex pt-1">
        <span class="px-2 select-none"> <img src="../assets/img/element_dot-02.svg" alt="" /> </span>
        <span class="px-2 select-none"> <img src="../assets/img/element_min-02-02.svg" alt="" /> </span>
        <span class="px-2 select-none"> <img src="../assets/img/element_plus-02.svg" alt="" /> </span>
      </div>
      <div class="py-4 px-4 text-sm sm:text-base w-full" v-html="content"></div>
    </div>
  </div>
</template> 

<script>
export default {  
  name: 'TextWindow',
  props: {
    content: {
      type: String, 
      default: `<p>Insert your html content here</p>`
    }
  }
}
</script>  

<style>
.divider {
  height: 30px;  
  border-bottom: 1px solid black;
}
.text-window {
  border: 1px solid black;
}

@media screen and (min-width: 45rem) {
  .text-window {
    left: 2.5rem;
  }
}
</style>
