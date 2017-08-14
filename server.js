const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://mongo/Tododb')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  console.log('Request type: ', req.method)
  // console.log(req.body)
  next()
})

const routes = require('./api/routes/todoListRoutes')
routes(app)

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port)

console.log('todo list RESTful API server started on: ' + port)