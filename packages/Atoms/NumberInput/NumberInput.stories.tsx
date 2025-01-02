import { Meta, StoryObj } from '@storybook/react/*'
import NumberInput from '.'
import { useState } from 'react'
const WithValueFC = () => {
  const [value, setValue] = useState<number>()
  return (
    <NumberInput
      value={value}
      onValueChange={(data) => {
        setValue(data)
      }}
      placeholder="Nhập số"
    />
  )
}

const meta: Meta<typeof NumberInput> = {
  title: 'Components/Atoms/NumberInput',
  component: NumberInput,
}
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    placeholder: 'Nhập số',
  },
}
export const WithValue: Story = {
  render: () => <WithValueFC />,
}
