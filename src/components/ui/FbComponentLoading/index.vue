<template>
  <div class="fb-ui-component-loading__container">
    <div class="fb-ui-component-loading__icon">
      <fb-ui-spinner />
    </div>

    <p class="fb-ui-component-loading__text">
      Preparing content, please wait...
    </p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbUiComponentLoading',

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
