import { FC } from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Atoms/Select'

interface IProps {
  onSortChange?: (value: string) => void
}
const DateSelect: FC<IProps> = ({ onSortChange }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <p className="text-ui-small-note font-medium text-ui-text-600">Sắp xếp theo</p>
      <Select onValueChange={onSortChange} defaultValue="date-desc">
        <SelectTrigger className="h-fit min-w-28 rounded border border-ui-border-400 px-2 py-1 text-ui-small-note font-semibold text-ui-text-500">
          <SelectValue placeholder="Giá thấp nhất" />
        </SelectTrigger>
        <SelectContent className="[&_div]:pl-2 [&_svg]:hidden">
          <SelectItem value="price-asc">Giá thấp nhất</SelectItem>
          <SelectItem value="price-desc">Giá cao nhất</SelectItem>
          <SelectItem value="date-desc">Mới nhất</SelectItem>
          <SelectItem value="date-asc">Cũ nhất</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default DateSelect
