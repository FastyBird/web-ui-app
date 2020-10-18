<template>
  <p class="fb-field-error__container">
    <small>
      <slot />
    </small>
  </p>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbFormError',

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
