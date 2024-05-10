import { Router } from 'express'
import { translateText } from '../controllers/translateController'
import { supportedFromLanguage, supportedToLanguage } from '../controllers/supportedLanguagesController'

const router: Router = Router()

router.get('/', (req, res) => {
  res.send('Welcome to the translation API')
})

router.post('/translate', translateText)

router.get('/supported-from-languages', supportedFromLanguage)

router.get('/supported-to-languages', supportedToLanguage)

export default router
