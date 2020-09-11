<template>
  <div
    :class="alertClass"
    role="alert"
  >
    <template
      v-if="slotExists('icon')"
    >
      <div class="fb-alert__with-icon">
        <div class="fb-alert__with-icon-icon">
          <slot name="icon" />
        </div>

        <div class="fb-alert__with-icon-content">
          <slot />
        </div>
      </div>
    </template>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script>
export default {

  name: 'FbAlert',

  props: {

    variant: {
      type: String,
      default: 'default',
      validator: (value) => {
        // The value must match one of these strings
        return [
          'default', 'primary', 'success', 'danger', 'warning', 'info',
        ].indexOf(value) !== -1
      },
    },

  },

  computed: {

    alertClass() {
      const classes = []

      classes.push('fb-alert')
      classes.push(`fb-alert-${this.variant}`)

      return classes
    },

  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
