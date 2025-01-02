import { Meta, StoryObj } from '@storybook/react/*'
import ErrorMsg from '.'

const meta: Meta<typeof ErrorMsg> = {
  title: 'Authentication/Atoms/ErrorMsg',
  component: ErrorMsg,
  tags: ['autodocs', 'molecules'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    message: 'This is an error message',
  },
}
