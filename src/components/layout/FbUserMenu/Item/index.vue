<template>
  <li class="fb-layout-user-menu-item__container">
    <a
      v-if="type === menuItemTypes.LINK"
      :href="link"
      @click.native="$emit('click')"
    >
      {{ label }}
    </a>

    <nuxt-link
      v-else-if="type === menuItemTypes.NUXT_LINK"
      :to="link"
      active-class="fb-layout-user-menu-item__active"
      @click.native="$emit('click')"
    >
      {{ label }}
    </nuxt-link>

    <button
      v-else-if="type === menuItemTypes.BUTTON"
      @click.prevent="$emit('click')"
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

import { FbMenuItemType } from '@/components/types'

export default defineComponent({

  name: 'FbLayoutUserMenuItem',

  props: {

    type: {
      type: String as PropType<FbMenuItemType>,
      required: true,
      validator: (value: FbMenuItemType) => {
        // The value must match one of these strings
        return [
          FbMenuItemType.BUTTON,
          FbMenuItemType.LINK,
          FbMenuItemType.NUXT_LINK,
          FbMenuItemType.TEXT,
        ].includes(value)
      },
    },

    label: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      default: null,
    },
  },

  setup() {
    return {
      menuItemTypes: FbMenuItemType,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
