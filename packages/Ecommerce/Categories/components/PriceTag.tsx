import { FC } from 'react'

interface IProps {
  name: string
}
const PriceTag: FC<IProps> = ({ name }) => {
  return (
    <div className="size-fit select-none text-nowrap rounded border border-ui-tertiary-400 bg-ui-tertiary-50 px-3 py-1 text-ui-small-note font-semibold text-ui-tertiary-500">
      {name}
    </div>
  )
}

export default PriceTag
