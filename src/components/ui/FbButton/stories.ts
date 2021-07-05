import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/vue'

import { FbSizeTypes, FbUiButtonButtonTypes, FbUiButtonVariantTypes } from '@/types'

import FbUiButton from './index.vue'

export default {
  component: FbUiButton,
  title: 'Components/Ui/FB Button',
  argTypes: {
    default: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
      defaultValue: 'Default button',
      description: 'Button label slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    icon: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      defaultValue: null,
      description: 'Button icon slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    type: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      defaultValue: FbUiButtonButtonTypes.BUTTON,
      options: [
        FbUiButtonButtonTypes.BUTTON,
        FbUiButtonButtonTypes.RESET,
        FbUiButtonButtonTypes.SUBMIT,
      ],
      description: 'HTML button type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: FbUiButtonButtonTypes.BUTTON },
      },
    },
    size: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      defaultValue: FbSizeTypes.MEDIUM,
      options: [
        FbSizeTypes.EXTRA_SMALL,
        FbSizeTypes.SMALL,
        FbSizeTypes.MEDIUM,
        FbSizeTypes.LARGE,
      ],
      description: 'Button size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: FbSizeTypes.MEDIUM },
      },
    },
    variant: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      defaultValue: FbUiButtonVariantTypes.PRIMARY,
      options: [
        FbUiButtonVariantTypes.DEFAULT,
        FbUiButtonVariantTypes.PRIMARY,
        FbUiButtonVariantTypes.SUCCESS,
        FbUiButtonVariantTypes.DANGER,
        FbUiButtonVariantTypes.WARNING,
        FbUiButtonVariantTypes.INFO,
        FbUiButtonVariantTypes.OUTLINE_DEFAULT,
        FbUiButtonVariantTypes.OUTLINE_PRIMARY,
        FbUiButtonVariantTypes.OUTLINE_SUCCESS,
        FbUiButtonVariantTypes.OUTLINE_DANGER,
        FbUiButtonVariantTypes.OUTLINE_WARNING,
        FbUiButtonVariantTypes.OUTLINE_INFO,
        FbUiButtonVariantTypes.LINK,
        FbUiButtonVariantTypes.LINK_DEFAULT,
      ],
      description: 'Button color variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: FbUiButtonVariantTypes.DEFAULT },
      },
    },
    block: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      defaultValue: false,
    },
    uppercase: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      defaultValue: false,
    },
    pill: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      defaultValue: false,
    },
    thick: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      defaultValue: false,
    },
    active: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      defaultValue: false,
    },
    loading: {
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
  default: string
  icon?: string
  type: FbUiButtonButtonTypes
  size: FbSizeTypes
  variant: FbUiButtonVariantTypes
  block: boolean
  uppercase: boolean
  pill: boolean
  thick: boolean
  active: boolean
  loading: boolean
  disabled: boolean
}

const Template: Story<TemplateArgs> = (args) => {
  return {
    props: args,
    components: { FbUiButton },
    template: `
      <fb-ui-button
        :type="type"
        :size="size"
        :variant="variant"
        :block="block"
        :uppercase="uppercase"
        :pill="pill"
        :thick="thick"
        :active="active"
        :loading="loading"
        :disabled="disabled"
        @click.prevent="onClick"
      >
        <template v-if="${args.icon !== null}" slot="icon">${args.icon}</template>
        <template v-if="${args.default !== null}" slot="default">${args.default}</template>
      </fb-ui-button>
    `,
    methods: {
      onClick: action('button-clicked'),
    },
  }
}

export const Default = Template.bind({})

Default.args = {
  default: 'Default button',
  variant: FbUiButtonVariantTypes.DEFAULT,
}

export const Primary = Template.bind({})

Primary.args = {
  default: 'Primary button',
  variant: FbUiButtonVariantTypes.PRIMARY,
}

export const Success = Template.bind({})

Success.args = {
  default: 'Success button',
  variant: FbUiButtonVariantTypes.SUCCESS,
}

export const Danger = Template.bind({})

Danger.args = {
  default: 'Danger button',
  variant: FbUiButtonVariantTypes.DANGER,
}

export const Warning = Template.bind({})

Warning.args = {
  default: 'Warning button',
  variant: FbUiButtonVariantTypes.WARNING,
}

export const Info = Template.bind({})

Info.args = {
  default: 'Info button',
  variant: FbUiButtonVariantTypes.INFO,
}

export const Link = Template.bind({})

Link.args = {
  default: 'Link button',
  variant: FbUiButtonVariantTypes.LINK,
}

export const WithIcon = Template.bind({})

WithIcon.args = {
  default: '',
  icon: `<font-awesome-icon icon="info-circle" />`,
  variant: FbUiButtonVariantTypes.PRIMARY,
}

export const WithIconAndLabel = Template.bind({})

WithIconAndLabel.args = {
  default: 'With label',
  icon: `<font-awesome-icon icon="info-circle" />`,
  variant: FbUiButtonVariantTypes.PRIMARY,
}

export const Sizes: Story<TemplateArgs> = (args) => {
  return {
    props: args,
    components: { FbUiButton },
    template: `
      <div style="display: flex;">
        <div style="padding: 5px 15px 5px 0;">
          <fb-ui-button size="${FbSizeTypes.LARGE}" @click.prevent="onClick">Large button
          </fb-ui-button>
        </div>
        <div style="padding: 5px 15px 5px 0;">
          <fb-ui-button size="${FbSizeTypes.MEDIUM}" @click.prevent="onClick">Medium button
          </fb-ui-button>
        </div>
        <div style="padding: 5px 15px 5px 0;">
          <fb-ui-button size="${FbSizeTypes.SMALL}" @click.prevent="onClick">Small button
          </fb-ui-button>
        </div>
        <div style="padding: 5px 15px 5px 0;">
          <fb-ui-button size="${FbSizeTypes.EXTRA_SMALL}" @click.prevent="onClick">Extra small button
          </fb-ui-button>
        </div>
      </div>
    `,
    methods: {
      onClick: action('button-clicked'),
    },
  }
}

Sizes.parameters = {
  controls: { disabled: true },
}
