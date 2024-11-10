const fs = require("fs");
const path = require("path");
// load data from db.json
const loadPosts = ()=>{
    const data = fs.readFileSync(path,"utf8");
    return JSON.parse(data);
};
// save data to db.json
const savePosts = (posts)=>{
    fs.writeFileSync(path,JSON.stringify(posts,null,2));
};
module.exports = {loadPosts,savePosts};