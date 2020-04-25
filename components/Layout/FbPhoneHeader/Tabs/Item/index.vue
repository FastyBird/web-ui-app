<template>
  <fb-button
    :to="item.link"
    :active="active"
    variant="primary"
    uppercase
    :class="['fb-phone-header-tabs-item__container', {'fb-phone-header-tabs-item__container-active': active}]"
  >
    {{ item.name }}
  </fb-button>
</template>

<script>
export default {

  name: 'FbPhoneHeaderTabsItem',

  props: {

    item: {
      type: Object,
      required: true,
    },

  },

  computed: {

    active() {
      return this.$route.path === this.item.link
    },

  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
