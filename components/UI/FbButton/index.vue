<template web>
  <router-link
    v-if="to !== null"
    :to="to"
    :class="buttonClass"
    role="button"
  >
    <slot />
  </router-link>

  <a
    v-else-if="href !== null"
    :href="href"
    :class="buttonClass"
    role="button"
  >
    <slot />
  </a>

  <button
    v-else
    :type="type"
    :class="buttonClass"
    :disabled="disabled"
    role="button"
    @click="clickCallback($event)"
  >
    <slot />
  </button>
</template>

<template native>
  <button
    :type="type"
    :class="buttonClass"
    :disabled="disabled"
    :text="_.get($slots, '[\'default\'][0][\'text\']', 'OK')"
    role="button"
    @tap="tapCallback($event)"
  />
</template>

<script>
  export default {

    name: 'FbButton',

    props: {

      href: {
        type: String,
        default: null,
      },

      to: {
        type: [String, Object],
        default: null,
      },

      type: {
        type: String,
        default: 'button',
        validator: (value) => {
          // The value must match one of these strings
          return ['button', 'submit', 'reset'].indexOf(value) !== -1
        },
      },

      size: {
        type: String,
        default: null,
        validator: (value) => {
          // The value must match one of these strings
          return ['lg', 'sm', 'xs'].indexOf(value) !== -1
        },
      },

      variant: {
        type: String,
        default: 'default',
        validator: (value) => {
          // The value must match one of these strings
          return [
            'default', 'primary', 'success', 'danger', 'warning', 'info',
            'outline-default', 'outline-primary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info',
            'link',
          ].indexOf(value) !== -1
        },
      },

      block: {
        type: Boolean,
        default: false,
      },

      uppercase: {
        type: Boolean,
        default: false,
      },

      pill: {
        type: Boolean,
        default: false,
      },

      thick: {
        type: Boolean,
        default: false,
      },

      expander: {
        type: Boolean,
        default: false,
      },

      icon: {
        type: Boolean,
        default: false,
      },

      disabled: {
        type: Boolean,
        default: false,
      },

    },

    computed: {

      buttonClass() {
        const classes = []

        classes.push('fb-btn')
        classes.push(`fb-btn-${this.variant}`)

        if (this.block) {
          classes.push('fb-btn-block')
        }

        if (this.pill) {
          classes.push('fb-btn-pill')
        }

        if (this.thick) {
          classes.push('fb-btn-thick')
        }

        if (this.expander) {
          classes.push('fb-btn-expander')
        }

        if (this.uppercase) {
          classes.push('fb-btn-uppercase')
        }

        if (this.icon) {
          classes.push('fb-btn-icon')
        }

        if (this.size) {
          classes.push(`fb-btn-${this.size}`)
        }

        return classes
      },

    },

    methods: {

      clickCallback(e) {
        this.$emit('click', e)
      },

      tapCallback(e) {
        this.$emit('tap', e)
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
