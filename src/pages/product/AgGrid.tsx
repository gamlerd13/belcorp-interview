import { useCallback, useMemo, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'
import 'ag-grid-enterprise'
import { useRowProducts } from './hooks/useRowProducts'
import { Download } from 'lucide-react'
import CustomButton from '../../components/Button'

export default function AgGridProduct() {
  const { rowProducts, colProducts } = useRowProducts()
  const gridRef = useRef<AgGridReact>(null)

  const defaultExcelExportParams = useMemo(() => {
    return {
      fileName: 'products.xlsx',
      exportMode: 'all'
    }
  }, [])

  const onBtExport = useCallback(() => {
    gridRef.current?.api.exportDataAsExcel(defaultExcelExportParams) // Llama a la API para exportar
  }, [defaultExcelExportParams])

  return (
    <>
      <div className="ag-theme-quartz" style={{ height: 800 }}>
        <div className="w-full flex items-start py-2">
          <CustomButton
            icon={Download}
            label={'Descargar excel'}
            onClick={onBtExport}
          />
        </div>
        <AgGridReact
          ref={gridRef}
          rowData={rowProducts}
          columnDefs={colProducts}
          pagination={true}
          defaultColDef={{ sortable: true, filter: true }}
        />
      </div>
    </>
  )
}
