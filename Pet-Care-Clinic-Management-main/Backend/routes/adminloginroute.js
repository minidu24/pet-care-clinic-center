const express = require('express');
const Admin = require('../models/adminmodel');
const router = express.Router();

router.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await Admin.findOne({ email });

    if (!user || user.password !== password) {
      return response.status(401).json({ message: 'Invalid email or password' });
    }

    response.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error("Error during login:", error);
    response.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;

