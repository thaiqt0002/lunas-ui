import { Meta, StoryObj } from '@storybook/react/*'
import SignIn from '.'

const meta: Meta<typeof SignIn> = {
  title: 'Authentication/SignIn',
  component: SignIn,
}
export default meta
type Story = StoryObj<typeof SignIn>

export const Default: Story = {
  args: {
    onSubmit: (values) =>
      new Promise((resolve) => setTimeout(() => resolve(console.log(values)), 1000)),
  },
}
