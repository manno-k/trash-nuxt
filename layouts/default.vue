<template>
  <transition>
    <nuxt/>
  </transition>
</template>
<script>

</script>
<style lang="scss">

  body {
    margin: 0;
  }

  #__layout {
    font-family: "Mplus 1p", -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
    text-align: center;
    color: #2c3e50;
  }

  .v-leave-active,
  .v-enter-active {
    transition: opacity 3s;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
</style>

