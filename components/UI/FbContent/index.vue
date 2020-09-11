<template>
  <div :class="contentClass">
    <slot />
  </div>
</template>

<script>
function sizeValidator (value) {
  // The value must match one of these strings
  return [
    'lg', 'md', 'sm', 'xs', 'none'
  ].indexOf(value) !== -1
}

export default {

  name: 'FbContent',

  props: {

    mt: {
      type: String,
      default: 'none',
      validator: sizeValidator,
    },

    mb: {
      type: String,
      default: 'none',
      validator: sizeValidator,
    },

    ml: {
      type: String,
      default: 'none',
      validator: sizeValidator,
    },

    mr: {
      type: String,
      default: 'none',
      validator: sizeValidator,
    },

    mv: {
      type: String,
      default: 'none',
      validator: sizeValidator,
    },

    mh: {
      type: String,
      default: 'none',
      validator: sizeValidator,
    },

    pt: {
      type: String,
      default: 'none',
      validator: sizeValidator,
    },

    pb: {
      type: String,
      default: 'none',
      validator: sizeValidator,
    },

    pl: {
      type: String,
      default: 'none',
      validator: sizeValidator,
    },

    pr: {
      type: String,
      default: 'none',
      validator: sizeValidator,
    },

    pv: {
      type: String,
      default: 'none',
      validator: sizeValidator,
    },

    ph: {
      type: String,
      default: 'none',
      validator: sizeValidator,
    },

  },

  computed: {

    contentClass() {
      const classes = []

      classes.push('fb-content')

      const margins = ['mt', 'mb', 'ml', 'mr', 'mv', 'mh']

      margins.forEach((type) => {
        if (this[type] !== 'none') {
          classes.push(`fb-content-${type}-${this[type]}`)
        }
      })

      const paddings = ['pt', 'pb', 'pl', 'pr', 'pv', 'ph']

      paddings.forEach((type) => {
        if (this[type] !== 'none') {
          classes.push(`fb-content-${type}-${this[type]}`)
        }
      })

      return classes
    },

  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
