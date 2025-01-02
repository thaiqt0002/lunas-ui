import { Meta, StoryObj } from '@storybook/react/*'
import XButton from '.'

const meta: Meta<typeof XButton> = {
  title: 'Components/Atoms/XButton',
  component: XButton,
  tags: ['atoms', 'button'],
}
export default meta

type Story = StoryObj<typeof XButton>
export const Default: Story = {}
