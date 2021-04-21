//importing
import express from 'express'
import mongoose from 'mongoose'
//app config
const app=express();
const port = process.env.PORT || 9000
//middleware

//db config
const connection_url ='mongodb+srv://admin:Srri0Y5Bpy3BVc3O@cluster0.yblrw.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
},err=>{
    if(err) throw err
    console.log("Connected to mongodb")
});
// ??

// api routes
app.get('/',(req,res)=>{
    res.status(200).send('hello world')
})

//listen

app.listen(port,()=> console.log(`Listening on localhost;${port}`))