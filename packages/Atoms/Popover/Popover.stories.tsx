import { Meta, StoryObj } from '@storybook/react/*'
import { Popover, PopoverContent, PopoverTrigger } from '.'

const meta: Meta<typeof Popover> = {
  title: 'Components/Atoms/Popover',
  component: Popover,
  tags: ['atoms', 'popover'],
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>Trigger</PopoverTrigger>
      <PopoverContent side="right">Place content for the popover here.</PopoverContent>
    </Popover>
  ),
}
