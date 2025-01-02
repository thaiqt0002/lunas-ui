import { Meta, StoryObj } from '@storybook/react/*'
import { Slider } from '.'

const meta: Meta<typeof Slider> = {
  title: 'Components/Atoms/Slider',
  component: Slider,
  tags: ['atoms', 'slider'],
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: 'w-[60%]',
  },
}
