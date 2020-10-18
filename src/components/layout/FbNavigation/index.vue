<template>
  <nav class="fb-layout-navigation__container">
    <ul>
      <li class="fb-layout-navigation__heading">
        {{ name }}
      </li>

      <slot />
    </ul>
  </nav>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({

  name: 'FbLayoutNavigation',

  props: {

    name: {
      type: String,
      required: true,
    },

  },

})
</script>

<style lang="scss">
@import 'index';
</style>
