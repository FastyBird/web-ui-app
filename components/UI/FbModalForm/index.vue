<template>
  <fb-modal-window
    :transparent-bg="transparentBg"
    @close="close"
  >
    <template slot="modal-title">
      <font-awesome-icon :icon="icon" />
      <slot name="header" />
    </template>

    <form
      slot="modal-body"
      class="fb-form-window__form"
      @submit.prevent="submit"
    >
      <slot name="form" />

      <div
        v-if="resultIsOk"
        class="fb-form-window__result"
      >
        <fb-result-ok />
      </div>

      <div
        v-if="resultIsErr"
        class="fb-form-window__result"
      >
        <fb-result-err />
      </div>
    </form>

    <template slot="modal-footer">
      <div class="fb-form-window__buttons">
        <fb-button
          uppercase
          variant="link"
          size="lg"
          :disabled="lockButtons"
          :tabindex="(initialTabindex + 2)"
          name="close"
          @click.prevent="close()"
        >
          {{ cancelBtnLabel }}
        </fb-button>
        <fb-button
          uppercase
          variant="outline-primary"
          size="lg"
          :disabled="lockButtons || lockSubmitButton"
          :tabindex="(initialTabindex + 1)"
          name="save"
          @click.prevent="submit()"
        >
          {{ submitBtnLabel }}
        </fb-button>
      </div>
    </template>
  </fb-modal-window>
</template>

<script>
import FbModalWindow from '../FbModalWindow/index'

export default {

  name: 'FbModalForm',

  components: {
    FbModalWindow,
  },

  props: {

    icon: {
      type: String,
      required: true,
    },

    submitBtnLabel: {
      type: String,
      required: false,
      default: 'Save',
    },

    cancelBtnLabel: {
      type: String,
      required: false,
      default: 'Close',
    },

    lockButtons: {
      type: Boolean,
      required: false,
      default: false,
    },

    lockSubmitButton: {
      type: Boolean,
      required: false,
      default: false,
    },

    transparentBg: {
      type: Boolean,
      default: false,
    },

    resultIsOk: {
      type: Boolean,
      default: false,
    },

    resultIsErr: {
      type: Boolean,
      default: false,
    },

  },

  data() {
    return {
      initialTabindex: 1,
    }
  },

  created() {
    this.initialTabindex = this._.get(this, '$slots.form', []).length + 1
  },

  methods: {

    /**
     * Close form modal window
     */
    close() {
      this.$emit('close', false)
    },

    /**
     * Submit form
     */
    submit() {
      this.$emit('submit')
    },

  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
