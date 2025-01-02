import { Meta, StoryObj } from '@storybook/react/*'
import { RadioGroup, RadioGroupItem } from '.'
import { Label } from '../Label'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Atoms/RadioGroup',
  component: RadioGroup,
  tags: ['atoms', 'radio'],
}

export default meta

type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  ),
}
