import { FC, memo } from 'react'

import { cn } from '@/libs'

interface IProps {
  isActivated?: boolean
  onClick?: () => void
}
const Badge: FC<IProps> = ({ isActivated = false, onClick }) => {
  return (
    <button
      data-active={isActivated}
      type="button"
      className={cn(
        'min-h-2 min-w-8 rounded-full',
        'data-[active=true]:hover:cursor-default',
        'data-[active=true]:bg-ui-tertiary-300',
        'data-[active=false]:bg-ui-surface-300',
        'data-[active=false]:hover:scale-110',
        'transition duration-300',
      )}
      onClick={onClick}
    />
  )
}
const MemoizedBadge = memo(Badge)
export default MemoizedBadge
