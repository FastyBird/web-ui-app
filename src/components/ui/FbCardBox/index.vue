<template>
  <div class="fb-ui-card__container">
    <div
      v-if="slotExists('header')"
      class="fb-ui-card__header"
    >
      <slot name="header" />
    </div>

    <div
      v-if="slotExists('body')"
      class="fb-ui-card__body"
    >
      <slot name="body" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbUiCardBox',

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
