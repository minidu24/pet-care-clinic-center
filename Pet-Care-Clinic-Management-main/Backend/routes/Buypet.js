const express = require('express')
const {
    getPosts,
    getPost ,
    deletePost,
    updateAdd
} = require('../controllers/PetBuyController')


const router = express.Router()



// GET all Adds
router.get('/', getPosts)

//GET a single Add
router.get('/:id', getPost)

//GET a single Add
router.delete('/:id', deletePost)

router.put('/:id',updateAdd)


module.exports = router