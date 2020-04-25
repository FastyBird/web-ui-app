<template>
  <fb-modal-window
    :show-header="slotExists('header')"
    :transparent-bg="transparentBg"
    :enable-closing="enableClosing"
    @close="close"
  >
    <template
      v-if="slotExists('header')"
      slot="modal-title"
    >
      <font-awesome-icon :icon="icon" />
      <slot name="header" />
    </template>

    <template slot="modal-body">
      <slot name="info" />
    </template>

    <template slot="modal-footer">
      <div class="fb-info-window__buttons">
        <fb-button
          v-if="enableClosing"
          uppercase
          variant="link"
          size="lg"
          name="close"
          tabindex="2"
          @click.prevent="close($event)"
        >
          {{ closeBtnLabel }}
        </fb-button>
        <template v-else>&nbsp;</template>
      </div>
    </template>
  </fb-modal-window>
</template>

<script>
import FbModalWindow from '../FbModalWindow/index'

export default {

  name: 'FbModalInfo',

  components: {
    FbModalWindow,
  },

  props: {

    icon: {
      type: String,
      required: true,
    },

    enableClosing: {
      type: Boolean,
      required: false,
      default: true,
    },

    closeBtnLabel: {
      type: String,
      required: false,
      default: 'Close',
    },

    transparentBg: {
      type: Boolean,
      default: false,
    },

  },

  methods: {

    /**
     * Close info modal window
     */
    close() {
      this.$emit('close', false)
    },

  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
