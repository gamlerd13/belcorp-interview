import React, { Suspense } from 'react'
import './App.css'
const Product = React.lazy(() => import('./pages/product/Product'))
import { Toaster } from 'sonner'
function App() {
  return (
    <div>
      <Toaster />
      <Suspense fallback={<div>Lazy loading component...</div>}>
        <Product />
      </Suspense>
    </div>
  )
}

export default App
