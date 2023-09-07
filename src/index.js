import express from 'express'
const app = express()

app.use('/', (req, res, next) => {
  res.send('hello world')
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
