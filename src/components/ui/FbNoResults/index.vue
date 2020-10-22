<template>
  <div class="fb-no-results__container">
    <fb-icon-with-child v-if="slotExists('second-icon')">
      <template slot="icon">
        <slot name="icon" />
      </template>

      <template slot="second-icon">
        <slot name="second-icon" />
      </template>
    </fb-icon-with-child>

    <template v-else>
      <slot name="icon" />
    </template>

    <p>
      <slot />
    </p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbNoResults',

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
