import { Meta, StoryObj } from '@storybook/react/*'
import SmallQuantityBtn from '.'
import { useState } from 'react'

const FC = () => {
  const [value, setValue] = useState(1)
  return (
    <SmallQuantityBtn
      value={value}
      onValueChange={(value) => {
        console.log(value)
        setValue(value)
      }}
    />
  )
}
const meta: Meta = {
  title: 'Components/Atoms/SmallQuantityBtn',
  component: SmallQuantityBtn,
  tags: ['atoms'],
}
export default meta

type Story = StoryObj<typeof SmallQuantityBtn>

export const Default: Story = {
  render: () => <FC />,
}
