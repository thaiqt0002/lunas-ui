import { FC, ReactNode, useCallback, useState } from 'react'

import { AcceptBtn, BrandDisplay, BrandModal, PricePopover } from './components'
import BrandProvider from './Providers/BrandProvider'
import PriceProvider from './Providers/PriceProvider'
import { TBrand } from './Providers/useBrandProvider'
import { TPrice } from './Providers/usePriceProvider'

import Lucide2LayoutGrid from '@/Icons/Lucide2LayoutGrid'
import Lucide2LayoutListIcon from '@/Icons/Lucide2LayoutListIcon'
import { cn } from '@/libs'

interface IProps {
  initialLayout: 'GRID' | 'LIST'
  brandData: {
    uuid: string
    name: string
  }[]
  children?: ReactNode
  onFilterConfirm?: (data?: {
    brand?: TBrand[]
    price?: TPrice
    sort?: 'price-asc' | 'price-desc' | 'date-asc' | 'date-desc'
  }) => void
  onLayoutChange?: (layout: 'GRID' | 'LIST') => void
}
const CategoriesPage: FC<IProps> = ({
  initialLayout = 'GRID',
  brandData,
  children,
  onFilterConfirm,
  onLayoutChange,
}) => {
  const [layout, setLayout] = useState<'GRID' | 'LIST'>(initialLayout)

  const handleGridSelect = useCallback(() => {
    setLayout('GRID')
    onLayoutChange?.('GRID')
  }, [onLayoutChange])
  const handleListSelect = useCallback(() => {
    setLayout('LIST')
    onLayoutChange?.('LIST')
  }, [onLayoutChange])

  return (
    <main
      className={cn(
        'flex flex-[1_0_0] flex-col overflow-clip',
        'items-start',
        'gap-y-8',
        'rounded-2xl bg-ui-surface-50 shadow-ui-overlay',
      )}
    >
      <section
        className={cn('flex flex-col', 'items-stretch gap-y-4', 'h-fit w-full', 'px-6 py-4')}
      >
        <div className="flex h-fit w-full flex-col gap-y-0">
          <div className="flex items-center justify-between py-1">
            <h3 className="text-ui-h3 font-semibold text-ui-text-950">Tất cả sản phẩm</h3>

            <div className="flex size-fit items-center gap-x-2">
              <button onClick={handleGridSelect}>
                <Lucide2LayoutGrid size={16} color={layout === 'GRID' ? '#18181B' : '#D4D4D8'} />
              </button>

              <button onClick={handleListSelect}>
                <Lucide2LayoutListIcon
                  size={16}
                  color={layout === 'LIST' ? '#18181B' : '#D4D4D8'}
                />
              </button>
            </div>
          </div>

          <div className="h-2 w-full bg-ui-line" />
        </div>

        <BrandProvider>
          <PriceProvider>
            <div className="grid grid-cols-3 gap-x-6 p-0">
              <div className="flex grow flex-col gap-y-1">
                <p className="text-ui-small-note font-medium text-ui-text-800">Thương hiệu</p>
                <div className="flex h-full w-full flex-wrap gap-2 border-r border-ui-border-400">
                  <BrandDisplay />
                  <BrandModal data={brandData} />
                </div>
              </div>

              <div className="flex grow flex-col gap-y-1">
                <p className="text-ui-small-note font-medium text-ui-text-800">Khoảng giá</p>
                <div className="flex size-full flex-wrap items-start gap-2 border-r border-ui-border-400">
                  <PricePopover />
                </div>
              </div>

              <div className="flex h-fit items-end justify-between gap-x-4">
                <AcceptBtn onFilterConfirm={onFilterConfirm} />
              </div>
            </div>
          </PriceProvider>
        </BrandProvider>
      </section>

      {children}
    </main>
  )
}

export default CategoriesPage
