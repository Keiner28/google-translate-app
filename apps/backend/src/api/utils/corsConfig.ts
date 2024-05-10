import cors, { type CorsOptions } from 'cors'

enum Environment {
  Development,
  Production
}

const env: Environment = process.env.NODE_ENV === 'production' ? Environment.Production : Environment.Development

let corsConfig: CorsOptions = {}

try {
  const corsConfigs: Record<Environment, CorsOptions> = {
    [Environment.Development]: JSON.parse(process.env.CORS_DEV_CONFIG ?? '{}'),
    [Environment.Production]: JSON.parse(process.env.CORS_PROD_CONFIG ?? '{}')
  }

  corsConfig = corsConfigs[env]
} catch (error) {
  throw new Error('Error al cargar la configuración de CORS')
}

export default cors(corsConfig)
