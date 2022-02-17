import mongoose from 'mongoose';
const {Schema} = mongoose

const UserSchema = new Schema({
    Contactno:{
        type:Number,
        required:false,
        minlength:10,
        maxlength:10,
        unique:false
    },
    fullname:{
        type:String,
        required:true,
        unique:false
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:false,
        minlength:8
    }
})

export default mongoose.model('user',UserSchema);