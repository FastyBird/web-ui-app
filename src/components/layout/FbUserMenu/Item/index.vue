<template>
  <li class="fb-layout-user-menu-item__container">
    <a
      v-if="type === menuItemTypes.LINK"
      :href="link"
      @click.prevent="$emit('click', $event)"
    >
      {{ label }}
    </a>

    <nuxt-link
      v-else-if="type === menuItemTypes.NUXT_LINK"
      :to="link"
      active-class="fb-layout-user-menu-item__active"
      @click.prevent="$emit('click', $event)"
    >
      {{ label }}
    </nuxt-link>

    <button
      v-else-if="type === menuItemTypes.BUTTON"
      @click.prevent="$emit('click', $event)"
    >
      {{ label }}
    </button>

    <span v-else>
      {{ label }}
    </span>
  </li>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api'

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
