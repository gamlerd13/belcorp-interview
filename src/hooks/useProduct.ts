import { useEffect, useState } from 'react'
import { getProducts } from '../api/products'
import { Product } from '../interfaces/product.interface'

export const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchUsers = async () => {
    try {
      const data = await getProducts()
      console.log(data)
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return {
    products,
    isLoading
  }
}
