'use client'
import { FC, memo, ReactNode } from 'react'

import { cn } from '@/libs'

interface IProps {
  name?: string
  isActive?: boolean
  isDisabled?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  onClick?: () => void
}
const MenuItem: FC<IProps> = ({
  isActive = false,
  isDisabled = false,
  name,
  leftIcon,
  rightIcon,
  onClick,
}) => {
  return (
    <li className="w-full list-none">
      <button
        data-active={isActive}
        disabled={isDisabled}
        className={cn(
          'flex w-full items-center justify-start gap-x-1 rounded-lg bg-ui-surface-50 px-3 py-2 !text-ui-note text-ui-text-700',
          'disabled:opacity-30',
          'disabled:cursor-not-allowed',
          'enabled:hover:bg-ui-primary-50',
          'enabled:data-[active=true]:font-semibold',
          'enabled:data-[active=true]:text-ui-text-50',
          'enabled:data-[active=true]:bg-ui-primary-500',
          'transition duration-200',
        )}
        onClick={onClick}
      >
        {leftIcon}
        {name}
        {rightIcon}
      </button>
    </li>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default memo(MenuItem)
