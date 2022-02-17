import mongoose from 'mongoose';
const {Schema} = mongoose

const FollowSchema = new Schema({
    follower:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    followee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }
},{timestamps:true})

export default mongoose.model('follow',FollowSchema);