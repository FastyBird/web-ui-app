import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/vue'

import { FbFormOrientationTypes, FbSizeTypes } from '@/types'

import FbFormCheckboxes, { FbFormCheckboxesItemInterface } from './index.vue'

export default {
  component: FbFormCheckboxes,
  title: 'Components/Form/FB Checkboxes',
  argTypes: {
    'help-line': {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      defaultValue: undefined,
      description: 'Field help info text slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    name: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
      defaultValue: 'field-name',
    },
    options: {
      type: { name: 'array', required: true },
      control: { type: 'text' },
      defaultValue: [
        { name: 'Checkbox one', value: 'one' },
        { name: 'Checkbox two', value: 'two' },
        { name: 'Checkbox three', value: 'three' },
      ],
    },
    value: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      defaultValue: [],
    },
    orientation: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      defaultValue: FbFormOrientationTypes.VERTICAL,
      options: [
        FbFormOrientationTypes.VERTICAL,
        FbFormOrientationTypes.HORIZONTAL,
        FbFormOrientationTypes.INLINE,
      ],
      description: 'Field vs label orientation',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: FbFormOrientationTypes.VERTICAL },
      },
    },
    size: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      defaultValue: FbSizeTypes.MEDIUM,
      options: [
        FbSizeTypes.SMALL,
        FbSizeTypes.MEDIUM,
        FbSizeTypes.LARGE,
      ],
      description: 'Field size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: FbSizeTypes.MEDIUM },
      },
    },
    id: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      defaultValue: null,
    },
    label: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      defaultValue: 'Checkboxes field label',
    },
    required: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      defaultValue: false,
    },
    tabIndex: {
      type: { name: 'number', required: false },
      control: { type: 'text' },
      defaultValue: null,
    },
    error: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      defaultValue: null,
    },
    readonly: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      defaultValue: false,
    },
    disabled: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
  parameters: {
    knobs: { disabled: true },
  },
} as Meta

interface TemplateArgs {
  'help-line'?: string
  name: string
  options: FbFormCheckboxesItemInterface[]
  value: string | number | boolean | null | (string | number)[]
  orientation: FbFormOrientationTypes
  size: FbSizeTypes
  id: string
  label: string
  required: boolean
  tabIndex: number
  error: string
  readonly: boolean
  disabled: boolean
}

const Template: Story<TemplateArgs> = (args) => {
  return {
    props: args,
    components: { FbFormCheckboxes },
    template: `
      <fb-form-checkboxes
        v-model="value"
        :orientation="orientation"
        :size="size"
        :name="name"
        :id="id"
        :label="label"
        :options="options"
        :required="required"
        :tab-index="tabIndex"
        :error="error"
        :readonly="readonly"
        :disabled="disabled"
        @change="onChange"
      >
        <template v-if="${args['help-line'] !== null && typeof args['help-line'] !== 'undefined'}" slot="help-line">${args['help-line']}</template>
      </fb-form-checkboxes>
    `,
    methods: {
      onChange: action('field-changed'),
    },
  }
}

export const Default = Template.bind({})

export const Vertical = Template.bind({})

Vertical.args = {
  orientation: FbFormOrientationTypes.VERTICAL,
}

export const Horizontal = Template.bind({})

Horizontal.args = {
  orientation: FbFormOrientationTypes.HORIZONTAL,
}

export const Inline = Template.bind({})

Inline.args = {
  orientation: FbFormOrientationTypes.INLINE,
}

export const WithHelpLine = Template.bind({})

WithHelpLine.args = {
  'help-line': 'Please select one option from select',
}

export const SingleCheckbox = Template.bind({})

SingleCheckbox.args = {
  value: null,
  options: [
    { value: 'single', name: 'Single value' },
  ],
}
