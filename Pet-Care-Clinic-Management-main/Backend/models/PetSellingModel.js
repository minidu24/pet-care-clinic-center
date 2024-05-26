const mongoose = require('mongoose')

const Schema = mongoose.Schema

const petSellingSchema = new Schema({
  Animal: {
    type: String,
    required: true
  },
  Breed: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true
  },
  Quantity: {
    type: Number,
    required: true
  },
  Contact: {
    type: Number,
    required: true
  },
  Details: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('petSellingAdd', petSellingSchema)