const Mongoose = require('mongoose')

const db = Mongoose.connection

db.on('open', () => {
  console.log('Connected to MongoDB')
})

db.on('error', (err) => {
  console.log('Error connecting to MongoDB', err)
})

const connectDB = async () => {
  await Mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = {
  connectDB
}
