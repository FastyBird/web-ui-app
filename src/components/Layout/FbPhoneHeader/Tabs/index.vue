<template>
  <div class="fb-phone-header-tabs__container">
    <item
      v-for="(tab, index) in tabs"
      :key="index"
      :item="tab"
    />
  </div>
</template>

<script>
import Item from '@/components/Layout/FbPhoneHeader/Tabs/Item'

export default {

  name: 'FbPhoneHeaderTabs',

  components: {
    Item,
  },

  props: {

    tabs: {
      type: Array,
      required: true,
    },

  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
