'use client'
import { FC, HTMLAttributes, useMemo } from 'react'

import LocalCoinIcon from '@/Icons/LocalCoinIcon'
import { cn } from '@/libs/utils'

interface IProps extends HTMLAttributes<HTMLDivElement> {
  money?: number
  iconSize?: number
}
const Money: FC<IProps> = ({ money, className, iconSize, ...props }) => {
  const formatter = useMemo(() => {
    return (
      money
        ?.toString()
        .replaceAll(/\D/g, '')
        .replaceAll(/\B(?=(?:\d{3})+(?!\d))/g, ',') || '0'
    )
  }, [money])

  return (
    <div
      className={cn('flex items-center gap-x-1 px-1 font-semibold text-ui-primary-500', className)}
      {...props}
    >
      <p>{formatter}</p>
      <LocalCoinIcon size={iconSize ?? 20} />
    </div>
  )
}

export default Money
