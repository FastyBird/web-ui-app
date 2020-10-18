<template>
  <div class="fb-ui-media-item__container">
    <div
      v-if="slotExists('left')"
      class="fb-ui-media-item__left"
    >
      <slot name="left" />
    </div>

    <div class="fb-ui-media-item__body">
      <h3>
        <slot name="heading" />
      </h3>

      <p
        v-if="slotExists('description')"
        class="fb-ui-media-item__description"
      >
        <slot name="description" />
      </p>

      <p
        v-if="slotExists('action')"
        class="fb-ui-media-item__action"
      >
        <slot name="action" />
      </p>
    </div>

    <div
      v-if="slotExists('right')"
      class="fb-ui-media-item__right"
    >
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbUiMediaItem',

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
