import { ChangeEvent, FC, memo, useCallback, useRef, useState } from 'react'

import Lucide2EyeIcon from '@/Icons/Lucide2EyeIcon'
import Lucide2EyeOffIcon from '@/Icons/Lucide2EyeOffIcon'
import Lucide2LockIcon from '@/Icons/Lucide2LockIcon'
import { cn } from '@/libs'

interface IProps {
  isErrored?: boolean
  placeholder?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
}
const PasswordInput: FC<IProps> = ({ isErrored, placeholder, onChange, onBlur }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [showPassword, setShowPassword] = useState(false)

  const handleFocusContainer = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev)
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
      <label htmlFor="password">
        <Lucide2LockIcon size={16} color="#9CA3AF" />
      </label>
      <input
        id="password"
        ref={inputRef}
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder ?? 'Mật khẩu'}
        onChange={onChange}
        onBlur={onBlur}
      />
      <button type="button" onClick={toggleShowPassword} className="p-2">
        {showPassword ? (
          <Lucide2EyeOffIcon size={16} color="#9CA3AF" />
        ) : (
          <Lucide2EyeIcon size={16} color="#9CA3AF" />
        )}
      </button>
    </div>
  )
}

const MemoizedPasswordInput = memo(PasswordInput)
export default MemoizedPasswordInput
