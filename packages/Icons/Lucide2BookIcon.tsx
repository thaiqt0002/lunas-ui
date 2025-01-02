import { IIconProps } from '@/types'

const Lucide2BookIcon = ({ color = 'currentColor', size = 16, ...rest }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 16}
      height={size ?? 16}
      viewBox="0 0 16 16"
      fill="none"
      {...rest}
    >
      <path
        d="M2.66675 13V3.00004C2.66675 2.55801 2.84234 2.13409 3.1549 1.82153C3.46746 1.50897 3.89139 1.33337 4.33341 1.33337H12.6667C12.8436 1.33337 13.0131 1.40361 13.1382 1.52864C13.2632 1.65366 13.3334 1.82323 13.3334 2.00004V14C13.3334 14.1769 13.2632 14.3464 13.1382 14.4714C13.0131 14.5965 12.8436 14.6667 12.6667 14.6667H4.33341C3.89139 14.6667 3.46746 14.4911 3.1549 14.1786C2.84234 13.866 2.66675 13.4421 2.66675 13ZM2.66675 13C2.66675 12.558 2.84234 12.1341 3.1549 11.8215C3.46746 11.509 3.89139 11.3334 4.33341 11.3334H13.3334"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
Lucide2BookIcon.displayName = 'Lucide2BookIcon'
export default Lucide2BookIcon
