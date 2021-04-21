import mongoose from 'mongoose'

const whatsappSchema= mongoose.Schema({
    messsage:String,
    name:String,
    timestamp:String
})


export default mongoose.model('messageContent',whatsappSchema)