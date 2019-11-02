<template>
  <div class="fb-phone-header-profile-navigation__container">
    <nav :class="[{'collapse': collapsed}]">
      <ul>
        <li>
          <h4>
            Hi, {{ userName }}
          </h4>
        </li>
        <template v-for="(item, index) in userMenuItems">
          <li
            v-if="item.hasOwnProperty('link')"
            :key="index"
          >
            <nuxt-link :to="item.link">
              {{ _.get(item, 'meta.label') }}
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
              {{ _.get(item, 'meta.label') }}
            </a>
          </li>
        </template>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {

    name: 'FbPhoneHeaderProfileNavigation',

    props: {

      userName: {
        type: String,
        default: null,
      },

      userMenuItems: {
        type: Array,
        default: () => {
          return []
        },
      },

      collapsed: {
        type: Boolean,
        default: false,
      },

    },

    methods: {

      callCallback(item) {
        const that = this

        this.$emit('click')

        setTimeout(() => {
          item.callback(that)
        }, 50)
      },

    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>

