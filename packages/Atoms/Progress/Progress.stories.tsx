import { Meta, StoryObj } from '@storybook/react/*'
import { Progress } from '.'

const meta: Meta<typeof Progress> = {
  title: 'Components/Atoms/Progress',
  component: Progress,
  tags: ['atoms', 'progress'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 50,
  },
}
