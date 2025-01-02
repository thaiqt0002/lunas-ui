import { Meta, StoryObj } from '@storybook/react/*'
import { useLayoutEffect, useRef, useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '.'
import { useHover } from '@/hooks'

const Demo = () => {
  const [value, setValue] = useState<string | undefined>()
  const itemOneRef = useRef<HTMLDivElement>(null)
  const itemTwoRef = useRef<HTMLDivElement>(null)
  const itemThreeRef = useRef<HTMLDivElement>(null)
  const isHoverOne = useHover(itemOneRef)
  const isHoverTwo = useHover(itemTwoRef)
  const isHoverThree = useHover(itemThreeRef)
  useLayoutEffect(() => {
    if (isHoverOne) setValue('item-1')
    if (isHoverTwo) setValue('item-2')
    if (isHoverThree) setValue('item-3')
  }, [isHoverOne, isHoverTwo, isHoverThree])
  return (
    <Accordion value={value} type="single" collapsible className="w-full">
      <AccordionItem ref={itemOneRef} value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem ref={itemTwoRef} value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem ref={itemThreeRef} value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

const meta: Meta<typeof Accordion> = {
  title: 'Components/Atoms/Accordion',
  component: Accordion,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <div className="w-full">
      <Demo />
    </div>
  ),
}
