import { type TargetLanguageCode } from 'deepl-node'
import { API_URL } from '../lib/constants'
import { type FromLanguage } from '../types/types'
import { TranslationError } from '../utils/translationError'

interface TranslationRequest {
  fromLanguage: FromLanguage
  toLanguage: TargetLanguageCode
  text: string
}
export interface TranslationResponse {
  translatedText: string
}

const translateText = async ({ fromLanguage, toLanguage, text }: TranslationRequest): Promise<TranslationResponse> => {
  try {

    const response = await fetch(`${API_URL}/translate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ fromLanguage, toLanguage, text })
    })

    if (!response.ok) {
      throw new TranslationError('Failed to translate text')
    }

    const data = await response.json()
    return { translatedText: data.translatedText }
  } catch (error) {
    if (error instanceof TranslationError) {
      console.error('Translation error:', error.message)
    } else {
      console.error('Unexpected error:', error)
    }
    throw error
  }
}

export default translateText
