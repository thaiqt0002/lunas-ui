import { HTMLAttributes } from 'react'

import { cn } from '@/libs'

const Skeleton = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('animate-pulse rounded-md bg-zinc-300', className)} {...props} />
}

export { Skeleton }
