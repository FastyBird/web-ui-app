import '!style-loader!css-loader!sass-loader!./spacing.scss'
import { Story } from '@storybook/vue'

export default {
  title: 'About/Spacing',
}

export const Spacing: Story = () => {
  return {
    template: `
      <div class="fb-story-spacing__container">
        <p>Extra small:</p>
        <div class="fb-story-spacing__box-extra-small" />
        <p>Small:</p>
          <div class="fb-story-spacing__box-small" />
        <p>Medium:</p>
        <div class="fb-story-spacing__box-medium" />
        <p>Large:</p>
        <div class="fb-story-spacing__box-large" />
      </div>
    `,
  }
}
