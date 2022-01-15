const express=require('express')

const jwt=require('jsonwebtoken')
app=express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
  
    res.send("hello world")
})


app.post("/login",async(req,res)=>{
    try{
        const user =req.body.email
        console.log(user)

        const token=await jwt.sign(user,"rajansharmathissideletshaveatalk121..")
        res.send(token)

    }catch(e){
        res.send("some error occured")
    }
    
})



app.listen(3000,()=>{
    console.log("connection created ")

})