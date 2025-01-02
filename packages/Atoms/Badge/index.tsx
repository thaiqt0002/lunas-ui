'use client'
import { FC, memo, ReactNode } from 'react'

import { cn } from '@/libs'

interface IBadgeProps {
  isNew?: boolean
  children: ReactNode
  className?: string
}
const Badge: FC<IBadgeProps> = memo(({ isNew, className, children, ...props }) => {
  return (
    <div className={cn('relative size-fit overflow-y-visible p-1', className)} {...props}>
      {children}
      {isNew && (
        <div className="absolute left-full top-0 flex size-fit -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ui-destructive-500">
          <div className="z-10 size-3"></div>
          <span className="absolute -z-10 size-3/4 animate-ping rounded-full bg-ui-destructive-500" />
        </div>
      )}
    </div>
  )
})
Badge.displayName = 'Badge'
export default Badge
