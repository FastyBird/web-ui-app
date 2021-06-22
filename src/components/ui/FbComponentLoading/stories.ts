import { Meta, Story } from '@storybook/vue'

import FbUiComponentLoading from './index.vue'
import { FbSizeTypes } from '@/types'

export default {
  component: FbUiComponentLoading,
  title: 'Components/Ui/FB Component loading',
  argTypes: {
    text: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Loading text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Preparing content, please wait...' },
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
      description: 'Spinner size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: FbSizeTypes.MEDIUM },
      },
    },
  },
  parameters: {
    knobs: { disabled: true },
    actions: { disabled: true },
  },
} as Meta

interface TemplateArgs {
  size: FbSizeTypes
}

const Template: Story<TemplateArgs> = (args) => {
  return {
    props: args,
    components: { FbUiComponentLoading },
    template: `
      <fb-ui-component-loading
        :size="size"
        :text="text"
      />
    `,
  }
}

export const Default = Template.bind({})
