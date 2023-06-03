import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import colors from 'colors'

async function main() {
  try {
    await mongoose.connect(config.database_url)
    console.log(colors.blue('Database is connected'))
    app.listen(config.port, () => {
      console.log(colors.yellow(`App is listening on port:${config.port}`))
    })
  } catch (error) {
    console.log('Failed to connect to the database:', error)
  }
}

main()
