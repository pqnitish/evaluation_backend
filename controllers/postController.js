const {loadPosts,savePosts} = require("../models/post");

// get  all posts
const getAllPosts = (req,res)=>{
    const posts = loadPosts();
    res.json(posts);
};
// get post by id 
const getPostById = (req,res) =>{
    const posts = loadPosts();
    const post = posts.find(p=> p.id === parseInt(req.params.id));
    if(!post) return res.status(404).send("post not found") ;
    res.json(post);
}

//create a new post
const createPost = (req,res)=>{
    const {title,content,author} = req.body;
    const posts = loadPosts();
    const newPost = {
        id: posts.length,
        title,
        content,
        author
    };
    posts.push(newPost);
    savePosts(posts);
    res.status(201).json(newPost);
};
 // update a post
 const updatePost = (req,res)=>{
    const posts = loadPosts();
    const post = posts.find(p=>p.id === parseInt(req.params.id));
    if(!post) return res.status(404).send("post not found");
    const{ title, content} = req.body;
    post.title = title || post.title;
    post.content = content || post.content;
    savePosts(posts);
    res.json(post);
 }

 // delete a post 
 const deletePost = (req,res)=>{
    const posts = loadPosts();
    const updatedPosts = posts.filter(p=>p.id !==parseInt(req.params.id));
    if(posts.length === updatedPosts.length) return res.status(404).send("post not found");
    savePosts(updatedPosts);
    res.send("post deleted");
 }
 module.exports = {getAllPosts,getPostById,createPost,updatePost,deletePost};