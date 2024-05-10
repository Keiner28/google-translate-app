import { useState, useEffect } from 'react'
import { supportedFromLanguages, supportedToLanguages } from '../services/supportedLanguage'
import { type Languages } from '../types/types'

export function useSupportedLanguages() {
  const [fromLanguages, setFromLanguages] = useState<Languages[]>([])
  const [toLanguages, setToLanguages] = useState<Languages[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    Promise.all([supportedFromLanguages(), supportedToLanguages()])
      .then(([fromData, toData]) => {
        const languagesArray: Languages[] = fromData['supportedFromLanguages']
        const toLanguagesArray: Languages[] = toData['supportedToLanguages']
        setFromLanguages([{ code: 'auto', name: 'Detectar idioma' }, ...languagesArray])
        setToLanguages(toLanguagesArray)
        setIsLoading(false)
      })
      .catch(_error => {
        setError('Error al cargar idiomas soportados.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return { fromLanguages, toLanguages, isLoading, error }
}
