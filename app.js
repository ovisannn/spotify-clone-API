import express from 'express'
const app = express()
const port = 3000
import Routes from './routes/routes.js'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
Routes(app)

app.use(function universalErrorHandler(req, res, next, err) {
    console.error("oh no something went wrong!");
    console.error(err);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})