import { FC } from 'react'

import Lucide2CircleAlert from '@/Icons/Lucide2CircleAlert'
import { cn } from '@/libs'

interface ErrorMsgProps {
  message: string
}

const ErrorMsg: FC<ErrorMsgProps> = ({ message = '' }) => {
  return (
    <div
      className={cn(
        'flex h-0 items-center gap-x-1 overflow-auto text-ui-small-note font-normal',
        message && 'h-4',
        'transition-none duration-300 ease-in-out',
        '[&>p]:text-ui-destructive-600',
      )}
      role="alert"
    >
      <Lucide2CircleAlert size={14} color="#DC2626" />
      <p>{message}</p>
    </div>
  )
}

export default ErrorMsg
