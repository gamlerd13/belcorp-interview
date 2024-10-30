import { create } from 'zustand'

interface StoreState {
  price: string
  brand: string
  setPrice: (price: string) => void
  setBrand: (brand: string) => void
}

const useProductFormStore = create<StoreState>((set) => ({
  price: '',
  brand: '',
  setPrice: (price) => set(() => ({ price })),
  setBrand: (brand) => set(() => ({ brand }))
}))

export default useProductFormStore
