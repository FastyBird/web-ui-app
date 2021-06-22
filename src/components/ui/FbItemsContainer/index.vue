<template>
  <div class="fb-ui-items-container__container">
    <div class="fb-ui-items-container__heading-container">
      <div class="fb-ui-items-container__heading">
        <h3>
          <slot name="heading" />
          <small v-if="'subheading' in $slots"><slot name="subheading" /></small>
        </h3>
      </div>

      <div
        v-if="'buttons' in $slots"
        class="fb-ui-items-container__buttons"
      >
        <slot name="buttons" />
      </div>
    </div>

    <div class="fb-ui-items-container__items">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbUiItemsContainer',

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
