import dotenv from 'dotenv'

import { isDev } from './utils/helpers'

dotenv.config({ debug: isDev })

export default {
  port: process.env.PORT,
  name: process.env.NAME,
  isMaintenanceMode: process.env.MAINTENANCE_MODE === 'true',
}
