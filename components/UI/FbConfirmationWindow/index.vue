<template>
  <fb-modal-window
    :show-footer="false"
    :show-header="false"
    :transparent-bg="transparentBg"
    @close="close"
  >
    <template slot="modal-body">
      <div class="fb-confirmation-window__container">
        <font-awesome-icon
          :icon="icon"
          :class="[textClass]"
        />
        <h3 :class="[textClass]">
          <slot name="header" />
        </h3>

        <slot name="question" />

        <div class="fb-confirmation-window__buttons">
          <template v-if="primaryButton === 'no'">
            <fb-button
              v-if="showYes"
              uppercase
              variant="link"
              size="lg"
              :class="[textClass]"
              tabindex="2"
              @click.prevent="confirm()"
            >
              {{ $t('buttons.yes.title') }}
            </fb-button>

            <fb-button
              v-if="showNo"
              uppercase
              variant="outline-default"
              size="lg"
              tabindex="3"
              @click.prevent="close()"
            >
              {{ $t('buttons.no.title') }}
            </fb-button>
          </template>

          <template v-else>
            <fb-button
              v-if="showNo"
              uppercase
              variant="link"
              size="lg"
              tabindex="2"
              @click.prevent="close()"
            >
              {{ $t('buttons.no.title') }}
            </fb-button>

            <fb-button
              v-if="showYes"
              uppercase
              :variant="buttonVariant"
              size="lg"
              tabindex="3"
              @click.prevent="confirm()"
            >
              {{ $t('buttons.yes.title') }}
            </fb-button>
          </template>
        </div>
      </div>
    </template>
  </fb-modal-window>
</template>

<script>
  import FbModalWindow from '../FbModalWindow/index'

  export default {

    name: 'FbConfirmationWindow',

    components: {
      FbModalWindow,
    },

    props: {

      icon: {
        type: String,
        required: true,
      },

      primaryButton: {
        type: String,
        default: 'no',
        validator: (value) => {
          // The value must match one of these strings
          return ['yes', 'no'].indexOf(value) !== -1
        },
      },

      text: {
        type: String,
        default: 'danger',
        validator: (value) => {
          // The value must match one of these strings
          return ['primary', 'success', 'warning', 'info', 'danger'].indexOf(value) !== -1
        },
      },

      showYes: {
        type: Boolean,
        default: true,
      },

      showNo: {
        type: Boolean,
        default: true,
      },

      transparentBg: {
        type: Boolean,
        default: false,
      },

    },

    computed: {

      /**
       * @returns {String}
       */
      buttonVariant() {
        switch (this.text) {
          case 'primary':
            return 'outline-primary'

          case 'success':
            return 'outline-success'

          case 'warning':
            return 'outline-warning'

          case 'info':
            return 'outline-info'

          case 'danger':
            return 'outline-danger'
        }

        return 'default'
      },

      /**
       * @returns {String}
       */
      textClass() {
        return `text-${this.text}`
      },

    },

    methods: {

      /**
       * Confirm button clicked
       */
      confirm() {
        this.$emit('confirmed', false)
      },

      /**
       * Close confirmation window
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

<i18n src="./locales.json" />
