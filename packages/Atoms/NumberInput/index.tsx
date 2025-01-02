'use client'
import {
  ChangeEvent,
  ComponentProps,
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react'

import { cn } from '@/libs'

const NumberInput = forwardRef<
  HTMLInputElement,
  ComponentProps<'input'> & {
    onValueChange?: (value: number) => void
  }
>(({ className, value: initialValue, onChange, onValueChange, ...props }, ref) => {
  const isFocused = useRef<boolean>(false)
  const [value, setValue] = useState<typeof initialValue>(undefined)
  const formattedValue = useMemo(() => {
    const regex = /\B(?=(?:\d{3})+(?!\d))/g
    const focused = isFocused.current
    if (initialValue) {
      return focused ? initialValue : initialValue.toString().replaceAll(regex, ',')
    }
    if (!value) return ''
    if (focused) return value.toString().replaceAll(regex, '')
    return value.toString().replaceAll(regex, ',')
  }, [initialValue, value])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      if (/[^\d,]/.test(value)) return
      setValue(value.replaceAll(',', ''))
      onChange?.(e)
      onValueChange?.(Number(value))
    },
    [onChange, onValueChange],
  )
  const handleFocus = useCallback(() => {
    isFocused.current = true
    if (initialValue) {
      setValue((initialValue ?? '').toString().replaceAll(',', ''))
      return
    }
    setValue((value ?? '').toString().replaceAll(',', ''))
  }, [initialValue, value])
  const handleBlur = useCallback(() => {
    isFocused.current = false
    setValue((value ?? '').toString().replaceAll(/\B(?=(?:\d{3})+(?!\d))/g, ','))
  }, [value])
  return (
    <input
      ref={ref}
      value={formattedValue}
      className={cn(
        'relative',
        'outline-none',
        'px-2 py-1',
        '!text-ui-note text-ui-text-600',
        'rounded border border-ui-border-300',
        'placeholder:!text-ui-note placeholder:text-ui-text-400',
        'focus-within:border-ui-primary-500',
        'focus-within:ring-4',
        'focus-within:ring-ui-primary-50',
        'transition-all duration-300 ease-in-out',
        className,
      )}
      {...props}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  )
})

export default NumberInput
