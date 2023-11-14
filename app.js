import express from 'express'
import router from './router.js'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())

app.use(router);

app.use(express.json())

app.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-type,accept');
  next()
});

app.get('/', (req, res) => {
  res.send('mangalive')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

