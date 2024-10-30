import { create } from 'zustand'
import { Product } from '../interfaces/product.interface'
import { getProducts } from '../api/products'

interface ProductStore {
  products: Product[]
  productFiltered: Product[]
  isLoading: boolean
  fetchProducts: () => Promise<void>
  setFilterProducts: (filteredProducts: Product[]) => void
}

const saveToLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getFromLocalStorage = <T>(key: string): T | null => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}

export const useProductStore = create<ProductStore>((set) => ({
  products: getFromLocalStorage<Product[]>('products') || [],
  productFiltered: [],
  isLoading: false,
  fetchProducts: async () => {
    set({ isLoading: true })
    try {
      const data = await getProducts()
      set({ products: data })
      saveToLocalStorage<Product[]>('products', data) // Guardar en localStorage
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      set({ isLoading: false })
    }
  },
  setFilterProducts: (filteredProducts: Product[]) =>
    set({ productFiltered: filteredProducts })
}))
