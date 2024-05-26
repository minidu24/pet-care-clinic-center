const post = require('../models/PetSellingModel')
const mongoose = require('mongoose')

// get all Item
const getPosts = async (req, res) => {
  const Posts = await post.find({}).sort({createdAt: -1})

  res.status(200).json(Posts)
}

// get a single Item
const getPost = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Post'})
  }

  const posts = await post.findById(id)

  if (!posts) {
    return res.status(404).json({error: 'No such Post'})
  }

  res.status(200).json(posts)
}

const deletePost = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Post'})
  }

  const Post = await post.findOneAndDelete({_id: id})

  if(!Post) {
    return res.status(400).json({error: 'No such post'})
  }

  res.status(200).json(Post)
}
const updateAdd = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such Add'})
  }

  const Post = await post.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!Post) {
    return res.status(400).json({error: 'No such Add'})
  }

  res.status(200).json(Post)
}

module.exports = {
    getPosts,
    getPost 
    ,deletePost,
    updateAdd
}