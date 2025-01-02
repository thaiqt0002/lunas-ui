'use client'
import { FC, Fragment, memo, ReactNode } from 'react'

import Category from './components/Category'
import Series from './components/Series'
import { ICategory } from './types'

import Button from '@/Atoms/Button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/Atoms/NavigationMenu'
import { Skeleton } from '@/Atoms/Skeleton'
import SmallLogoIcon from '@/Icons/SmallLogoIcon'
import Flex from '@/Layout/Flex'
import { cn } from '@/libs'
import CartSheet from '@/Molecules/CartSheet'
import Search from '@/Molecules/Search'
import UserSheet from '@/Molecules/UserSheet'
import { TUser, TUserSettingSelect } from '@/types'

export type THeaderNav = 'CATEGORY' | 'SERIES' | 'GUIDE' | 'NEWS' | null
export interface IHeaderProps {
  user?: TUser
  search?: string
  isLoading?: boolean
  hasNewCart?: boolean
  items?: {
    value: string
    component: ReactNode
  }[]
  cartOrder?: ReactNode
  cartInStock?: ReactNode
  activeUserNav?: 'PROFILE' | 'SECURITY' | 'NOTIFICATION' | 'RESERVATION' | 'ADDRESS' | 'LOGOUT'
  categories: ICategory[]
  cartsAmountTotal?: number
  className?: string
  onSignIn?: () => void
  onSignUp?: () => void
  onSearch?: (value: string) => void
  onSettingSelected?: (value: TUserSettingSelect) => void
  onShowAllProduct?: () => void
  onCartCheckout?: () => void
  onCartShowAll?: () => void
  onCartTypeSelected?: (value: 'ORDER' | 'IN_STOCK') => void
  onCategorySelected?: (slug: string) => void
}
const Header: FC<IHeaderProps> = memo((props) => {
  const {
    isLoading = false,
    user,
    hasNewCart,
    activeUserNav,
    categories,
    cartOrder,
    cartInStock,
    cartsAmountTotal,
    className,
    onSignIn,
    onSignUp,
    onSettingSelected,
    onCartCheckout,
    onCartShowAll,
    onShowAllProduct,
    onCartTypeSelected,
    onCategorySelected,
  } = props

  return (
    <header
      className={cn(
        'relative flex h-fit min-h-[3.375rem] w-full items-center justify-start bg-ui-surface-50 py-2 pl-8 pr-4 shadow-ui-sticky-nav',
        className,
      )}
    >
      <Flex className="grow-0" pb="1" justify="center" pr="9">
        <SmallLogoIcon />
      </Flex>

      <Flex className="grow">
        <NavigationMenu>
          <NavigationMenuList>
            <Category
              data={categories}
              onShowAll={onShowAllProduct}
              onClickCategory={onCategorySelected}
            />
            <Series />
            <NavigationMenuItem
              className={cn(
                'cursor-pointer !rounded-full !font-bold !text-ui-text-500',
                navigationMenuTriggerStyle(),
              )}
            >
              <NavigationMenuLink>Hướng Dẫn</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem
              className={cn(
                'cursor-pointer !rounded-full !font-bold !text-ui-text-500',
                navigationMenuTriggerStyle(),
              )}
            >
              <NavigationMenuLink>Tin Tức</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </Flex>

      <Search />

      <Flex
        data-hidden={isLoading}
        flexGrow={0}
        className="overflow-y-visible data-[hidden=true]:hidden"
        pr="2"
        gap="3"
        py="0"
      >
        {user ? (
          <UserSheet
            initialActiveItem={activeUserNav}
            fullname={user.fullname}
            email={user.email}
            avatar={user.avatar ?? ''}
            onSelectItem={onSettingSelected}
          />
        ) : (
          <Fragment>
            <Button
              variant="outline"
              className="overflow-visible rounded border-none px-4 py-1.5 hover:bg-ui-surface-100 hover:shadow-ui-flat [&_span]:hover:!text-ui-primary-700"
              onClick={onSignIn}
            >
              <span className="text-ui-note font-bold text-ui-primary-500">Đăng Nhập</span>
            </Button>
            <Button
              variant="default"
              className="rounded border-none px-4 py-1.5"
              onClick={onSignUp}
            >
              <span className="text-ui-note font-bold">Đăng Ký</span>
            </Button>
          </Fragment>
        )}
        <CartSheet
          isNew={hasNewCart}
          order={cartOrder}
          inStock={cartInStock}
          moneyTotal={cartsAmountTotal}
          onCheckout={onCartCheckout}
          onShowAll={onCartShowAll}
          onTypeSelected={onCartTypeSelected}
        />
      </Flex>
      <Flex data-show={isLoading} pr="2" gap="3" py="0" className="hidden data-[show=true]:flex">
        <Flex vertical width={120} height="full" align="end" gapY="1">
          <Skeleton className="h-2 w-full rounded-full" />
          <Skeleton className="h-2 w-4/5 rounded-full" />
        </Flex>
        <Skeleton className="size-8 rounded-full" />
      </Flex>
    </header>
  )
})

Header.displayName = 'Header'
export default Header
