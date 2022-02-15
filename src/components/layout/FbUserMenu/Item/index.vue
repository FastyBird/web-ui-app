<template>
  <li class="fb-layout-user-menu-item__container">
    <template v-if="type === menuItemTypes.LINK">
      <a
        :href="link"
        @click.prevent="$emit('click', $event)"
      >
        {{ label }}
      </a>
    </template>

    <template v-else-if="type === menuItemTypes.NUXT_LINK">
      <nuxt-link
        :to="link"
        active-class="fb-layout-user-menu-item__active"
        @click.prevent="$emit('click', $event)"
      >
        {{ label }}
      </nuxt-link>
    </template>

    <template v-else-if="type === menuItemTypes.VUE_LINK">
      <route-link
        :to="link"
        active-class="fb-layout-user-menu-item__active"
        @click.prevent="$emit('click', $event)"
      >
        {{ label }}
      </route-link>
    </template>

    <template v-else-if="type === menuItemTypes.BUTTON">
      <button @click.prevent="$emit('click', $event)">
        {{ label }}
      </button>
    </template>

    <span v-else>
      {{ label }}
    </span>
  </li>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from 'vue'

import { FbMenuItemTypes } from '@/types'

export default defineComponent({

  name: 'FbLayoutUserMenuItem',

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
          FbMenuItemTypes.TEXT,
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

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
