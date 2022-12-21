const express = require('express')
const helmet = require('helmet')
const { default: mongoose } = require('mongoose')
const config = require('./configs')

// DB Connection
const loaders = require('./loaders')

// Require Routes
const { WalletRoutes, UserRoutes } = require('./routes')

config()
// Mongoose settings
mongoose.set('strictQuery', true)
loaders()

const app = express()

app.use(express.json())
app.use(helmet())

app.listen(process.env.APP_PORT, () => {
  console.log(`Server running on port ${process.env.APP_PORT}`)

  // Routes
  app.use('/wallet', WalletRoutes)
  app.use('/user', UserRoutes)
})
