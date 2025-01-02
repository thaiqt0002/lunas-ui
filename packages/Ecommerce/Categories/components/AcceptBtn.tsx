import { FC, useState } from 'react'

import DateSelect from './DateSelect'
import { TBrand, useBrandProvider } from '../Providers/useBrandProvider'
import { TPrice, usePriceProvider } from '../Providers/usePriceProvider'

import Button from '@/Atoms/Button'
import Lucide2TunnelIcon from '@/Icons/Lucide2TunnelIcon'

interface IProps {
  onFilterConfirm?: (data?: {
    brand?: TBrand[]
    price?: TPrice
    sort?: 'price-asc' | 'price-desc' | 'date-asc' | 'date-desc'
  }) => void
}
const AcceptBtn: FC<IProps> = ({ onFilterConfirm }) => {
  const { brandSelected } = useBrandProvider()
  const { price } = usePriceProvider()
  const [sort, setSort] = useState<string>('date-desc')
  return (
    <>
      <DateSelect onSortChange={(value) => setSort(value)} />
      <Button
        variant="outline"
        icon={<Lucide2TunnelIcon size={16} color="#828EF7" />}
        className="h-fit border-2 pl-4 pr-6 text-ui-note font-bold"
        onClick={() =>
          onFilterConfirm?.({
            brand: brandSelected,
            price,
            sort: sort as 'price-asc' | 'price-desc' | 'date-asc' | 'date-desc',
          })
        }
      >
        <span>Lọc kết quả</span>
      </Button>
    </>
  )
}

export default AcceptBtn
