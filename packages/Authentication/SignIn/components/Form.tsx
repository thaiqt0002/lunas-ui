import { FC, memo, useState } from 'react'
import { useForm } from 'react-hook-form'

import { formSchema } from '../validates'

import Button from '@/Atoms/Button'
import { Form as DefaultForm, FormField } from '@/Atoms/Form'
import MemoizedEmailInput from '@/Authentication/Atoms/EmailInput'
import ErrorMsg from '@/Authentication/Atoms/ErrorMsg'
import MemoizedPasswordInput from '@/Authentication/Atoms/PasswordInput'
import Lucide2LoadingIcon from '@/Icons/Lucide2LoadingIcon'
import Flex from '@/Layout/Flex'
import { cn } from '@/libs'
import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

interface IProps {
  onSubmit: (values: z.infer<typeof formSchema>) => Promise<void>
  onForgotPassword?: () => void
  onSignUp?: () => void
}
const Form: FC<IProps> = ({ onSubmit, onForgotPassword, onSignUp }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'all',
  })
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = form
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const handelOnSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    onSubmit(values).finally(() => setIsSubmitting(false))
  }

  return (
    <DefaultForm {...form}>
      <form onSubmit={handleSubmit(handelOnSubmit)} className="mt-6 flex w-full flex-col gap-y-6">
        <Flex vertical gapY="4" width="full">
          <Flex vertical width="full" align="start" gapY="1">
            <FormField
              name="email"
              control={control}
              render={({ field: { onChange } }) => <MemoizedEmailInput onChange={onChange} />}
            />
            <ErrorMessage
              name="email"
              errors={errors}
              render={({ message }) => <ErrorMsg message={message} />}
            />
          </Flex>

          <Flex vertical width="full" align="start" gapY="1">
            <FormField
              name="password"
              control={control}
              render={({ field: { onChange } }) => <MemoizedPasswordInput onChange={onChange} />}
            />
            <ErrorMessage
              name="password"
              errors={errors}
              render={({ message }) => <ErrorMsg message={message} />}
            />
          </Flex>
        </Flex>
        <Flex vertical gapY="3" width="full" className="overflow-visible">
          <Button
            disabled={!isDirty || !isValid || isSubmitting}
            type="submit"
            className={cn(
              'w-full rounded-sm px-3 py-2 text-ui-p font-bold text-ui-white',
              !isSubmitting && '[&_svg]:hidden',
              isSubmitting && '[&_span]:hidden',
              isSubmitting && '[&_svg]:block',
              isSubmitting && '[&_svg]:animate-spin',
              isSubmitting && 'opacity-60',
            )}
          >
            <span>Đăng nhập</span>
            <Lucide2LoadingIcon size={24} />
          </Button>

          <Flex
            justify="between"
            width="full"
            className="font-medium text-ui-tertiary-400 *:text-ui-small-note"
          >
            <button
              type="button"
              className={cn(
                'enabled:hover:text-ui-tertiary-500',
                'enabled:active:text-ui-tertiary-600',
                'transition-colors duration-200',
              )}
              onClick={onForgotPassword}
            >
              Quên mật khẩu
            </button>

            <button
              type="button"
              className={cn(
                'enabled:hover:text-ui-tertiary-500',
                'enabled:active:text-ui-tertiary-600',
                'transition-colors duration-200',
              )}
              onClick={onSignUp}
            >
              Tạo tài khoản
            </button>
          </Flex>
        </Flex>
      </form>
    </DefaultForm>
  )
}

const MemoizedForm = memo(Form)
export default MemoizedForm
