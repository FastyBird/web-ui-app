<template functional>
  <div class="fb-ui-loading-box__container">
    <fb-ui-spinner size="lg" />

    <div class="fb-ui-loading-box__spinner">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbUiLoadingBox',

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
