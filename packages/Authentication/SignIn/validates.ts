import { z } from 'zod'

export const formSchema = z.object({
  email: z
    .string({
      required_error: 'Yêu cầu nhập e-mail',
    })
    .email({ message: 'Vui lòng nhập e-mail hợp lệ' }),
  password: z
    .string({ required_error: 'Nhập mật khẩu của bạn' })
    .min(8, {
      message: 'Mật khẩu tối thiểu 8 ký tự',
    })
    .max(50, {
      message: 'Mật khẩu không quá 50 ký tự',
    })
    .refine((value) => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!-/:-@[-`{-~])\S+$/.test(value), {
      message: 'Mật khẩu phải chứa chữ hoa, chữ thường, số và ký tự đặc biệt',
    }),
})
