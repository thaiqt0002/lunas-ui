import { Meta, StoryObj } from '@storybook/react/*'
import { Avatar, AvatarImage, AvatarFallback } from '.'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Atoms/Avatar',
  component: Avatar,
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback />
    </Avatar>
  ),
}
