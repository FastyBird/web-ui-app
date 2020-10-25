<template functional>
  <span :class="[data.class, data.staticClass, 'fb-modal-header-icon__container']">
    <slot />
  </span>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbUiModalHeaderIcon',

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
