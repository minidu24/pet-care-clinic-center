const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Assuming you have a MongoDB model for 'Item'
const Item = mongoose.model('Item');

router.get('/api/Items', async (req, res) => {
  try {
    const items = await Item.find({ name: 'cat' });
    res.json(items);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;