<template>
  <div
    v-click-outside="blur"
    :class="['fb-user-side-navigation__container', {'open': show}]"
  >
    <div
      class="fb-user-side-navigation__button"
      @keyup.esc="show = false"
      @click.prevent="toggle"
    >
      <div class="row hidden-xs hidden-sm hidden-md">
        <div class="col-md-4">
          <div class="fb-user-side-navigation__avatar">
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
          </div>
        </div>
        <div class="col-md-8">
          {{ name }}
          <span class="fb-user-side-navigation__caret" />
        </div>
      </div>

      <div class="hidden visible-xs visible-sm visible-md">
        <div class="fb-user-side-navigation__avatar">
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
        </div>
      </div>
    </div>

    <ul>
      <template v-if="version !== null">
        <li class="fb-user-side-navigation__version">
          {{ $t('texts.version', {version: version}) }}
        </li>
        <li class="divider" />
      </template>

      <template v-for="(item, index) in items">
        <li
          v-if="item.hasOwnProperty('link')"
          :key="index"
        >
          <nuxt-link :to="item.link">
            {{ item.name }}
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
            {{ $t(item.meta.label) || item.name }}
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
        show: false,
      }
    },

    computed: {

      instance() {
        return this
      },

    },

    watch: {

      show(val) {
        this.$emit('input', val)
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
        this.show = false
      },

      toggle() {
        this.show = !this.show
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>

<i18n src="./locales.json" />
