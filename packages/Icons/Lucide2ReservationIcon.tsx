import { FC } from 'react'

import { IIconProps } from '@/types'

const Lucide2ReservationIcon: FC<IIconProps> = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 16}
      height={size ?? 16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M5.33335 1.33333V3.99999M8.00002 1.33333V3.99999M10.6667 1.33333V3.99999M5.33335 6.66666H9.33335M5.33335 9.33333H10.6667M5.33335 12H8.66669M4.00002 2.66666H12C12.7364 2.66666 13.3334 3.26362 13.3334 3.99999V13.3333C13.3334 14.0697 12.7364 14.6667 12 14.6667H4.00002C3.26364 14.6667 2.66669 14.0697 2.66669 13.3333V3.99999C2.66669 3.26362 3.26364 2.66666 4.00002 2.66666Z"
        stroke={color ?? 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Lucide2ReservationIcon
