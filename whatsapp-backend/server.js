//importing
import e from 'express';
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from 'pusher';

//app config
const app = express();
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: "1192295",
    key: "b2bf068d1d65c8766938",
    secret: "ad694fdd0325019d6478",
    cluster: "eu",
    useTLS: true
  });

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Headers","*")
    next()
})


//db config
const connection_url = 'mongodb+srv://admin:Srri0Y5Bpy3BVc3O@cluster0.yblrw.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db =mongoose.connection

db.once('open',()=>{
    console.log("Connected to mongodb")

    const msgCollection =db.collection("messagecontents");

    const changeStream = msgCollection.watch(); 
    changeStream.on('change',(change)=>{
        console.log(change)

        if(change.operationType ==='insert'){
                const messageDetails = change.fullDocument;

                pusher.trigger('messages','inserted',{
                    name:messageDetails.name,
                    message:messageDetails.message
                })

        }else{
            console.log('Error triggering Pusher')
        }
    })
})


// ??

// api routes
app.get('/', (req, res) => {
    res.status(200).send('hello world')
})

app.get('/api/v1/messages/sync', (req, res) => { 
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.post('/api/v1/messages/new', (req, res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})





//listen

app.listen(port, () => console.log(`Listening on localhost;${port}`))