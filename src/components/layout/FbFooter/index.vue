<template>
  <div class="fb-layout-footer__container">
    <div class="fb-layout-footer__inner">
      <template v-if="hasSlot()">
        <slot />
      </template>

      <template v-else>
        <small>&copy; 2017 <a
          href="https://fastybird.com"
          target="_blank"
          rel="noreferrer"
        >
          FastyBird s.r.o.</a>
        </small>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  SetupContext,
} from '@vue/composition-api'

import get from 'lodash/get'

export default defineComponent({

  name: 'FbLayoutFooter',

  setup(_props: { }, context: SetupContext) {
    function hasSlot(): boolean {
      return get(context.slots, 'default', null) !== null
    }

    return {
      hasSlot,
    }
  },

})
</script>

<style rel="stylesheet/scss" lang="scss">
@import 'index';
</style>
