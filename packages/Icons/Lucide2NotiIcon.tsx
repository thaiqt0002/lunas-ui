import { FC } from 'react'

import { IIconProps } from '@/types'

const Lucide2NotiIcon: FC<IIconProps> = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? '16'}
      height={size ?? '16'}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M6.86667 14C6.97826 14.203 7.1423 14.3722 7.34166 14.4901C7.54102 14.608 7.76839 14.6702 8 14.6702C8.23161 14.6702 8.45898 14.608 8.65834 14.4901C8.8577 14.3722 9.02175 14.203 9.13333 14M4 5.33333C4 4.27246 4.42143 3.25505 5.17157 2.5049C5.92172 1.75476 6.93913 1.33333 8 1.33333C9.06087 1.33333 10.0783 1.75476 10.8284 2.5049C11.5786 3.25505 12 4.27246 12 5.33333C12 10 14 11.3333 14 11.3333H2C2 11.3333 4 10 4 5.33333Z"
        stroke={color ?? 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Lucide2NotiIcon
