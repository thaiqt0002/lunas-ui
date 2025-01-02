import { FC, memo } from 'react'

import DefaultLogoWithIcon from '@/Icons/DefaultLogoWithIcon'
import Flex from '@/Layout/Flex'

const Title: FC = () => {
  return (
    <Flex vertical gapY="5" justify="center">
      <DefaultLogoWithIcon />
      <h1 className="text-2xl font-extrabold">Đăng Nhập</h1>
    </Flex>
  )
}

const MemoizedTitle = memo(Title)
export default MemoizedTitle
