import { API_URL } from '../lib/constants'

const defaultFetchConfiguration = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include'
}

const supportedFromLanguages = async () => {
  const response = await fetch(`${API_URL}/supported-from-languages`, defaultFetchConfiguration)
  if (!response.ok) {
    throw new Error(`Error con el estado HTTP: ${response.status}`)
  }
  return response.json()
}

const supportedToLanguages = async () => {
  const response = await fetch(`${API_URL}/supported-to-languages`, defaultFetchConfiguration)
  if (!response.ok) {
    throw new Error(`Error con el estado HTTP: ${response.status}`)
  }
  return response.json()
}

export { supportedFromLanguages, supportedToLanguages }
