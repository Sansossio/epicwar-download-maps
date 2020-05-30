export type EpicwarDimensions = {
  x: number
  y: number
}

export type EpicwarMapParseDetailsResponse = {
  category: string
  tileset: string
  dimensions: EpicwarDimensions
  playableArea: EpicwarDimensions
  date: Date
  /**
   * Map size in bytes
   */
  size: number
}

export type EpicwarMapParseResponse = {
  id: number
  name: string
  url: string
  description: string
  details: EpicwarMapParseDetailsResponse
  image: string
}
