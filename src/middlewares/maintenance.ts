import { Request, Response, NextFunction } from 'express'
import config from '../config'

export const maintenance = (_req: Request, res: Response, next: NextFunction) => {
  if (config.isMaintenanceMode) {
    return res.status(503).json({ error: 'Maintenance mode' })
  }
  return next()
}
