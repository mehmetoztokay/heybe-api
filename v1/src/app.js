const express = require('express')
const helmet = require('helmet')
const config = require('./configs')

// Require Routes
const { WalletRoutes } = require('./routes')

config()

const app = express()

app.use(express.json())
app.use(helmet())

app.listen(process.env.APP_PORT, () => {
  console.log(`Server running on port ${process.env.APP_PORT}`)

  // Routes
  app.use('/wallet', WalletRoutes.router)
})