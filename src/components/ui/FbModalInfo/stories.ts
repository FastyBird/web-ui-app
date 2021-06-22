import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/vue'

import { FbSizeTypes, FbUiModalLayoutTypes } from '@/types'

import FbUiModalInfo from './index.vue'
import FbUiButton from './../FbButton/index.vue'
import FbUiModalHeader from './../FbModalHeader/index.vue'

export default {
  component: FbUiModalInfo,
  title: 'Components/Ui/FB Modal info',
  argTypes: {
    // COMPONENT SLOTS
    header: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Full modal info header slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    title: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Modal info title slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    icon: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Modal info icon slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    default: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Modal info content slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    // COMPONENT PROPS
    size: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      defaultValue: FbSizeTypes.MEDIUM,
      options: [
        FbSizeTypes.SMALL,
        FbSizeTypes.MEDIUM,
        FbSizeTypes.LARGE,
      ],
      description: 'Modal info size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: FbSizeTypes.MEDIUM },
      },
    },
    layout: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      defaultValue: FbUiModalLayoutTypes.DEFAULT,
      options: [
        FbUiModalLayoutTypes.DEFAULT,
        FbUiModalLayoutTypes.PHONE,
        FbUiModalLayoutTypes.TABLET,
      ],
      description: 'Modal info layout',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: FbUiModalLayoutTypes.DEFAULT },
      },
    },
    enableClosing: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      defaultValue: true,
    },
    closeBtnLabel: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      defaultValue: 'Close',
    },
    transparentBg: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      defaultValue: false,
    },
    show: {
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
  size: FbSizeTypes
  layout: FbUiModalLayoutTypes
  enableClosing: boolean
  closeBtnLabel: string
  transparentBg: boolean
  show: boolean
  header?: string
  title?: string
  icon?: string
  default?: string
}

const Template: Story<TemplateArgs> = (args) => {
  return {
    props: args,
    components: { FbUiModalInfo, FbUiButton, FbUiModalHeader },
    template: `
      <div>
        <fb-ui-button @click="() => { show = true }">Open modal info</fb-ui-button>

        <fb-ui-modal-info
          :show="show"
          :size="size"
          :layout="layout"
          :enableClosing="enableClosing"
          :closeBtnLabel="closeBtnLabel"
          :transparentBg="transparentBg"
          @close="(e) => { show = false; onClose(e) }"
        >
          <template v-if="${args.header !== null}" slot="header">${args.header}</template>
          <template v-if="${args.title !== null}" slot="title">${args.title}</template>
          <template v-if="${args.icon !== null}" slot="icon">${args.icon}</template>
          <template v-if="${args.default !== null}" slot="default">${args.default}</template>
        </fb-ui-modal-info>
      </div>
    `,
    methods: {
      onClick: action('button-clicked'),
      onClose: action('modal-close-clicked'),
    },
  }
}

export const Default = Template.bind({})

Default.args = {
  title: 'Modal info header',
  default: `
    <div>
      <p>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi. Nunc sodales vel libero ac gravida. Maecenas malesuada viverra odio at molestie.</p>
      <p>Donec ultrices vel nibh a iaculis. Morbi dapibus sollicitudin libero facilisis dapibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <p>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi. Nunc sodales vel libero ac gravida. Maecenas malesuada viverra odio at molestie.</p>
    </div>
  `,
}

export const WithIcon = Template.bind({})

WithIcon.args = {
  title: 'Modal info header',
  icon: `<font-awesome-icon icon="user-secret" />`,
  default: `
    <div>
      <p>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi. Nunc sodales vel libero ac gravida. Maecenas malesuada viverra odio at molestie.</p>
      <p>Donec ultrices vel nibh a iaculis. Morbi dapibus sollicitudin libero facilisis dapibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <p>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi. Nunc sodales vel libero ac gravida. Maecenas malesuada viverra odio at molestie.</p>
    </div>
  `,
}

export const WithCustomHeader = Template.bind({})

WithCustomHeader.args = {
  header: `
    <fb-ui-modal-header>
      <template slot="title">Modal info custom header</template>
      <template slot="subtitle">With some fancy subtitle</template>
      <template slot="icon"><font-awesome-icon icon="magic" /></template>
    </fb-ui-modal-header>
  `,
  default: `
    <div>
      <p>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi. Nunc sodales vel libero ac gravida. Maecenas malesuada viverra odio at molestie.</p>
      <p>Donec ultrices vel nibh a iaculis. Morbi dapibus sollicitudin libero facilisis dapibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <p>Phasellus sapien felis, vulputate a nibh eu, tempor dictum turpis. Pellentesque non ex condimentum, dictum mauris non, ullamcorper nisi. Nunc sodales vel libero ac gravida. Maecenas malesuada viverra odio at molestie.</p>
    </div>
  `,
}
