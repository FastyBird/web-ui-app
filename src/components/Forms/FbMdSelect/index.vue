<template>
  <fb-md-field-container
    :id="id"
    :name="name"
    :label="label"
    :is-focused="focused"
    :has-value="true"
    :error="error"
  >
    <template
      v-if="slotExists('left-addon')"
      slot="left-addon"
    >
      <slot name="left-addon" />
    </template>

    <template slot="field">
      <select
        :id="id ? id : name"
        :name="name"
        :tabindex="tabIndex"
        class="fb-md-select__control"
        @input="updateValue($event.target.value)"
        @change="changed()"
        @focus="setFocused(true)"
        @blur="setFocused(false)"
      >
        <option
          v-if="blankSelect !== null"
          value=""
        >
          {{ blankSelect }}
        </option>

        <template v-for="(item, index) in items">
          <optgroup
            v-if="typeof item.value === 'array' || typeof item.value === 'object'"
            :key="index"
            :label="item.name"
          >
            <option
              v-for="(subitem, subindex) in item.value"
              :key="`${index}_${subindex}`"
              :value="subitem.value"
              :selected="value === subitem.value ? 'selected' : ''"
            >
              {{ subitem.name }}
            </option>
          </optgroup>
          <option
            v-else
            :key="index"
            :value="item.value"
            :selected="value == item.value ? 'selected' : ''"
          >
            {{ item.name }}
          </option>
        </template>
      </select>
    </template>

    <template
      v-if="slotExists('help-line') && !hasError"
      slot="help-line"
    >
      <slot name="help-line" />
    </template>
  </fb-md-field-container>
</template>

<script>
import FbMdFieldContainer from '@/components/Forms/FbMdFieldContainer'

export default {

  name: 'FbMdFormSelect',

  components: {
    FbMdFieldContainer,
  },

  props: {

    name: {
      type: String,
      required: true,
    },

    id: {
      type: String,
      default: null,
    },

    label: {
      type: String,
      default: null,
    },

    items: {
      type: Array,
      required: true,
    },

    value: {
      type: [String, Number],
      default: null,
    },

    tabIndex: {
      type: Number,
      default: null,
    },

    hasError: {
      type: Boolean,
      default: false,
    },

    error: {
      type: String,
      default: null,
    },

    blankSelect: {
      type: String,
      default: null,
    },

  },

  data() {
    return {
      focused: false,
    }
  },

  methods: {

    /**
     * Emit an input event up to the parent
     *
     * @param {[String]} value
     */
    updateValue(value) {
      this.$emit('input', value)
    },

    /**
     * Fire focus & blur events
     *
     * @param {Boolean} value
     */
    setFocused(value) {
      this.focused = value

      if (value) {
        this.$emit('focus')
      } else {
        this.$emit('blur')
      }
    },

    changed() {
      this.$emit('change', this.value)
    },

  },

}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import 'index';
</style>
