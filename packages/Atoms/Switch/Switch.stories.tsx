import { Meta, StoryObj } from '@storybook/react/*'
import { Switch } from '.'
import { Label } from '../Label'

const meta: Meta<typeof Switch> = {
  title: 'Components/Atoms/Switch',
  component: Switch,
  tags: ['atoms', 'switch'],
}
export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
}
