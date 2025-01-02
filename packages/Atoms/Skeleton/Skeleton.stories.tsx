import { Meta, StoryObj } from '@storybook/react/*'
import { Skeleton } from '.'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Atoms/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return (
      <div className="flex h-fit flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    )
  },
}
