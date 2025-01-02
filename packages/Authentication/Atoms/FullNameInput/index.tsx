import { ChangeEvent, FC, memo, useCallback, useRef } from 'react'

import Lucide2UserIcon from '@/Icons/Lucide2UserIcon'
import { cn } from '@/libs'

interface IProps {
  isErrored?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
}
const FullNameInput: FC<IProps> = ({ isErrored = false, onChange, onBlur }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleFocusContainer = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex w-full gap-x-1 overflow-hidden rounded-sm',
        'border border-ui-border-400',
        'text-sm text-ui-text-800',
        'focus-within:border-ui-tertiary-500',
        'focus-within:ring-4 focus-within:ring-ui-tertiary-200',
        'transition duration-300 ease-in-out',
        '[&>input]:shrink-0',
        '[&>input]:grow',
        '[&>input]:bg-transparent',
        '[&>input]:outline-none',
        '[&>input]:placeholder:text-ui-text-400',
        '[&>label]:p-[0.75rem_1.5rem]',
        '[&>label]:border-r',
        '[&>label]:border-border-ui-border-400',
        '[&>label]:cursor-pointer',
        isErrored &&
          'border-ui-destructive-400 focus-within:border-ui-destructive-400 focus-within:ring-ui-destructive-200',
      )}
      onClick={handleFocusContainer}
    >
      <label htmlFor="fullname">
        <Lucide2UserIcon size={16} color="#9CA3AF" />
      </label>
      <input
        id="fullname"
        ref={inputRef}
        type="text"
        placeholder="Họ và tên"
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default memo(FullNameInput)
