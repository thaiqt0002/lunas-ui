import { createContext, Dispatch, SetStateAction, useContext } from 'react'

export type TBrand = {
  uuid: string
  name: string
}
export const BrandContext = createContext<{
  brandSelected: TBrand[]
  setBrandSelected: Dispatch<SetStateAction<TBrand[]>>
} | null>(null)

export function useBrandProvider() {
  const context = useContext(BrandContext)
  if (!context) {
    throw new Error('useBrandContext must be used within a BrandProvider')
  }
  return context
}
