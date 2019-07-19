<template web>
  <div
    v-if="items.length && (windowSize === 'xs' || windowSize === 'sm')"
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
          <font-awesome-icon :icon="_.get(item, 'icon')" />
          <span>{{ $t(_.get(item, 'name')) }}</span>
        </fb-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {

    name: 'FbBottomNavigation',

    props: {

      items: {
        type: Array,
        required: true,
      },

    },

    computed: {

      ...mapState({
        windowSize: state => state.theme.windowSize,
      }),

      ...mapState({
        route: state => state.route,
      }),

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
        return this.route.meta.path === this._.get(tab, 'link')
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
