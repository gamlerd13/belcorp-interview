import * as Tabs from '@radix-ui/react-tabs'
import { ProductDetail } from './ProductDetail'
import { ProductForm } from './ProductForm'

const CustomProductTab = ({ error }: { error: string }) => (
  <Tabs.Root className="flex w-full flex-col" defaultValue="generalTab">
    <Tabs.List
      className="flex shrink-0 border-b border-mauve6"
      aria-label="Manage your account"
    >
      <Tabs.Trigger
        className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] "
        value="generalTab"
      >
        General
      </Tabs.Trigger>
      <Tabs.Trigger
        className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] "
        value="detailTab"
      >
        Detalle
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content
      className="grow rounded-b-md bg-white p-5 outline-none "
      value="generalTab"
    >
      <ProductForm />
      <div>
        <span className="text-red-600">{error}</span>
      </div>
    </Tabs.Content>
    <Tabs.Content
      className="grow rounded-b-md bg-white p-5 outline-none "
      value="detailTab"
    >
      <ProductDetail />
    </Tabs.Content>
  </Tabs.Root>
)

export default CustomProductTab
