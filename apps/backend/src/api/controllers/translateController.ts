import { type Request, type Response } from 'express'
import { translateText as TranslateTextService } from '../services/translationService'

const translateText = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fromLanguage, toLanguage, text } = req.body

    const translatedText = await TranslateTextService({ fromLanguage, toLanguage, text })

    res.json({ translatedText })
  } catch (error) {
    res.status(500).json({ error: 'Error al traducir el texto' })
  }
}

export { translateText }
