import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

export const getProducts = async () => {
  const { data } = await axios.get(`${apiUrl}/products`)
  return data.products
}
