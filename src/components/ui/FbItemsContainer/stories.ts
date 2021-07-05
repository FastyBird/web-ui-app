import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/vue'

import { FbSizeTypes, FbUiButtonVariantTypes } from '@/types'

import FbUiItemsContainer from './index.vue'
import FbUiButton from './../FbButton/index.vue'

export default {
  component: FbUiItemsContainer,
  title: 'Components/Ui/FB Item container',
  argTypes: {
    default: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
      description: 'Items content slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    heading: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
      description: 'Items heading slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    subheading: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
      description: 'Items sub-heading slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    buttons: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Items buttons slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
  },
  parameters: {
    knobs: { disabled: true },
  },
} as Meta

interface TemplateArgs {
  default: string
  heading?: string
  subheading?: string
  buttons?: string
}

const Template: Story<TemplateArgs> = (args) => {
  return {
    props: args,
    components: { FbUiItemsContainer, FbUiButton },
    template: `
      <fb-ui-items-container :size="size" :variant="variant">
        <template v-if="${args.default !== null}" slot="default">${args.default}</template>
        <template v-if="${args.heading !== null}" slot="heading">${args.heading}</template>
        <template v-if="${args.subheading !== null}" slot="subheading">${args.subheading}</template>
        <template v-if="${args.buttons !== null}" slot="buttons">${args.buttons}</template>
      </fb-ui-items-container>
    `,
    methods: {
      onClick: action('button-clicked'),
    },
  }
}

export const Default = Template.bind({})

Default.args = {
  heading: 'List of awesome items',
  default: 'Some item content',
  buttons: `
    <fb-ui-button size="${FbSizeTypes.SMALL}" @click.prevent="onClick">Add</fb-ui-button>
    <fb-ui-button size="${FbSizeTypes.SMALL}" variant="${FbUiButtonVariantTypes.WARNING}" :icon="true"  @click.prevent="onClick">
        <font-awesome-icon icon="cog" slot="icon" />
    </fb-ui-button>
  `,
}

export const WithSubheading = Template.bind({})

WithSubheading.args = {
  heading: 'List of awesome items',
  subheading: 'List of awesome items',
  default: 'Some item content',
  buttons: `
    <fb-ui-button size="${FbSizeTypes.SMALL}" @click.prevent="onClick">Add</fb-ui-button>
    <fb-ui-button size="${FbSizeTypes.SMALL}" variant="${FbUiButtonVariantTypes.WARNING}" :icon="true"  @click.prevent="onClick">
        <font-awesome-icon icon="cog" slot="icon" />
    </fb-ui-button>
  `,
}
