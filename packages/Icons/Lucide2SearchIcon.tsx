import { FC } from 'react'

import { IIconProps } from '@/types'

const Lucide2SearchIcon: FC<IIconProps> = ({ size, color, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? '16'}
      height={size ?? '16'}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M14 14L11.1333 11.1333M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z"
        stroke={color ?? '#18181B'}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Lucide2SearchIcon
