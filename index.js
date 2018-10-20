// @Coding Garden Express App Boilerplate
// Auth from Scratch -> https://www.youtube.com/watch?v=JNAjjHwPFIw
// -----------------------------------------
// RabbitWerks Javascript

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
    message: "Hello world from port 7777!"
  })
})

function notFound(req, res, next) {
  res.status(404)
  const error = new Error('Not Found - ' + req.originalUrl)
  next(error)
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500)
  res.json({
    message: err.message,
    stack: err.stack
  })
}

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 7777
app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
})