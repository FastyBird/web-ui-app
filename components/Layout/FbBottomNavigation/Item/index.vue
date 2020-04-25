<template>
  <fb-button
    v-if="item.hasOwnProperty('link')"
    :to="_.get(item, 'link')"
    block
    variant="primary"
    size="lg"
    :class="[{'active': active}]"
  >
    <font-awesome-icon :icon="_.get(item, 'icon')" />
    <span>{{ item.name }}</span>
  </fb-button>

  <fb-button
    v-else-if="item.hasOwnProperty('callback')"
    block
    variant="primary"
    size="lg"
    @click="callCallback"
  >
    <font-awesome-icon :icon="_.get(item, 'icon')" />
    <span>{{ item.name }}</span>
  </fb-button>
</template>

<script>
export default {

  name: 'FbBottomNavigationItem',

  props: {

    item: {
      type: Object,
      required: true,
    },

  },

  computed: {

    active() {
      return this.$route.path === this.item.link
    },

  },

  methods: {

    callCallback() {
      this.item.callback(this)
    },

  },

}
</script>
