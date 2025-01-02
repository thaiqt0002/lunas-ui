import { Meta, StoryObj } from '@storybook/react/*'
import { Separator } from '.'

const meta: Meta<typeof Separator> = {
  title: 'Components/Atoms/Separator',
  component: Separator,
  tags: ['atoms'],
}

export default meta
type Story = StoryObj<typeof Separator>

export const Default: Story = {
  args: {},
}
