import { Translator, type SourceLanguageCode, type TargetLanguageCode } from 'deepl-node'
import { getDeepLApiKey } from '../config/config'

const translator = new Translator(getDeepLApiKey())

const translateText = async ({
  fromLanguage,
  toLanguage,
  text
}: {
  fromLanguage: SourceLanguageCode | undefined
  toLanguage: TargetLanguageCode
  text: string
}): Promise<string> => {
  try {
    const translatedText =
      fromLanguage === null
        ? await translator.translateText(text, fromLanguage, toLanguage)
        : await translator.translateText(text, null, toLanguage)
    return translatedText.text
  } catch (error) {
    throw new Error('Error al traducir el texto')
  }
}

export { translateText }
