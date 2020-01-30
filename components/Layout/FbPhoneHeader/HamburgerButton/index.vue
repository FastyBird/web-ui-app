<template functional>
  <button
    :class="[data.class, data.staticClass, 'fb-phone-header-hamburger__button', { 'collapsed': props.collapsed }]"
    type="button"
    @click.prevent="listeners['click']()"
  >
    <span>Toggle navigation</span>
    <div class="bars">
      <span class="bar-line bar-line-1 out" />
      <span class="bar-line bar-line-2 out" />
      <span class="bar-line bar-line-3 out" />
    </div>
    <div class="bars bars-x">
      <span class="bar-line bar-line-4" />
      <span class="bar-line bar-line-5" />
    </div>
  </button>
</template>

<script>
  export default {

    name: 'FbPhoneHeaderHamburgerButton',

    props: {

      collapsed: {
        type: Boolean,
        default: false,
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
