const mongoose=require("mongoose");


mongoose.connect("mongodb://localhost:27017/Project")
.then(()=>{
    console.log("connection is established");
})
.catch((err)=>{
    console.log('Error is :${err}')
})