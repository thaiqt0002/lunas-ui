import { IIconProps } from '@/types'
import { DEFAULT_ICON_SIZE } from '@/utils/constants'

const Lucide2UserIcon = (props: IIconProps) => {
  const { color, size } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? DEFAULT_ICON_SIZE}
      height={size ?? DEFAULT_ICON_SIZE}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M12.6667 14V12.6667C12.6667 11.9594 12.3857 11.2811 11.8856 10.781C11.3855 10.281 10.7073 10 10 10H6.00001C5.29277 10 4.61449 10.281 4.11439 10.781C3.61429 11.2811 3.33334 11.9594 3.33334 12.6667V14M10.6667 4.66667C10.6667 6.13943 9.47277 7.33333 8.00001 7.33333C6.52725 7.33333 5.33334 6.13943 5.33334 4.66667C5.33334 3.19391 6.52725 2 8.00001 2C9.47277 2 10.6667 3.19391 10.6667 4.66667Z"
        stroke={color ?? 'currentColor'}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
Lucide2UserIcon.displayName = 'Lucide2UserIcon'
export default Lucide2UserIcon
