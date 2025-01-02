import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { cn } from '@/libs'
import * as SliderPrimitive from '@radix-ui/react-slider'

const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn('relative flex w-full touch-none select-none items-center', className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-ui-surface-400">
      <SliderPrimitive.Range className="absolute h-full bg-ui-primary-500" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        'block size-5 rounded-full',
        'border-2 border-ui-primary-400',
        'bg-ui-primary-500',
        'ring-offset-ui-primary-200',
        'transition-all duration-200',
        'focus-visible:outline-none',
        'disabled:pointer-events-none',
        'disabled:opacity-50',
        'cursor-grab',
        'active:scale-110',
        'active:cursor-grabbing',
        'active:outline-none',
        'active:ring-2',
        'active:ring-offset-2',
      )}
    />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
