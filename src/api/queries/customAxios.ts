import axios from 'axios'

export const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_ADDRESS,
})