'use client'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import Lucide2ChevronDownIcon from '@/Icons/Lucide2ChevronDownIcon'
import { cn } from '@/libs/utils'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'

const NavigationMenu = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Root>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.List>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn('group flex flex-1 list-none items-center justify-center space-x-1', className)}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva([
  'group inline-flex',
  'h-fit w-max',
  'items-center justify-center',
  'rounded-md',
  'bg-ui-surface-50',
  'px-3 py-1.5',
  'text-sm font-medium text-ui-text-800',
  'transition-colors',
  'hover:bg-ui-surface-100',
  'hover:text-ui-text-800',
  'focus:bg-ui-surface-100',
  'focus:text-ui-text-800',
  'focus:outline-none',
  'disabled:pointer-events-none',
  'disabled:opacity-50',
  'data-[active]:text-ui-primary-500',
  'data-[active]:cursor-default',
  'data-[active]:bg-ui-surface-50',
  'data-[state=open]:bg-ui-surface-100',
])

const NavigationMenuTrigger = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), 'group', className)}
    {...props}
  >
    {children}
    <Lucide2ChevronDownIcon
      className="relative ml-1 size-4 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
      size={16}
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      'left-0 top-0',
      'w-full',
      'data-[motion^=from-]:animate-in',
      'data-[motion^=from-]:fade-in',
      'data-[motion^=to-]:animate-out',
      'data-[motion^=to-]:fade-out',
      'data-[motion=from-end]:slide-in-from-right-52',
      'data-[motion=from-start]:slide-in-from-left-52',
      'data-[motion=to-end]:slide-out-to-right-52',
      'data-[motion=to-start]:slide-out-to-left-52',
      'translate duration-300',
      'md:absolute',
      'md:w-auto',
      className,
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn('absolute left-0 top-full flex justify-center')}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        'origin-top-center',
        'relative mt-1.5',
        'h-[var(--radix-navigation-menu-viewport-height)] w-full',
        'overflow-hidden',
        'rounded-md border border-ui-border-100',
        'bg-ui-surface-50',
        'text-ui-text-800',
        'shadow-ui-dialog',
        'data-[state=open]:animate-in',
        'data-[state=open]:zoom-in-90',
        'data-[state=open]:fade-in',
        'data-[state=closed]:animate-out',
        'data-[state=closed]:zoom-out-90',
        'data-[state=closed]:fade-out',
        'transition-all duration-200',
        'md:w-[var(--radix-navigation-menu-viewport-width)]',
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      'top-full z-[1]',
      'flex',
      'h-1.5',
      'items-end justify-center',
      'overflow-hidden',
      'data-[state=visible]:animate-in',
      'data-[state=visible]:fade-in-50',
      'data-[state=hidden]:animate-out',
      'data-[state=hidden]:fade-out-50',
      className,
    )}
    {...props}
  >
    <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // eslint-disable-next-line react-refresh/only-export-components
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
}
