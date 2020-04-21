<template>
  <div>
    <div class="text-window w-full bg-white rounded-theme flex flex-col mb-10">
      <div class="divider w-full flex py-1 pl-1">
        <span class="select-none"> <img src="../assets/img/element_dot-25px-03.svg" alt="" /> </span>
        <span class="select-none"> <img src="../assets/img/element_min-25px-03.svg" alt="" /> </span>
        <span class="select-none"> <img src="../assets/img/element_plus-25px-03.svg" alt="" /> </span>
      </div>
      <div class="py-4 px-4 text-sm sm:text-base w-full">
        <slot><p>Insert your content between the TextWindow brackets</p></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextWindow'
}
</script>

<style>
.divider {
  height: 32px;
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
