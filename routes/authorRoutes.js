const express = require("express");
const {createAuthor,getPostsByAuthor} = require("../controllers/authController");
const router = express.Router();
// create a new author
router.post("/",createAuthor);
// get all posts by an author
router.get("/:name",getPostsByAuthor);
module.exports = router;

