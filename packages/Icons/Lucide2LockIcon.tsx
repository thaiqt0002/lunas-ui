import { IIconProps } from '@/types'
import { DEFAULT_ICON_SIZE } from '@/utils/constants'

const Lucide2LockIcon = (props: IIconProps) => {
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
        d="M4.66667 7.33325V4.66659C4.66667 3.78253 5.01786 2.93468 5.64298 2.30956C6.2681 1.68444 7.11594 1.33325 8 1.33325C8.88406 1.33325 9.7319 1.68444 10.357 2.30956C10.9821 2.93468 11.3333 3.78253 11.3333 4.66659V7.33325M3.33333 7.33325H12.6667C13.403 7.33325 14 7.93021 14 8.66659V13.3333C14 14.0696 13.403 14.6666 12.6667 14.6666H3.33333C2.59695 14.6666 2 14.0696 2 13.3333V8.66659C2 7.93021 2.59695 7.33325 3.33333 7.33325Z"
        stroke={color ?? '#434349'}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
Lucide2LockIcon.displayName = 'Lucide2LockIcon'
export default Lucide2LockIcon
