import { IIconProps } from '@/types'

const Lucide2ChartBarIcon = ({ color = 'currentColor', size = 16, ...rest }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 16 16"
      fill="none"
      {...rest}
    >
      <path
        d="M7.33333 8.66667V11.3333M10 3.33333V6M2 2V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H14M5.33333 8.66667H10C10.3682 8.66667 10.6667 8.96514 10.6667 9.33333V10.6667C10.6667 11.0349 10.3682 11.3333 10 11.3333H5.33333C4.96514 11.3333 4.66667 11.0349 4.66667 10.6667V9.33333C4.66667 8.96514 4.96514 8.66667 5.33333 8.66667ZM5.33333 3.33333H12C12.3682 3.33333 12.6667 3.63181 12.6667 4V5.33333C12.6667 5.70152 12.3682 6 12 6H5.33333C4.96514 6 4.66667 5.70152 4.66667 5.33333V4C4.66667 3.63181 4.96514 3.33333 5.33333 3.33333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
Lucide2ChartBarIcon.displayName = 'Lucide2ChartBarIcon'
export default Lucide2ChartBarIcon
