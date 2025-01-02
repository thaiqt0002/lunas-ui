import { Meta, StoryObj } from '@storybook/react/*'
import CartSheet from '.'

const meta: Meta<typeof CartSheet> = {
  title: 'Components/Molecules/CartSheet',
  component: CartSheet,
  tags: ['molecules', 'cart', 'sheet'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
