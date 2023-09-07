import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//satic routes for files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.use('/', (req, res, next) => {
  // res.sendFile(__dirname + '/views/index.html')
  res.render('index', { text: 'this is ejs' })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
