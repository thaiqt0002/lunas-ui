import { Meta, StoryObj } from '@storybook/react'
import PasswordInput from '.'

const meta: Meta<typeof PasswordInput> = {
  title: 'Authentication/Atoms/PasswordInput',
  component: PasswordInput,
  tags: ['authentication', 'atoms'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
