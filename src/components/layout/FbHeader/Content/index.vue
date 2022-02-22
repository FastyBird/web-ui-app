<template>
  <teleport
    to="#fb-layout-header-sub-content"
    :disabled="!teleport"
  >
    <div class="fb-theme-layout-phone-header-content__container">
      <slot />
    </div>
  </teleport>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from 'vue'

export default defineComponent({

  name: 'FbLayoutHeaderContent',

  props: {

    teleport: {
      type: Boolean as PropType<boolean>,
      default: true,
    },

  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
