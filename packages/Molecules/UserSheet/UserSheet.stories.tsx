import { Meta, StoryObj } from '@storybook/react/*'
import UserSheet from '.'

const meta: Meta<typeof UserSheet> = {
  title: 'Components/Molecules/UserSheet',
  component: UserSheet,
  tags: ['molecules', 'user', 'sheet'],
}
export default meta

type Story = StoryObj<typeof UserSheet>

export const Default: Story = {}
export const HaveProfile: Story = {
  args: {
    fullname: 'John Doe',
    email: 'john@example.com',
    avatar: '',
  },
}
