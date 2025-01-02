import { Meta, StoryObj } from '@storybook/react/*'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '.'

const meta: Meta<typeof TooltipProvider> = {
  title: 'Components/Atoms/Tooltip',
  tags: ['atoms', 'tooltip'],
  component: TooltipProvider,
}
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  render: () => (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>
          <p>Tooltip content</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}
