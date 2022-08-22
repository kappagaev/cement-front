import { cementApi } from '../api/cementApi'

export interface Slide {
  id: string
  title: string
  subtitle: string
  image_filepath: string
}

export const getAllSliders = async () => {
  try {
    const { data } = await cementApi.get('/slider')
    return data
  } catch (error) {
    return null
  }
}
