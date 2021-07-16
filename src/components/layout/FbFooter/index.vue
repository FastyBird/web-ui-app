<template>
  <div class="fb-layout-footer__container">
    <div class="fb-layout-footer__inner">
      <template v-if="'default' in $slots">
        <slot />
      </template>

      <template v-else>
        {{ copyright }}
        <a
          :href="website"
          target="_blank"
          rel="noreferrer"
        >
          {{ author }}
        </a>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbLayoutFooter',

  props: {

    copyright: {
      type: String as PropType<string>,
      required: false,
      default: '© 2017',
    },

    author: {
      type: String as PropType<string>,
      required: false,
      default: 'FastyBird s.r.o.',
    },

    website: {
      type: String as PropType<string>,
      required: false,
      default: 'https://www.fastybird.com',
    },

  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
