import { FC, ReactNode, useState } from 'react'

import { BrandContext, TBrand } from './useBrandProvider'

interface IProps {
  children: ReactNode
}

const BrandProvider: FC<IProps> = ({ children }) => {
  const [brandSelected, setBrandSelected] = useState<TBrand[]>([])
  return (
    <BrandContext.Provider value={{ brandSelected, setBrandSelected }}>
      {children}
    </BrandContext.Provider>
  )
}

export default BrandProvider
