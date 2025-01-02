import { FC } from 'react'

interface IProps {
  name: string
}
const BrandTag: FC<IProps> = ({ name }) => {
  return (
    <div className="size-fit select-none rounded border border-purple-400 bg-purple-50 px-3 py-1 text-ui-small-note font-semibold text-purple-500">
      {name}
    </div>
  )
}

export default BrandTag
