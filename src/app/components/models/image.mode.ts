export interface ImageResponse{
  id: string,
  title: string,
  description: string
  images: ImageType,
  publish_date: string
}

export interface ImageType{
  small: string,
  medium: string,
  large: string,
}
