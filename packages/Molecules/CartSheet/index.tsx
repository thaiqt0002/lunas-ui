/* eslint-disable react/jsx-one-expression-per-line */
import { FC, memo, ReactNode } from 'react'

import Badge from '@/Atoms/Badge'
import Button from '@/Atoms/Button'
import { ScrollArea, ScrollBar } from '@/Atoms/ScrollBar'
import { Separator } from '@/Atoms/Separator'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/Atoms/Sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Atoms/Tabs'
import Lucide2FillCartIcon from '@/Icons/Lucide2FillCartIcon'
import Flex from '@/Layout/Flex'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

interface IProps {
  isNew?: boolean
  quantityTotal?: number
  moneyTotal?: number
  order?: ReactNode
  inStock?: ReactNode
  onCheckout?: () => void
  onShowAll?: () => void
  onTypeSelected?: (value: 'ORDER' | 'IN_STOCK') => void
}
const CartSheet: FC<IProps> = ({
  isNew,
  quantityTotal,
  moneyTotal,
  inStock,
  order,
  onCheckout,
  onShowAll,
  onTypeSelected,
}) => {
  const formattedMoney = new Intl.NumberFormat('vi-VN').format(moneyTotal ?? 0)
  const formattedQuantity = new Intl.NumberFormat('vi-VN').format(quantityTotal ?? 0)
  return (
    <Sheet>
      <SheetTrigger>
        <Badge isNew={isNew}>
          <Lucide2FillCartIcon color="#6C70F0" />
        </Badge>
      </SheetTrigger>
      <SheetContent className="w-[22rem]">
        <div className="relative grid size-full grid-rows-[fit-content(100%)_auto_8rem]">
          <Flex vertical px="4" pt="7" pb="5" gapY="2" width="full" align="start">
            <p className="text-ui-p font-semibold">Giỏ hàng của tôi ({formattedQuantity})</p>
            <Separator className="bg-ui-border-300" />
          </Flex>
          <Tabs
            defaultValue="order"
            className="relative flex w-full flex-col items-center overflow-auto"
          >
            <TabsList className="h-fit w-[90%] *:w-1/2">
              <TabsTrigger value="order" onClick={() => onTypeSelected?.('ORDER')}>
                Hàng đặt trước
              </TabsTrigger>
              <TabsTrigger value="in_stock" onClick={() => onTypeSelected?.('IN_STOCK')}>
                Hàng có sẵn
              </TabsTrigger>
            </TabsList>
            <ScrollArea className="relative w-full">
              <TabsContent value="order" className="w-full overflow-auto px-2">
                {order}
              </TabsContent>
              <ScrollBar orientation="vertical" className="" />
            </ScrollArea>
            <ScrollArea className="relative w-full">
              <TabsContent value="in_stock" className="w-full overflow-auto px-2">
                {inStock}
              </TabsContent>
              <ScrollBar orientation="vertical" className="" />
            </ScrollArea>
          </Tabs>
          <Flex vertical pt="5" height="full" width="full" className="shadow-ui-muli">
            <Flex px="6" justify="between" width="full">
              <p className="text-ui-p font-bold text-ui-text-800">TỔNG CỘNG</p>
              <p className="text-ui-p font-extrabold text-ui-primary-500">{formattedMoney} VND</p>
            </Flex>

            <Flex px="5" py="3" gapX="4" width="full" className="*:grow">
              <Button
                variant="outline"
                className="px-5 py-2 text-ui-p font-bold"
                onClick={onShowAll}
              >
                Xem tất cả
              </Button>
              <Button className="px-5 py-2 text-ui-p font-bold" onClick={onCheckout}>
                Thanh toán
              </Button>
            </Flex>
          </Flex>
        </div>
      </SheetContent>
      <VisuallyHidden>
        <SheetTitle></SheetTitle>
      </VisuallyHidden>
    </Sheet>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default memo(CartSheet)
