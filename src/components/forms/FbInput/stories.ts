import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/vue'

import { FbFormInputTypeTypes, FbFormOrientationTypes, FbSizeTypes } from '@/types'

import FbFormInput from './index.vue'

export default {
  component: FbFormInput,
  title: 'Components/Form/FB Input',
  argTypes: {
    'left-addon': {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      defaultValue: undefined,
      description: 'Field left addon slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    'right-addon': {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      defaultValue: undefined,
      description: 'Field left addon slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
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
    value: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
      defaultValue: null,
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
    type: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      defaultValue: FbFormInputTypeTypes.TEXT,
      options: [
        FbFormInputTypeTypes.TEXT,
        FbFormInputTypeTypes.PASSWORD,
        FbFormInputTypeTypes.EMAIL,
        FbFormInputTypeTypes.NUMBER,
        FbFormInputTypeTypes.TEL,
        FbFormInputTypeTypes.URL,
      ],
      description: 'Field size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: FbFormInputTypeTypes.TEXT },
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
      defaultValue: 'Input field label',
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
    placeholder: {
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
  'left-addon'?: string
  'right-addon'?: string
  'help-line'?: string
  name: string
  value: string | number
  orientation: FbFormOrientationTypes
  size: FbSizeTypes
  type: FbFormInputTypeTypes
  id: string
  label: string
  required: boolean
  tabIndex: number
  error: string
  placeholder: string
  readonly: boolean
  disabled: boolean
}

const Template: Story<TemplateArgs> = (args) => {
  return {
    props: args,
    components: { FbFormInput },
    template: `
      <fb-form-input
        v-model="value"
        :orientation="orientation"
        :size="size"
        :name="name"
        :id="id"
        :label="label"
        :required="required"
        :tab-index="tabIndex"
        :error="error"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        @focus="onFocus"
        @blur="onBlur"
        @keydown="onKeydown"
      >
        <template v-if="${args['left-addon'] !== null && typeof args['left-addon'] !== 'undefined'}" slot="left-addon">${args['left-addon']}</template>
        <template v-if="${args['right-addon'] !== null && typeof args['right-addon'] !== 'undefined'}" slot="right-addon">${args['right-addon']}</template>
        <template v-if="${args['help-line'] !== null && typeof args['help-line'] !== 'undefined'}" slot="help-line">${args['help-line']}</template>
      </fb-form-input>
    `,
    methods: {
      onFocus: action('field-focused-updated'),
      onBlur: action('field-blurred-updated'),
      onKeydown: action('key-down-triggered'),
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

export const WithLeftAddon = Template.bind({})

WithLeftAddon.args = {
  'left-addon': '<font-awesome-icon icon="envelope" />',
}

export const WithRightAddon = Template.bind({})

WithRightAddon.args = {
  'right-addon': '<font-awesome-icon icon="envelope" />',
}

export const WithHelpLine = Template.bind({})

WithHelpLine.args = {
  'help-line': 'Please provide requested information',
}
