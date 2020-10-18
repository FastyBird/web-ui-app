<template>
  <div class="fb-layout-sign-box__container">
    <div class="fb-layout-sign-box__container-inner">
      <div class="fb-layout-sign-box__logo">
        <slot name="logo" />
      </div>

      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbLayoutSignBox',

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
