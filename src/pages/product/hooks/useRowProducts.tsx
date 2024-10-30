import { useEffect, useState } from 'react'
import { useProduct } from '../../../hooks/useProductStore'
import { Product, ProductTable } from '../../../interfaces/product.interface'
import { ColDef, ICellRendererParams } from 'ag-grid-community'
import CustomProductDialog from '../modal/CustomProductDialog'

export const useRowProducts = () => {
  const { products, productFiltered } = useProduct()
  const [rowProducts, setRowProducts] = useState<ProductTable[]>([])

  useEffect(() => {
    const source = productFiltered.length > 0 ? productFiltered : products

    setRowProducts(
      source.map((product) => ({
        id: product.id,
        sku: product.sku,
        title: product.title,
        description: product.description,
        price: product.price
      }))
    )
  }, [products, productFiltered])

  const CustomButtonComponent: React.FC<ICellRendererParams> = (props) => {
    const { data }: { data: ProductTable } = props

    return <CustomProductDialog data={data as Product} />
  }

  const colProducts: ColDef[] = [
    { field: 'id', headerName: 'ID', resizable: true, sortable: true },
    { field: 'sku', headerName: 'SKU', sortable: true },
    { field: 'title', headerName: 'Título', sortable: true },
    { field: 'description', headerName: 'Descripción', sortable: true },
    {
      field: 'price',
      headerName: 'Precio',
      sortable: true,
      filter: 'agNumberColumnFilter'
    },
    {
      field: 'button',
      headerName: 'Opciones',
      cellRenderer: CustomButtonComponent
    }
  ]

  return {
    products,
    rowProducts,
    colProducts
  }
}
