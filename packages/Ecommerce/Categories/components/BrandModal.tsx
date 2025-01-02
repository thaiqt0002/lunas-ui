'use client'
import { FC, memo, useCallback, useState } from 'react'

import FilterBtn from './FilterBtn'
import { useBrandProvider } from '../Providers/useBrandProvider'

import Button from '@/Atoms/Button'
import { CommandDialog, CommandInput, CommandItem, CommandList } from '@/Atoms/Command'
import { cn } from '@/libs'

interface IProps {
  data: {
    uuid: string
    name: string
  }[]
}
const BrandModal: FC<IProps> = ({ data }) => {
  const { brandSelected, setBrandSelected } = useBrandProvider()
  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = useCallback(() => setOpen(true), [])
  const handleResetBtn = useCallback(() => {
    setBrandSelected([])
    setOpen(false)
  }, [setBrandSelected])

  return (
    <>
      <FilterBtn title="Tìm kiếm thương hiệu" onClick={handleOpen} />
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Tìm kiếm thương hiệu..." />
        <CommandList
          className={cn(
            '[&>div]:flex',
            '[&>div]:flex-wrap',
            '[&>div]:gap-2',
            '[&>div]:px-4',
            '[&>div]:pt-3',
          )}
        >
          {data.map(({ uuid, name }) => (
            <CommandItem key={uuid} value={name} className="!p-0">
              <button
                className={cn(
                  'rounded-md border border-ui-border-400 !px-3 !py-1 text-ui-note font-medium',
                  brandSelected.find((brand) => brand.uuid === uuid) &&
                    'border-ui-tertiary-400 bg-ui-tertiary-50 text-ui-tertiary-500 shadow-ui-flat',
                )}
                onClick={() => {
                  if (brandSelected.some((brand) => brand.uuid === uuid)) {
                    setBrandSelected(brandSelected.filter((brand) => brand.uuid !== uuid))
                    return
                  }
                  setBrandSelected((prev) => [...prev, { uuid, name }])
                }}
              >
                {name}
              </button>
            </CommandItem>
          ))}
        </CommandList>
        <div className={cn('flex w-full justify-end gap-x-2.5 p-3')}>
          <Button variant="outline" onClick={handleResetBtn}>
            Reset
          </Button>
        </div>
      </CommandDialog>
    </>
  )
}

export default memo(BrandModal)
