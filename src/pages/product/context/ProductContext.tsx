import { createContext } from 'react'
import { ProductContextProps } from '../interfaces/ProductContextProps'

export const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
)
