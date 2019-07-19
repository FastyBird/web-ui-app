<template
  functional
  web
>
  <button
    role="button"
    class="fb-phone-header__button"
    @click.prevent="listeners['click']()"
  >
    <font-awesome-icon :icon="props.icon" />
  </button>
</template>

<script>
  export default {

    name: 'FbPhoneHeaderButton',

    props: {

      icon: {
        type: String,
        required: true,
      },

    },

  }
</script>
