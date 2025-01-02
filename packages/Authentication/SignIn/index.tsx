import { FC, memo } from 'react'

import MemoizedForm from './components/Form'
import MemoizedTitle from './components/Title'
import { formSchema } from './validates'

import Flex from '@/Layout/Flex'
import { z } from 'zod'

interface IProps {
  onSubmit: (values: z.infer<typeof formSchema>) => Promise<void>
  onForgotPassword?: () => void
  onSignUp?: () => void
}
const SignIn: FC<IProps> = ({ onSubmit, onForgotPassword, onSignUp }) => {
  return (
    <Flex vertical px="12" py="8" width="full">
      <MemoizedTitle />
      <MemoizedForm onSubmit={onSubmit} onForgotPassword={onForgotPassword} onSignUp={onSignUp} />
    </Flex>
  )
}

const MemoizedSignIn = memo(SignIn)
export default MemoizedSignIn
