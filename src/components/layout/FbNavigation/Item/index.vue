<template>
  <li class="fb-layout-navigation-item__container">
    <template v-if="type === menuItemTypes.LINK">
      <a
        :href="link"
        @click.prevent="$emit('click', $event)"
      >
        <span
          v-if="'icon' in $slots"
          class="fb-layout-navigation-item__icon"
        >
          <slot name="icon" />
        </span>
        <span class="fb-layout-navigation-item__label">{{ label }}</span>
      </a>
    </template>

    <template v-else-if="type === menuItemTypes.NUXT_LINK">
      <nuxt-link
        :to="link"
        active-class="fb-layout-navigation-item__active"
        @click.prevent="$emit('click', $event)"
      >
        <span
          v-if="'icon' in $slots"
          class="fb-layout-navigation-item__icon"
        >
          <slot name="icon" />
        </span>
        <span class="fb-layout-navigation-item__label">{{ label }}</span>
      </nuxt-link>
    </template>

    <template v-else-if="type === menuItemTypes.VUE_LINK">
      <route-link
        :to="link"
        active-class="fb-layout-navigation-item__active"
        @click.prevent="$emit('click', $event)"
      >
        <span
          v-if="'icon' in $slots"
          class="fb-layout-navigation-item__icon"
        >
          <slot name="icon" />
        </span>
        <span class="fb-layout-navigation-item__label">{{ label }}</span>
      </route-link>
    </template>

    <template v-else-if="type === menuItemTypes.BUTTON">
      <button @click.prevent="$emit('click', $event)">
        <span
          v-if="'icon' in $slots"
          class="fb-layout-navigation-item__icon"
        >
          <slot name="icon" />
        </span>
        <span class="fb-layout-navigation-item__label">{{ label }}</span>
      </button>
    </template>
  </li>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from 'vue'

import { FbMenuItemTypes } from '@/types'

export default defineComponent({

  name: 'FbLayoutNavigationItem',

  props: {

    type: {
      type: String as PropType<FbMenuItemTypes>,
      required: true,
      validator: (value: FbMenuItemTypes) => {
        // The value must match one of these strings
        return [
          FbMenuItemTypes.BUTTON,
          FbMenuItemTypes.LINK,
          FbMenuItemTypes.NUXT_LINK,
          FbMenuItemTypes.VUE_LINK,
        ].includes(value)
      },
    },

    label: {
      type: String as PropType<string>,
      required: true,
    },

    link: {
      type: String as PropType<string>,
      default: null,
    },

  },

  emits: ['click'],

  setup() {
    return {
      menuItemTypes: FbMenuItemTypes,
    }
  },

})
</script>

<style lang="scss">
@import 'index';
</style>
