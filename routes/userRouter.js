const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/usermodel");

router.post("/register", async (req, res) => {
  try {
    let { email, password, passwordCheck, displayName } = req.body;

    //validate
    if (!email || !password || !passwordCheck) {
      return res.status(400).json({ msg: "not all fields have been enetered" });
    }
    if (password.length < 5) {
      return res.status(400).json({ msg: "password is too short" });
    }
    if (password !== passwordCheck) {
      return res.status(400).json({ msg: "passwords have to match" });
    }
    if (!displayName) {
      displayName = email;
    }
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return (400).json({ msg: "Email is used by another user" });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      displayName,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res, status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //validate
  if (!email || !password || !passwordCheck) {
    return res.status(400).json({ msg: "not all fields have been enetered" });
  }
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ msg: "user not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid password" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({
    token,
    user: {
      id: user._id,
      displayName: user,
      email: user.email,
    },
  });
});

module.exports = router;
