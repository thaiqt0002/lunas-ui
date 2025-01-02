import { Meta, StoryObj } from '@storybook/react/*'
import EmailInput from '.'

const meta: Meta<typeof EmailInput> = {
  title: 'Authentication/Atoms/EmailInput',
  component: EmailInput,
  tags: ['authentication', 'atoms'],
}
export default meta
type Story = StoryObj<typeof EmailInput>

export const Default: Story = {}
