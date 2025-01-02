import { FC, memo, useEffect, useState } from 'react'

import MenuItem from '@/Atoms/MenuItem'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/Atoms/Sheet'
import { Skeleton } from '@/Atoms/Skeleton'
import UserAvatar from '@/Atoms/UserAvatar'
import Lucide2AddressIcon from '@/Icons/Lucide2AddressIcon'
import Lucide2LockIcon from '@/Icons/Lucide2LockIcon'
import Lucide2LogOutIcon from '@/Icons/Lucide2LogOutIcon'
import Lucide2NotiIcon from '@/Icons/Lucide2NotiIcon'
import Lucide2ReservationIcon from '@/Icons/Lucide2ReservationIcon'
import Lucide2UserIcon from '@/Icons/Lucide2UserIcon'
import Flex from '@/Layout/Flex'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

type TItem = 'PROFILE' | 'SECURITY' | 'NOTIFICATION' | 'RESERVATION' | 'ADDRESS' | 'LOGOUT'
interface IProps {
  initialActiveItem?: TItem
  fullname?: string
  email?: string
  avatar?: string
  onSelectItem?: (type: TItem) => void
}
const UserSheet: FC<IProps> = ({
  initialActiveItem,
  fullname = '',
  email = '',
  avatar = '',
  onSelectItem,
}) => {
  const [activeItem, setActiveItem] = useState<TItem | undefined>(initialActiveItem || undefined)
  useEffect(() => {
    setActiveItem(initialActiveItem)
  }, [initialActiveItem])

  return (
    <Sheet>
      <SheetTrigger className="rounded-full border border-ui-border-200">
        <UserAvatar isButton={false} fullname={fullname} email={email} src={avatar} size={36} />
      </SheetTrigger>
      <SheetContent className="w-64">
        <Flex vertical gapY="3" width="full" px="6" pt="6" pb="4" align="start">
          {!fullname || !email ? (
            <>
              <Skeleton className="size-16 rounded-full" />
              <Flex vertical gapY="1" align="start">
                <Skeleton className="h-4 w-32 rounded-full" />
                <Skeleton className="h-3 w-48 rounded-full" />
              </Flex>
            </>
          ) : (
            <>
              <UserAvatar
                fullname={fullname}
                email={email}
                src={avatar}
                size={64}
                isButton={false}
              />
              <Flex vertical gapY="1" align="start">
                <p className="text-ui-note font-semibold text-ui-text-800">{fullname}</p>
                <p className="text-ui-small-note font-semibold text-ui-text-500">{email}</p>
              </Flex>
            </>
          )}
        </Flex>

        <Flex
          vertical
          width="full"
          gapY="1"
          py="3"
          px="1"
          align="start"
          className="border-y border-y-ui-border-300"
        >
          <MenuItem
            name="Thông tin tài khoản"
            isActive={activeItem === 'PROFILE'}
            leftIcon={<Lucide2UserIcon color="currentColor" size={16} />}
            onClick={() => {
              setActiveItem('PROFILE')
              onSelectItem?.('PROFILE')
            }}
          />
          <MenuItem
            name="Thiết lập an toàn"
            isActive={activeItem === 'SECURITY'}
            leftIcon={<Lucide2LockIcon color="currentColor" size={16} />}
            onClick={() => {
              setActiveItem('SECURITY')
              onSelectItem?.('SECURITY')
            }}
          />
          <MenuItem
            name="Thông báo"
            isActive={activeItem === 'NOTIFICATION'}
            leftIcon={<Lucide2NotiIcon color="currentColor" size={16} />}
            onClick={() => {
              setActiveItem('NOTIFICATION')
              onSelectItem?.('NOTIFICATION')
            }}
          />
          <MenuItem
            name="Danh sách đơn hàng"
            isActive={activeItem === 'RESERVATION'}
            leftIcon={<Lucide2ReservationIcon color="currentColor" size={16} />}
            onClick={() => {
              setActiveItem('RESERVATION')
              onSelectItem?.('RESERVATION')
            }}
          />
          <MenuItem
            name="Danh sách địa chỉ"
            isActive={activeItem === 'ADDRESS'}
            leftIcon={<Lucide2AddressIcon color="currentColor" size={16} />}
            onClick={() => {
              setActiveItem('ADDRESS')
              onSelectItem?.('ADDRESS')
            }}
          />
        </Flex>

        <Flex vertical width="full" pt="4" px="1">
          <MenuItem
            name="Đăng xuất"
            isActive={activeItem === 'LOGOUT'}
            leftIcon={<Lucide2LogOutIcon color="currentColor" size={16} />}
            onClick={() => {
              setActiveItem('LOGOUT')
              onSelectItem?.('LOGOUT')
            }}
          />
        </Flex>
      </SheetContent>
      <VisuallyHidden>
        <SheetTitle></SheetTitle>
      </VisuallyHidden>
    </Sheet>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default memo(UserSheet)
