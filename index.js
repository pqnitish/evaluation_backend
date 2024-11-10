const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const PORT = 3000;
const app = express();
const postRoutes = require("./routes/postRoutes");
const authorRoutes = require("./routes/authorRoutes");
app.use(express.json())
app.use((req,res,next)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
    next()  
})
// connect  mongodb
mongoose.connect("nongodb://localhost:27017/blog").then(()=>{l 
    console.log("mongobd connected");
    
}).catch((err)=>{console.log("error");
})
app.listen(PORT,()=>{
    console.log(`Server is running on port:${PORT}`);
    
});