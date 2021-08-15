import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Pusher from 'pusher';
import cors from 'cors';


//app config
const app = express();
const pusher = new Pusher({
    appId: "1249046",
    key: "bafcdbc62fbb2129e69a",
    secret: "8c48ce947ebcdb78f2f0",
    cluster: "ap2",
    useTLS: true
  });
//database
const url = "mongodb+srv://user3061:Kalam2019@cluster0.orrkb.mongodb.net/WhatsupDB?retryWrites=true&w=majority";
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.once('open',()=>{
    console.log("DB connected")
    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on("change",(change)=>{
        console.log('A change occured', change);

        if(change.operationType === 'insert'){
            const messageDetails = change.fullDocument;
            pusher.trigger('messages','inserted',{
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp : messageDetails.timestamp
            });
        }else{
            console.log("Error Triggreing pusher");
        }
    })

    
})



//middlewares
app.use(express.json());
app.use(cors());

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","*");
//     res.setHeader("Access-Control-Allow-Headers","*");
//     next();
// })


//api routes
app.get('/',(req,res)=>{
    res.send("Hello bhai ")
});

app.get("/messages/sync",(req,res)=>{
    Messages.find((err,data)=>{
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
})
app.post('/messages/new',(req,res)=>{
    const dbMessage = req.body;
    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})



//listening 
app.listen(3000,()=>{
    console.log("Server started...")
})