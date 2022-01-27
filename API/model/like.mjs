import mongoose from 'mongoose';
const {Schema} = mongoose

const LikeSchema = new Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post',
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }
},{timestamps:true})

export default mongoose.model('like',LikeSchema);