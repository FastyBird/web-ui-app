<template>
  <li class="fb-layout-sign-footer-item__container">
    <slot />
  </li>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbLayoutSignFooterItem',

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
