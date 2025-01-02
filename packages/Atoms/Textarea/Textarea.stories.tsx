import { Meta, StoryObj } from '@storybook/react/*'
import { Textarea } from '.'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Atoms/Textarea',
  component: Textarea,
  tags: ['atoms', 'textarea'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Type something...',
  },
}
