<template functional>
  <button
    :class="[data.class, data.staticClass, 'fb-phone-header-profile-button__button', { 'collapsed': props.collapsed }]"
    type="button"
    @click.prevent="listeners['click']()"
  >
    <span>{{ parent.$t('buttons.toggleNavigation.title') }}</span>
    <div class="ellipsis">
      <component
        :is="props.components.Gravatar"
        :email="props.userEmail"
        :size="32"
        :default-img="'mm'"
        :alt="props.userName"
      />
    </div>
  </button>
</template>

<script>
  import Gravatar from 'vue-gravatar'

  export default {

    name: 'FbPhoneHeaderProfileButton',

    props: {

      userName: {
        type: String,
        default: null,
      },

      userEmail: {
        type: String,
        default: null,
      },

      collapsed: {
        type: Boolean,
        default: false,
      },

      components: {
        type: Object,
        default() {
          return {
            Gravatar,
          }
        },
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
