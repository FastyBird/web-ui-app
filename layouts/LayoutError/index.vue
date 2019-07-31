<template>
  <div class="fb-error-layout__container">
    <div class="fb-error-layout__body">
      <router-view />
    </div>

    <div class="fb-error-layout__footer">
      <ul class="list-inline">
        <li>
          <a
            class="link-muted"
            href="https://twitter.com/FastyBird"
            target="_blank"
            rel="noreferrer"
          >
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              class="icon icon-2x"
            />
          </a>
        </li>
        <li>
          <a
            class="link-muted"
            href="https://www.facebook.com/FastyBird"
            target="_blank"
            rel="noreferrer"
          >
            <font-awesome-icon
              :icon="['fab', 'facebook']"
              class="icon icon-2x"
            />
          </a>
        </li>
        <li>
          <a
            class="link-muted"
            href="https://github.com/fastybird"
            target="_blank"
            rel="noreferrer"
          >
            <font-awesome-icon
              :icon="['fab', 'github']"
              class="icon icon-2x"
            />
          </a>
        </li>
      </ul>
      <p>
        <small>&copy; 2017 <a
          v-if="_.get(this, '$authorWebsite', null) !== null"
          :href="_.get(this, '$authorWebsite', null)"
          target="_blank"
          rel="noreferrer"
        >{{ _.get(this, '$authorName', null) }}</a></small>
      </p>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'LayoutError',

    created() {
      const headElements = document.getElementsByTagName('html')

      if (headElements.length > 0) {
        headElements[0].setAttribute('data-layout', 'layout_error')
      }
    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import './index.scss';
</style>
