const express = require("express");
const {getAllPosts,getPostById,createPost,updatePost,deletePost} = require("../controllers/postController")
const router = express.Router();
// get all posts
router.get("/",getAllPosts);

//get post by id
router.get("/:id",getPostById);
// create a post 
router.post("/",createPost);

// update a post 
router.put("/",updatePost);
// delete a  post
router.delete("/:id",deletePost);
module.exports= router;