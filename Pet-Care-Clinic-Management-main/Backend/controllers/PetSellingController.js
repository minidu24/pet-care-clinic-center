const sellingAdd = require('../models/PetSellingModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');

// get all Adds
const getAdds = async (req, res) => {
  const usertoken = req.headers.authorization;
  console.log(usertoken)
  // Verify and decode the token to extract the user ID
  try {
    if (!usertoken) throw new Error('Token is missing');

    const token = usertoken.split(' ')[1]; // Extract token from 'Bearer <token>'\
    console.log('token', token)
    const decoded = jwt.verify(token, process.env.SECRET);
    const userId = decoded._id;
    console.log('userId', userId)
    const Adds = await sellingAdd.find({ user_id: userId }).sort({ createdAt: -1 });

    res.status(200).json(Adds);
  } catch (error) {
    res.status(400).json({ error: 'Invalid token or unable to extract user ID' });
  }
};


// get a single Add
const getAdd = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Add'})
  }

  const Add = await sellingAdd.findById(id)

  if (!Add) {
    return res.status(404).json({error: 'No such Add'})
  }
  
  res.status(200).json(Add)
}


// create new Add
const createAdd = async (req, res) => {
  const {Animal,Breed, Price,Quantity,Contact,Details} = req.body

  let emptyFields = []
  if(!Animal) {
    emptyFields.push('Animal')
  }
  if(!Breed) {
    emptyFields.push('Breed')
  }
  if(!Price) {
    emptyFields.push('Price')
  }
  if(!Quantity) {
    emptyFields.push('Quantity')
  }
  if(!Contact) {
    emptyFields.push('Contact')
  }
  if(!Details) {
    emptyFields.push('Details')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const user_id = req.user._id
    const Add = await sellingAdd.create({Animal,Breed, Price,Quantity,Contact,Details,user_id})

    res.status(200).json(Add)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a Add
const deleteAdd = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Add'})
  }

  const Add = await sellingAdd.findOneAndDelete({_id: id})

  if (!Add) {
    return res.status(400).json({error: 'No such Add'})
  }

  res.status(200).json(Add)
}

// update a Add
const updateAdd = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Add'})
  }

  const Add = await sellingAdd.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!Add) {
    return res.status(400).json({error: 'No such Add'})
  }

  return res.status(200).json("Successfully updated.")
}

module.exports = {
  getAdds,
  getAdd,
  createAdd,
  deleteAdd,
  updateAdd
}