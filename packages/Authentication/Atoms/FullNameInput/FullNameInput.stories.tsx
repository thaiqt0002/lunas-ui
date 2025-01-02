import { Meta, StoryObj } from '@storybook/react/*'

import FullNameInput from '.'

const meta: Meta<typeof FullNameInput> = {
  title: 'Authentication/Atoms/FullNameInput',
  component: FullNameInput,
  tags: ['autodocs', 'atoms'],
}

export default meta
type Story = StoryObj<typeof FullNameInput>

export const Default: Story = {}
