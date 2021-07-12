import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/vue'

import { FbSizeTypes } from '@/types'

import FbFormCheckbox from './index.vue'
import FbFormCheckboxesGroup from './../FbCheckboxesGroup/index.vue'

export default {
  component: FbFormCheckbox,
  title: 'Components/Form/FB Checkbox',
  argTypes: {
    default: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      defaultValue: undefined,
      description: 'Checkbox custom label slot',
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
    option: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
      defaultValue: null,
    },
    value: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
      defaultValue: null,
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
      defaultValue: 'Checkboxs field label',
    },
    tabIndex: {
      type: { name: 'number', required: false },
      control: { type: 'text' },
      defaultValue: null,
    },
    hasError: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      defaultValue: false,
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
  default?: string
  name: string
  option: string | number | boolean
  value: string | number | boolean | (string | number)[] | null
  size: FbSizeTypes
  id: string | null
  label: string | null
  tabIndex: number
  hasError: boolean
  readonly: boolean
  disabled: boolean
}

const Template: Story<TemplateArgs> = (args) => {
  return {
    props: args,
    components: { FbFormCheckbox },
    template: `
      <fb-form-checkbox
        v-model="value"
        :size="size"
        :name="name"
        :id="id"
        :option="option"
        :label="label"
        :tab-index="tabIndex"
        :has-error="hasError"
        :readonly="readonly"
        :disabled="disabled"
        @change="onChange"
      >
        <template v-if="${args.default !== null && typeof args.default !== 'undefined'}" slot="default">${args.default}</template>
      </fb-form-checkbox>
    `,
    methods: {
      onChange: action('field-changed'),
    },
  }
}

export const Default = Template.bind({})

export const WithCustomLabel = Template.bind({})

WithCustomLabel.args = {
  default: 'Some custom <strong>html</strong> label <font-awesome-icon icon="info-circle" />',
}

export const InGroup: Story<TemplateArgs> = (args) => {
  return {
    props: args,
    components: { FbFormCheckbox, FbFormCheckboxesGroup },
    template: `
      <fb-form-checkboxes-group>
        <div style="display: flex; flex-direction: row; margin-bottom: 10px;">
          <div style="width: 100px; font-size: 13px;">
            Select this
          </div>
          <div>
            <fb-form-checkbox
              v-model="value"
              name="option_one"
              option="option_one"
              @change="onChange"
            />
          </div>
        </div>
        <div style="display: flex; flex-direction: row;">
          <div style="width: 100px; font-size: 13px;">
            Or this
          </div>
          <div>
            <fb-form-checkbox
              v-model="value"
              name="option_two"
              option="option_two"
              @change="onChange"
            />
          </div>
        </div>
      </fb-form-checkboxes-group>
    `,
    methods: {
      onChange: action('field-changed'),
    },
  }
}

InGroup.args = {
  value: [],
}
