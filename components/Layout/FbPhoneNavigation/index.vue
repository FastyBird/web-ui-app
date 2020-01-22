<template>
  <div class="fb-phone-navigation__container">
    <transition name="phone-navigation-overlay">
      <div
        v-if="!collapsed"
        class="fb-phone-navigation__overlay"
        @click="menuCollapse"
      />
    </transition>

    <transition name="phone-navigation">
      <div
        v-if="!collapsed"
        id="phone_navigation"
        :class="['fb-phone-navigation__navigation', {'fb-phone-navigation__navigation-open': !collapsed}]"
      >
        <div class="fb-phone-navigation__items">
          <ul
            v-for="(item, index) in items"
            :key="index"
          >
            <li class="fb-navigation__heading">
              {{ item.meta.label }}
            </li>

            <template v-for="(subItem, subIndex) in item.items">
              <li
                v-if="subItem.hasOwnProperty('link') && (!subItem.hasOwnProperty('access') || subItem.access(instance))"
                :key="subIndex"
                :class="[{'active': $route.fullPath === subItem.link}, subItem.meta.hasOwnProperty('class') ? subItem.meta.class : '']"
              >
                <nuxt-link
                  v-if="subItem.link"
                  :to="subItem.link"
                  active-class="active"
                  @click.native="menuCollapse"
                >
                  <span class="fb-navigation__item-icon">
                    <font-awesome-icon :icon="subItem.meta.icon" />
                  </span>
                  <span class="fb-navigation__item-label">{{ subItem.meta.label }}</span>
                </nuxt-link>
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
                  <span class="fb-navigation__item-icon">
                    <font-awesome-icon :icon="subItem.meta.icon" />
                  </span>
                  <span class="fb-navigation__item-label">{{ subItem.meta.label }}</span>
                </a>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {

    name: 'FbPhoneNavigation',

    props: {

      items: {
        type: Array,
        required: true,
      },

    },

    computed: {

      ...mapState({
        collapsed: state => state.theme.menu.collapsed.xs,
      }),

      instance() {
        return this
      },

    },

    methods: {

      ...mapActions('theme', [
        'menuCollapse',
      ]),

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
