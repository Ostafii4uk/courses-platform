import { API_URL } from '@/src/constants'
import axios from 'axios'

const $client = axios.create({
  baseURL: API_URL,
})

$client.interceptors.request.use(async (config) => {
  return config
})

export default $client
