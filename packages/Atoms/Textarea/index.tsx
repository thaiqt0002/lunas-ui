'use client'
import { ComponentProps, forwardRef } from 'react'

import { cn } from '@/libs'

const Textarea = forwardRef<HTMLTextAreaElement, ComponentProps<'textarea'>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex h-auto min-h-[80px] w-full',
          'rounded-md border',
          'bg-ui-surface-50',
          'px-3 py-2',
          '!text-ui-note',
          'text-ui-text-800',
          'placeholder:text-ui-text-400',
          'focus:outline-none',
          'focus-within:ring-4',
          'focus-within:ring-ui-tertiary-200',
          'focus-within:border-ui-tertiary-500',
          'disabled:cursor-not-allowed',
          'disabled:opacity-50',
          'transition duration-300 ease-in-out',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
