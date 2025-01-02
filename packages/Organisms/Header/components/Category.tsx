import { FC, useMemo, useRef } from 'react'

import { ICategory } from '../types'

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/Atoms/NavigationMenu'
import { ScrollArea } from '@/Atoms/ScrollBar'
import {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from '@/Atoms/Tooltip'

interface IProps {
  data?: ICategory[]
  onShowAll?: () => void
  onClickCategory?: (slug: string) => void
}
const Category: FC<IProps> = ({ data = [], onShowAll, onClickCategory }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const Item = useMemo(
    (): FC<ICategory> =>
      ({ name, description, slug, sub }) => {
        return (
          <li className="mr-3 h-fit rounded-lg hover:bg-ui-text-50">
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger
                  className="flex w-full flex-col items-start justify-start overflow-x-hidden px-2 py-1.5"
                  onClick={() => onClickCategory?.(slug)}
                >
                  <p className="text-ui-note font-bold text-ui-text-800">{name}</p>
                  <p className="line-clamp-2 text-start text-ui-small-note text-ui-text-500">
                    {description}
                  </p>
                </TooltipTrigger>
                <TooltipPortal>
                  <TooltipContent
                    sticky="always"
                    sideOffset={32}
                    align="start"
                    side="right"
                    className="h-fit w-[320px] border-ui-border-100 p-0"
                  >
                    <ScrollArea className="h-56 p-4 pr-6">
                      <ul className="w-full">
                        {sub.map(({ uuid, name: subName, description: subDesc, slug: subSlug }) => (
                          <li
                            key={uuid}
                            className="mr-3 h-fit w-full rounded-lg hover:bg-ui-text-50"
                          >
                            <button
                              className="flex flex-col items-start justify-start overflow-x-hidden px-2 py-1.5"
                              onClick={() => onClickCategory?.(`${slug}/${subSlug}`)}
                            >
                              <p className="text-ui-note font-bold text-ui-text-800">{subName}</p>
                              <p className="line-clamp-2 text-start text-ui-small-note text-ui-text-500">
                                {subDesc}
                              </p>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </TooltipContent>
                </TooltipPortal>
              </Tooltip>
            </TooltipProvider>
          </li>
        )
      },
    [onClickCategory],
  )
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="rounded-full font-bold text-ui-text-500">
        Danh mục
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div
          ref={containerRef}
          className="flex max-h-[520px] w-[420px] flex-col gap-y-2 px-3 pb-6 pt-4"
        >
          <button
            className="w-fit pl-2 text-ui-small-note font-semibold text-ui-text-500 hover:text-ui-text-800"
            onClick={onShowAll}
          >
            Xem tất cả sản phẩm
          </button>
          <ScrollArea className="h-64 w-full">
            <ul className="relative flex h-full flex-col gap-y-2">
              {data.map((item) => (
                <Item key={item.uuid} {...item} />
              ))}
            </ul>
          </ScrollArea>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

export default Category
