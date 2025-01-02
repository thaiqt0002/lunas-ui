import { createContext, Dispatch, SetStateAction, useContext } from 'react'

export type TPrice = {
  value: string
  label: string
  option: {
    from: number
    to: number
  }
}
export const PriceContext = createContext<{
  price?: TPrice
  setPrice: Dispatch<SetStateAction<TPrice | undefined>>
} | null>(null)

export function usePriceProvider() {
  const context = useContext(PriceContext)
  if (!context) {
    throw new Error('usePriceContext must be used within a PriceProvider')
  }
  return context
}
