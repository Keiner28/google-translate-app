import { type Request, type Response } from 'express'
import { supportedLanguagesService } from '../services/supportedLanguagesService'

export interface SupportedLanguages {
  name: string
  code: string
}

const supportedFromLanguage = async (_req: Request, res: Response): Promise<void> => {
  try {
    const supportedFromLanguages: SupportedLanguages[] =
      (await supportedLanguagesService.supportedFromLanguages()) as SupportedLanguages[]
    res.json({ supportedFromLanguages })
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los lenguajes de origen soportados' })
  }
}

const supportedToLanguage = async (_req: Request, res: Response): Promise<void> => {
  try {
    const supportedToLanguages: SupportedLanguages[] =
      (await supportedLanguagesService.supportedToLanguages()) as SupportedLanguages[]
    res.json({ supportedToLanguages })
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los lenguajes de destino soportados' })
  }
}

export { supportedFromLanguage, supportedToLanguage }
