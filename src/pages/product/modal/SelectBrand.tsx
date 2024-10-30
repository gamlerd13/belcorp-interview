import React from 'react'
import * as Select from '@radix-ui/react-select'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@radix-ui/react-icons'
import { BrandList } from '../../../constants/brand'

interface ProductSelectProps {
  onSelect: (brand: string) => void
}

const ProductSelect = ({ onSelect }: ProductSelectProps) => (
  <Select.Root
    onValueChange={(brand) => {
      onSelect(brand)
    }}
  >
    <Select.Trigger
      className="flex h-[35px] w-full items-center justify-between rounded border bg-white px-[15px] text-[13px] text-violet11  outline-none"
      aria-label="Food"
    >
      <Select.Value placeholder="Seleccione una marca" />
      <Select.Icon className="text-violet11">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="overflow-hidden rounded-md bg-white shadow-lg">
        <Select.ScrollUpButton className="flex h-[25px] items-center justify-center bg-white text-violet11">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="p-[5px]">
          <Select.Group>
            {BrandList.map((brand) => (
              <SelectItem key={brand} value={brand}>
                {brand}
              </SelectItem>
            ))}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className="flex h-[25px] items-center justify-center bg-white text-violet11">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
)

const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Select.Item>
>(({ children, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className="flex h-[25px] select-none items-center rounded pl-[15px] pr-[35px] text-[13px] text-violet11"
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 inline-flex w-full items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  )
})

export default ProductSelect
