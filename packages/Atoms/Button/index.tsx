'use client'
import { ButtonHTMLAttributes, forwardRef, memo, ReactNode } from 'react'

import { buttonVariants } from './buttonVariants'

import { cn } from '@/libs'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  readonly asChild?: boolean
  readonly icon?: ReactNode

  readonly rightIcon?: ReactNode

  readonly disabledAnimation?: boolean

  readonly rootClassName?: string
}

const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        className,
        variant = 'default',
        size,
        icon,
        rightIcon,
        asChild = false,
        children,
        ...props
      },
      reference,
    ) => {
      const Comp = asChild ? Slot : 'button'
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={reference}
          {...props}
        >
          {icon}
          <Slottable>{children}</Slottable>
          {rightIcon}
        </Comp>
      )
    },
  ),
)
Button.displayName = 'Button'

export type { ButtonProps }
export default Button
