import mongoose from 'mongoose';
const {Schema} = mongoose

const CommentSchema = new Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post',
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    text:{
        type:String,
        required:true,
        minlength:2,
        maxlength:500
    },
    reply:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'comment',
        required:false
    },
    like:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'like',
        required:false
    }],
    isreply:{
        type:Boolean,
        required:true
    }
},{timestamps:true})

export default mongoose.model('comment',CommentSchema);