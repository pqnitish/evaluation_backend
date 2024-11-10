const Author = require("../models/author");
const { loadPosts } = require("../models/post");
 // create a new author
 const createAuthor = async(req,res)=>{
    const {name, email,} = req.body;
    const newAuthor = new Author({name,email});
    await newAuthor.save();
    res.status(201).json(newAuthor);

 };

 // get all posts by a specific author
 const getPostsByAuthor = (req,res)=>{
    const {name} = req.params;
    const posts = loadPosts();
    const authorPosts = posts.filter(post=>post.author === name);
    if(authorPosts.length === 0) return res.status(404).send("post not found for this author")
        res.json(authorPosts);

 }
 module.exports = {createAuthor,getPostsByAuthor};