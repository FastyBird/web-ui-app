<template>
  <nav class="fb-navigation__container">
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
  </nav>
</template>

<script>
export default {

  name: 'FbNavigation',

  props: {

    items: {
      type: Array,
      required: true,
    },

  },

  computed: {

    instance() {
      return this
    },

  },

}
</script>

<style lang="scss">
  @import 'index';
</style>
