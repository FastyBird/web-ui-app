import {
  Args,
  Meta,
  Story,
} from '@storybook/vue3'

import { FbUiDividerVariantTypes } from '@/types'

import { IFbUiDividerProps } from './types'
import FbUiDivider from './index.vue'

export default {
  component: FbUiDivider,
  title: 'Components/Ui/FB Divider',
  argTypes: {
    default: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
      defaultValue: null,
      description: 'Divider content slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    type: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      defaultValue: FbUiDividerVariantTypes.HORIZONTAL,
      options: [
        FbUiDividerVariantTypes.HORIZONTAL,
        FbUiDividerVariantTypes.VERTICAL,
      ],
      description: 'Divider type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: FbUiDividerVariantTypes.HORIZONTAL },
      },
    },
  },
  parameters: {
    controls: { disabled: true },
    actions: { disabled: true },
  },
} as Meta

interface TemplateArgs extends IFbUiDividerProps, Args {
  default: string
}

const Template: Story<TemplateArgs> = (args) => {
  return {
    components: { FbUiDivider },
    setup(): any {
      return { args }
    },
    template: `
      <fb-ui-divider :type="args.type">
      <template v-if="${args.default !== null && typeof args.default !== 'undefined'}" #default>${args.default}</template>
      </fb-ui-divider>
    `,
  }
}

export const Default = Template.bind({})

Default.args = {
  default: 'Divider Space',
}

export const Horizontal: Story<TemplateArgs> = () => {
  return {
    components: { FbUiDivider },
    template: `
      <div style="display: flex; flex-direction: column;">
        <div style="border: 1px solid rgb(221, 221, 221);height: 100px;flex-grow: 2;display: flex;place-content: center;justify-content: center;align-items: center;">
          <span>Content</span>
        </div>
        <div style="position: relative;">
          <fb-ui-divider type="${FbUiDividerVariantTypes.HORIZONTAL}">AND</fb-ui-divider>
        </div>
        <div style="border: 1px solid rgb(221, 221, 221);height: 100px;flex-grow: 2;display: flex;place-content: center;justify-content: center;align-items: center;">
          <span>Content</span>
        </div>
        <div style="position: relative;">
          <fb-ui-divider type="${FbUiDividerVariantTypes.HORIZONTAL}">AND</fb-ui-divider>
        </div>
        <div style="border: 1px solid rgb(221, 221, 221);height: 100px;flex-grow: 2;display: flex;place-content: center;justify-content: center;align-items: center;">
          <span>Content</span>
        </div>
        <div style="position: relative;">
          <fb-ui-divider type="${FbUiDividerVariantTypes.HORIZONTAL}">=</fb-ui-divider>
        </div>
        <div style="border: 1px solid rgb(221, 221, 221);height: 100px;flex-grow: 2;display: flex;place-content: center;justify-content: center;align-items: center;">
          <span>Content</span>
        </div>
      </div>
    `,
  }
}

export const Vertical: Story<TemplateArgs> = () => {
  return {
    components: { FbUiDivider },
    template: `
      <div style="display: flex; flex-direction: row;">
        <div style="border: 1px solid rgb(221, 221, 221);height: 100px;flex-grow: 2;display: flex;place-content: center;justify-content: center;align-items: center;">
          <span>Content</span>
        </div>
        <div style="position: relative; width: 50px;">
          <fb-ui-divider type="${FbUiDividerVariantTypes.VERTICAL}">OR</fb-ui-divider>
        </div>
        <div style="border: 1px solid rgb(221, 221, 221);height: 100px;flex-grow: 2;display: flex;place-content: center;justify-content: center;align-items: center;">
          <span>Content</span>
        </div>
        <div style="position: relative; width: 50px;">
          <fb-ui-divider type="${FbUiDividerVariantTypes.VERTICAL}">OR</fb-ui-divider>
        </div>
        <div style="border: 1px solid rgb(221, 221, 221);height: 100px;flex-grow: 2;display: flex;place-content: center;justify-content: center;align-items: center;">
          <span>Content</span>
        </div>
        <div style="position: relative; width: 50px;">
          <fb-ui-divider type="${FbUiDividerVariantTypes.VERTICAL}">OR</fb-ui-divider>
        </div>
        <div style="border: 1px solid rgb(221, 221, 221);height: 100px;flex-grow: 2;display: flex;place-content: center;justify-content: center;align-items: center;">
          <span>Content</span>
        </div>
      </div>
    `,
  }
}
