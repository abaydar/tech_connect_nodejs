// const tracer = require('dd-trace')
// tracer.init({
//     ingestion: {
//       // Any traces started will be sampled at 90.00% with a rate limit of 100 per second
//       sampleRate: 0.9000
//     }
//   })
const express = require('express')
const connectDB = require('./config/db')

const app = express()

//Conncet db
connectDB()

// init middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('api running'))

// define routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))


const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
