import SelectDemo from './SelectBrand'
import useProductFormStore from '../../../store/productFormStore'

export const ProductForm = () => {
  const { price, setBrand, setPrice } = useProductFormStore()

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (
      /^\d*(\.\d{0,6})?$/.test(value) &&
      (value === '' || (parseFloat(value) >= 0 && parseFloat(value) <= 1))
    ) {
      setPrice(value)
    }
  }

  return (
    <form>
      <fieldset className="mb-[15px] flex flex-col items-center gap-5">
        <label className="w-full " htmlFor="brand">
          Marca
        </label>
        <SelectDemo onSelect={(brand) => setBrand(brand)} />
      </fieldset>

      <fieldset className="mb-4 flex flex-col gap-5 w-full">
        <label className="w-full text-violet11" htmlFor="price">
          Precio
        </label>
        <input
          type="number"
          className="h-[35px] w-full p-2 rounded border border-violet7 text-[15px] text-violet11 outline-none"
          id="price"
          value={price}
          onChange={handlePriceChange}
          step="0.000001"
          min="0"
          max="1"
          placeholder="0.000000"
        />
      </fieldset>
    </form>
  )
}
