import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import CustomProductTab from './CustomProductTab'
import useProductFormStore from '../../../store/productFormStore'
import { ProductContext } from '../context/ProductContext'
import { Product } from '../../../interfaces/product.interface'
import { toast } from 'sonner'

interface CustomProductDialogProps {
  data: Product
}
const CustomProductDialog = ({ data }: CustomProductDialogProps) => {
  const { brand, price, setBrand, setPrice } = useProductFormStore()
  const [open, setOpen] = useState(false)
  const [errorInput, setErrorInput] = useState<string>('')

  const handleSubmit = () => {
    if (brand.trim() && price.trim()) {
      setErrorInput('')
      toast.success('Producto enviado con éxito')
      setBrand('')
      setPrice('')
      setOpen(false)
    } else {
      console.log('error')
      setErrorInput('Marca o precio no válido, revise por favor')
    }
  }

  return (
    <ProductContext.Provider value={{ product: data }}>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button className="inline-flex h-[35px] items-center justify-center rounded bg-white px-[15px] font-medium leading-none text-violet11 shadow-[0_2px_10px] shadow-blackA4 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
            Opciones
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
          <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
            <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12 py-4">
              Opciones Productos
            </Dialog.Title>

            <CustomProductTab error={errorInput} />

            <div className="mt-[25px] flex justify-end">
              <button
                onClick={() => handleSubmit()}
                className="inline-flex h-[35px] items-center justify-center rounded bg-slate-200 px-[15px] font-medium leading-none text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 focus:outline-none"
              >
                Confirmar
              </button>
            </div>
            <Dialog.Close asChild>
              <button
                className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
                aria-label="Close"
              >
                <X />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </ProductContext.Provider>
  )
}

export default CustomProductDialog
