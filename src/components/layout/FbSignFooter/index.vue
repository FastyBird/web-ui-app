<template>
  <div class="fb-layout-sign-footer__container">
    <slot name="info" />

    <ul>
      <slot name="links" />
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbLayoutSignFooter',

})
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
