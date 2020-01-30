<template>
  <transition name="modal">
    <section
      :class="['fb-modal-window__container', {'transparent': transparentBg}]"
      role="dialog"
      @keyup.esc="close()"
    >
      <div class="fb-modal-window__window">
        <div
          :class="['fb-modal-window__dialog', {'modal-lg': large && !small, 'modal-sm': small && !large}]"
          :style="{width: optionalWidth}"
          role="document"
        >
          <transition name="bounce">
            <div
              v-if="loader"
              class="fb-modal-window__loading"
            >
              <div class="fb-modal-window__loading-box">
                <div>
                  <logo />
                  <div class="fb-modal-window__loading-spinner" />
                </div>
              </div>
            </div>
          </transition>

          <slot name="modal-content">
            <div class="fb-modal-window__content">
              <div
                v-if="showHeader"
                class="fb-modal-window__header"
              >
                <slot name="modal-header">
                  <button
                    v-if="enableClosing"
                    type="button"
                    class="fb-modal-window__close"
                    @click.prevent="close()"
                  >
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">{{ closeBtnLabel }}</span>
                  </button>

                  <h4>
                    <slot name="modal-title">
                      {{ title }}
                    </slot>
                  </h4>
                </slot>
              </div>

              <div class="fb-modal-window__body">
                <slot name="modal-body" />
              </div>

              <div
                v-if="showFooter"
                class="fb-modal-window__footer"
              >
                <slot name="modal-footer">
                  <fb-button
                    variant="default"
                    tabindex="2"
                    @click.prevent="close()"
                  >
                    {{ cancelText }}
                  </fb-button>
                  <fb-button
                    variant="primary"
                    tabindex="3"
                  >
                    {{ okText }}
                  </fb-button>
                </slot>
              </div>
            </div>
          </slot>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
  import Logo from '../../../assets/images/fastybird_signin.svg?inline'

  export default {

    name: 'FbModalWindow',

    components: {
      Logo,
    },

    props: {

      large: {
        type: Boolean,
        default: false,
      },

      small: {
        type: Boolean,
        default: false,
      },

      title: {
        type: String,
        default: '',
      },

      width: {
        type: [String, Number],
        default: null,
      },

      okText: {
        type: String,
        default: 'Ok',
      },

      cancelText: {
        type: String,
        default: 'Cancel',
      },

      showHeader: {
        type: Boolean,
        default: true,
      },

      showFooter: {
        type: Boolean,
        default: true,
      },

      enableClosing: {
        type: Boolean,
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

      loader: {
        type: Boolean,
        default: false,
      },

    },

    computed: {

      optionalWidth() {
        if (this.width === null) {
          return null
        } else if (Number.isInteger(this.width)) {
          return `${this.width}px`
        }

        return this.width
      },

    },

    mounted() {
      this.$el.tabIndex = 1

      this.$nextTick(() => {
        this.$el.focus()
      })
    },

    methods: {

      close() {
        this.$emit('close', true)
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>

<style rel="stylesheet/scss" lang="scss">
  .bounce-enter-active {
    animation: bounce-in .25s;
  }

  .bounce-leave-active {
    animation: bounce-in .25s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>

