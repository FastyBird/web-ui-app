<template functional>
  <button
    role="button"
    :class="[data.class, data.staticClass]"
    @click.prevent="listeners['click']()"
  >
    <font-awesome-icon
      v-if="props.icon"
      :icon="props.icon"
    />
    <template v-else>{{ props.name }}</template>
  </button>
</template>

<script>
  export default {

    name: 'FbPhoneHeaderButton',

    props: {

      name: {
        type: String,
        required: true,
      },

      icon: {
        type: String,
        default: null,
      },

    },

  }
</script>
