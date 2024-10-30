import * as Toolbar from '@radix-ui/react-toolbar'

export default function NavBar() {
  return (
    <Toolbar.Root className="flex w-full justify-between p-4 border-b border-gray-200 bg-white ">
      <Toolbar.Button className="font-semibold text-lg ">
        Belcorp Admin
      </Toolbar.Button>
      <Toolbar.Button className="font-semibold text-lg bg-slate-200 rounded-lg px-8 py-2">
        Salir
      </Toolbar.Button>
    </Toolbar.Root>
  )
}
