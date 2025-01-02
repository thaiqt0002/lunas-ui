import { FC, memo } from 'react'

import MemoizedForm from './components/Form'
import MemoizedTitle from './components/Title'
import { SignUpSchema } from './validates'

import Flex from '@/Layout/Flex'
import { z } from 'zod'

interface IProps {
  onSubmit: (value: z.infer<typeof SignUpSchema>) => Promise<void>
  onForgotPassword?: () => void
  onSignUp?: () => void
}
const SignUp: FC<IProps> = ({ onSubmit, onForgotPassword, onSignUp }) => {
  return (
    <Flex vertical px="12" py="8" width="full" className="overflow-hidden">
      <MemoizedTitle />
      <MemoizedForm onSubmit={onSubmit} onForgotPassword={onForgotPassword} onSignUp={onSignUp} />
    </Flex>
  )
}

const MemoizedSignUp = memo(SignUp)
export default MemoizedSignUp
