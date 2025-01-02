import { FC } from 'react'

import { DefaultLogoWithIcon } from '@/Icons'
import { cn } from '@/libs'

const LoadingScreen: FC = () => {
  return (
    <div
      className={cn(
        'relative flex size-full flex-col items-center justify-center gap-y-3',
        'before:absolute before:z-10 before:size-full before:animate-pulse before:bg-ui-surface-200/15',
        '[&>svg]:z-50',
      )}
    >
      <DefaultLogoWithIcon />
    </div>
  )
}

export default LoadingScreen
