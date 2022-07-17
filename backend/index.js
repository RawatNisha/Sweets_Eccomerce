const express=require('express');

port=80
app=express()

app.get('/', (req,res)=>{
    res.send("hello nisha");
})




app.listen(port,()=>{
    console.log("Server is started at http://127.0.0.1:"+port);
})