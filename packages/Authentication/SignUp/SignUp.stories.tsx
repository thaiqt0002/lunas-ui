import { Meta, StoryObj } from '@storybook/react/*'
import SignUp from '.'

const meta: Meta<typeof SignUp> = {
  title: 'Authentication/SignUp',
  component: SignUp,
  tags: ['Authentication'],
}
export default meta
type Story = StoryObj<typeof SignUp>

export const Default: Story = {
  args: {
    onSubmit: async (value) => {
      await new Promise((resolve) => setTimeout(() => resolve(console.log(value)), 1000))
    },
    onForgotPassword: () => console.log('forgot password'),
    onSignUp: () => console.log('sign up'),
  },
}
