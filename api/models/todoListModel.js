'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
  name: {
    type: String,
    Required: 'Enter name'
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
})

module.exports = mongoose.model('Tasks', TaskSchema)