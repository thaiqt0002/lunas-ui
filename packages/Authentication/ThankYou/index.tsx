import { FC } from 'react'

import EmailIcon from './components/EmailIcon'

import Button from '@/Atoms/Button'
import { Separator } from '@/Atoms/Separator'
import Lucide2MailIcon from '@/Icons/Lucide2MailIcon'
import Flex from '@/Layout/Flex'

const ThankYou: FC = () => {
  return (
    <Flex vertical width="full" px="8" pt="12" pb="9" gapY="8" align="start">
      <Flex vertical gapY="3" align="start">
        <Flex vertical pb="4" gapY="3" align="start">
          <div className="flex items-center justify-center rounded-full border-4 border-solid border-ui-primary-400 p-6">
            <EmailIcon />
          </div>
          <p className="text-ui-h3 font-bold">Cảm ơn bạn đã đăng ký thành công !</p>
        </Flex>

        <p className="text-ui-note font-light text-ui-text-700">
          Chúng tôi đã gửi email xác nhận tới địa chỉ của bạn. Vui lòng kiểm tra hộp thư và làm theo
          hướng dẫn để kích hoạt tài khoản.
        </p>

        <p className="text-ui-note font-light text-ui-text-400">
          Nếu bạn không thấy email xác nhận, hãy kiểm tra trong mục “Thư rác” hoặc “Quảng cáo” của
          bạn.
        </p>

        <Flex py="2" pr="2">
          <a
            href="https://gmail.com"
            target="_blank"
            rel="noreferrer"
            onClick={() => window.close()}
          >
            <Button className="rounded-sm">
              <Lucide2MailIcon color="currentColor" />
              <span>Kiểm tra email</span>
            </Button>
          </a>
        </Flex>
      </Flex>

      <Flex vertical width="full" px="2" gapY="1" align="start">
        <Separator className="mb-2" />
        <p className="text-ui-small-note text-ui-text-700">
          Cảm ơn bạn đã tin tưởng và lựa chọn dịch vụ của chúng tôi
        </p>
        <p className="text-ui-small-note text-ui-text-700">
          Trân trọng,
          <br />
          Đội ngũ Lunas
        </p>
      </Flex>
    </Flex>
  )
}

export default ThankYou
