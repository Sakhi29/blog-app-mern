const express = require("express");

const { verifyToken } = require("../utils/verifyUser");
const { create, getposts } = require("../controllers/post");
const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getposts", getposts);

module.exports = router;
