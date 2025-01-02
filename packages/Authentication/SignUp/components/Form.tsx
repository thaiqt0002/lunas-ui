import { FC, memo, useState } from 'react'
import { useForm } from 'react-hook-form'

import MemoizedBadge from './Badge'
import { SignUpSchema } from '../validates'

import Button from '@/Atoms/Button'
import { Form as DefaultForm, FormField } from '@/Atoms/Form'
import MemoizedEmailInput from '@/Authentication/Atoms/EmailInput'
import ErrorMsg from '@/Authentication/Atoms/ErrorMsg'
import MemoizedFullNameInput from '@/Authentication/Atoms/FullNameInput'
import MemoizedPasswordInput from '@/Authentication/Atoms/PasswordInput'
import Lucide2LoadingIcon from '@/Icons/Lucide2LoadingIcon'
import Flex from '@/Layout/Flex'
import { cn } from '@/libs'
import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

interface IProps {
  // make submit function async
  onSubmit: (value: z.infer<typeof SignUpSchema>) => Promise<void>
  onForgotPassword?: () => void
  onSignUp?: () => void
}
const Form: FC<IProps> = ({ onSubmit, onForgotPassword, onSignUp }) => {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: '',
      fullname: '',
      password: '',
    },
    mode: 'onBlur',
  })

  const [activeType, setActiveType] = useState<'email' | 'password'>('email')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = form
  const handleOnSubmit = (values: z.infer<typeof SignUpSchema>) => {
    setIsSubmitting(true)
    onSubmit(values).finally(() => setIsSubmitting(false))
  }
  return (
    <DefaultForm {...form}>
      <form onSubmit={handleSubmit(handleOnSubmit)} className="mt-6 flex w-full flex-col gap-y-6">
        <div className="relative h-24">
          <Flex
            data-active={activeType === 'email'}
            vertical
            width="full"
            className={cn(
              'absolute -left-full top-0 opacity-0',
              'data-[active=true]:opacity-100',
              'data-[active=true]:left-0',
              'transition-[left_opacity] duration-300',
            )}
          >
            <Flex vertical width="full" align="start" gapY="1" pb={errors.email ? '1' : '4'}>
              <FormField
                name="email"
                control={control}
                render={({ field: { onChange, onBlur } }) => (
                  <MemoizedEmailInput onChange={onChange} onBlur={onBlur} />
                )}
              />
              <ErrorMessage
                name="email"
                errors={errors}
                render={({ message }) => <ErrorMsg message={message} />}
              />
            </Flex>

            <Flex vertical width="full" align="start" gapY="1">
              <FormField
                name="fullname"
                control={control}
                render={({ field: { onChange, onBlur } }) => (
                  <MemoizedFullNameInput onChange={onChange} onBlur={onBlur} />
                )}
              />
              <ErrorMessage
                name="fullname"
                errors={errors}
                render={({ message }) => <ErrorMsg message={message} />}
              />
            </Flex>
          </Flex>

          <Flex
            data-active={activeType === 'password'}
            vertical
            width="full"
            className={cn(
              'absolute left-full top-0 opacity-0',
              'data-[active=true]:opacity-100',
              'data-[active=true]:left-0',
              'transition-[left_opacity] duration-300',
            )}
          >
            <Flex vertical width="full" align="start" gapY="1" pb={errors.password ? '1' : '4'}>
              <FormField
                name="password"
                control={control}
                render={({ field: { onChange, onBlur } }) => (
                  <MemoizedPasswordInput onChange={onChange} onBlur={onBlur} />
                )}
              />

              <ErrorMessage
                name="password"
                errors={errors}
                render={({ message }) => <ErrorMsg message={message} />}
              />
            </Flex>

            <Flex vertical width="full" align="start" gapY="1">
              <FormField
                name="confirmPassword"
                control={control}
                render={({ field: { onChange, onBlur } }) => (
                  <MemoizedPasswordInput
                    placeholder="Nhập lại mật khẩu"
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              />

              <ErrorMessage
                name="confirmPassword"
                errors={errors}
                render={({ message }) => <ErrorMsg message={message} />}
              />
            </Flex>
          </Flex>
        </div>

        <Flex
          gapX="2"
          width="full"
          pt={
            (errors.fullname && errors.email) || (errors.confirmPassword && errors.password)
              ? '3'
              : errors.confirmPassword || errors.fullname
                ? '1'
                : '0'
          }
          className="overflow-visible"
        >
          <MemoizedBadge
            isActivated={activeType === 'email'}
            onClick={() => setActiveType('email')}
          />
          <MemoizedBadge
            isActivated={activeType === 'password'}
            onClick={() => setActiveType('password')}
          />
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
            <span>Đăng ký</span>
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
              Đã có tài khoản
            </button>
          </Flex>
        </Flex>
      </form>
    </DefaultForm>
  )
}

const MemoizedForm = memo(Form)
export default MemoizedForm
