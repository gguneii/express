const workers=[
    {id:1,name:"John",age:35},
    {id:2,name:"Tom",age:20},
    {id:3,name:"Bob",age:46}
]
const express=require("express");
const app=express();
app.get("/",function(req,res){
    res.send(workers);
})

app.listen(3000,function(){
    console.log('Server started');
})