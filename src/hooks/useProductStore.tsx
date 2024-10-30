import { useEffect } from 'react'
import { useProductStore } from '../store/productStore'

import { Product } from '../interfaces/product.interface'

export const useProduct = () => {
  const { products, isLoading, fetchProducts, productFiltered } =
    useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])
  const typedProducts: Product[] = products

  return {
    products: typedProducts,
    productFiltered,
    fetchProducts,
    isLoading
  }
}
