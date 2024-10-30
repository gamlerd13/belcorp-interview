import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { getFormattedDate } from '../../../utils/utils'

export const ProductDetail = () => {
  const context = useContext(ProductContext)

  if (!context) {
    throw new Error('ProductDetail must be used within a ProductProvider')
  }

  const { product } = context

  return (
    <>
      <fieldset className="mb-[15px]  gap-5">
        <div className=" flex flex-row gap-2">
          <label className=" text-violet11" htmlFor="price">
            Creado:
          </label>
          <span className="font-semibold">
            {getFormattedDate(
              product?.meta?.createdAt || new Date().toISOString()
            )}
          </span>
        </div>
        <div className=" flex flex-row gap-2">
          <label className=" text-violet11" htmlFor="price">
            Actualizado:
          </label>
          <span className="font-semibold">
            {getFormattedDate(
              product?.meta?.createdAt || new Date().toISOString()
            )}
          </span>
        </div>
      </fieldset>
    </>
  )
}
