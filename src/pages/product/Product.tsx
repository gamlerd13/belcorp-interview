import { Card } from '@radix-ui/themes'
import AgGridProduct from './AgGrid'
import { Download } from 'lucide-react'
import CustomButton from '../../components/Button'
import ProductSearchBar from './SearchBar'
import NavBar from '../../components/NavBar'

function Product() {
  const handleDownload = () => {
    console.log('hola mundo')
  }
  return (
    <div>
      <NavBar />
      <Card className="rounded-md border-1 py-4">
        <h1 className="font-bold text-lg text-start py-4">Productos</h1>
        <div className="flex justify-between">
          <ProductSearchBar />
          <CustomButton
            icon={Download}
            label={'Descargar'}
            onClick={handleDownload}
          />
        </div>
      </Card>

      <div>
        <AgGridProduct />
      </div>
    </div>
  )
}

export default Product
