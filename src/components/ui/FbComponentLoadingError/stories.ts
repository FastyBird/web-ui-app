import { Meta, Story } from '@storybook/vue'

import { FbSizeTypes } from '@/types'

import FbUiComponentLoadingError from './index.vue'

export default {
  component: FbUiComponentLoadingError,
  title: 'Components/Ui/FB Component loading error',
  argTypes: {
    text: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Loading failed text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Content could not be loaded. Please reload page.' },
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
      description: 'Icon size',
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
  text?: string
  size: FbSizeTypes
}

const Template: Story<TemplateArgs> = (args) => {
  return {
    props: args,
    components: { FbUiComponentLoadingError },
    template: `
      <fb-ui-component-loading-error
        :size="size"
        :text="text"
      />
    `,
  }
}

export const Default = Template.bind({})
