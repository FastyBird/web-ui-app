import { Meta, Story } from '@storybook/vue'

import { FbSizeTypes, FbUiVariantTypes } from '@/types'

import FbUiIconWithChild from './index.vue'

export default {
  component: FbUiIconWithChild,
  title: 'Components/Ui/FB Icon with child',
  argTypes: {
    main: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
      description: 'Main icon slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    child: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
      description: 'Child icon slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
    },
    variant: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      defaultValue: FbUiVariantTypes.DEFAULT,
      options: [
        FbUiVariantTypes.DEFAULT,
        FbUiVariantTypes.PRIMARY,
        FbUiVariantTypes.SUCCESS,
        FbUiVariantTypes.DANGER,
        FbUiVariantTypes.WARNING,
        FbUiVariantTypes.INFO,
      ],
      description: 'Child icon color variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: FbUiVariantTypes.DEFAULT },
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
      description: 'Icons sizes',
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
  main: string
  child: string
  variant: FbUiVariantTypes
  size: FbSizeTypes
}

const Template: Story<TemplateArgs> = (args) => {
  return {
    props: args,
    components: { FbUiIconWithChild },
    template: `
      <fb-ui-icon-with-child :size="size" :variant="variant">
      <template v-if="${args.main !== null}" slot="main">${args.main}</template>
      <template v-if="${args.child !== null}" slot="child">${args.child}</template>
      </fb-ui-icon-with-child>
    `,
  }
}

export const Default = Template.bind({})

Default.args = {
  main: `<font-awesome-icon icon="bell" />`,
  child: `<font-awesome-icon icon="info" />`,
}

export const Primary = Template.bind({})

Primary.args = {
  main: `<font-awesome-icon icon="bell" />`,
  child: `<font-awesome-icon icon="info" />`,
  variant: FbUiVariantTypes.PRIMARY,
}

export const Success = Template.bind({})

Success.args = {
  main: `<font-awesome-icon icon="bell" />`,
  child: `<font-awesome-icon icon="info" />`,
  variant: FbUiVariantTypes.SUCCESS,
}

export const Danger = Template.bind({})

Danger.args = {
  main: `<font-awesome-icon icon="bell" />`,
  child: `<font-awesome-icon icon="info" />`,
  variant: FbUiVariantTypes.DANGER,
}

export const Warning = Template.bind({})

Warning.args = {
  main: `<font-awesome-icon icon="bell" />`,
  child: `<font-awesome-icon icon="info" />`,
  variant: FbUiVariantTypes.WARNING,
}

export const Info = Template.bind({})

Info.args = {
  main: `<font-awesome-icon icon="bell" />`,
  child: `<font-awesome-icon icon="info" />`,
  variant: FbUiVariantTypes.INFO,
}


export const Sizes: Story<TemplateArgs> = (args) => {
  return {
    props: args,
    components: { FbUiIconWithChild },
    template: `
      <div style="display: flex;">
        <div style="padding: 5px 15px 5px 0;">
          <fb-ui-icon-with-child size="${FbSizeTypes.LARGE}" variant="${FbUiVariantTypes.PRIMARY}">
            <font-awesome-icon icon="bell" slot="main" />
            <font-awesome-icon icon="info" slot="child" />
          </fb-ui-icon-with-child>
        </div>
        <div style="padding: 5px 15px 5px 0;">
          <fb-ui-icon-with-child size="${FbSizeTypes.MEDIUM}" variant="${FbUiVariantTypes.PRIMARY}">
            <font-awesome-icon icon="bell" slot="main" />
            <font-awesome-icon icon="info" slot="child" />
          </fb-ui-icon-with-child>
        </div>
        <div style="padding: 5px 15px 5px 0;">
          <fb-ui-icon-with-child size="${FbSizeTypes.SMALL}" variant="${FbUiVariantTypes.PRIMARY}">
            <font-awesome-icon icon="bell" slot="main" />
            <font-awesome-icon icon="info" slot="child" />
          </fb-ui-icon-with-child>
        </div>
      </div>
    `,
  }
}

Sizes.parameters = {
  controls: { disabled: true },
}
