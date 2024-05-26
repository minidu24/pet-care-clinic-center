const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Item = new Schema({
  ItemName: {
    type: String,
    required: true
  },
  ForWhatPet: {
    type: String,
    required: true
  },
  Category: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true
  },
  Discription: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('PetShopItem', Item)