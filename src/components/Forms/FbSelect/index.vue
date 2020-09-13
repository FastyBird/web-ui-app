<template>
  <fb-field-container
    :id="id"
    :orientation="orientation"
    :size="size"
    :name="name"
    :label="label"
    :required="required"
    :is-focused="focused"
    :has-value="true"
    :error="error"
    :mt="mt"
    :mb="mb"
  >
    <template
      v-if="slotExists('left-addon')"
      slot="left-addon"
    >
      <slot name="left-addon" />
    </template>

    <template
      v-if="slotExists('right-addon')"
      slot="right-addon"
    >
      <slot name="right-addon" />
    </template>

    <template slot="field">
      <select
        :ref="`field-${name}`"
        :id="id ? id : name"
        :name="name"
        :tabindex="tabIndex"
        class="fb-select__control"
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
  </fb-field-container>
</template>

<script>
const FbFieldContainer = () => import('../FbFieldContainer')

function sizeValidator (value) {
  // The value must match one of these strings
  return [
    'lg', 'md', 'sm', 'xs', 'none'
  ].indexOf(value) !== -1
}

export default {

  name: 'FbFormSelect',

  components: {
    FbFieldContainer,
  },

  props: {

    orientation: {
      type: String,
      default: 'vertical',
      validator: (value) => {
        // The value must match one of these strings
        return ['vertical', 'horizontal', 'inline'].indexOf(value) !== -1
      },
    },

    size: {
      type: String,
      default: null,
      validator: (value) => {
        // The value must match one of these strings
        return ['lg', 'sm'].indexOf(value) !== -1
      },
    },

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

    required: {
      type: Boolean,
      default: false,
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

    mt: {
      type: String,
      default: 'none',
      validator: sizeValidator,
    },

    mb: {
      type: String,
      default: 'none',
      validator: sizeValidator,
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
