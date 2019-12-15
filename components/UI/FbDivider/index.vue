<template functional>
  <div
    class="fb-divider__container"
    :data-type="props.type"
  >
    <div class="fb-divider__content">{{ props.text }}</div>
  </div>
</template>

<script>
  export default {

    name: 'FbDivider',

    props: {

      type: {
        type: String,
        default: 'horizontal',
        validator: (value) => {
          // The value must match one of these strings
          return ['horizontal', 'vertical'].indexOf(value) !== -1
        },
      },

      text: {
        type: String,
        required: true,
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
