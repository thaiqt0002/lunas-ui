'use client'
import { FC, memo } from 'react'

import AvatarIcon from '@/Icons/AvatarIcon'
import colorHash from '@/libs/color-hash'
import { cn } from '@/libs/utils'

interface IProps {
  readonly fullname: string
  readonly email: string
  readonly src: string
  readonly size?: number
  readonly isButton?: boolean
}
const UserAvatar: FC<IProps> = memo(({ fullname, email, src: source, size, isButton = true }) => {
  const Comp = isButton ? 'button' : 'div'
  return (
    <Comp
      disabled={!isButton}
      className={cn(
        'flex size-fit items-center justify-center rounded-full transition-all duration-300',
        'enabled:hover:shadow-ui-flat',
        'enabled:hover:scale-110',
      )}
    >
      {source.length === 0 ? (
        <AvatarIcon bgColor={colorHash.hex(fullname + email)} size={size} />
      ) : (
        <img
          style={{ width: size, height: size }}
          className={cn('rounded-full object-contain')}
          src={source}
          alt={fullname}
        />
      )}
    </Comp>
  )
})
UserAvatar.displayName = 'UserAvatar'
export default UserAvatar
