import express from 'express'
const app = express()
const port = 3000
import Routes from './routes/routes.js'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
Routes(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})