import { FC, useCallback, useMemo, useState } from 'react'

import FilterBtn from './FilterBtn'
import PriceTag from './PriceTag'
import { TPrice, usePriceProvider } from '../Providers/usePriceProvider'

import Button from '@/Atoms/Button'
import NumberInput from '@/Atoms/NumberInput'
import { Popover, PopoverContent, PopoverTrigger } from '@/Atoms/Popover'
import { cn } from '@/libs'

const PricePopover: FC = () => {
  const { price, setPrice } = usePriceProvider()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const data = useMemo<TPrice[]>(
    () => [
      {
        value: '0-100000',
        label: 'Dưới 100.000',
        option: {
          from: 0,
          to: 100000,
        },
      },
      {
        value: '100000-300000',
        label: '100.000 - 300.000',
        option: {
          from: 100000,
          to: 300000,
        },
      },
      {
        value: '300000-600000',
        label: '300.000 - 600.000',
        option: {
          from: 300000,
          to: 600000,
        },
      },
      {
        value: '600000-1000000',
        label: '600.000 - 1.000.000',
        option: {
          from: 600000,
          to: 1000000,
        },
      },
      {
        value: '1000000-2000000',
        label: '1.000.000 - 2.000.000',
        option: {
          from: 1000000,
          to: 2000000,
        },
      },
      {
        value: '2000000-5000000',
        label: '2.000.000 - 5.000.000',
        option: {
          from: 2000000,
          to: 5000000,
        },
      },
      {
        value: '5000000-8000000',
        label: '5.000.000 - 8.000.000',
        option: {
          from: 5000000,
          to: 8000000,
        },
      },
      {
        value: '8000000-',
        label: 'Trên 8.000.000',
        option: {
          from: 8000000,
          to: Infinity,
        },
      },
    ],
    [],
  )
  const Item = useCallback(
    (props: TPrice) => {
      const { value, label } = props
      return (
        <button
          className={cn(
            'rounded-md border border-ui-border-400 !px-3 !py-1 !text-ui-note font-medium text-ui-text-400 shadow-ui-flat',
            price?.value === value &&
              'border-ui-tertiary-400 bg-ui-tertiary-50 text-ui-tertiary-500',
          )}
          onClick={() => setPrice(props)}
        >
          {label}
        </button>
      )
    },
    [price?.value, setPrice],
  )
  const handleSubmit = useCallback(() => {
    if (price && price.option.from > price.option.to) {
      setPrice(undefined)
    }
    setIsOpen(false)
  }, [price, setPrice])
  return (
    <>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <div className="flex flex-wrap gap-2">
            {price && <PriceTag name={price?.label} />}
            <FilterBtn title="Tìm kiếm theo giá" onClick={() => setIsOpen(true)} />
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="flex w-auto max-w-[34.25rem] flex-col gap-y-2.5"
          align="start"
          sideOffset={10}
          onInteractOutside={handleSubmit}
        >
          <div className="flex flex-col gap-y-2">
            <p className="text-ui-note font-medium">Khoảng giá</p>
            <div className="flex gap-x-2">
              <NumberInput
                placeholder="Từ"
                value={price?.option.from.toString()}
                onValueChange={(value) => {
                  setPrice((prev) => ({
                    ...prev,
                    option: { ...prev?.option, from: value, to: prev?.option.to ?? 0 },
                    label: `${value.toLocaleString()} - ${prev?.option.to?.toLocaleString()}`,
                    value: `${value}-${prev?.option.to}`,
                  }))
                }}
              />
              <NumberInput
                placeholder="Đến"
                value={price?.option.to === Infinity ? '' : price?.option.to.toString()}
                onValueChange={(value) =>
                  setPrice((prev) => {
                    if (prev) {
                      return {
                        ...prev,
                        option: { ...prev.option, to: value ?? 0 },
                        label: `${prev.option.from.toLocaleString()} - ${value.toLocaleString()}`,
                        value: `${prev.option.from}-${value}`,
                      }
                    }
                    return prev
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 py-2">
            <p className="text-ui-small-note text-ui-text-500">Gợi ý</p>
            <div className="flex flex-wrap gap-2 px-3">
              {data.map((item) => (
                <Item key={item.value} {...item} />
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-x-2 [&>button]:px-6">
            <Button variant="outline" onClick={() => setPrice(undefined)}>
              Xóa chọn
            </Button>
            <Button onClick={handleSubmit}>Xác nhận</Button>
          </div>
        </PopoverContent>
      </Popover>
    </>
  )
}

export default PricePopover
