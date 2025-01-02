import { Meta, StoryObj } from '@storybook/react/*'
import { ScrollArea, ScrollBar } from '.'

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/Atoms/ScrollBar',
  component: ScrollArea,
  tags: ['atoms', 'scrollbar'],
}
export default meta
type Story = StoryObj<typeof ScrollArea>

export const Default: Story = {
  render: () => {
    return (
      <ScrollArea scrollHideDelay={200} className="h-[120px] rounded-md border p-4">
        <div className="h-[600px]">
          Jokester began sneaking into the castle in the middle of the night and leaving jokes all
          over the place: under the king's pillow, in his soup, even in the royal toilet. The king
          was furious, but he couldn't seem to stop Jokester. And then, one day, the people of the
          kingdom discovered that the jokes left by Jokester were so funny that they couldn't help
          but laugh. And once they started laughing, they couldn't stop.
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    )
  },
}
