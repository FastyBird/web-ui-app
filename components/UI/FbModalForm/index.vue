<template web>
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
      @submit.prevent="submit"
    >
      <slot name="form" />
    </form>

    <template slot="modal-footer">
      <fb-button
        uppercase
        variant="link"
        size="lg"
        :disabled="lockButtons"
        :tabindex="(initialTabindex + 2)"
        name="close"
        class="text-muted"
        @click.prevent="close()"
      >
        {{ cancelButton !== null ? cancelButton : $t('buttons.close.title') }}
      </fb-button>
      <fb-button
        uppercase
        variant="outline-primary"
        size="lg"
        :disabled="lockButtons"
        :tabindex="(initialTabindex + 1)"
        name="save"
        @click.prevent="submit()"
      >
        {{ submitButton !== null ? submitButton : $t('buttons.save.title') }}
      </fb-button>
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

      submitButton: {
        type: String,
        required: false,
        default: null,
      },

      cancelButton: {
        type: String,
        required: false,
        default: null,
      },

      lockButtons: {
        type: Boolean,
        required: false,
        default: false,
      },

      transparentBg: {
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

<i18n src="./locales.json" />
