import { Meta, Story } from '@storybook/vue'

import { FbSizeTypes } from '@/types'

import FbUiResultOk from './index.vue'

export default {
  component: FbUiResultOk,
  title: 'Components/Ui/FB Result OK',
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
  size: FbSizeTypes
}

const Template: Story<TemplateArgs> = (args) => {
  return {
    props: args,
    components: { FbUiResultOk },
    template: `
      <fb-ui-result-ok :size="size" />
    `,
  }
}

export const Default = Template.bind({})
