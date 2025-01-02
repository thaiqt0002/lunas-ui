import { Meta, StoryObj } from '@storybook/react/*'
import ThankYou from '.'

const meta: Meta<typeof ThankYou> = {
  title: 'Authentication/ThankYou',
  component: ThankYou,
  tags: ['Authentication'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
