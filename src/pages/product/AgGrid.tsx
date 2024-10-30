import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react' // React Data Grid Component
import 'ag-grid-community/styles/ag-grid.css' // Mandatory CSS required by the Data Grid
import 'ag-grid-community/styles/ag-theme-quartz.css' // Optional Theme applied to the Data Grid
import { useProduct } from '../../hooks/useProductStore'
import { ColDef, ICellRendererParams } from 'ag-grid-community'
import { Product, ProductTable } from '../../interfaces/product.interface'
import CustomProductDialog from './modal/CustomProductDialog'

export default function AgGridProduct() {
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
    { field: 'id', headerName: 'ID', sortable: true },
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

  return (
    <>
      <div className="ag-theme-quartz" style={{ height: 800 }}>
        <AgGridReact
          rowData={rowProducts}
          columnDefs={colProducts}
          pagination={true}
        />
      </div>
    </>
  )
}
