export interface ProductItemDto {
  id: number
  title: string
  description?: string
  price: number,
  oldPrice: number,
  discount: number,
  rating: number,
  reviews: number,
  tags: string[]
  productDescription: ProductDescription[]
  seller: {
    name: string
    profileUrl: string
  }
  images: string[]
  sizes?: string[]
  colors?: string[]
  personalization?: boolean
}

export interface ProductDescription {
  id: string
  title: string
  description: string
}