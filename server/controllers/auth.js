const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(404).json({ message: "All fields are required" });
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json("SignUp successfull!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = signup;
