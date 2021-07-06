import { Meta, Story } from '@storybook/vue'

import FbLayoutContent from './index.vue'

export default {
  component: FbLayoutContent,
  title: 'Components/Layout/FB Content',
  argTypes: {
    default: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
      description: 'Content body slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    header: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Content header slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    footer: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Content footer slot',
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
  header?: string
  footer?: string
}

const Template: Story<TemplateArgs> = (args) => {
  return {
    props: args,
    components: { FbLayoutContent },
    template: `
      <div style="height: 150px">
        <fb-layout-content>
          <template v-if="${args.default !== null && typeof args.default !== 'undefined'}" slot="default">${args.default}</template>
          <template v-if="${args.header !== null && typeof args.header !== 'undefined'}" slot="header">${args.header}</template>
          <template v-if="${args.footer !== null && typeof args.footer !== 'undefined'}" slot="footer">${args.footer}</template>
        </fb-layout-content>
      </div>
    `,
  }
}

export const Default = Template.bind({})

Default.args = {
  default: 'Full height content',
  header: 'Content header slot placed on top',
  footer: 'Content footer slot placed on bottom',
}
