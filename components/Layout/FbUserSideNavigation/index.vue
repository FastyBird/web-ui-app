<template>
  <div
    v-click-outside="blur"
    :class="['fb-user-side-navigation__container', {'collapse': collapsed}]"
  >
    <div
      class="fb-user-side-navigation__button"
      @click.prevent="toggle"
    >
      <div class="fb-user-side-navigation__button-avatar">
        <span>
          <template v-if="avatar !== null">
            {{ avatar }}
          </template>
          <gravatar
            v-else-if="email !== null"
            :email="email"
            :size="36"
            :default-img="'mm'"
            :alt="name"
          />
          <bird-logo v-else />
        </span>
      </div>
      <div class="fb-user-side-navigation__button-name">
        {{ name }}
        <span class="fb-user-side-navigation__button-caret" />
      </div>
    </div>

    <ul
      tabindex="0"
      ref="user-navigation"
      @keydown.esc="blur"
    >
      <template v-if="version !== null">
        <li class="fb-user-side-navigation__version">
          {{ $t('texts.version', { version: version }) }}
        </li>
        <li class="divider" />
      </template>

      <template v-for="(item, index) in items">
        <li
          v-if="item.hasOwnProperty('link')"
          :key="index"
        >
          <nuxt-link :to="item.link">
            {{ item.meta.label }}
          </nuxt-link>
        </li>

        <li
          v-if="item.hasOwnProperty('callback')"
          :key="index"
        >
          <a
            href="#"
            @click.prevent="callCallback(item)"
          >
            {{ item.meta.label }}
          </a>
        </li>

        <li
          v-if="item.name === 'divider'"
          :key="index"
          class="divider"
        />
      </template>
    </ul>
  </div>
</template>

<script>
  import BirdLogo from '../../../assets/images/fastybird_bird.svg?inline'

  import Gravatar from 'vue-gravatar'

  export default {

    name: 'FbUserSideNavigation',

    components: {
      BirdLogo,

      Gravatar,
    },

    props: {

      avatar: {
        type: String,
        default: null,
      },

      name: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        default: null,
      },

      version: {
        type: String,
        default: null,
      },

      items: {
        type: Array,
        default: () => {
          return []
        },
      },

    },

    data() {
      return {
        collapsed: true,
      }
    },

    computed: {

      instance() {
        return this
      },

    },

    watch: {

      collapsed(val) {
        if (!val) {
          this.$nextTick(function() {
            this.$refs['user-navigation'].focus()
          })
        }
      },

    },

    methods: {

      callCallback(item) {
        const that = this

        this.blur()

        setTimeout(() => {
          item.callback(that)
        }, 50)
      },

      blur() {
        this.collapsed = true
      },

      toggle() {
        this.collapsed = !this.collapsed
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>

<i18n src="./locales.json" />
