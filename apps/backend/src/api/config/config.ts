import * as dotenv from 'dotenv'

dotenv.config()

export const getDeepLApiKey = (): string => {
  const DEEPL_NODE_API_KEY = process.env.DEEPL_NODE_API_KEY
  if (!DEEPL_NODE_API_KEY) {
    process.exit(1)
  }
  return DEEPL_NODE_API_KEY
}
