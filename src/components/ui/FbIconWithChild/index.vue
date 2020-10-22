<template functional>
  <span :class="[data.class, data.staticClass, 'fb-icon-with-child__container']">
    <slot name="icon" />

    <span class="fb-icon-with-child__container-child">
      <slot name="child-icon" />
    </span>
  </span>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbIconWithChild',

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
