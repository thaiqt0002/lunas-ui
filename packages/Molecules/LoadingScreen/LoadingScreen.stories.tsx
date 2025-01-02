import { Meta, StoryObj } from '@storybook/react/*'
import LoadingScreen from '.'

const meta: Meta<typeof LoadingScreen> = {
  title: 'Components/Molecules/LoadingScreen',
  component: LoadingScreen,
  tags: ['molecules', 'loading'],
}

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  render: () => (
    <div className="h-[680px] w-full">
      <LoadingScreen />
    </div>
  ),
}
