'use client'
import React from 'react'

import { cn } from '@/libs'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { motion } from 'framer-motion'
import { Check, Circle } from 'lucide-react'

const { Root: DropdownMenu } = DropdownMenuPrimitive

const { Group: DropdownMenuGroup } = DropdownMenuPrimitive

const { Portal: DropdownMenuPortal } = DropdownMenuPrimitive

const { Sub: DropdownMenuSub } = DropdownMenuPrimitive

const { RadioGroup: DropdownMenuRadioGroup } = DropdownMenuPrimitive

const DropdownMenuTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
>(({ className = '', children, ...props }, reference) => (
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.8,
    }}
    animate={{
      opacity: 1,
      scale: 1,
    }}
    whileHover={{
      opacity: 0.8,
    }}
    className="rounded-lg"
  >
    <DropdownMenuPrimitive.Trigger
      {...props}
      ref={reference}
      className={cn(
        'flex select-none gap-x-2 overflow-hidden rounded-lg px-2 py-1 outline-none',
        className,
      )}
    >
      {children}
    </DropdownMenuPrimitive.Trigger>
  </motion.div>
))
// eslint-disable-next-line unicorn/consistent-destructuring
DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    readonly inset?: boolean
  }
>(({ className, inset, children, ...props }, reference) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={reference}
    className={cn(
      'flex cursor-default select-none items-center rounded-lg px-2 py-1.5 text-ui-p font-semibold outline-none',
      'hover:bg-neutral-200',
      'data-[state=open]:bg-neutral-200',
      inset && 'pl-8',
      className,
    )}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.SubTrigger>
))
// eslint-disable-next-line unicorn/consistent-destructuring
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, reference) => (
  <DropdownMenuPrimitive.SubContent
    ref={reference}
    className={cn(
      'z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-lg',
      'data-[state=open]:animate-in',
      'data-[state=open]:fade-in-0',
      'data-[state=open]:zoom-in-95',
      'data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0',
      'data-[state=closed]:zoom-out-95',
      'data-[side=top]:slide-in-from-bottom-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      className,
    )}
    {...props}
  />
))
// eslint-disable-next-line unicorn/consistent-destructuring
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, reference) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      {...props}
      ref={reference}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-32 overflow-hidden rounded-xl bg-ui-surface-50 py-2 shadow-ui-dialog duration-300',
        'data-[state=open]:animate-in',
        'data-[state=open]:fade-in-0',
        'data-[state=open]:zoom-in-95',
        'data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0',
        'data-[state=closed]:zoom-out-95',
        'data-[side=top]:slide-in-from-bottom-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        className,
      )}
    />
  </DropdownMenuPrimitive.Portal>
))
// eslint-disable-next-line unicorn/consistent-destructuring
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    readonly inset?: boolean
  }
>(({ className, inset, ...props }, reference) => (
  <DropdownMenuPrimitive.Item
    ref={reference}
    className={cn(
      'hover:cursor-pointer hover:bg-ui-surface-100 hover:text-ui-text-900',
      'relative flex cursor-default select-none items-center gap-x-2 bg-ui-surface-50 px-3 py-2 !text-ui-note font-medium text-ui-text-900 outline-none',
      'transition-colors duration-300',
      'data-[disabled]:opacity-50',
      'data-[disabled]:pointer-events-none',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
))
// eslint-disable-next-line unicorn/consistent-destructuring
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, reference) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={reference}
    className={cn(
      'focus:bg-ui-surface-100 focus:text-ui-text-900',
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
      'transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>

    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
// eslint-disable-next-line unicorn/consistent-destructuring
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, reference) => (
  <DropdownMenuPrimitive.RadioItem
    ref={reference}
    className={cn(
      'focus:bg-ui-surface-100 focus:text-ui-text-900',
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
      'transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex size-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="szie-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>

    {children}
  </DropdownMenuPrimitive.RadioItem>
))
// eslint-disable-next-line unicorn/consistent-destructuring
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    readonly inset?: boolean
  }
>(({ className, inset, ...props }, reference) => (
  <DropdownMenuPrimitive.Label
    ref={reference}
    className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
    {...props}
  />
))
// eslint-disable-next-line unicorn/consistent-destructuring
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, reference) => (
  <DropdownMenuPrimitive.Separator
    ref={reference}
    className={cn('-mx-1 my-1 h-px bg-neutral-300', className)}
    {...props}
  />
))
// eslint-disable-next-line unicorn/consistent-destructuring
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...props} />
}
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
}
