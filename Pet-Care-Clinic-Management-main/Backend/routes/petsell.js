const express = require('express')
const {
  getAdds,
  getAdd,
  createAdd,
  deleteAdd,
  updateAdd
} = require('../controllers/PetSellingController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET all Adds
router.get('/', getAdds)

//GET a single Add
router.get('/:id', getAdd)

// POST a new Add
router.post('/', createAdd)

// DELETE a Add
router.delete('/:id', deleteAdd)

// UPDATE a Add
router.put('/:id', updateAdd)


module.exports = router