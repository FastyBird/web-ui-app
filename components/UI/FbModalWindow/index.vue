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
          <div class="fb-modal-window__content">
            <div
              v-if="showHeader"
              class="fb-modal-window__header"
            >
              <slot name="modal-header">
                <button
                  v-if="enableClosing"
                  type="button"
                  class="close"
                  @click.prevent="close()"
                >
                  <span aria-hidden="true">×</span>
                  <span class="sr-only">{{ $t('buttons.close.title') }}</span>
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
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
  export default {

    name: 'FbModalWindow',

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

      transparentBg: {
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

      this.$nextTick(function() {
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
