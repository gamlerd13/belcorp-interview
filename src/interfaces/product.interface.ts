export interface Product {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: Meta
  images: string[]
  thumbnail: string
}

interface Dimensions {
  width: number
  height: number
  depth: number
}

interface Review {
  rating: number
  comment: string
  date: string // ISO date format string
  reviewerName: string
  reviewerEmail: string
}

interface Meta {
  createdAt: string // ISO date format string
  updatedAt: string // ISO date format string
  barcode: string
  qrCode: string
}

export interface ProductTable {
  id: number
  sku: string
  title: string
  description: string
  price: number
}
