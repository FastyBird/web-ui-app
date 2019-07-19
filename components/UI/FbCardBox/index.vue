<template web>
  <div class="fb-card__container">
    <div
      v-if="slotExists('header')"
      class="fb-card__header"
    >
      <slot name="header" />
    </div>

    <div
      v-if="slotExists('body')"
      class="fb-card__body"
    >
      <slot name="body" />
    </div>
  </div>
</template>

<script>
  export default {

    name: 'FbCardBox',

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
