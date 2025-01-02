import { FC } from 'react'

import { IIconProps } from '@/types'

const Lucide2LoadingIcon: FC<IIconProps> = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 16}
      height={size ?? 16}
      viewBox="0 0 16 16"
      fill={color ?? 'currentColor'}
    >
      <g clipPath="url(#clip0_1948_196)">
        <path
          d="M8 1.33333V3.99999M10.8 5.19999L12.7333 3.26666M12 7.99999H14.6667M10.8 10.8L12.7333 12.7333M8 12V14.6667M3.26667 12.7333L5.2 10.8M1.33333 7.99999H4M3.26667 3.26666L5.2 5.19999"
          stroke={color ?? 'currentColor'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1948_196">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Lucide2LoadingIcon
