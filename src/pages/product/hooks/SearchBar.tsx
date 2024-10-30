import { useEffect, useState } from 'react'
import { SearchInputQuery } from '../../../components/SearchInputQuery'
import { VL_SEARCH_DEBOUNCE_DELAY } from '../../../constants/main'
import { useProductStore } from '../../../store/productStore'

export default function ProductSearchBar() {
  const { products, setFilterProducts } = useProductStore()
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query)
    }, VL_SEARCH_DEBOUNCE_DELAY)

    return () => clearTimeout(timeout)
  }, [query])

  useEffect(() => {
    if (debouncedQuery.length > 3) {
      const keywords = debouncedQuery
        .split(' ')
        .filter((word) => word.trim() !== '')

      const data = products.filter((product) =>
        keywords.every(
          (keyword) =>
            product.sku.toLowerCase().includes(keyword.toLowerCase()) ||
            product.title.toLowerCase().includes(keyword.toLowerCase())
        )
      )

      setFilterProducts(data)
    } else {
      setFilterProducts(products)
    }
  }, [debouncedQuery, products, setFilterProducts])

  return (
    <SearchInputQuery
      placeholder="Filtar Producto SKU, Title .."
      value={query}
      onChangeValue={setQuery}
    />
  )
}
