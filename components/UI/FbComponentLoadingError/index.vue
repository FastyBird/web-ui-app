<template web>
  <div class="fb-component-loading-error__container">
    <font-awesome-icon
      icon="exclamation-triangle"
      class="icon-5x text-danger m-y-lg"
    />
    <p class="text-danger">
      Content could not be loaded. Please reload page.
    </p>
  </div>
</template>

<script>
  export default {

    name: 'FbComponentLoadingError',

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
