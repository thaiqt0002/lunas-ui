import { FC } from 'react'

import Lucide2PlusIcon from '@/Icons/Lucide2PlusIcon'

interface IProps {
  title?: string
  onClick?: () => void
}
const FilterBtn: FC<IProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex h-fit items-center gap-x-1 rounded border border-dashed border-ui-border-400 px-3 py-1 shadow-ui-overlay"
    >
      <Lucide2PlusIcon size={16} color="#A1A1AA" />
      <p className="text-ui-small-note font-medium text-ui-text-400">{title}</p>
    </button>
  )
}

export default FilterBtn
