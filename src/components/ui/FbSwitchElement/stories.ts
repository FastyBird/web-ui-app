import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/vue'

import { FbSizeTypes, FbUiVariantTypes } from '@/types'

import FbUiSwitchElement from './index.vue'

export default {
  component: FbUiSwitchElement,
  title: 'Components/Ui/FB Switch element',
  argTypes: {
    size: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      defaultValue: FbSizeTypes.MEDIUM,
      options: [
        FbSizeTypes.SMALL,
        FbSizeTypes.MEDIUM,
        FbSizeTypes.LARGE,
      ],
      description: 'Switch size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: FbSizeTypes.MEDIUM },
      },
    },
    variant: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      defaultValue: FbUiVariantTypes.PRIMARY,
      options: [
        FbUiVariantTypes.DEFAULT,
        FbUiVariantTypes.PRIMARY,
        FbUiVariantTypes.SUCCESS,
        FbUiVariantTypes.DANGER,
        FbUiVariantTypes.WARNING,
        FbUiVariantTypes.INFO,
      ],
      description: 'Switch color variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: FbUiVariantTypes.DEFAULT },
      },
    },
    status: {
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
    actions: { disabled: true },
  },
} as Meta

interface TemplateArgs {
  size: FbSizeTypes
  variant: FbUiVariantTypes
  status: boolean
  disabled: boolean
}

const Template: Story<TemplateArgs> = (args) => {
  return {
    props: args,
    components: { FbUiSwitchElement },
    template: `
      <fb-ui-switch-element
        :size="size"
        :variant="variant"
        :status="status"
        :disabled="disabled"
        @change="onChange"
      />
    `,
    methods: {
      onChange: action('switch-changed'),
    },
  }
}

export const Default = Template.bind({})

Default.args = {
  variant: FbUiVariantTypes.DEFAULT,
}

export const Primary = Template.bind({})

Primary.args = {
  variant: FbUiVariantTypes.PRIMARY,
  status: true,
}

export const Success = Template.bind({})

Success.args = {
  variant: FbUiVariantTypes.SUCCESS,
  status: true,
}

export const Danger = Template.bind({})

Danger.args = {
  variant: FbUiVariantTypes.DANGER,
  status: true,
}

export const Warning = Template.bind({})

Warning.args = {
  variant: FbUiVariantTypes.WARNING,
  status: true,
}

export const Info = Template.bind({})

Info.args = {
  variant: FbUiVariantTypes.INFO,
  status: true,
}

export const Sizes: Story<TemplateArgs> = (args) => {
  return {
    props: args,
    components: { FbUiSwitchElement },
    template: `
      <div style="display: flex;">
        <div style="padding: 5px 15px 5px 0;">
          <fb-ui-switch-element size="${FbSizeTypes.LARGE}" :status="true" @change="onChange" />
        </div>
        <div style="padding: 5px 15px 5px 0;">
          <fb-ui-switch-element size="${FbSizeTypes.MEDIUM}" :status="true" @change="onChange" />
        </div>
        <div style="padding: 5px 15px 5px 0;">
          <fb-ui-switch-element size="${FbSizeTypes.SMALL}" :status="true" @change="onChange" />
        </div>
      </div>
    `,
    methods: {
      onChange: action('switch-changed'),
    },
  }
}

Sizes.parameters = {
  controls: { disabled: true },
}
