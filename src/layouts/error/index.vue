<template>
  <div class="fb-error-layout__container">
    <div class="fb-error-layout__body">
      <h1>{{ message }}</h1>

      <h4>{{ description }}</h4>

      <slot name="info" />

      <p>
        <fb-button
          :to="homeLink"
          pill
          variant="primary"
        >
          Return to homepage
        </fb-button>
      </p>
    </div>

    <div class="fb-error-layout__footer">
      <ul>
        <li>
          <a
            href="https://twitter.com/FastyBird"
            target="_blank"
            rel="noreferrer"
          >
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/FastyBird"
            target="_blank"
            rel="noreferrer"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/fastybird"
            target="_blank"
            rel="noreferrer"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </li>
      </ul>
      <p>
        <small>&copy; 2017 <a
          v-if="authorWebsite !== null"
          :href="authorWebsite"
          target="_blank"
          rel="noreferrer"
        >{{ authorName }}</a></small>
      </p>
    </div>
  </div>
</template>

<script>
export default {

  name: 'FbLayoutError',

  props: {

    error: {
      type: Object,
      default: null,
    },

    message: {
      type: String,
      default: 'Page not found',
    },

    description: {
      type: String,
      default: 'We are sorry, the page you requested cannot be found.',
    },

    statusCode: {
      type: Number,
      default: 404,
    },

    homeLink: {
      type: String,
      default: '/',
    },

    authorWebsite: {
      type: String,
      default: null,
    },

    authorName: {
      type: String,
      default: 'FastyBird s.r.o.',
    },

  },

  head() {
    return {
      htmlAttrs: {
        'data-layout': 'layout_error',
      },
    }
  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
