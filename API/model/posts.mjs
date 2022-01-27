import mongoose from 'mongoose';
const {Schema} = mongoose

const PostSchema = new Schema({
    Nolikes:{
        type:Number,
        default:0
    },
    location:{
        type:String,
        required:false,
    },
    Nocomments:{
        type:Number,
        default:0
    },
    content:{
        type:String,
        required:true,
        minlength:10,
        maxlength:500
    },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        required:false,
        ref:'comment'
    }],
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        required:false,
        ref:'like'
    }]

},{timestamps:true})

export default mongoose.model('post',PostSchema);