import { Meta, StoryObj } from '@storybook/react/*'
import MenuItem from '.'

const meta: Meta<typeof MenuItem> = {
  title: 'Components/Atoms/MenuItem',
  component: MenuItem,
  tags: ['atoms', 'menu', 'item'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isActive: false,
    isDisabled: false,
    name: 'MenuItem',
  },
}
