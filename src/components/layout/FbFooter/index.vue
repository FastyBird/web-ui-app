<template>
  <div class="fb-layout-footer__container">
    <div class="fb-layout-footer__inner">
      <template v-if="'default' in $slots">
        <slot />
      </template>

      <template v-else>
        <small>{{ copyright }}<a
          :href="website"
          target="_blank"
          rel="noreferrer"
        >
          {{ author }}</a>
        </small>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbLayoutFooter',

  copyright: {
    type: String,
    required: false,
    default: '&copy; 2017',
  },

  author: {
    type: String,
    required: false,
    default: 'FastyBird s.r.o.',
  },

  website: {
    type: String,
    required: false,
    default: 'https://www.fastybird.com',
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
