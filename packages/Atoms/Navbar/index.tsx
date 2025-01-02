'use client'
import { forwardRef, HTMLAttributes, memo, ReactNode } from 'react'

import Lucide2ChevronDownIcon from '@/Icons/Lucide2ChevronDownIcon'
import { cn } from '@/libs'

interface NavbarItemProps extends HTMLAttributes<HTMLDivElement> {
  readonly state?: string
  readonly icon?: ReactNode
  readonly name?: string
  readonly children?: ReactNode
  readonly isActive?: boolean
  readonly enableLeftIcon?: boolean
}

const NavbarItem = memo(
  forwardRef<HTMLDivElement, NavbarItemProps>(
    (
      { enableLeftIcon = false, isActive = false, icon, className, children, ...props },
      reference,
    ) => {
      return (
        <div
          ref={reference}
          className={cn(
            ['group'],
            ['relative flex size-fit items-center gap-1 overflow-hidden px-2 py-4'],
            ['select-none !text-ui-note font-semibold text-ui-text-900'],
            ['hover:cursor-pointer'],
            {
              'text-ui-note text-ui-primary-default': isActive,
            },
            className,
          )}
          {...props}
        >
          <div className="mb-0.5">{icon}</div>

          <p>{children}</p>

          {Boolean(enableLeftIcon) && (
            <Lucide2ChevronDownIcon
              className={cn(
                ['mb-0.5 size-4'],
                ['transition duration-300 ease-in-out'],
                ['group-hover:rotate-180'],
              )}
              color={isActive ? 'currentColor' : '#434349'}
            />
          )}
        </div>
      )
    },
  ),
)
NavbarItem.displayName = 'NavbarItem'
export default NavbarItem
