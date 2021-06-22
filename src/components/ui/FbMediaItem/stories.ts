import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/vue'

import FbUiMediaItem from './index.vue'
import FbUiButton from './../FbButton/index.vue'

export default {
  component: FbUiMediaItem,
  title: 'Components/Ui/FB Media item',
  argTypes: {
    left: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Item left box content slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    right: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Item right box content slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    heading: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Item heading slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    description: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Item description slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    action: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Item action slot',
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
  left?: string
  right?: string
  heading?: string
  description?: string
  action?: string
}

const Template: Story<TemplateArgs> = (args) => {
  return {
    props: args,
    components: { FbUiMediaItem, FbUiButton },
    template: `
      <fb-ui-media-item>
        <template v-if="${args.left !== null}" slot="left">${args.left}</template>
        <template v-if="${args.right !== null}" slot="right">${args.right}</template>
        <template v-if="${args.heading !== null}" slot="heading">${args.heading}</template>
        <template v-if="${args.description !== null}" slot="description">${args.description}</template>
        <template v-if="${args.action !== null}" slot="action">${args.action}</template>
      </fb-ui-media-item>
    `,
    methods: {
      onClick: action('button-clicked'),
    },
  }
}

export const Default = Template.bind({})

Default.args = {
  left: `<div style="font-size: 25px; margin-top: 10px;"><font-awesome-icon icon="magic" /></div>`,
  heading: 'All created items',
  description: 'Here could find all created items stored in database',
  action: '<fb-ui-button @click="onClick">Reload</fb-ui-button>',
}
