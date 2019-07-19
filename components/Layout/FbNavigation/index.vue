<template web>
  <nav :class="['fb-navigation__container', {'collapse': collapsed && (windowSize === 'xs' || windowSize === 'sm')}]">
    <ul
      v-for="(item, index) in items"
      :key="index"
    >
      <li class="fb-navigation__heading">
        {{ $t(item.meta.label) || item.name }}
      </li>

      <template v-for="(subItem, subIndex) in item.items">
        <li
          v-if="subItem.hasOwnProperty('path') && (!subItem.hasOwnProperty('access') || subItem.access())"
          :key="subIndex"
          :class="[{'active': $route.fullPath === subItem.path}, subItem.meta.hasOwnProperty('class') ? subItem.meta.class : '']"
        >
          <router-link
            v-if="subItem.path"
            :to="subItem.path"
            active-class="active"
          >
            <font-awesome-icon
              :icon="subItem.meta.icon"
              class="fb-navigation__item-icon"
            />
            <span class="fb-navigation__item-label">{{ $t(subItem.meta.label) || subItem.name }}</span>
          </router-link>
        </li>

        <li
          v-if="subItem.hasOwnProperty('callback')"
          :key="subIndex"
          :class="[subItem.meta.hasOwnProperty('class') ? subItem.meta.class : '']"
        >
          <a
            href="#"
            @click.prevent="subItem.callback(instance)"
          >
            <font-awesome-icon
              :icon="subItem.meta.icon"
              class="fb-navigation__item-icon"
            />
            <span class="fb-navigation__item-label">{{ $t(subItem.meta.label) || subItem.name }}</span>
          </a>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {

    name: 'FbNavigation',

    props: {

      items: {
        type: Array,
        required: true,
      },

    },

    computed: {

      ...mapState({
        windowSize: state => state.theme.windowSize,
        collapsed: state => state.theme.menu.collapsed.xs,
      }),

      instance() {
        return this
      },

    },

    watch: {

      $route() {
        this.menuCollapse()
      },

    },

    methods: {

      ...mapActions('theme', [
        'menuCollapse',
      ]),

    },

  }
</script>

<style lang="scss">
  @import 'index';
</style>
