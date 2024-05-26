const express = require('express')
const {
  getItems,
  getItem,
  AddItem,
  deleteItem,
  updateItem
} = require('../controllers/ItemController')

const router = express.Router()

// GET all Items
router.get('/', getItems)

// GET a single Item
router.get('/:id', getItem)

// POST a new Item
router.post('/', AddItem)

// DELETE a Item
router.delete('/:id', deleteItem)

// UPDATE a Item
router.patch('/:id', updateItem)

module.exports = router