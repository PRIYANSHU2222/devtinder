//starting point of our applictaion,here we initiaklize our website ,write our code ..

const express=require("express");
const app =express();//by doing this we create new express js application,this is the instnce of express js ..

app.use((req,res)=>{
   res.send("hello frome the server");
});//function is request handler...



app.use("/test",(req,res)=>{
    res.send("by frome the server");
 });//function is request handler...

 
app.use("/" , (req,res)=>{
    res.send(" server");
 });//function is request handler...

app.listen(7000,()=>{
    console.log("running successfully");
});

