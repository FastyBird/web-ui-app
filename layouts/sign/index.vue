<template>
  <div class="fb-sign-layout__container">
    <div class="fb-sign-layout__box">
      <fb-sign-header
        :sign-in-link="signInLink"
      />

      <slot name="content" />
    </div>

    <fb-sign-footer
      :sign-in-link="signInLink"
      :sign-up-link="signUpLink"
      :author-website="authorWebsite"
      :author-name="authorName"
    />

    <fb-page-loading v-if="loadingOverlay" />
  </div>
</template>

<script>
  const FbSignHeader = () => import('@/node_modules/@fastybird-com/theme/components/Layout/FbSignHeader')
  const FbSignFooter = () => import('@/node_modules/@fastybird-com/theme/components/Layout/FbSignFooter')

  export default {

    name: 'FbLayoutSign',

    components: {
      FbSignHeader,
      FbSignFooter,
    },

    props: {

      loadingOverlay: {
        type: Boolean,
        default: false,
      },

      signInLink: {
        type: String,
        default: '/sing-in',
      },

      signUpLink: {
        type: String,
        default: '/sing-up',
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
          'data-layout': 'layout_sign',
        },
      }
    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
