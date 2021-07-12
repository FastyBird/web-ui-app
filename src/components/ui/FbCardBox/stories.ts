import { Meta, Story } from '@storybook/vue'

import FbUiCardBox from './index.vue'

export default {
  component: FbUiCardBox,
  title: 'Components/Ui/FB Card box',
  argTypes: {
    body: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      defaultValue: 'Vivamus nunc massa, sollicitudin eget ex eget, pellentesque ultrices felis. Nunc at tempus purus. Nulla diam sem, consectetur id magna vitae, pellentesque viverra ipsum.',
      description: 'Card content slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    header: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      defaultValue: 'Lorem ipsum dolor sit amet',
      description: 'Card header slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
  },
  parameters: {
    knobs: { disabled: true },
    actions: { disabled: true },
  },
} as Meta

interface TemplateArgs {
  body?: string
  header?: string
}

const Template: Story<TemplateArgs> = (args) => {
  return {
    props: args,
    components: { FbUiCardBox },
    template: `
      <fb-ui-card-box>
        <template v-if="${args.header !== null && typeof args.header !== 'undefined'}" slot="header">${args.header}</template>
        <template v-if="${args.body !== null && typeof args.body !== 'undefined'}" slot="body">${args.body}</template>
      </fb-ui-card-box>
    `,
  }
}

export const Default = Template.bind({})

