import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

type IConfig = {
  port: number // Updated to number type
  database_url: string
}

const config: IConfig = {
  port: Number(process.env.PORT) || 3000, // Use Number() to parse the environment variable to a number, with a default value of 3000
  database_url: process.env.DATABASE_URL || '',
}

export default config
