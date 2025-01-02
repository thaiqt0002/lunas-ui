'use client'
import { FC, memo } from 'react'

import Lucide2XIcon from '@/Icons/Lucide2XIcon'
import { cn } from '@/libs'

interface IProps {
  isDisabled?: boolean
  isButton?: boolean
  onClick?: () => void
}
const XButton: FC<IProps> = ({ isButton = true, isDisabled, onClick }) => {
  const Comp = isButton ? 'button' : 'div'
  return (
    <Comp
      disabled={isDisabled}
      className={cn(
        'flex size-5 items-center justify-center',
        'rounded-full',
        'text-ui-text-500',
        'enabled:hover:bg-ui-surface-100',
        'enabled:hover:text-ui-text-700',
        'enabled:active:bg-ui-surface-200',
        'enabled:active:text-ui-text-900',
        'disabled:cursor-not-allowed disabled:opacity-30',
        'transition-colors duration-200',
      )}
      onClick={onClick}
    >
      <Lucide2XIcon size={14} color="currentColor" />
    </Comp>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default memo(XButton)
