const express = require("express");
const test = require("../controllers/user");
const updateUser = require("../controllers/user");
const verifyToken = require("../utils/verifyUser");

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);

module.exports = router;
