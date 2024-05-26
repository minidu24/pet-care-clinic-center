const Item = require('../models/ItemModel')
const mongoose = require('mongoose')

// get all Item
const getItems = async (req, res) => {
  const Items = await Item.find({}).sort({createdAt: -1})

  res.status(200).json(Items)
}

// get a single Item
const getItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Item'})
  }

  const Items = await Item.findById(id)

  if (!Items) {
    return res.status(404).json({error: 'No such Item'})
  }

  res.status(200).json(Items)
}

// create a new Item
const AddItem = async (req, res) => {
  const {ItemName, ForWhatPet, Category,Price,Discription} = req.body

  let emptyFields = []

  if (!ItemName) {
    emptyFields.push('ItemName')
  }
  if (!ForWhatPet) {
    emptyFields.push('ForWhatPet')
  }
  if (!Category) {
    emptyFields.push('Category')
  }
  if (!Price) {
    emptyFields.push('Price')
  }
  if (!Discription) {
    emptyFields.push('Discription')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const Items = await Item.create({ ItemName, ForWhatPet, Category,Price,Discription })
    res.status(200).json(Items)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a Item
const deleteItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Item'})
  }

  const Item = await Item.findOneAndDelete({_id: id})

  if(!Item) {
    return res.status(400).json({error: 'No such Item'})
  }

  res.status(200).json(Item)
}

// update a Item
const updateItem = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Item'})
  }

  const Item = await Item.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!Item) {
    return res.status(400).json({error: 'No such Item'})
  }

  res.status(200).json(Item)
}

module.exports = {
  getItems,
  getItem,
  AddItem,
  deleteItem,
  updateItem
}