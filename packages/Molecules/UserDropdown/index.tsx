import { memo } from 'react'

import { Sheet, SheetContent, SheetTrigger } from '@/Atoms/Sheet'
import UserAvatar from '@/Atoms/UserAvatar'
import Flex from '@/Layout/Flex'

const UserDropdown = memo(() => {
  return (
    <Sheet>
      <SheetTrigger>
        <UserAvatar
          fullname="PHAM MINH QUANG"
          email="example@gmail.com"
          src="https://avatars.githubusercontent.com/u/4723117?v=4"
          size={36}
        />
      </SheetTrigger>
      <SheetContent className="w-64">
        <Flex vertical gapY="3" width="full" px="6" pt="6" pb="4" align="start">
          <UserAvatar
            fullname="PHAM MINH QUANG"
            email="example@gmail.com"
            src="https://avatars.githubusercontent.com/u/4723117?v=4"
            size={64}
            isButton={false}
          />

          <Flex vertical gapY="1" align="start">
            <p className="text-ui-note text-ui-text-800">PHAM MINH QUANG</p>
            <p className="text-ui-small-note font-semibold text-ui-text-500">example@gmail.com</p>
          </Flex>
        </Flex>

        <Flex width="full" py="3" px="1" className="border-y border-y-ui-border-300">
          a
        </Flex>
      </SheetContent>
    </Sheet>
  )
})
UserDropdown.displayName = 'UserDropdown'
export default UserDropdown
