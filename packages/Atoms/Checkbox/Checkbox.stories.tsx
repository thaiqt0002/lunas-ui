import { Meta, StoryObj } from '@storybook/react/*'
import { Checkbox } from '.'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
  tags: ['atoms', 'checkbox'],
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {}
