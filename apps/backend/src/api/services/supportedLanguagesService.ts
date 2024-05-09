import { Translator } from 'deepl-node'
import { getDeepLApiKey } from '../config/config'

const apiKey = getDeepLApiKey()

const translator = new Translator(apiKey)

export interface SupportedLanguages {
  name: string
  code: string
}

const supportedLanguagesService = {
  supportedFromLanguages: async () => {
    try {
      const fromLanguages: SupportedLanguages[] = (await translator.getSourceLanguages()) as SupportedLanguages[]

      return fromLanguages
    } catch (error) {
      return { error }
    }
  },
  supportedToLanguages: async () => {
    try {
      const toLanguages: SupportedLanguages[] = (await translator.getTargetLanguages()) as SupportedLanguages[]

      return toLanguages
    } catch (error) {
      return { error }
    }
  }
}

export { supportedLanguagesService }
