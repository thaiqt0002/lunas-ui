import { FC } from 'react'

import BrandTag from './BrandTag'
import { useBrandProvider } from '../Providers/useBrandProvider'

const BrandDisplay: FC = () => {
  const { brandSelected } = useBrandProvider()
  return (
    <>
      {brandSelected.map((brand) => (
        <BrandTag key={brand.uuid} {...brand} />
      ))}
    </>
  )
}

export default BrandDisplay
