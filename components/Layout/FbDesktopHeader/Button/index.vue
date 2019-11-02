<template functional>
  <button
    role="button"
    :class="[data.class, data.staticClass]"
    @click.prevent="listeners['click']()"
  >
    <font-awesome-icon :icon="props.icon" />
  </button>
</template>

<script>
  export default {

    name: 'FbDesktopHeaderButton',

    props: {

      icon: {
        type: String,
        required: true,
      },

    },

  }
</script>
