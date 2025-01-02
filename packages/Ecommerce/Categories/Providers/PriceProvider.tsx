import { FC, ReactNode, useState } from 'react'

import { PriceContext, TPrice } from './usePriceProvider'

interface IProps {
  children: ReactNode
}

const PriceProvider: FC<IProps> = ({ children }) => {
  const [price, setPrice] = useState<TPrice | undefined>({
    value: '0-100000',
    label: 'Dưới 100.000',
    option: {
      from: 0,
      to: 100000,
    },
  })
  return <PriceContext.Provider value={{ price, setPrice }}>{children}</PriceContext.Provider>
}
export default PriceProvider
