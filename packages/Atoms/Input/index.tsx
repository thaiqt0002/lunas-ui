import { ChangeEvent, forwardRef, HTMLAttributes, memo, ReactNode } from 'react'

import { cn } from '@/libs/utils'

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
  placeholder?: string
  isErrored?: boolean
  inputClassName?: string
  value?: string | number | readonly string[]
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: ChangeEvent<HTMLInputElement>) => void
}
const Input = memo(
  forwardRef<HTMLDivElement, IInputProps>(
    (
      {
        isErrored = false,
        value,
        placeholder = '',
        icon,
        className,
        inputClassName,
        onChange,
        onBlur,
        onFocus,
        ...props
      },
      ref,
    ) => {
      return (
        <div
          ref={ref}
          className={cn('relative', isErrored && 'bg-ui-destructive-50', className)}
          {...props}
        >
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            className={cn(
              'w-full',
              'rounded border border-ui-border-400 bg-transparent',
              'px-3 py-1.5',
              '!text-ui-note text-ui-text-700',
              'outline-none',
              'focus-within:text-ui-text-800',
              'focus-within:border-ui-primary-500',
              'focus-within:ring-4',
              'focus-within:ring-ui-primary-100',
              'placeholder:!text-ui-note',
              'placeholder:text-ui-text-500',
              'transition-colors duration-300',
              icon && 'pl-12',
              isErrored && 'border-ui-destructive-500',
              isErrored && 'focus-within:border-ui-destructive-500',
              isErrored && 'focus-within:ring-ui-destructive-100',
              inputClassName,
            )}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          {icon && (
            <div
              className={cn(
                'absolute top-1/2 flex h-[2.125rem] w-9 -translate-y-1/2 transform items-center justify-center border-r border-ui-border-400',
              )}
            >
              {icon}
            </div>
          )}
        </div>
      )
    },
  ),
)
Input.displayName = 'Input'
export default Input
