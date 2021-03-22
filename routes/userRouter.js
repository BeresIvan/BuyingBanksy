const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/usermodel");

//signup user
router.post("/", async (req, res) => {
  try {
    const { email, password, passwordVerify } = req.body;

    //validate
    if (!email || !password || !passwordVerify) {
      return res
        .status(400)
        .json({ errorMessage: "not all fields have been enetered" });
    }
    if (password.length < 5) {
      return res.status(400).json({ errorMessage: "password is too short" });
    }
    if (password !== passwordVerify) {
      return res.status(400).json({ errorMessage: "passwords have to match" });
    }
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return (400).json({ errorMessage: "Email is used by another user" });
    }
    //Hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    //save new user
    const newUser = new User({
      email,
      passwordHash,
    });
    const savedUser = await newUser.save();

    // sign yhe token for log in
    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

    //send the token in HHTP-only cookie
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send();
  } catch (err) {
    res, status(500).send();
  }
});

//Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    //validate
    if (!email || !password) {
      return res.status(400).json({ msg: "not all fields have been enetered" });
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(401).json({ msg: "wrong email or password" });
    }

    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (!passwordCorrect) {
      return res.status(401).json({ msg: "wrong email or password" });
    }

    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    //send the token in HHTP-only cookie
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send();
  } catch (err) {
    res, status(500).send();
  }
});

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
});

module.exports = router;
