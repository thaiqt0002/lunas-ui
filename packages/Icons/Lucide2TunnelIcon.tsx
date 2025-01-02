import { FC } from 'react'

import { IIconProps } from '@/types'

const Lucide2TunnelIcon: FC<IIconProps> = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 16}
      height={size ?? 16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M6.90667 12.8087L5.33333 13.3333V7.66667L2.34667 4.38133C2.12363 4.13595 2.00004 3.81626 2 3.48467V2H12.6667V3.448C12.6666 3.80159 12.5261 4.14068 12.276 4.39067L9.33333 7.33333M12.8 12.8L14 14M9.33333 11.3333C9.33333 11.8638 9.54405 12.3725 9.91912 12.7475C10.2942 13.1226 10.8029 13.3333 11.3333 13.3333C11.8638 13.3333 12.3725 13.1226 12.7475 12.7475C13.1226 12.3725 13.3333 11.8638 13.3333 11.3333C13.3333 10.8029 13.1226 10.2942 12.7475 9.91912C12.3725 9.54405 11.8638 9.33333 11.3333 9.33333C10.8029 9.33333 10.2942 9.54405 9.91912 9.91912C9.54405 10.2942 9.33333 10.8029 9.33333 11.3333Z"
        stroke={color ?? 'currentColor'}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Lucide2TunnelIcon
