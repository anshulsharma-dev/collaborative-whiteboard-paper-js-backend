const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const newUser = await User.create({ username, password: hashedPassword });
    res
      .status(201)
      .json({ message: "User created successfully", userId: newUser.id });
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    res.json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during login" });
  }
});

router.post("/drawing", async (req, res) => {
  const { data } = req.body;
  try {
    const newDrawing = await Drawing.create({ data });
    res.status(201).json(newDrawing);
  } catch (error) {
    res.status(500).json({ message: "Error saving drawing data" });
  }
});

router.get("/drawing", async (req, res) => {
  try {
    const latestDrawing = await Drawing.findOne({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(latestDrawing);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving drawing data" });
  }
});

module.exports = router;
