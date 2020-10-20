<template>
  <div class="fb-ui-modal-header__container">
    <button
      type="button"
      class="fb-ui-modal-window__close"
      @click.prevent="$emit('close', $event)"
    >
      <span aria-hidden="true">×</span>
      <span class="sr-only">{{ closeBtnLabel }}</span>
    </button>

    <div class="fb-ui-modal-header__heading">
      <slot name="icon" />

      <h4>
        <slot name="heading" />
      </h4>

      <small v-if="slotExists('description')">
        <slot name="description" />
      </small>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbUiModalHeader',

  props: {

    closeBtnLabel: {
      type: String,
      required: false,
      default: 'Close',
    },

  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
