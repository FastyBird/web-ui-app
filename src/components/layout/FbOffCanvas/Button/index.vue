<template>
  <button
    class="fb-theme-layout-off-canvas-button__container"
    @click.prevent="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

  name: 'FbLayoutOffCanvasButton',

  emits: ['click'],

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
