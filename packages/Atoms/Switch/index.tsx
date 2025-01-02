'use client'

import React from 'react'

import { cn } from '@/libs'
import * as SwitchPrimitives from '@radix-ui/react-switch'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'focus-visible:ring-ui-primary-500',
      'focus-visible:ring-offset-ui-primary-500',
      'data-[state=checked]:bg-ui-primary-500',
      'data-[state=unchecked]:bg-ui-surface-300',
      'peer inline-flex h-6 w-11 shrink-0',
      'cursor-pointer',
      'items-center rounded-full border-2 border-transparent',
      'transition-colors',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed',
      'disabled:opacity-50',
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'bg-ui-surface-100',
        'pointer-events-none',
        'block',
        'size-5 rounded-full shadow-lg ring-0',
        'transition-transform',
        'data-[state=checked]:translate-x-5',
        'data-[state=unchecked]:translate-x-0',
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
