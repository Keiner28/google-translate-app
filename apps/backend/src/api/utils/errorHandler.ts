import { type Request, type Response, type NextFunction } from 'express'

const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction): void => {
  // Manejar errores específicos
  if (err instanceof SyntaxError) {
    res.status(400).json({ error: 'Bad Request' })
    return
  }

  // Manejar otros errores
  res.status(500).json({ error: 'Internal Server Error' })
}

export default errorHandler
