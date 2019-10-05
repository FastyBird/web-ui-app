<template>
  <div
    v-if="items.length"
    class="fb-bottom-navigation__container"
  >
    <div class="row">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="col-4"
      >
        <fb-button
          :to="_.get(item, 'link')"
          block
          variant="primary"
          size="lg"
          :class="[{'active': isTabActive(item)}]"
        >
          <font-awesome-icon :icon="_.get(item, 'meta.icon')" />
          <span>{{ $t(item.meta.label) || item.name }}</span>
        </fb-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'FbBottomNavigation',

    props: {

      items: {
        type: Array,
        required: true,
      },

    },

    methods: {

      /**
       * Check if given tab type is active or not
       *
       * @param {Object} tab
       *
       * @returns {Boolean}
       */
      isTabActive(tab) {
        return this.$route.path === this._.get(tab, 'link')
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
